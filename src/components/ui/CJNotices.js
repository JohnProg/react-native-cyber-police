/**
 * LancCJ
 * 自定义组件 通知公告组件
 * 默认样式在可是窗口的顶部 宽高自适应设备
 *
    <CJNotices
      leftIconType={''} string 字符串
      leftIconName={''} string 字符串
      rightIconType={''} string 字符串
      rightIconName={''} string 字符串
      noticesData={listJson} json数组数据
    />
 *
 */
import React, { PropTypes} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import { Icon } from 'react-native-elements';

// 常量和样式库
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Spacer, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({

});

/* Component ==================================================================== */
const CJNotices = ({ leftIconType, leftIconName, rightIconType,rightIconName ,noticesData}) => (
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
);

CJNotices.propTypes = {
    leftIconType: PropTypes.string,
    leftIconName: PropTypes.string,
    rightIconType: PropTypes.string,
    rightIconName: PropTypes.string,
    noticesData: PropTypes.object
};

CJNotices.defaultProps = {
    leftIconType: '',
    leftIconName: '',
    rightIconType: '',
    rightIconName: '',
    noticesData:null
};

CJNotices.componentName = 'CJNotices';

/* Export Component ==================================================================== */
export default CJNotices;
