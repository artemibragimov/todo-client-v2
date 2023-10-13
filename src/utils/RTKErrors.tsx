import { IValidationError } from '@/types/IValidationError';
import { ErrorOption } from 'react-hook-form';

export default function RTKErrors({ errors, setError }: RTKErrors) {
  if (typeof errors.data === 'string' || errors.data instanceof String) {
    setError('global', {
      message: errors.data as string,
    });
  }
  if (errors.data instanceof Array) {
    errors.data.map(({ path, msg }) => {
      setError(
        path,
        {
          type: 'error',
          message: msg,
        },
        { shouldFocus: true }
      );
    });
  }
}

export type SetErrorCustomType = (
  name: string,
  error: ErrorOption,
  options?: { shouldFocus: boolean } | undefined
) => void;

interface RTKErrors {
  errors: { data: string | IValidationError[] };
  setError: (
    name: string,
    error: ErrorOption,
    options?:
      | {
          shouldFocus: boolean;
        }
      | undefined
  ) => void;
}
