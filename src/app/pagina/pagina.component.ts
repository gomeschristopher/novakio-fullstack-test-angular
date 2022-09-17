import { Component, OnInit } from '@angular/core';

import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {
  public apiGreeting = '';
  dateTime: string;
  messageSend: string;
  messageReceived: string;
  isLoading: boolean;
  errorMsg: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getStartMessage();
  }

  getStartMessage() {
    this.isLoading = true;
    this.apiService.getHello().subscribe(response => {
      this.apiGreeting = response.mensagem;
      this.getDate();
    }, () => {
      this.errorMsg = 'Houve um erro ao buscar mensagem incial';
    });
  }

  getDate() {
    this.apiService.getDateTime()
      .subscribe(dateTime => {
        this.dateTime = dateTime;
        this.isLoading = false;
      }, () => {
        this.errorMsg = 'Houve um erro ao buscar a data';
      });
  }

  sendMessage() {
    this.isLoading = true;
    this.apiService.sendMessage(this.messageSend)
      .subscribe(messageReceived => {
        this.messageReceived = messageReceived;
        this.isLoading = false;
      }, () => {
        this.errorMsg = 'Houve um erro ao enviar a mensagem';
      });
  }
}
