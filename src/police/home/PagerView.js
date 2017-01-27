/**
 * 轮播图片
 * Created by lanccj on 2017/1/27.
 */

import React, { Component, PropTypes } from 'react';
import {
    View,
    Image,
    StyleSheet,Alert,
    TouchableOpacity

} from 'react-native';

import ViewPager from 'react-native-viewpager';

// 常量和样式库
import { AppStyles, AppSizes } from '@theme/';

// 组件库
import { Text,Spacer} from '@ui/';

var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

/* 本页自定义样式 ==================================================================== */
const styles = StyleSheet.create({
    page: {
        width: AppSizes.screen.width,
        height:AppSizes.screen.height*0.2
    }
});

/* 本页组件 ==================================================================== */
export default class PagerView extends Component {
    constructor(props) {
        super(props);

        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS)
        };
    }

    _renderPage=(data: Object, pageID: number | string)=>{
        return (
            <TouchableOpacity onPress={()=>{Alert.alert('点击轮播图')}}>
                <View style={styles.page}>
                    <Image
                        source={{uri: data}}
                        style={styles.page} >
                        <Text style={{alignSelf:'flex-start',color:'#FFF',marginLeft:AppSizes.screen.width*0.04,marginTop:AppSizes.screen.width*0.02,backgroundColor:'transparent'}}>{pageID}.标题</Text>
                    </Image>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return (
            <View style={AppStyles.homeTopPager}>
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}
                />

            </View>
        )
    }

}


