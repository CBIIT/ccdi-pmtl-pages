import { useMemo } from 'react';
import { version } from '../constants';

export default function useConfigVersion() {
  return useMemo(() => version, []);
}
