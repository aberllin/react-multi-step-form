import type { InfoErrors } from '../../state';

const hasErrors = (errors: InfoErrors): boolean => {
  console.log(Object.values(errors).filter(error => error === null).length > 0);
  return Object.values(errors).filter(error => error !== null).length > 0;
};

export default hasErrors;
