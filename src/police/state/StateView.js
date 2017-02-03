
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

import StateListView from './StateListView'

/* 本页组件 ==================================================================== */
class AppState extends Component {
  static componentName = 'AppState';

  static propTypes = {
    //notice: PropTypes.func.isRequired,
  }


  render (){

      return (
          <View>
              <StateListView/>
          </View>
      )
  }

}

/* 导出该组件 ==================================================================== */
export default AppState;
