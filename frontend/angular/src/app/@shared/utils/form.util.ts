import { AbstractControl } from '@angular/forms';

export interface FormErrors {
  [key: string]: string[];
}

export interface FormValidationMessages {
  [key: string]: {
    [key: string]: string;
  };
}

export function getFormErrors(
  form: AbstractControl,
  errors: FormErrors,
  validationMessages: FormValidationMessages
): FormErrors {
  if (form) {
    for (const field in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, field)) {
        const control = form.get(field);

        if (control?.dirty) {
          const message = validationMessages[field];
          errors[field] = [];

          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              errors[field].push(message[key]);
            }
          }
        }
      }
    }
  }
  return errors;
}
