import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { BancorService, BancorTicker } from '../../util/bancor.service';

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
  
    // web3
    accounts: string[];
    model = {
      amount: 5,
      receiver: '',
      balance: 0,
      account: ''
    };

  constructor(
    private bancoreService: BancorService
  ) { }

  ngOnInit() {
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
    this.bancoreService.getPriceTicker(token, fromCurrencyCode).subscribe((data) => {
      this.ticker = data['data'];
    })
  }

  getTxData(addr: string){
    let txData ={
      blockchainType: "ethereum",
      fromCurrencyId: "5937d635231e97001f744267",
      toCurrencyId: "594bb7e468a95e00203b048d",
      amount: "100000000000000000",
      minimumReturn: "1",
      ownerAddress: addr,
    }

    console.log(txData);
    
    this.bancoreService.getTxData(txData).subscribe((data) => {
      console.log(data);
      if('errorCode' in data){
        this.txError = data['errorCode'];
      }
    })

  }

}
