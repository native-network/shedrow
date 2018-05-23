import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../user/user.service';
import { MatSnackBar } from '@angular/material';

import { Tribe } from '../../tribe/tribe';

@Component({
  selector: 'app-token-converter',
  templateUrl: './token-converter.component.html',
  styleUrls: ['./token-converter.component.scss']
})
export class TokenConverterComponent implements OnInit {

  @Input() tribe: Tribe = null;
  
  @Output() onConvert: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  fromAmount: number;
  toAmount: number;
  from: string;
  to: string;
  ratio: number = 100;
  converterOpen: boolean = true;
  fromTokenSymbol: string = 'ETH';


  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar) {     
    }

  changeFrom(sym) {
      this.fromTokenSymbol = sym;
  }

  convert() {
    let status: string;

    if(!this.fromAmount || this.fromAmount <= 0) {
      status = "Must be more than 0";
      this.fromAmount = 0;
      this.matSnackBar.open(status, null, {duration: 3000});
      return
    }

    if( this.from === 'ETH') {
      if(this.fromAmount > this.userService.tokenBalance('ETH')) {
        const status = "Not enough ETH";
        this.fromAmount = 0;
        this.matSnackBar.open(status, null, {duration: 3000});
        return
      }

      this.userService.setTokenBalance('ETH', this.userService.tokenBalance('ETH') - this.fromAmount);
      this.userService.setTokenBalance('NT', this.userService.tokenBalance('NT') + (this.fromAmount * this.ratio));
    } else {
      if(this.fromAmount > this.userService.tokenBalance('NT')) {
        const status = "Not enough NT";
        this.fromAmount = 0;
        this.matSnackBar.open(status, null, {duration: 3000});
        return
      }

      this.userService.setTokenBalance('NT', this.userService.tokenBalance('NT') - this.fromAmount);

      this.userService.setTokenBalance(this.to, this.userService.tokenBalance(this.to) + (this.fromAmount * this.ratio));
    }
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
    if(this.tribe) {
      this.from = 'NT';
      this.to = this.tribe.tickerSymbol;
      this.ratio = 1 / this.tribe.tokenValue;
      this.fromAmount = this.tribe.configMembershipFee * this.tribe.tokenValue; 
      this.toAmount = this.tribe.configMembershipFee;
    } else {
      this.from = 'ETH';
      this.to = 'NT';

    }
  }

}
