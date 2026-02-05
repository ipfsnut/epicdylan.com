import React from 'react';

interface AsciiDividerProps {
  variant?: 'default' | 'dots' | 'arrows' | 'binary';
}

export const AsciiDivider: React.FC<AsciiDividerProps> = ({ variant = 'default' }) => {
  const patterns = {
    default: '─═══════════════════════════════════════════════════════════════─',
    dots: '• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •',
    arrows: '>>─────────────────────────────────────────────────────────────>>',
    binary: '01001010 01001111 01001001 01001110 00100000 01010101 01010011'
  };

  return (
    <div className="my-12 text-center overflow-hidden">
      <span className="text-warm-border font-mono text-xs tracking-widest opacity-50">
        {patterns[variant]}
      </span>
    </div>
  );
};
