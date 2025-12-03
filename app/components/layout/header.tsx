import Link from 'next/link';
import WaveDivider from '../ui/wave-divider';
import SocialIcons from '../ui/social-icons';

const Header = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-51 bg-[#004C9C]">
            <div className="container mx-auto px-6 pt-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="z-100 hover:opacity-90 transition-opacity block flex-shrink-0">
                        <img
                            src="/header-logo.svg"
                            alt="Zaky Yusuf"
                            className="h-20 w-auto object-contain"
                        />
                    </Link>

                    {/* Right Side: Socials & Email */}
                    <div className="absolute top-6 right-6">
                        <div className="hidden sm:flex">
                            <SocialIcons iconSize="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Bottom */}
            <div className="text-[#004C9C] absolute top-21 z-50 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                <WaveDivider position="bottom" />
            </div>
        </nav>
    );
};

export default Header;
