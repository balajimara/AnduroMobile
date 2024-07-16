import { Navigation } from "react-native-navigation";
import { FirstScreen } from '../component/CreateWallet/FirstScreen/FirstScreen';
import { NewandExisting } from '../component/CreateWallet/NewandExisting/NewandExisting';
import { Newaccount } from '../component/CreateWallet/Newaccount/Newaccount';
import { CreateWallet } from '../component/CreateWallet/CreateWallet/CreateWallet';
import { CreateWalletName} from '../component/CreateWallet/CreateWalletName/CreateWalletName';
import { SecretRecoveryPhase} from '../component/CreateWallet/SecretRecoveryPhase/SecretRecoveryPhase';
import { Securepassword} from '../component/CreateWallet/Securepassword/Securepassword';
import { Accountcreated} from '../component/CreateWallet/Accountcreated/Accountcreated';
import { Recoveryphase} from '../component/CreateWallet/Recoveryphase/Recoveryphase';
import { Walletimported} from '../component/CreateWallet/Walletimported/Walletimported';
import { ConfirmBackup} from '../component/CreateWallet/ConfirmBackup/ConfirmBackup';
import { Authorizedscreen} from '../component/CreateWallet/Authorizedscreen/Authorizedscreen';

Navigation.registerComponent('Firstscreen', () => FirstScreen);
Navigation.registerComponent('NewandExisting', () => NewandExisting);
Navigation.registerComponent('Newaccount', () => Newaccount);
Navigation.registerComponent('CreateWallet', () => CreateWallet);
Navigation.registerComponent('CreateWalletName', () => CreateWalletName);
Navigation.registerComponent('SecretRecoveryPhase', () => SecretRecoveryPhase);
Navigation.registerComponent('Securepassword', () => Securepassword);
Navigation.registerComponent('Accountcreated', () => Accountcreated);
Navigation.registerComponent('Recoveryphase', () => Recoveryphase);
Navigation.registerComponent('Walletimported', () => Walletimported);
Navigation.registerComponent('ConfirmBackup', () => ConfirmBackup);
Navigation.registerComponent('Authorizedscreen', () => Authorizedscreen);

const firstscreen = {
    stack: {
      children: [
        {
          component: {
            name: "Firstscreen",
            options: {
              topBar: {
                visible: false,
              },
              bottomTabs: {
                visible: false
              }
            },
          },
        },
      ],
    },
  };
  const route = {
    firstscreen : firstscreen,
  };
  export default route;