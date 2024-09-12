export interface NetworkListModel {
  id: number
  name: string
  port?: string
  image?: string
  username?: string
  password?: string
  explorer: string
  symbol: string
  pegNetwork: string
  blockCount: number
  balance: number
  pendingBalance?: number
  networkType: string
  networkMode: string
  isSandbox: boolean
  derivationIndex: number
  chromaBookApi: string
  federationApi?: string
  icon?: string
  usdIcon?: string
  url?: string
  chainId?: number
  alysNodeApi?: string,
  networkVersion: string
}
