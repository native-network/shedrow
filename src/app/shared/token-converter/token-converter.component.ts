import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TribeToken } from '../../user/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-token-converter',
  templateUrl: './token-converter.component.html',
  styleUrls: ['./token-converter.component.scss']
})
export class TokenConverterComponent implements OnInit {
  @Input() from: string;
  @Input() to: string;
  @Input() ratio: number;
  @Output() onConvert: EventEmitter<any> = new EventEmitter();
  fromAmount: number;
  toAmount: number;
  converterOpen: boolean = true;


  constructor(
    private userService: UserService) { }

  addTribeToken(ticker: string): TribeToken {
    const newToken = {ticker: ticker, balance: 0}      

    const token = this.userService.currentUser.tribeTokens.find((item) => item.ticker === ticker)
    if(!token){
      this.userService.currentUser.tribeTokens.push(newToken)
    }

    return token || newToken;
  }

  convert(){
    let tribeToken: TribeToken;
    if( this.from === 'ETH') {
      this.userService.currentUser.ethBalance = this.userService.currentUser.ethBalance - this.fromAmount;
      this.userService.currentUser.ntBalance = this.userService.currentUser.ntBalance + (this.fromAmount * this.ratio);
    } else {
      tribeToken = this.addTribeToken(this.to);
      this.userService.currentUser.ntBalance = this.userService.currentUser.ntBalance - this.fromAmount;

      tribeToken.balance = tribeToken.balance + (this.fromAmount * this.ratio);
    }
    this.converterOpen = false;
    this.onConvert.emit([(this.fromAmount * this.ratio)]);

  }

  converterToggle(){
    this.converterOpen = !this.converterOpen;

  }

  ngOnInit() {
  }

}