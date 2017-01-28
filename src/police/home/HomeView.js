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

import HomeTopView from './HomeTopView'
import PagerView from './PagerView'

import TabsView from './TabsView'



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
    renderHomeTopPagerView(){
        return (
            <PagerView/>
        )
    }
    renderHomeWorkStateView(){
        return (
            <View style={[AppStyles.HomeWorkState]}>
                <View style={{flexDirection:'row',width:AppSizes.screen.width,height:AppSizes.screen.height*0.06,justifyContent:'space-between',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#5E6977'}}>
                    <View style={{flexDirection:'row',justifyContent:"center",alignItems:'center'}}>
                        <View style={{backgroundColor:'#3BC8F0',width:AppSizes.screen.width*0.02,height:AppSizes.screen.height*0.06}}></View>
                        <Text style={{color:'#3BC8F0',paddingLeft:AppSizes.screen.width*0.02}}>工作量情况(日)</Text>
                    </View>
                    <View style={{paddingRight:AppSizes.screen.width*0.04,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View>
                            <Text  style={{color:'#5E6977'}}>更多</Text>
                        </View>
                        <View style={{marginLeft:AppSizes.screen.width*0.01}}>
                            <Icon
                                type='ionicon'
                                name='ios-arrow-dropright-circle-outline'
                                size={26}
                                color='#3BC8F0'
                            />
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap',width:AppSizes.screen.width,height:AppSizes.screen.height*0.14,justifyContent:'center',alignItems:'center',backgroundColor:'#FFF'}}>
                    <View  style={[AppStyles.HomeWorkStateTextView,{backgroundColor:'#7FB85C'}]}><Text style={[AppStyles.HomeWorkStateText]}>人员采集:21</Text></View>
                    <View  style={[AppStyles.HomeWorkStateTextView,{backgroundColor:'#40C6E9'}]}><Text style={[AppStyles.HomeWorkStateText]}>人员查询:16</Text></View>
                    <View  style={[AppStyles.HomeWorkStateTextView,{backgroundColor:'#FA7CB8'}]}><Text style={[AppStyles.HomeWorkStateText]}>车辆采集:21</Text></View>
                    <View  style={[AppStyles.HomeWorkStateTextView,{backgroundColor:'#FF9733'}]}><Text style={[AppStyles.HomeWorkStateText]}>车辆查询:13</Text></View>
                    <View  style={[AppStyles.HomeWorkStateTextView,{backgroundColor:'#2A658F'}]}><Text style={[AppStyles.HomeWorkStateText]}>房屋采集:0</Text></View>
                    <View  style={[AppStyles.HomeWorkStateTextView,{backgroundColor:'#FFCE51'}]}><Text style={[AppStyles.HomeWorkStateText]}>单位采集:1</Text></View>
                </View>
            </View>
        )
    }
    renderHomeTabsView(){
        return (
            <View style={{backgroundColor:'#FFF',width:AppSizes.screen.width,height:AppSizes.screen.height*0.2,marginTop:AppSizes.screen.height*0.01}}>
                <TabsView/>
            </View>
            )

    }
  render = () => (
      <View style={[AppStyles.container]}>
          {this.renderHomeTopNoticeView()}
          <ScrollView style={[AppStyles.container]}>
              {this.renderHomeTopPagerView()}
              {this.renderHomeTopMenuView()}
              {this.renderHomeWorkStateView()}
              {this.renderHomeTabsView()}
          </ScrollView>
      </View>

  );
}

/* 导出该组件 ==================================================================== */
export default AppHome;
