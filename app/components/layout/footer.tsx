import WaveDivider from '../ui/wave-divider';

const Footer = () => {
    return (
        <footer id="contact" className="mt-32 relative">
            {/* Wave Top */}
            <div className="absolute top-0 left-0 right-0 transform -translate-y-full text-[#004C9C]">
                <WaveDivider position="top" />
            </div>

            <div className="bg-gradient-to-b from-[#004C9C] to-[#002d5c] pt-8 pb-16 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 inline-block relative">
                            Get In Touch
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                        </h2>
                        <p className="text-blue-100 mt-4 text-lg">
                            Interested in collaborating or have a question? Feel free to reach out!
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {/* Left Column: Contact Form */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-100">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-100">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-100">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell me about the opportunity..."
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-white text-[#004C9C] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 text-center text-blue-200 text-sm">
                        <p>&copy; {new Date().getFullYear()} Zakariya Yusuf. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
