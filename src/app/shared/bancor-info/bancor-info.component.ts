import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { BancorService, BancorTicker } from '../../util/bancor.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-bancor-info',
  templateUrl: './bancor-info.component.html',
  styleUrls: ['./bancor-info.component.scss']
})
export class BancorInfoComponent implements OnInit {

    //bancore

    pairs: any[];
    ticker: BancorTicker;
    txError: string;
    account: string;

  constructor(
    private bancoreService: BancorService,
    private userService: UserService
  ) { }

  ngOnInit() {
    // set a default if not logged in for testing
    this.account = this.userService.currentUser ? 
      this.userService.currentUser.id : '0xb856e7847e5A41F6459a0687FF4FE5E93eE60F16';
  }

  getPairs(): void {
    this.bancoreService.getPairs().subscribe((data) => {
      let _pairs = [] 
      Object.keys(data['data']).forEach( key => {
        _pairs.push({'token': key, 'pair': data['data'][key]});
      });
      this.pairs = _pairs;
    });
  }

  getTicker(token, fromCurrencyCode): void {
    this.bancoreService
      .getPriceTicker(token, fromCurrencyCode).subscribe((data) => {
        this.ticker = data['data'];
      })
  }

  getTxData(addr: string): void {
    // example request with example eth and bnt ids
    let _txData ={
      blockchainType: "ethereum",
      fromCurrencyId: "5937d635231e97001f744267",
      toCurrencyId: "594bb7e468a95e00203b048d",
      amount: "100000000000000000",
      minimumReturn: "1",
      ownerAddress: addr,
    }
    
    this.bancoreService
      .getTxData(_txData).subscribe((data) => {
        if('errorCode' in data){
          this.txError = data['errorCode'];
        }
      });
  }

}
