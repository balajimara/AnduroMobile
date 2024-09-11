import { View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useTranslation } from "react-i18next"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Dialog, Input } from '@rneui/themed';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import route from '../../../Route/Route';
import React, { useState } from 'react';

const BackPopupVW = (props:any) => {
    return (
        <SafeAreaView>
        <View><Text>Backup popup</Text></View>
    </SafeAreaView>
    )
 
}

export default BackPopupVW