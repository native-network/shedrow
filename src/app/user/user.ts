export class TribeToken {
  ticker: string;
  balance: number;
}

export class User {
    id: string;
    image: string;
    name: string;
    email: string;
    ethBalance: number;
    ntBalance: number;
    ttBalance: number;
    tribeTokens: TribeToken[];
  }
