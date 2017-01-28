/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *  - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
TouchableOpacity,
    Alert,ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// 常量和样式库
import { AppStyles, AppSizes } from '@theme/';

/* 本页自定义样式 ==================================================================== */
const styles = StyleSheet.create({

});

// 组件库
import { Text,Spacer} from '@ui/';

import { Icon } from 'react-native-elements';


import TabsView from './TabsView'


/* 本页组件 ==================================================================== */
class AppTalk extends Component {
  static componentName = 'AppHome';

  static propTypes = {
    //notice: PropTypes.func.isRequired,
  }


  render (){

      return (
        <TabsView/>
      )
  }

}

/* 导出该组件 ==================================================================== */
export default AppTalk;
