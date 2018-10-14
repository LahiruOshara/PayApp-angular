import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // validate form fields
  validateRegister(firstName, middleName, lastName, accountType, address, mobileNo, nic, password ) {
    // tslint:disable-next-line:max-line-length
    if (firstName === undefined || middleName === undefined || lastName === undefined
      || nic === undefined || password === undefined || accountType === undefined 
      || address === undefined || mobileNo === undefined ) {
      return true;
    } else {
      return false;
    }
  }

  // validate signin
  validateSignIn(nic, password) {
    if (nic === undefined || password === undefined ) {
      return true;
    }return false;
  }


  validateAmount(amount) {
    const am = /^\d+(?:\.\d{0,2})$/;
    return am.test(String(amount));
  }

  validateDates(date1, date2) {
    const temp1 = new Date(date1);
    const temp2 = new Date(date2);
    const today = new Date(); // today date

    if (today < temp1 && today < temp2) {

      if (temp1 <= temp2) {
        return true;
      }return false;
    }return false;
  }

  validateDate(date1) {
    const temp1 = new Date(date1);
    const today = new Date(); // today date
    if (today < temp1) {
      return true;
    }return false;
  }


  validatePhoneNo(number) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(number));
  }
}

