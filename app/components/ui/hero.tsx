import Link from 'next/link';
import ScrollBanner from './image-banner';

const Hero = () => {
    return (
        <>
            <ScrollBanner
                bottomBlend={true}
                blendHeight="50px"
                bannerTitle="Zakariya Yusuf"
                sameLine={false}
                bannerHighlight="Portfolio"
                bannerCaption="Full Stack Developer"
                imageSrc="/pics/me-at-canary-wharf.jpg"
                bannerHeight="750px"
            />
            <section className="min-h-[40vh] flex flex-col items-center text-center px-6 pt-10 pb-20">
                <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-[#004C9C] text-white font-medium rounded-full hover:bg-[#003a7a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        View Work
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-white text-[#004C9C] border border-[#004C9C]/20 font-medium rounded-full hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* See more button */}
                <div className="pt-60">
                    <Link
                        href="#about"
                        className="px-8 py-3 bg-transparent text-[#004C9C] font-medium rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Hero;
