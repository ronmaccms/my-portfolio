'use client';

import { cn } from '@/utils/cn';
import dynamic from 'next/dynamic'; // Import dynamic for SSR disable
import { MagicButton } from '../MagicButton';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import animationData from '@/data/confetti.json';

// Dynamically import lottie-react with SSR disabled
const Lottie = dynamic(() => import('lottie-react').then((mod) => mod.default), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-6 py-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = 'ronmacc1487@gmail.com';
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const Wrapper = id === 4 ? 'a' : 'div';
  const wrapperProps =
    id === 4
      ? {
          href: 'https://www.youtube.com/@madmaresearch',
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        'row-span-1 relative rounded-lg overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-gradient-to-b border-none',
        className
      )}
      style={{
        background:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* Image Wrapper */}
      {img && (
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden flex items-center justify-center">
          <img
            src={img}
            alt={`Image for item ${id}`}
            className={cn(
              imgClassName,
              'w-full h-full object-contain md:object-cover'
            )}
          />
        </div>
      )}

      {/* Spare Image */}
      {spareImg && (
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? 'w-full opacity-80' : ''
          }`}
        >
          <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col px-6 py-4 space-y-2">
        {description && (
          <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] whitespace-pre-line leading-normal">
            {description}
          </div>
        )}
        {title && (
          <div className="group-hover/bento:translate-x-2 transition duration-200 mt-2 font-sans font-bold text-lg lg:text-xl">
            {title}
          </div>
        )}

        {/* Special Case: Copy Email */}
        {id === 6 && (
          <div className="mt-5 relative">
            {copied && (
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  animationData={animationData}
                  loop={false}
                  style={{ width: 150, height: 150 }}
                />
              </div>
            )}
            <div className="mt-auto">
              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
