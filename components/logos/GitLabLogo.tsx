import React from 'react';
import { LogoProps } from './logo-props';

function GitLabLogo({ size, className }: LogoProps) {
  return (
    <img src="/gitlab.svg" height={size} width={size} className={className} alt="GitHub Logo" />
  );
}

export default GitLabLogo;
