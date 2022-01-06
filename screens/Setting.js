import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Setting = () =>{

    const [data,setData] = React.useState([
        {
            id: 1,
            date:"06/01/2022",
            product: "1 Thủy hử, 2 Đắc nhân tâm",
            price: "300000",
            status: "Chờ xác nhận"
        },
        {
            id: 2,
            date:"02/01/2022",
            product: "1 Tây du ký, 2 Kim bình mai",
            price: "300000",
            status: "Chờ xác nhận"
        }
    ])


        const renderItem = ({item}) =>{
            return(
                <TouchableOpacity>
                <View style={{
                                marginVertical:10, 
                                marginHorizontal:10,
                                borderColor:'#dbdbdb',
                                borderWidth:2,
                                paddingHorizontal:10,
                                paddingVertical:10,
                                borderRadius:10
                                }}>
                    <View style={{flex:1, marginHorizontal:10}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Ngày đặt hàng: {item.date}</Text>
                        <Text style={{marginVertical:10, fontWeight:'bold'}}>Sản phẩm: {item.product}</Text>
                        <Text style={{fontWeight:'bold'}}>Tổng giá: {item.price}</Text>
                        <Text style={{fontWeight:'bold', marginTop:10}}>Trạng thái: {item.status}</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )
        }

    return (
    <View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                >
                </FlatList>
    </View>
    )
}

export default Setting