import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

// Create a simple event system for global state
const chatEvents = {
    listeners: new Set(),
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    },
    emit() {
        this.listeners.forEach(listener => listener());
    }
};

// Function to open chat from anywhere in the app
export const openChat = () => {
    chatEvents.emit();
};

const ChatbotPage = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Listen for global open events
    useEffect(() => {
        const unsubscribe = chatEvents.subscribe(() => {
            setIsOpen(true);
        });
        return () => unsubscribe();
    }, []);

    const sendToAPI = async (userMessage) => {
        try {
            const response = await fetch('API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    timestamp: new Date().toISOString(),
                    sessionId: Math.random().toString(36).substring(7), 
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error sending message to API:', error);
            return { error: 'Failed to process your message. Please try again.' };
        }
    };

    const getMLResponse = async () => {
        try {
            const response = await fetch('ML_API_ENDPOINT', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('ML API request failed');
            }

            const data = await response.json();
            return data.response || data.message;
        } catch (error) {
            console.error('Error getting ML response:', error);
            return 'Sorry, I encountered an error processing your request.';
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = async () => {
        if (input.trim()) {
            setIsLoading(true);
            const userMessage = input.trim();
            
            setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
            setInput('');

            try {
                const apiResponse = await sendToAPI(userMessage);
                
                if (apiResponse.error) {
                    setMessages(prev => [...prev, { sender: 'bot', text: apiResponse.error }]);
                    return;
                }

                const mlResponse = await getMLResponse();
                
                setMessages(prev => [...prev, { sender: 'bot', text: mlResponse }]);
            } catch (error) {
                setMessages(prev => [...prev, { 
                    sender: 'bot', 
                    text: 'Sorry, I encountered an error. Please try again.' 
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Scroll to bottom whenever messages change
    useEffect(() => {
        const messageContainer = document.querySelector('.message-container');
        if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                        Eco is Here To Help!
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Chat Assistant</DialogTitle>
                        <DialogDescription>
                            Ask me anything and I'll help you out!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col h-[400px]">
                        <div className="message-container flex-1 overflow-y-auto space-y-4 p-4">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${
                                            msg.sender === 'user' 
                                                ? 'bg-blue-500 text-white' 
                                                : 'bg-gray-100 text-gray-900'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t p-4">
                            <div className="flex gap-2">
                                <Textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type a message..."
                                    className="flex-1 resize-none"
                                    disabled={isLoading}
                                    rows={3}
                                />
                                <Button 
                                    onClick={sendMessage} 
                                    disabled={isLoading || !input.trim()}
                                    className="self-end"
                                >
                                    {isLoading ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        'Send'
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button 
                            onClick={() => navigate('/dashboard')}
                            className="w-full bg-gray-600 hover:bg-gray-700"
                        >
                            Go Back to Home
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ChatbotPage;