/**
 * Created by lanccj on 2017/1/23.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert,
    ScrollView,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height}=Dimensions.get('window')

/**
 *
 */
export default class StateListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataArr={
            "count": 4,
            "data": [
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/4374715",
                    "promotionIcon": "",
                    "name": "正佳广场",
                    "img": "http://p0.meituan.net/codeman/b4686ddc7270363868fcff917d3526cd37899.jpg",
                    "showtext": {
                        "text": "离我最近",
                        "count": 84,
                        "color": ""
                    },
                    "longitude": 113.327086,
                    "latitude": 23.131909,
                    "smid": 4374715,
                    "promotionText": "送福利 商品低至1.5折"
                },
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/50606658",
                    "promotionIcon": "",
                    "name": "白云万达广场",
                    "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg",
                    "showtext": {
                        "text": "55家优惠",
                        "count": 55,
                        "color": ""
                    },
                    "longitude": 113.26605,
                    "latitude": 23.17151,
                    "smid": 50606658,
                    "promotionText": "春来花开 满100最高减60"
                },
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/75813274",
                    "promotionIcon": "",
                    "name": "凯德广场●云尚",
                    "img": "http://p0.meituan.net/codeman/2ad0711b7ffa9433bdc2577e7896082937607.jpg",
                    "showtext": {
                        "text": "61家优惠",
                        "count": 61,
                        "color": ""
                    },
                    "longitude": 113.269668,
                    "latitude": 23.1818,
                    "smid": 75813274,
                    "promotionText": "新春送福利 购物满额有好礼"
                },
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/41692498",
                    "promotionIcon": "",
                    "name": "来又来广场1",
                    "img": "http://p0.meituan.net/codeman/d675f4ad9b7ece9f0593db298beb082d31800.jpg",
                    "showtext": {
                        "text": "48家优惠",
                        "count": 48,
                        "color": ""
                    },
                    "longitude": 113.232008,
                    "latitude": 23.397758,
                    "smid": 41692498,
                    "promotionText": "48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"
                },
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/41692498",
                    "promotionIcon": "",
                    "name": "来又来广场2",
                    "img": "http://p0.meituan.net/codeman/d675f4ad9b7ece9f0593db298beb082d31800.jpg",
                    "showtext": {
                        "text": "48家优惠",
                        "count": 48,
                        "color": ""
                    },
                    "longitude": 113.232008,
                    "latitude": 23.397758,
                    "smid": 41692498,
                    "promotionText": "48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"
                },
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/41692498",
                    "promotionIcon": "",
                    "name": "来又来广场3",
                    "img": "http://p0.meituan.net/codeman/d675f4ad9b7ece9f0593db298beb082d31800.jpg",
                    "showtext": {
                        "text": "48家优惠",
                        "count": 48,
                        "color": ""
                    },
                    "longitude": 113.232008,
                    "latitude": 23.397758,
                    "smid": 41692498,
                    "promotionText": "48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"
                },
                {
                    "detailurl": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smDetail/41692498",
                    "promotionIcon": "",
                    "name": "来又来广场4",
                    "img": "http://p0.meituan.net/codeman/d675f4ad9b7ece9f0593db298beb082d31800.jpg",
                    "showtext": {
                        "text": "48家优惠",
                        "count": 48,
                        "color": ""
                    },
                    "longitude": 113.232008,
                    "latitude": 23.397758,
                    "smid": 41692498,
                    "promotionText": "48家品牌优惠中：瑞可爷爷的店每满30减5，全单9折（买单立享）"
                }
            ],
            "tips": "全部7家",
            "jumpto": "imeituan://www.meituan.com/web/?url=http://i.meituan.com/shoppingmall/smList?sid=@geodist:asc"
        }
        this.state = {
            dataSource:ds.cloneWithRows(dataArr)
        }
    }
    renderRow(rowData){
        return (
            <TouchableOpacity onPress={()=>{Alert.alert('点击条目')}}>
                <View style={styles.cellStyle}>
                   <Image source={{uri:rowData.img}} style={styles.shopListViewImageStyle}/>

                   <View style={{padding:width*0.02,width:width-width*0.04*2-height*0.12,height:height*0.12,justifyContent:'space-between'}}>
                       <View style={{height:(height*0.15-height*0.03*2)/3,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                           <Text>{rowData.name}</Text>
                           <Text style={{color:'#5E6977'}}>2.1KM</Text>
                       </View>

                       <Text style={{height:(height*0.15-height*0.03*2)/3,width:width-width*0.04*2-height*0.12-width*0.02,color:'#5E6977'}} numberOfLines={1}>[价值343元]套餐是飒飒撒没得打客服谁说的算多少</Text>

                       <View style={{height:(height*0.15-height*0.03*2)/3,width:width-width*0.04*2-height*0.12-width*0.02,flexDirection:'row',justifyContent:'space-between'}}>
                           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                               <Text style={{color:'#5CD0C0'}}>¥178</Text>
                               <Text style={{color:'red',width:width*0.1,height:(height*0.15-height*0.03*2)/3,backgroundColor:'#FAE7D6',borderRadius:(height*0.15-height*0.03*2)/3/2}}>减12</Text>
                           </View>
                           <Text style={{backgroundColor:'#FF9604',color:'#FFFFFF',width:width*0.2,textAlign:'center',height:height*0.035,fontSize:width*0.05}}>¥153抢</Text>
                       </View>
                   </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scorllEnabled={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    shopListViewImageStyle:{
        height:height*0.12,
        width:height*0.12,
        resizeMode:'contain'
    },
    contentViewStyle:{
        width:width
    },
    cellStyle:{
        width:width,
        height:height*0.15,
        paddingLeft:width*0.04,
        paddingRight:width*0.04,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#DEDEDE',
        borderBottomWidth:0.5,
        backgroundColor:'#FFFFFF'
    }
});
