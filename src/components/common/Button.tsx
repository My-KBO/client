import React from 'react';

interface ButtonProps {
  variant?: 'primary-filled' | 'primary-outlined';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary-filled',
  className = '',
  children,
  onClick,
  disabled,
  icon,
  ...props
}) => {
  const baseStyles =
    'rounded-lg px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    'primary-filled': 'bg-kbo-blue text-white focus:ring-kbo-blue',
    'primary-outlined':
      'border border-kbo-blue text-kbo-blue focus:ring-kbo-blue',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
