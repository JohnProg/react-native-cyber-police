/**
 * TAB信息展示
 *
 */
import React, { Component } from 'react';
import {
  View,
  Alert,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

// Components
import {
  Alerts,
  Button,
  Card,
  Spacer,
  Text
} from '@components/ui/';


import { List, ListItem } from 'react-native-elements'


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
  },
  tabbar: {
      backgroundColor: AppColors.brand.primary,

  },
  tabbarIndicator: {
    backgroundColor: '#FFF',
  },
  tabbar_text: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class TabsView extends Component {
  static componentName = 'TabsView';

  constructor(props) {
    super(props);


    this.state = {
      navigation: {
        index: 0,
        routes: [
          { key: '0', title: '会话' },
          { key: '1', title: '我的通讯录' },
          { key: '2', title: '公共通讯录' }
        ],
      }
    };
  }

  /**
    * On Change Tab
    */
  handleChangeTab = (index) => {
    this.setState({
      navigation: { ...this.state.navigation, index },
    });
  }


  /**
    * Which component to show
    */
  renderScene = ({ route }) => {
    switch (route.key) {
      case '0' :
          const list = [
              {
                  name: 'Amy Farha',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  subtitle: 'Vice President'
              },
              {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
              },
              {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
              },
              {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
              },
              {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
              },
              {
                  name: 'Chris Jackson',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  subtitle: 'Vice Chairman'
              }
          ]
        return (
          <ScrollView style={styles.tabContainer}>
            <List containerStyle={{marginTop: 0}}>
                {
                    list.map((l, i) => (
                        <ListItem
                            roundAvatar
                            avatar={{uri:l.avatar_url}}
                            key={i}
                            title={l.name}
                            badge={{ value: 3, badgeTextStyle: { color: '#FFF' }, badgeContainerStyle: { marginTop: 0 ,backgroundColor:AppColors.brand.primary} }}
                            onPress={()=>{}}
                        />
                    ))
                }
            </List>
          </ScrollView>
        );
      case '1' :
        return (
          <View style={styles.tabContainer}>
              <Text>我的通讯录</Text>
          </View>
        );
        case '2' :
            return (
                <View style={styles.tabContainer}>
                    <Text>公共通讯录</Text>
                </View>
            );
      default :
        return (
          <View />
        );
    }
  }

  /**
    * Header Component
    */
  renderHeader = props => (
    <TabBarTop
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbar_text]}>{scene.route.title}</Text>
      )}
    />
  )

  render = () => (
    <TabViewAnimated
      style={[styles.tabContainer]}
      renderScene={this.renderScene}
      renderHeader={this.renderHeader}
      navigationState={this.state.navigation}
      onRequestChangeTab={this.handleChangeTab}
    />
  )
}

/* Export Component ==================================================================== */
export default TabsView;
