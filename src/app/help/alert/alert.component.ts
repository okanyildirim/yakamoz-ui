import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
// private subscription: Subscription;
  constructor() { }

  ngOnInit() {}
/*
//   private subscription: Subscription;
    message: any;
//     alert: boolean = false;
//     ticks = 0;
//     secondsDisplay: number = 0;
//     sub: Subscription;

    constructor(
        private alertService: AlertService,
        private messageService: MessageService,
        ) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
                    this.message = message;
                    if(this.message.type == 'success'){
                        this.showSuccess(this.message.text);
                    }
                    else if (this.message.type == 'error') {
                        this.showError(this.message.text);
                    }
                    else if (this.message.type == 'warning') {
                        this.showWarn(this.message.text);
                    }
                });
    }

    showSuccess(text) {
      this.messageService.add({severity:'success', summary: 'Success', detail:text});

    }
    showError(text) {
      this.messageService.add({severity:'error', summary: 'Error !', detail:text});
    }

    showWarn(text) {
        this.messageService.add({severity:'warn', summary: 'Warning', detail:text});
    }*/
}
