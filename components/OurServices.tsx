import { motion } from "framer-motion";

export default function OurServices() {
    return (
        <section className="py-16 bg-white text-gray-900">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        At True North Labs, we specialize in delivering cutting-edge AI-powered solutions and custom software development 
                        tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
                        <p className="text-gray-600">
                            Harness the power of artificial intelligence to automate processes, enhance decision-making, and drive innovation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Custom Software</h3>
                        <p className="text-gray-600">
                            Build bespoke software solutions designed to meet your unique business challenges and goals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Consulting</h3>
                        <p className="text-gray-600">
                            Partner with our experts to identify opportunities, optimize workflows, and implement transformative technologies.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}