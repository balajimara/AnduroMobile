import { Text } from "@rneui/base"
import { useEffect } from "react"
import { Button, SafeAreaView, View } from "react-native"
import { Navigation } from "react-native-navigation"
import route from "../../../Route/Route"
import BIP32Factory, { BIP32Interface } from "bip32"
import * as bip39 from "bip39"
import * as bitcoin from 'bitcoinjs-lib';
import ecc from "@bitcoinerlab/secp256k1"
const bip32 = BIP32Factory(ecc)

const AnduroDashboardVC = (props:any) => {
    useEffect(()=>{
        Navigation.mergeOptions(props.componentId, {
            topBar: {
              title: {
                text: "test134"
              }
            }
        });
        createBitcoinWallet();
    },[])

    const createBitcoinWallet = async() => {
        const seed = bip39.mnemonicToSeedSync(bip39.generateMnemonic())
        const root = bip32.fromSeed(seed, bitcoin.networks.regtest)
        let path = getDerivationPath("bitcoin")
        const account = root.derivePath(path).derive(0)

        const xPublickey = account.neutered().toBase58()
        const xPrivateKey = account.toBase58()
    
        const node = account.derive(0)
    
        const btcAddress = bitcoin.payments.p2wpkh({
          pubkey: node.publicKey,
          network: bitcoin.networks.regtest,
        })

        console.log({
            address: btcAddress.address || "",
            xPublickey,
            xPrivateKey,
          })
    }

    const getDerivationPath = (networkType: string) => {
        let path = "m/84'/0'/0'"
        if (networkType === "sidechain") {
          path = "m/84'/2222'/0'"
        } else if (networkType === "alys") {
          path = "m/12381/3600/0/0"
        }
        return path
      }

    const onMenuOpen = () => {
        Navigation.mergeOptions(props.componentId, {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
    }
    
    return (
        <SafeAreaView>
            <Text className="text-black">
               <Button onPress={onMenuOpen} title="Menu" />

            </Text>
        </SafeAreaView>
    )
}

export default AnduroDashboardVC