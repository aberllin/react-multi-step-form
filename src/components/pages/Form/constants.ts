import type { AddsOn, BillingPlan } from './types';
import type { IconName } from '../../molecule/Icon';
import type { Step } from './types';

export const addsOnMap: {
  [key in AddsOn]: { description: string; monthly: number; yearly: number };
} = {
  'Online service': {
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10,
  },
  'Larger storage': {
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20,
  },
  'Customizable Profile': {
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20,
  },
};

export const plansMap: {
  [key in BillingPlan]: {
    monthly: number;
    yearly: number;
    icon: IconName;
  };
} = {
  Arcade: {
    monthly: 9,
    yearly: 90,
    icon: 'arcade',
  },
  Advanced: {
    monthly: 12,
    yearly: 120,
    icon: 'advanced',
  },
  Pro: { monthly: 15, yearly: 150, icon: 'pro' },
};

export const steps: Array<Step> = [
  {
    key: 'info',
    title: 'YOUR INFO',
    indicator: 1,
  },
  {
    key: 'plan',
    title: 'SELECT PLAN',
    indicator: 2,
  },
  {
    key: 'adds-on',
    title: 'ADD-ONS',
    indicator: 3,
  },
  { key: 'summary', title: 'SUMMARY', indicator: 4 },
];
