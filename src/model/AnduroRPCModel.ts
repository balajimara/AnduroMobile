export interface FeerateModel {
  type: string
  feerate: number
}
export interface FeeratesModel {
  estimatedFees: FeerateModel[]
  selectedFeeRate: FeerateModel
}
const AnduroRPCModel = {
  /**
   * This function is used to parse RPC response data
   * @param response -response
   */
  parseRPCResponseData(response: any) {
    const result = JSON.parse(response.result || null)
    if (result === null || result.error !== null) {
      return {
        status: false,
        result: result === null ? null : result.error.message,
        code: result.error.code,
      }
    }
    return {
      status: true,
      result: result.result,
      code: 1,
    }
  },
  /**
   * This function is used to parse RPC response data
   * @param response -response
   */
  parseAlysRPCResponseData(response: any) {
    const result = JSON.parse(response.result || null)
    if (result === null) {
      return {
        status: false,
        result: result === null ? null : result.error.message,
        code: result.error.code,
      }
    }
    return {
      status: true,
      result: result,
      code: 1,
    }
  },
  /**
   * This function is used to parse raw transaction response
   * @param response - response
   * @param verbosity - verbosity
   */
  parseRawTransactionResponse(response: any, verbosity: number) {
    if (verbosity === 0) {
      return {
        hex: response.result,
      }
    }
    return {
      blockhash: response.result.blockhash,
      blocktime: response.result.blocktime,
      confirmations: response.result.confirmations,
      fee: response.result.fee,
      hash: response.result.hash,
      hex: response.result.hex,
      locktime: response.result.locktime,
      size: response.result.size,
      time: response.result.time,
      txid: response.result.txid,
      version: response.result.version,
      vin: response.result.vin,
      vout: response.result.vout,
      vsize: response.result.vsize,
      weight: response.result.weight,
      payloaddata: response.result.payloaddata,
    }
  },
}

export default AnduroRPCModel
