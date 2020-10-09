import React from 'react';
import { LogoProps } from './logo-props';

function VercelLogo({ size, className }: LogoProps) {
  return <img src="/vercel.svg" height={size} width={size} className={className} alt="Logo" />;
}

export default VercelLogo;
