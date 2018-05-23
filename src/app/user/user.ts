export class WalletToken {
  ticker: string;
  balance: number;
}

export class User {
    id: string;
    image: string;
    name: string;
    email: string;
    walletTokens: WalletToken[];
  }
