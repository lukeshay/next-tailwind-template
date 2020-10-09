import React from 'react';
import { LogoProps } from './logo-props';

function LinkedinLogo({ size, className }: LogoProps) {
  return <img src="/linkedin.svg" height={size} width={size} className={className} alt="Logo" />;
}

export default LinkedinLogo;
