import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CV_DATA } from '../constants';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const serviceId = 'service_wfyjy1q';
  const templateId = 'template_j1duu2a';
  const publicKey = 'YP6I885FC-_Ck14sO';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-fx relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-32 left-20 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-72 h-72 rounded-full bg-red-600/5 blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                opacity: [0.6, 1, 0.6],
                textShadow: [
                  '0 0 0px rgba(239, 68, 68, 0)',
                  '0 0 12px rgba(239, 68, 68, 0.5)',
                  '0 0 0px rgba(239, 68, 68, 0)',
                ]
              }}
              transition={{
                delay: 0.1,
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                textShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400 mb-6 block"
            >
              Get in touch
            </motion.span>
            
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  }
                }
              }}
              className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {("Let's Work " ).split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                  className="inline-block hover:text-red-400 hover:scale-110 transition duration-300"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <br />
              <span className="font-serif italic inline-block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">
                {("Together").split('').map((char, i) => (
                  <motion.span
                    key={`together-${i}`}
                    initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.35 + i * 0.05,
                      type: 'spring', 
                      stiffness: 150, 
                      damping: 12 
                    }}
                    className="inline-block hover:scale-110 transition duration-300"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-white/70 mb-10 sm:mb-12 max-w-md leading-relaxed"
            >
              I'm currently available for freelance work and full-time positions. If you have a project in mind, let's collaborate.
            </motion.p>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start sm:items-center space-x-4 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-full bg-red-500/10 border border-red-400/30 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-all"
                >
                  <Mail className="h-5 w-5" />
                </motion.div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Email</p>
                  <a href={`mailto:${CV_DATA.contact.email}`} className="text-white hover:text-red-400 transition font-medium">
                    {CV_DATA.contact.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start sm:items-center space-x-4 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="w-12 h-12 rounded-full bg-red-500/10 border border-red-400/30 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-all"
                >
                  <Phone className="h-5 w-5" />
                </motion.div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">Phone</p>
                  <a href={`tel:${CV_DATA.contact.phone}`} className="text-white hover:text-red-400 transition font-medium">
                    {CV_DATA.contact.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-6 sm:p-8 lg:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-red-500/5 blur-xl" />

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label className="text-xs font-semibold uppercase tracking-widest text-red-400 ml-1">Your Name</label>
                <Input
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="bg-transparent border-b border-white/20 border-t-0 border-x-0 rounded-none px-0 py-3 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-red-400 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label className="text-xs font-semibold uppercase tracking-widest text-red-400 ml-1">Email Address</label>
                <Input
                  name="user_email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-transparent border-b border-white/20 border-t-0 border-x-0 rounded-none px-0 py-3 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-red-400 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <label className="text-xs font-semibold uppercase tracking-widest text-red-400 ml-1">Your Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="bg-transparent border-b border-white/20 border-t-0 border-x-0 rounded-none px-0 py-3 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-red-400 transition-all resize-none min-h-[140px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full py-3 text-base font-bold uppercase tracking-widest bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-red-900/30"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                          ⏳
                        </motion.span>
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.div>
                </Button>
              </motion.div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-400/30 text-red-400 text-sm flex items-center gap-2"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Message could not be sent. Check your EmailJS service configuration.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
