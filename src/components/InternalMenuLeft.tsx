import React, { useContext, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AppContext } from '../context/appContext'

const imageUri = "../assets/images/image-avatar.png"

export const InternalMenuRight = () => {

    const { toggleModal } = useContext( AppContext );

  return (
    <View style={ styles.mainContainer }>
        <TouchableOpacity
            onPress={ toggleModal }
        >
            <Icon 
                name='cart-outline'
                size={26}
                color={'grey'}
            />
        </TouchableOpacity>
        <View style={ styles.imageContainer }>
            <Image 
                style={ styles.image }
                source={require(imageUri)}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    imageContainer: {
        width: 26,
        height: 26,
        borderRadius: 100,
        marginLeft: 20,
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
