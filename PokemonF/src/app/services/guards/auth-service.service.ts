import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private router: Router
  ) { }

  get isLogged() {
    if (localStorage.getItem('TOKEN') && localStorage.getItem('EXPIRE_IN')) {
      // const expire =  moment(localStorage.getItem('EXPIRE_IN')).format('YYYY-MM-DD HH:mm:ss');
      // const now = moment().format('YYYY-MM-DD HH:mm:ss');
      // const diff = now.diff(expire, 'hour');
      // if (diff > 1) {
      //   alert('Usuario Expirado...!!!');
      //   this.router.navigate([`/`]);
      //   return false;
      // }
      return true;
    }
    alert('Usuario no Login...!!!');
    this.router.navigate([`/`]);
    return false;
  }
}
