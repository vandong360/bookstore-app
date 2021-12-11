import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

const NewsCard = ({item }) => {
    console.log(item)
    return (
        <View style={styles.cardView}>
            <TouchableOpacity>
            <Text style={styles.title}> {item.name}</Text>
            <Text style={styles.author}>{item.author} </Text>
            
            {/* <Image style={styles.image} source = {{uri: item.urlToImage}}/> */}
            <Image style={styles.image} source={item.image ? {uri: item.image } : null}/>
            <View style={styles.discount}>
                <Text style={{
                    color:'white', 
                    fontWeight: 'bold', 
                    marginVertical:13,
                    textAlign: 'center',
                    fontSize:14
                    }}>{item.discount}%</Text>
            </View>
            <Text style={styles.price}>{item.price} đ</Text>
            <Text style={styles.oldPrice}>{item.oldPrice} đ</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        width: '48%',
        marginHorizontal:4,
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.03,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'

    },
    price: {
        marginVertical: width * 0.02,
        marginHorizontal: width * 0.02,
        color: '#ebb859',
        fontSize: 16
    },
    oldPrice: {
        marginVertical: width * 0.02,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    image: {
        height: 150,
        marginLeft: width * 0.04,
        marginRight: width * 0.04,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.03,
        fontSize: 12,
        color: 'gray'

    },
    discount:{
        width: 50,
        height: 50,
        backgroundColor: '#ebb859',
        borderRadius: 35,
        justifyContent: 'flex-start',
        position: 'absolute',
        
        marginTop: 70
    }

})



export default NewsCard