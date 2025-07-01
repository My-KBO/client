import React from 'react';

type TProps = {
  children: React.ReactNode;
  variant: 'filled' | 'outlined';
  onClick?: () => void;
};

const CommonButton = ({ children, variant = 'filled', onClick }: TProps) => {
  const baseStyle = 'text-sm w-40 rounded-lg';

  const filledStyle = 'bg-kbo-blue text-white py-3';
  const outlinedStyle = 'border border-kbo-blue text-kbo-blue py-2';

  const style = variant === 'filled' ? filledStyle : outlinedStyle;

  return (
    <button className={`${baseStyle} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CommonButton;
