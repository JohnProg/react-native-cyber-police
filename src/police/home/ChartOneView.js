/**
 * Created by lanccj on 2017/2/3.
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

import Chart from 'react-native-chart';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 200,
        height: 200,
    },
});

/* Component ==================================================================== */
class DemoView extends Component {
    static componentName = 'DemoView';

    constructor(props) {
        super(props);


        this.state = {

        };
    }


    render() {
        const data = [[
            [0, 1],
            [1, 3],
            [3, 7],
            [4, 9],
        ]];
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="line"
                    showDataPoint={true}
                />
            </View>
        );
    }
}

/* Export Component ==================================================================== */
export default DemoView;
