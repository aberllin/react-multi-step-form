import { atom, selector } from 'recoil';
import type { InfoField, State } from '../types';
import { validateEmail, validatePhone } from '../utils/validation';

const defaultState: State = {
  info: {
    name: { value: '', touched: false },
    email: { value: '', touched: false },
    phone: { value: '', touched: false },
  },
  plan: {
    plan: 'Advanced',
    billingCycle: 'yearly',
  },
  'adds-on': [],
  finished: false,
};

export const formState = atom<State>({
  key: 'formState',
  default: defaultState,
});

export type InfoErrors = { [key in InfoField]: string | null };
const inputsMap = {
  name: (value: string) => (value === '' ? 'This field is required' : null),
  email: validateEmail,
  phone: validatePhone,
};
export const infoErrors = selector({
  key: 'infoErrors',
  get: ({ get }) => {
    const infoState: State['info'] = get(formState).info;
    const issues: InfoErrors = { name: null, phone: null, email: null };

    (Object.keys(infoState) as Array<InfoField>).map((field: InfoField) => {
      const validationFn = inputsMap[field];
      const error = validationFn(infoState[field].value);
      if (infoState[field].touched) {
        issues[field] = error;
      }
    });

    return issues;
  },
});
