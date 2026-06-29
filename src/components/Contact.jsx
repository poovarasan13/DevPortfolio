import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ContactInfo = ({ icon, title, content, link }) => {
  return (
    <motion.div 
      className="flex items-start space-x-4 glass-panel p-5 rounded-2xl border border-gray-100 dark:border-cyber-border-dark"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-shrink-0">
        <div className="p-3 bg-indigo-50 dark:bg-cyber-cyan/5 rounded-lg border border-indigo-150/40 dark:border-cyber-cyan/20">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold font-mono tracking-widest text-gray-500 dark:text-cyber-cyan/60 uppercase mb-0.5">{title}</h3>
        {link ? (
          <a 
            href={link}
            className="text-base font-semibold text-gray-800 dark:text-gray-250 hover:text-indigo-650 dark:hover:text-cyber-cyan transition-colors duration-200"
          >
            {content}
          </a>
        ) : (
          <p className="text-base font-semibold text-gray-800 dark:text-gray-250">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', isError: false });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setShowSuccessModal(true);
      form.current.reset();
    })
    .catch(() => {
      setFeedback({ message: 'Failed to send message. Please try again.', isError: true });
      setTimeout(() => setFeedback({ message: '', isError: false }), 5000);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const inputClasses = "mt-1 block w-full rounded-lg border border-gray-300 dark:border-cyber-border-dark bg-white dark:bg-cyber-dark/40 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:border-cyber-cyan dark:focus:ring-cyber-cyan/15 transition-all duration-200 font-mono text-sm";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-cyber-dark dark:to-cyber-dark relative overflow-hidden transition-colors duration-300">
      {/* Tech Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-100">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-cyan/5 dark:bg-cyber-cyan/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-cyber-cyan mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have an open requirement, project idea, or just want to chat? Drop a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactInfo 
              icon={<Mail className="w-5 h-5 text-indigo-600 dark:text-cyber-cyan" />}
              title="Email"
              content="poovarasan936161@gmail.com"
              link="mailto:poovarasan936161@gmail.com"
            />
            <ContactInfo 
              icon={<Phone className="w-5 h-5 text-indigo-600 dark:text-cyber-cyan" />}
              title="Phone"
              content="+91 9361614200"
              link="tel:+919361614200"
            />
            <ContactInfo 
              icon={<MapPin className="w-5 h-5 text-indigo-600 dark:text-cyber-cyan" />}
              title="Location"
              content="Dharmapuri, Tamil Nadu, India"
            />
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 glass-panel p-8 rounded-2xl shadow-lg border border-gray-150 dark:border-cyber-border-dark"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-cyber-cyan mb-1">
                // Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className={inputClasses}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-cyber-cyan mb-1">
                // Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email_id"
                className={inputClasses}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-700 dark:text-cyber-cyan mb-1">
                // Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClasses}
                required
              ></textarea>
            </div>
            
            <div className="pt-2">
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-wider uppercase rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] dark:from-cyber-cyan dark:to-cyber-purple dark:text-cyber-dark dark:hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300 w-full cursor-pointer shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </motion.button>
              
              {feedback.message && feedback.isError && (
                <motion.p 
                  className="mt-4 text-sm text-center text-red-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {feedback.message}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
              
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <svg className="h-10 w-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
              
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 px-6 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;