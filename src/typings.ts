type OptionAssetsRequest = {
  search?: string;
  ids?: string;
  limit?: string;
  offset?: string;
};

type Data = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
};

type GetAllAssetsResponse = {
  data: Data[];
  timestamp: number;
};

type GetAssetByIdResponse = {
  data: Data;
  timestamp: number;
};

type GetAssetsHistoryByIdRequest = {
  interval: 'm1' | 'm5' | 'm15' | 'm30' | 'h1' | 'h2' | 'h6' | 'h12' | 'd1';
};

type HistoryData = {
  priceUsd: string;
  time: any;
};

type GetAssetsHistoryByIdResponse = {
  data: HistoryData[];
  timestamp: number;
};

type MarketData = {
  exchangeId: string;
  baseId: string;
  quoteId: string;
  baseSymbol: string;
  quoteSymbol: string;
  volumeUsd24Hr?: any;
  priceUsd: string;
  volumePercent?: any;
};

type GetAssetMarketByIdResponse = {
  data: MarketData[];
  timestamp: number;
};

type GetAssetMarketOptionRequest = {
  limit?: string;
  offset?: string;
};

type RatesData = {
  id: string;
  symbol: string;
  currencySymbol: string;
  type: string;
  rateUsd: string;
};

type GetRatesResponse = {
  data: RatesData[];
  timestamp: number;
};

type RatesIdData = {
  id: string;
  symbol: string;
  currencySymbol: string;
  type: string;
  rateUsd: string;
};

type GetRatesByIdResponse = {
  data: RatesIdData;
  timestamp: number;
};

export {
  OptionAssetsRequest,
  GetAllAssetsResponse,
  GetAssetByIdResponse,
  GetAssetsHistoryByIdResponse,
  GetAssetsHistoryByIdRequest,
  GetAssetMarketByIdResponse,
  GetAssetMarketOptionRequest,
  GetRatesResponse,
  GetRatesByIdResponse,
};
