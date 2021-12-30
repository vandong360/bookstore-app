import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import images from '../constants/images';

const Rating = ({rating}) => {

    return(
        <View style={{flexDirection:'row'}}>
            <Image
            source={images.star}
            style={{
                tintColor: rating >= 1 ? '#ebb859' : '#dbdbdb',
                ...styles.rateIcon 
            }}
            >
            </Image>

            <Image
            source={images.star}
            style={{
                tintColor:rating >= 2 ? '#ebb859' : '#dbdbdb',
                ...styles.rateIcon
            }}
            >
            </Image>

            <Image
            source={images.star}
            style={{
                tintColor:rating >= 3 ? '#ebb859' : '#dbdbdb',
                ...styles.rateIcon
            }}
            >
            </Image>

            <Image
            source={images.star}
            style={{
                tintColor:rating >= 4 ? '#ebb859' : '#dbdbdb',
                ...styles.rateIcon
            }}
            >
            </Image>

            <Image
            source={images.star}
            style={{
                tintColor:rating >= 5 ? '#ebb859' : '#dbdbdb',
                ...styles.rateIcon
            }}
            >
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({
    rateIcon:{
        width:15,
        height:15,
        marginTop:10
    }
})

export default Rating;