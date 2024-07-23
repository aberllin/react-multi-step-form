import type { InfoField, State } from '../../types';

// Returns true if fields are not empty
const isValidForm = (infoState: State['info']): boolean =>
  (Object.keys(infoState) as Array<InfoField>).every(
    (field: InfoField) => !(infoState[field].value === ''),
  );

export default isValidForm;
