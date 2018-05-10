import { Component, OnInit } from '@angular/core';
import { Web3Service } from './util/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private web3Service: Web3Service,) { 
      
    }
  
    ngOnInit(){
      this.watchAccount();
    }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.web3Service.accounts = accounts;
    });
  }
}
