export interface sendMessageToParentModel {
  status: boolean
  responseType: string
  result: any
  error: any
}
export enum InjectorRequestModel {
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  SIGN = "sign",
  NETWORKINFO = "networkinfo",
  SEND = "send",
  NORMAL = "normal",
  PEGIN = "pegin",
  PEGOUT = "pegout",
  SIGNTRANSACTION = "sign-transaction",
  SIGNANDSENDTRANSACTION = "sign-and-send-transaction",
}
export enum InjectorResponsetModel {
  WALLETLOADED = "wallet-loaded",
  CONNECTIONRESPONSE = "connection-response",
  DISCONNECTRESPONSE = "disconnect-response",
  NETWORKINFORESPONSE = "networkinfo-response",
  SENDRESPONSE = "send-response",
  SIGNANDSENDRESPONSE = "sign-transaction-response",
}
