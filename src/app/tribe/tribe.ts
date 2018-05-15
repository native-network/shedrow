import { User } from "../user/user";

export class Tribe {
  name: string;
  address: string;
  image: string;
  icon: string;
  location: string;
  subtitle: string;
  dataImage: string;
  tribeIntro: string;
  tribePurpose: string;
  tags: string;
  curators: User;
  members: User[];
  devFund: number;
  reserveFund: number;
  tokenValue: number;
  tickerSymbol: string;
  configQuorum: number;
  configMembershipFee: number;
}
