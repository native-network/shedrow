import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwToolbarMixedModesError } from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

export class BancorTicker {
    name: string;
    symbol: string;
    code: string;
    decimals: number;
    price24hHigh: number;
    price24hLow: number;
    price: number;
    price24h: number;
    volume24h: string;
    totalSupply: string;

}

export class TxData
{
  blockchainType: string;
  fromCurrencyId: string;
  toCurrencyId: string;
  amount: string;
  minimumReturn: string;
  ownerAddress: string;
}

export class TxResponse 
{
  from: string;
  to: string;
  data: string;
  value: string;
  gasPrice: string;
  nonce: string;
  gasLimit: string;
}

@Injectable()
export class BancorService {
  baseUrl: String = environment.config.bancorApiUrl


  constructor(private http:HttpClient) { }

  getPairs():Observable<Object[]> {
    let endPoint: string = 'currencies/convertiblePairs';
    return this.http.get<Object[]>(this.baseUrl.concat( endPoint ));
  }

  getPriceTicker(token: string, fromCurrencyCode: string):Observable<Object[]> {
    // example
    // https://api.bancor.network/0.1/currencies/BNT/ticker?fromCurrencyCode=ETH
    let endPoint: string = `currencies/${token}/ticker?fromCurrencyCode=${fromCurrencyCode}`;
    return this.http.get<Object[]>(this.baseUrl.concat( endPoint ));
  }

  getTxData (txData: TxData): Observable<TxResponse> {
    let endPoint: string = `currencies/convert`;
    
    return this.http.post<TxResponse>(
      this.baseUrl.concat( endPoint ), txData, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(
      'Something bad happened; please try again later.');
  };

}
