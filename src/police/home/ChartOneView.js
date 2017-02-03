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
import { AppColors, AppStyles ,AppSizes} from '@theme/';

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

import Echarts from 'native-echarts';
/* Styles ==================================================================== */
const styles = StyleSheet.create({

});

/* Component ==================================================================== */
class ChartOneView extends Component {
    static componentName = 'ChartOneView';

    constructor(props) {
        super(props);


        this.state = {

        };
    }


    render() {
        const option = {
            title: {
                text: '今日工作量统计'
            },
            tooltip: {},
            legend: {
                data:['事件(起)']
            },
            xAxis: {
                data: ["人员查询","车辆查询","重点人员","线索线报","流动人口","网吧采集"]
            },
            yAxis: {},
            series: [{
                name: '事件(起)',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        return (
            <Echarts option={option} height={AppSizes.screen.height*0.4} />
        );
    }
}

/* Export Component ==================================================================== */
export default ChartOneView;
