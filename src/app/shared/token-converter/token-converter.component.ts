import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user/user.service';
import { MatSnackBar } from '@angular/material';

import { Tribe } from '../../tribe/tribe';
import { WalletToken } from '../../user/user';
import { TribeService } from '../../tribe/tribe.service';

@Component({
  selector: 'app-token-converter',
  templateUrl: './token-converter.component.html',
  styleUrls: ['./token-converter.component.scss']
})
export class TokenConverterComponent implements OnInit {

  @Input() tribe: Tribe = null;
  @Input() from: string;
  @Input() to: string;
  
  @Output() onConvert: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  fromAmount: number;
  toAmount: number;

  ratio: number = 100;
  converterOpen: boolean = true;
  fromTokenSymbol: string = 'ETH';
  availibleTokens: WalletToken[];
  availibleTribeTokens: string[];


  constructor(
    private userService: UserService,
    private tribeService: TribeService,
    private matSnackBar: MatSnackBar) {     
    }

  getAvailibleTokens() {
    return this.availibleTokens = this.userService.currentUser.walletTokens;
  }

  getAvailibleTribeTokens() {

    this.tribeService.getTribes()
      .subscribe(tribes => this.availibleTribeTokens = tribes.map((item) => item.tickerSymbol))
  }

  changeFrom(sym) {
    this.from = sym;
  }

  changeTo(sym) {
    this.to = sym;
  }

  convert() {
    let status: string;

    if(!this.fromAmount || this.fromAmount <= 0) {
      status = "Must be more than 0";
      this.fromAmount = 0;
      this.matSnackBar.open(status, null, {duration: 3000});
      return
    }
    if(this.fromAmount > this.userService.tokenBalance(this.from)) {
      const status = `Not enough ${this.from}`;
      this.fromAmount = 0;
      this.matSnackBar.open(status, null, {duration: 3000});
      return
    }

    this.userService.setTokenBalance(this.from, this.userService.tokenBalance(this.from) - this.fromAmount);
    this.userService.setTokenBalance(this.to, this.userService.tokenBalance(this.to) + (this.fromAmount * this.ratio));
    
    this.converterOpen = false;
    this.onConvert.emit([(this.fromAmount * this.ratio)]);

  }

  close(){
    this.onClose.emit();
  }

  converterToggle(){
    this.converterOpen = !this.converterOpen;

  }

  ngOnInit() {

    this.getAvailibleTokens();
    this.getAvailibleTribeTokens();
    if(this.tribe) {
      this.to = this.tribe.tickerSymbol;
      this.from = 'NT';
      this.ratio = 1 / this.tribe.tokenValue;
      this.fromAmount = this.tribe.configMembershipFee * this.tribe.tokenValue; 
      this.toAmount = this.tribe.configMembershipFee;
    } 
  }

}
