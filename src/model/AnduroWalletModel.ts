import { Network } from "bitcoinjs-lib"

export interface GetWalletInfoParams {
  networkType: string
  networkMode?: string
  derivationIndex: number
  changeIndex: number
  mnemonic: string
  network?: Network | Network
  chromaBookApi?: string
}
