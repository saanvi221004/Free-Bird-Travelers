import React from 'react';

type SectionDividerProps = {
  align?: 'left' | 'right';
};

export default function SectionDivider({ align = 'right' }: SectionDividerProps) {
  return (
    <div className="relative py-6 select-none" aria-hidden>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="border-t-2 border-dotted border-sky-300/60" />
          <div className={`absolute ${align === 'right' ? '-right-2' : '-left-2'} -top-3`}>
            <span className="text-sky-400/80 text-xl" role="img" aria-label="airplane">✈️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
