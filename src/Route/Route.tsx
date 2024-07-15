import { Navigation } from "react-native-navigation";
import { FirstScreen } from '../component/FirstScreen/FirstScreen';
import { NewandExisting } from '../component/NewandExisting/NewandExisting';
import { Newaccount } from '../component/Newaccount/Newaccount';
import { CreateWallet } from '../component/CreateWallet/CreateWallet';
import { CreateWalletName} from '../component/CreateWalletName/CreateWalletName';
import { SecretRecoveryPhase} from '../component/SecretRecoveryPhase/SecretRecoveryPhase';
import { Securepassword} from '../component/Securepassword/Securepassword';
import { Accountcreated} from '../component/Accountcreated/Accountcreated';
import { Recoveryphase} from '../component/Recoveryphase/Recoveryphase';
import { Walletimported} from '../component/Walletimported/Walletimported';
import { ConfirmBackup} from '../component/ConfirmBackup/ConfirmBackup';
import { Authorizedscreen} from '../component/Authorizedscreen/Authorizedscreen';

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