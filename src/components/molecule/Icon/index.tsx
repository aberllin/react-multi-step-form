import React from 'react';

export type IconName = 'advanced' | 'arcade' | 'checkmark' | 'pro' | 'thankyou';
const iconMap: { [key in IconName]: string } = {
  advanced: 'icon-advanced.svg',
  arcade: 'icon-arcade.svg',
  checkmark: 'icon-checkmark.svg',
  pro: 'icon-pro.svg',
  thankyou: 'icon-thank-you.svg',
};

const Icon: React.FC<{ name: IconName }> = ({ name }) => {
  const iconSrc = iconMap[name];
  return <img src={`/${iconSrc}`} alt={name} />;
};

export default Icon;
