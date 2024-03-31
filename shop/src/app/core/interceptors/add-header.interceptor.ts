import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  //метода intercept извлича достъпът до токена на потребителя
  intercept( request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.getUserData()?.accessToken;
    if (accessToken) { //проверка дали токенът е наличен. ако е, той се добавя към хедъра на заявката request.clone().
      request = request.clone({
        setHeaders: {
          'X-Authorization': accessToken,
        }
      });
    }

    request = request.clone({ //Независимо дали има токен или не, се добавя и хедър за типа на съдържанието content-type:app/json.
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });

    return next.handle(request); //променената заявка се предава на следващия интерцептор 
  }
}


//Интерцептор за добавяне на авторизационен токен или други общи хедъри към всяка изходяща HTTP заявка в приложението.