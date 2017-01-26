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
    Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// 常量和样式库
import { AppStyles, AppSizes } from '@theme/';

/* 本页自定义样式 ==================================================================== */
const styles = StyleSheet.create({

});

// 组件库
import { Text,CJNotices,Spacer} from '@ui/';

import { Icon } from 'react-native-elements';

import HomeTopView from './HomeTopView'

var noticeData=require('@localData/home/notice.json')

/* 本页组件 ==================================================================== */
class AppHome extends Component {
  static componentName = 'AppHome';

  static propTypes = {
    //notice: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(false, true);

    //TODO
    //以下部分修改成获取公共通知
    // Try to authenticate based on existing token
    //this.props.login()
      // Logged in, show index screen
      //.then(() => Actions.app({ type: 'reset' }))
      // Not Logged in, show Login screen
      //.catch(() => Actions.authenticate({ type: 'reset' }));
  }
    renderHomeTopNoticeView(){
        return (
            <View style={AppStyles.homeTopNotice}>
              <Icon
                  type='ionicon'
                  name='ios-megaphone-outline'
                  size={26}
                  color='#FFFFFF'
              />
              <Text style={AppStyles.homeTopNoticeText}>
                顶部通知顶部通知没法实现的话只能webview
              </Text>
              <TouchableOpacity onPress={()=>{Alert.alert('点击关闭公共通知按钮')}}>
                <Icon
                    type='ionicon'
                    name='ios-close-circle-outline'
                    size={26}
                    color='#FFFFFF'
                />
              </TouchableOpacity>
            </View>
        )
    }
    renderHomeTopMenuView(){
        return (
            <HomeTopView/>
        )
    }
  render = () => (
      <View style={[AppStyles.container]}>
          {this.renderHomeTopNoticeView()}
          {this.renderHomeTopMenuView()}
      </View>
  );
}

/* 导出该组件 ==================================================================== */
export default AppHome;
