type DataType = {
  title: string;
  buy: string | undefined;
  sell?: string | undefined;
  high?: string | undefined;
  low?: string | undefined;
  diff?: string | undefined;
  buy10?: string | undefined;
  sell10?: string | undefined;
};

export type CardType = {
  title: string;
  headings: string[];
  data: DataType[];
  updatedAt?: string;
};

export type GoldRateData = {
  pcsBuy: string;
  pcsSell: string;
  pcsHigh: string;
  pcsLow: string;
  pcsDiff: string;
  rawaBuy: string;
  rawaSell: string;
  rawaHigh: string;
  rawaLow: string;
  rawaDiff: string;
  gold: string;
  highGold: string;
  lowGold: string;
  rateUpdateTime: string;
  localSilverBuy: string;
  localSilverSell: string;
  localHighSilver: string;
  localLowSilver: string;
  localMainSilver: string;
  silver: string;
  highSilver: string;
  lowSilver: string;
};

export type BoardRateData = {
  _21ktBuy: string;
  _21ktSell: string;
  _21ktBuy10: string;
  _21ktSell10: string;
  _22ktBuy: string;
  _22ktSell: string;
  _22ktBuy10: string;
  _22ktSell10: string;
  rateUpdateTime: string;
};
