import { helper as buildHelper } from '@ember/component/helper';

export function not([val]/*, hash*/) {
  return !val;
}

export default buildHelper(not);
