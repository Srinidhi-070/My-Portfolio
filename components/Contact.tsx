
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from '../constants';
import Button from './ui/Button';
import AnimatedSection from './ui/AnimatedSection';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input 
        {...props}
        className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-black dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 focus:border-black dark:focus:border-white transition-colors"
    />
);

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea 
        {...props}
        className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md px-3 py-2 text-black dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 focus:border-black dark:focus:border-white transition-colors"
    />
);

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // EmailJS configuration
            const serviceId = 'service_6ec63sp';
            const templateId = 'template_3hhe3mr';
            const publicKey = '2UvTD2Hyc9lRgX3KX';

            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: CONTACT_INFO.email,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setMessageSent(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.error('Email send error:', err);
            setError('Failed to send message. Please try again or contact me directly via email.');
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        if (messageSent) {
            const timer = setTimeout(() => {
                setMessageSent(false);
            }, 5000); // Hide message after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [messageSent]);

  return (
    <AnimatedSection id="contact">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black dark:text-white">Get In Touch</h2>
        <p className="mt-4 max-w-xl mx-auto text-neutral-700 dark:text-neutral-300">
            Have a project in mind or just want to connect? Feel free to send me a message or reach out through my socials.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="relative min-h-[350px]">
            <AnimatePresence initial={false}>
            {!messageSent ? (
                <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4 absolute w-full"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <Input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <TextArea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        placeholder="Your Message" 
                        required 
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                        disabled={isLoading}
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                        {error}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  
                  <p className="text-center mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                      Your message will be sent directly to my inbox.
                  </p>
                </motion.form>
            ) : (
                <motion.div
                    key="success"
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-black dark:text-white">Message Sent!</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
            )}
            </AnimatePresence>
        </div>

        <div className="space-y-6 pt-4 md:pt-0">
          <h3 className="text-lg font-semibold text-black dark:text-white">Contact Details</h3>
          <div className="space-y-4">
             <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">{CONTACT_INFO.email}</span>
            </a>
             <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">GitHub</span>
            </a>
            <a href={CONTACT_INFO.blog} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.5A4.5 4.5 0 0 0 17.5 5c-.59 0-1.5.5-2.5 1.5-1-.99-2-1.5-2.5-1.5A4.5 4.5 0 0 0 8 9.5c0 5 3 12.5 6 12.5z"></path><path d="M12 20.94c-1.5 0-2.75 1.06-4 1.06-3 0-6-8-6-12.5A4.5 4.5 0 0 1 6.5 5c.59 0 1.5.5 2.5 1.5 1-.99 2-1.5 2.5-1.5A4.5 4.5 0 0 1 16 9.5c0 5-3 12.5-6 12.5z"></path></svg>
                <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">Blog</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;