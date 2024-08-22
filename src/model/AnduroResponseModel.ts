export interface UnspentBalanceResponse {
  status?: boolean | undefined
  result: {
    pending: number
    confirmed: number
  }
}
export interface AssetListResponseModel {
  status: boolean
  result: AssetDetailsResponse[]
}

export interface AssetDetailsResponse {
  asset_id: number
  name?: string
  image_url?: string
  symbol: string
  asset_type: number
  precision: number
  balance?: number
  currentSupply?: number
}

export interface UnspentHistoryResponse {
  txid: string
  address: string
  block_height: number
  coinbase: number
  confirmations: number
  tx_type: string
  tx_state: string
  value: number
  unspent_type: number
  is_verified: number
  created_at: Date
}
export interface UnspentHistoryOutputModel {
  status: boolean
  result: UnspentHistoryResponse[]
}
export interface AlysHistoryOutputModel {
  status: boolean
  result: AlysHistoryResponse[]
}
export interface AlysHistoryResponse {
  txid: string
  tx_type: string
  value: number
  created_at: Date
}

export interface PreconfHistoryOutputModel {
  status: boolean
  result: PreconfHistoryResponse[]
}

export interface PreconfHistoryResponse {
  txid: string
  address: string
  block_height: number
  coinbase: number
  tx_type: string
  value: number
  created_at: Date
  totalAllowedFee: number
}

export interface nftListOutputModel {
  status: boolean
  totalDocs: number
  result: nftListResponse[]
}

export interface nftListResponse {
  asset_id?: number
  asset_type?: number
  image_url?: string
  symbol: string
  genesis_txid: string
  name?: string
  icon?: string
  address?: string
  balance?: string
}

export interface nftMempoolListOutputModel {
  status: boolean
  result: nftMempoolListResponse[]
}

export interface nftMempoolListResponse {
  asset_id: number
  asset_type: number
  name: string
  image_url: string
  genesis_txid: string
  is_confirmed: boolean
}

export interface NftHistoryOutputModel {
  status: boolean
  result: NftHistoryResponse[]
}

export interface NftHistoryResponse {
  name: string
  symbol: string
  txid: string
  image_url: string
  block_height: number
  tx_type: string
  value: number
  from_address: string
  to_address: string
  receiver_xpub: string
  precision: number
  created_at: Date
  vout: number
}

export interface AlysTokenListResponseModel {
  status?: boolean
  result: AlysTokenModel[]
}
export interface AlysTokenModel {
  name: string
  symbol: string
  balance: number
  type: string
  address: string
  icon: string
  usdIcon: string
}
export interface AssetTransferResponse {
  supply: string
  receiver: string
  asset: AssetDetailsResponse
  assetType: number
  precision: number
  isValid?: boolean
  isPending?: boolean
  chain: string
}
const AnduroCommonModel = {
  /**
   * This function is used to check status of a response
   * @param status - status
   */
  checkStatus(status: boolean) {
    return status
  },
}
export default AnduroCommonModel
