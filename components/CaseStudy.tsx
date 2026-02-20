import { motion } from "framer-motion";

export default function CaseStudy() {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Study: AI Voice Assistant</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Discover how our AI Voice Assistant is transforming businesses by ensuring no call goes unanswered. 
                        This autonomous solution handles client requests, books appointments, and reduces missed opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                        <p className="text-gray-400">
                            Businesses were struggling with missed calls, leading to lost revenue and dissatisfied customers. 
                            They needed a solution to handle client interactions efficiently and autonomously.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                        <p className="text-gray-400">
                            We developed an AI-powered voice assistant that autonomously answers calls, understands client requests, 
                            and books appointments seamlessly. This ensures businesses never miss a call.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4">The Impact</h3>
                        <p className="text-gray-400">
                            Our solution led to a 40% increase in client engagement and a significant reduction in missed calls, 
                            directly boosting revenue and improving customer satisfaction.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                        <ul className="list-disc list-inside text-gray-400">
                            <li>Autonomous call handling</li>
                            <li>Natural language understanding</li>
                            <li>Seamless appointment booking</li>
                            <li>24/7 availability</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}