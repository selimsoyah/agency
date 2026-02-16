"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function ContactLuxury() {
    return (
        <Section className="py-20" id="contact">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-12"
                >
                    READY TO <span className="text-gold">ASCEND?</span>
                </motion.h2>

                <form className="space-y-8 text-left">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group">
                            <label className="block text-sm text-gold mb-2 uppercase tracking-widest">Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:border-gold focus:outline-none transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-sm text-gold mb-2 uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:border-gold focus:outline-none transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-sm text-gold mb-2 uppercase tracking-widest">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-transparent border-b border-neutral-700 py-4 text-xl focus:border-gold focus:outline-none transition-colors resize-none"
                            placeholder="Tell us about your vision..."
                        />
                    </div>

                    <div className="pt-10 flex justify-center">
                        <button className="px-12 py-5 bg-gold text-black text-lg font-bold tracking-widest hover:bg-white transition-all duration-300">
                            S U B M I T
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
}
