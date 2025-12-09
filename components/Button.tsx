import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base";
  
  const variants = {
    primary: "bg-mate-deep text-white hover:bg-mate-dark border-2 border-transparent",
    secondary: "bg-amber-100 text-amber-900 hover:bg-amber-200 border-2 border-transparent",
    outline: "bg-transparent text-mate-deep border-2 border-mate-deep hover:bg-mate-light",
    white: "bg-white text-mate-deep hover:bg-gray-100 border-2 border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};