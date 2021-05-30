import instance from './services/instance';
import {
  GetAllAssetsResponse,
  GetAllExchangeResponse,
  GetAssetByIdResponse,
  GetAssetMarketByIdResponse,
  GetAssetMarketOptionRequest,
  GetAssetsHistoryByIdRequest,
  GetAssetsHistoryByIdResponse,
  GetExchangeByIdResponse,
  GetRatesByIdResponse,
  GetRatesResponse,
  GetAssetsOptionsRequest,
} from './typings';

export default class CoinCap {
  // Assets
  async getAllAssets(options?: GetAssetsOptionsRequest): Promise<GetAllAssetsResponse> {
    const { data } = await instance.get<GetAllAssetsResponse>('/assets', { params: options });
    return { data: data.data, timestamp: data.timestamp };
  }

  async getAssetById(id: string): Promise<GetAssetByIdResponse> {
    const { data } = await instance.get<GetAssetByIdResponse>(`/assets/${id}`);
    return { data: data.data, timestamp: data.timestamp };
  }

  async getAssetHistoryById(id: string, options?: GetAssetsHistoryByIdRequest): Promise<GetAssetsHistoryByIdResponse> {
    const { data } = await instance.get<GetAssetsHistoryByIdResponse>(`/assets/${id}/history`, { params: options });
    return { data: data.data, timestamp: data.timestamp };
  }

  async getAssetMarketById(id: string, options?: GetAssetMarketOptionRequest): Promise<GetAssetMarketByIdResponse> {
    const { data } = await instance.get<GetAssetMarketByIdResponse>(`/assets/${id}/markets`, { params: options });
    return { data: data.data, timestamp: data.timestamp };
  }

  // Rates
  async getAllRates(): Promise<GetRatesResponse> {
    const { data } = await instance.get<GetRatesResponse>('/rates');
    return { data: data.data, timestamp: data.timestamp };
  }

  async getRatesById(id: string): Promise<GetRatesByIdResponse> {
    const { data } = await instance.get<GetRatesByIdResponse>(`/rates/${id}`);
    return { data: data.data, timestamp: data.timestamp };
  }

  // Exchanges
  async getAllExchanges(): Promise<GetAllExchangeResponse> {
    const { data } = await instance.get<GetAllExchangeResponse>('/exchanges');
    return { data: data.data, timestamp: data.timestamp };
  }

  async getExchangeById(id: string): Promise<GetExchangeByIdResponse> {
    const { data } = await instance.get<GetExchangeByIdResponse>(`/exchanges/${id}`);
    return { data: data.data, timestamp: data.timestamp };
  }
}
