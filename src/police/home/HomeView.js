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
  ActivityIndicator
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// 常量和样式库
import { AppStyles, AppSizes } from '@theme/';

/* 本页自定义样式 ==================================================================== */
const styles = StyleSheet.create({

});

// 组件库
import { Text,CJNotices} from '@ui/';

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
  render = () => (
      <View style={[AppStyles.container]}>
          {/*顶部通知组件*/}
          <CJNotices
              leftIconType={'ionicon'}
              leftIconName={'ios-megaphone-outline'}
              rightIconType={'ionicon'}
              rightIconName={'ios-close-circle-outline'}
              noticesData={null}
          />
      </View>
  );
}

/* 导出该组件 ==================================================================== */
export default AppHome;
