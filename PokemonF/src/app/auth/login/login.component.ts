import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from 'src/app/services/peticiones.service';
import moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  year = new Date().getFullYear();
  public loginData: any = {
    user: '',
    password: '',
  };
  constructor(
    private router: Router,
    private petitionService: PeticionesService,
    // public dialog: MatDialog
  ) {}

  ngOnInit() {}
  login() {
    if (this.loginData.user && this.loginData.password) {
      const data = {
        user: this.loginData.user,
        password: this.loginData.password,
      };
      this.petitionService.getLogin(data).subscribe(
        (rta) => {
          if (rta) {
            localStorage.setItem('TOKEN', 'TOKEN');
            localStorage.setItem('EXPIRE_IN', moment().format('YYYY-MM-DD HH:mm:ss'));
            return this.router.navigateByUrl('/home');
          }
        },
        (error) => {
          alert('Error en Login');
        }
      );
    } else {
      alert('Campos Vacíos.!!!');
    }
  }
}
