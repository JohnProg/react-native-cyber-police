/**
 * Created by lanccj on 2017/2/3.
 */

import React, {Component} from 'react';
import {
    View,
    Alert,
    ListView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// Consts and Libs
import {AppColors, AppStyles} from '@theme/';

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


/* Styles ==================================================================== */
const styles = StyleSheet.create({
    // Tab Styles
    tabContainer: {
        flex: 1
    }
});

/* Component ==================================================================== */
class DemoView extends Component {
    static componentName = 'DemoView';

    constructor(props) {
        super(props);


        this.state = {};
    }


    render = () => (
        <View><Text>测试VIEW</Text></View>
    )
}

/* Export Component ==================================================================== */
export default DemoView;