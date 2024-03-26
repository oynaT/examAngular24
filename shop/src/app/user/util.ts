import { AbstractControl, ValidatorFn} from '@angular/forms'

export function passMatch(passwordFormControl: AbstractControl) {
  const validatePass: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
      if (passwordFormControl.value !== rePasswordFormControl.value) {
          return {
              passMatch: true
          }
      }

      return null;
  }

  return validatePass;
}
