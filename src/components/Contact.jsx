import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactInfo = ({ icon, title, content, link }) => {
  return (
    <motion.div 
      className="flex items-start space-x-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-shrink-0">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg shadow-sm">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        {link ? (
          <a 
            href={link}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_mxmgswn', 
      'template_umr5kus', 
      form.current, 
      'j49BXGHrpAVID0k4R'
    )
    .then(() => {
      setFeedback({ message: 'Message sent successfully!', isError: false });
      form.current.reset();
    })
    .catch(() => {
      setFeedback({ message: 'Failed to send message. Please try again.', isError: true });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setFeedback({ message: '', isError: false }), 5000);
    });
  };

  const inputClasses = "mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500/50 transition-all duration-200";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to chat? Drop me a message below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactInfo 
              icon={<Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
              title="Email"
              content="poovarasanr13@gmail.com"
              link="mailto:poovarasan936161@gmail.com"
            />
            <ContactInfo 
              icon={<Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
              title="Phone"
              content="+91 9361614200"
              link="tel:+919361614200"
            />
            <ContactInfo 
              icon={<MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
              title="Location"
              content="Coimbatore, Tamil Nadu, India"
            />
            
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white dark:bg-gray-700/50 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={inputClasses}
                required
              ></textarea>
            </div>
            
            <div className="pt-2">
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 shadow-lg transition-all duration-300 w-full"
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
              
              {feedback.message && (
                <motion.p 
                  className={`mt-4 text-sm text-center ${feedback.isError ? 'text-red-500' : 'text-green-500'}`}
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
    </section>
  );
};

export default Contact;