import { User, WalletToken } from '../../user/user';

const INITIALTOKEN: WalletToken[] =[
  {ticker: 'ETH', balance: 10}
]

export const USERS: User[] = [
  { id: '0xb856e7847e5A41F6459a0687FF4FE5E93eE60F16', image: 'assets/users/jaiia.jpg', name: 'Jaiia', email: '', walletTokens: INITIALTOKEN },
  { id: '0x777f7b8328412f10604E45395E00027272122531', image: 'assets/users/dt.jpg', name: 'DT', email: '', walletTokens: INITIALTOKEN },
  { id: '0xc8C435CD8e48070eb21c6C3952DfFA7516400a08', image: 'assets/users/msc.png', name: 'MSC', email: '', walletTokens: INITIALTOKEN },
  { id: '0x14', image: 'assets/users/user_jaiia.png', name: 'Celeritas', email: '', walletTokens: INITIALTOKEN },
  { id: '0x15', image: 'assets/users/user_jaiia.png', name: 'Magneta', email: '', walletTokens: INITIALTOKEN },
  { id: '0x16', image: 'assets/users/user_jaiia.png', name: 'RubberMan', email: '', walletTokens: INITIALTOKEN },
  { id: '0x17', image: 'assets/users/user_jaiia.png', name: 'Dynama', email: '', walletTokens: INITIALTOKEN },
  { id: '0x18', image: 'assets/users/user_jaiia.png', name: 'Dr IQ', email: '', walletTokens: INITIALTOKEN },
  { id: '0x19', image: 'assets/users/user_jaiia.png', name: 'Magma', email: '', walletTokens: INITIALTOKEN },
  { id: '0x20', image: 'assets/users/user_jaiia.png', name: 'Tornado', email: '', walletTokens: INITIALTOKEN }]
