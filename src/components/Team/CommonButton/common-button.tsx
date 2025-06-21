import React from 'react';

type TProps = {
  children: React.ReactNode;
  variant: 'filled' | 'outlined';
};

const CommonButton = ({ children, variant = 'filled' }: TProps) => {
  const baseStyle = 'text-sm w-40 py-3 rounded-lg';

  const filledStyle = 'bg-kbo-blue text-white';
  const outlinedStyle = 'border border-kbo-blue text-kbo-blue';

  const style = variant === 'filled' ? filledStyle : outlinedStyle;

  return <button className={`${baseStyle} ${style}`}> {children}</button>;
};

export default CommonButton;
