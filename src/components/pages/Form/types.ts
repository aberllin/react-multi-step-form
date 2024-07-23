export type FormPage = 'info' | 'plan' | 'adds-on' | 'summary';
export type FormProps = {
  currentStep: FormPage;
  setCurrentPage: (page: FormPage) => void;
  onGoBack: () => void;
  onNext: () => void;
};

export type BillingPlan = 'Arcade' | 'Advanced' | 'Pro';
export type BillingCycle = 'monthly' | 'yearly';
export type AddsOn =
  | 'Online service'
  | 'Larger storage'
  | 'Customizable Profile';
export type InfoField = 'name' | 'email' | 'phone';
export type State = {
  info: { [key in InfoField]: { value: string; touched: boolean } };
  plan: {
    plan: BillingPlan;
    billingCycle: BillingCycle;
  };
  'adds-on': Array<AddsOn>;
  finished: boolean;
};

export type HandleInfoChange = (
  field: InfoField,
  value: { value: string; touched: boolean },
) => void;

export type Step = { key: FormPage; title: string; indicator: number };
