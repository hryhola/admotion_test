export interface TokenResponce {
  address: string;
  decimals: number;
  amount: string;
  holder: string;
  isERC20: boolean;
  isERC721: boolean;
  isERC777: boolean;
  isERC884: boolean;
  isERC998: boolean;
  name: string;
  symbol: string;
}
