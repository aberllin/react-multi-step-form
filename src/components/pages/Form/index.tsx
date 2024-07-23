import React, { useEffect, useState } from 'react';
import Mobile from './components/Mobile';
import Desktop from './components/Desktop';
import { useRecoilState } from 'recoil';
import { formState } from './state';
import isValidForm from './utils/validateForm';
import isMobileBreakpoint from '../../../utils/isMobileBreakpoint';
import type { FormPage, FormProps, State } from './types';
import { steps } from './constants';

type Props = {};

const Form: React.FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<FormPage>('info');
  const [state, setState] = useRecoilState(formState);
  const currentIndex = steps.findIndex(step => step.key === currentPage);
  const [allowedGoNext, setAllowedGoNext] = useState<boolean>(true);

  const touchedInfoFields = () => {
    setState((prev: State) => ({
      ...prev,
      info: {
        name: { ...prev.info.name, touched: true },
        phone: { ...prev.info.phone, touched: true },
        email: { ...prev.info.email, touched: true },
      },
    }));
  };

  useEffect(() => {
    const validForm = isValidForm(state.info);

    if (!validForm) {
      setAllowedGoNext(false);
    } else {
      setAllowedGoNext(true);
    }
  }, [state.info]);

  const onGoBack = () => {
    if (currentIndex > 0) {
      if (state.finished) {
        setState((prev: State) => ({ ...prev, finished: false }));
      }
      setCurrentPage(steps[currentIndex - 1].key);
    }
  };

  const onNext = () => {
    touchedInfoFields();

    if (!allowedGoNext) return;
    if (currentIndex === steps.length - 1) {
      return setState((prev: State) => ({ ...prev, finished: true }));
    }
    setCurrentPage(steps[currentIndex + 1].key);
  };

  const isMobile = isMobileBreakpoint();
  const props: FormProps = {
    currentStep: currentPage,
    onGoBack,
    setCurrentPage: page => setCurrentPage(page),
    onNext,
  };
  if (isMobile) return <Mobile {...props} />;

  return <Desktop {...props} />;
};

export default Form;
