import instance from './services/instance';
import {
  GetAllAssetsResponse,
  GetAssetByIdResponse,
  GetAssetMarketByIdResponse,
  GetAssetMarketOptionRequest,
  GetAssetsHistoryByIdRequest,
  GetAssetsHistoryByIdResponse,
  GetRatesByIdResponse,
  GetRatesResponse,
  OptionAssetsRequest,
} from './typings';

export default class CoinCap {
  // Assets
  async getAllAssets(options?: OptionAssetsRequest): Promise<GetAllAssetsResponse> {
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
}
