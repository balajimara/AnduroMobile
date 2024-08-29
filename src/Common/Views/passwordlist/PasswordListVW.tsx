import { ListItem } from '@rneui/themed';
import { View, Text,Image, StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const PasswordList: React.FC<any> = ({ data, val }) => {
   return (
    <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
      <Text
      key={val}
        className={
          data.isValid
            ? "text-activebackup text-sm mb-1 font-inter"
            : "text-list text-sm mb-1 font-geistregular"
        }
      >
        <Icon name='check' color={data.isValid ? "#02F57A" : "#9AA2A7"} />
        {data.title}
      </Text>
      </ListItem>
    );
  };

  const styles = StyleSheet.create({
    subtitleView: {
      color: '#000',
      padding:0
    },
    listView: {
      backgroundColor: 'transparent',
      padding:0,
      marginBottom:5,
    }
    });

export default PasswordList
