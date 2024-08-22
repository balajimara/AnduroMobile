import { NetworkListModel } from "./AnduroNetworkModel"
import { UnspentOutputAPIResponse } from "./AnduroUnspentModel"

interface PsbtOutputExtendedAddress {
  address: string
  value: number
}
interface PsbtOutputExtendedScript {
  script: Buffer
  value: number
}
export type PsbtOutputExtended = PsbtOutputExtendedAddress | PsbtOutputExtendedScript

export interface BuildOutputParams extends networkInfo {
  outputs: PsbtOutputExtended[]
}
export interface networkInfo {
  networkType?: string
  networkMode?: string
  chromaBookApi?: string
}

export interface BuildOutputsResponse {
  outputs: PsbtOutputExtended[]
  totalAmount: number
}
export interface BuildInputParams extends networkInfo {
  inputs: UnspentOutputAPIResponse[]
  mnemonic: string
  isRBF: boolean
}
export interface WitnessUtxo {
  script: Buffer
  value: number
}
export interface PsbtInputExtended {
  hash: string | Buffer
  index: number
  sequence?: number
  nonWitnessUtxo?: Buffer
  witnessUtxo?: WitnessUtxo
  derivationIndex?: number
  value?: number
}

export interface GetInputsParams extends networkInfo {
  unspents?: UnspentOutputAPIResponse[]
  prioritySpent?: any
  requiredAmount: number
  mandatoryInputs: UnspentOutputAPIResponse[]
}
export type prepareInputsResponse = {
  unspents: UnspentOutputAPIResponse[]
  totalAmount: number
}
export interface BuildPSBTTX extends networkInfo {
  inputs: PsbtInputExtended[]
  outputs: PsbtOutputExtended[]
  mnemonic: string
  transactionVersion: number
}
export interface PrepareIOParams {
  unspents: UnspentOutputAPIResponse[]
  amount: number
  toAddress: string
  opreturn?: string
  feeRate: number
  isRBF: boolean
  prioritySpent?: UnspentOutputAPIResponse[]
  transactionVersion: number
  mnemonic: string
  xpubKey?: string
  networkInfo?: NetworkListModel
  reserveAmount?: number
  symbol?: string
  assetunspents?: UnspentOutputAPIResponse[]
  transactionData?: any
}
export type prepareIOResponse = {
  status: boolean
  message?: string
  inputs?: PsbtInputExtended[]
  outputs?: PsbtOutputExtended[]
  transactionFee?: number
  transactionSize?: number
}
export interface BroadcastTransactionResponse {
  status: boolean
  message: string
  txId: string
  code: number
}
