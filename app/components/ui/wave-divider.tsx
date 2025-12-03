import React from 'react';
import Marquee from "react-fast-marquee";

interface WaveDividerProps {
    position: 'top' | 'bottom';
    className?: string;
}


const WaveDivider: React.FC<WaveDividerProps> = ({ position, className = "" }) => {
    const path = position === 'bottom'
        ? "M0,0 L1440,0 L1440,25 C1150,55 950,-5 720,25 C490,55 200,-5 0,25 Z"
        : "M0,50 L1440,50 L1440,25 C1150,-5 950,55 720,25 C490,-5 200,55 0,25 Z";

    return (
        <div className={`w-full overflow-hidden leading-none ${className}`} style={{ fontSize: 0 }}>
            <Marquee gradient={false} speed={50}>
                <div className="flex gap-0">
                    <svg viewBox="0 0 1440 50" fill="currentColor" className="w-[1442px] h-12 block -mr-[1px]" preserveAspectRatio="none" style={{ display: 'block' }}>
                        <path d={path} />
                    </svg>
                    <svg viewBox="0 0 1440 50" fill="currentColor" className="w-[1442px] h-12 block -mr-[1px]" preserveAspectRatio="none" style={{ display: 'block' }}>
                        <path d={path} />
                    </svg>
                </div>
            </Marquee>
        </div>
    );
};

export default WaveDivider;
