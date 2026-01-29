import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  icon: React.ReactNode;
  iconColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  icon,
  iconColor = 'text-purple-400'
}) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="section-number">{number}</span>
      <h2
        className="text-3xl font-bold text-white flex items-center gap-3 glitch-hover"
        data-text={title}
      >
        <span className={iconColor}>{icon}</span>
        {title}
      </h2>
    </div>
  );
};
