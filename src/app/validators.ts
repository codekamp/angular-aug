import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class Validators {
  static mobile(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.length === 10) {
      return null;
    }

    return {error: 'Length not 10'};
  }

  static minLength(len: number): ValidatorFn {
    const minValidator = (control: AbstractControl) => {
      if (control.value && control.value.length >= len) {
        return null;
      }

      return {error: 'Length not 10'};
    };

    return minValidator;
  }
}
