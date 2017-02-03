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
  Text,
  List,
  ListItem,
} from '@components/ui/';

import ChartOneView from '@police/home/ChartOneView'

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#FFF',
  },
  tabbarIndicator: {
    backgroundColor: '#40C6E9',
  },
  tabbar_text: {
    color: '#40C6E9',
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
          { key: '0', title: '今日工作量' },
          { key: '1', title: '今月工作量' },
          { key: '2', title: '今年工作量' }
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
        return (
          <View style={styles.tabContainer}>
            <ChartOneView/>
          </View>
        );
      case '1' :
        return (
          <View style={styles.tabContainer}>
              <Text>今月工作量</Text>
          </View>
        );
        case '2' :
            return (
                <View style={styles.tabContainer}>
                    <Text>今年工作量</Text>
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
