import React, { useContext } from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import globalStyles, { colors } from '../theme/appTheme'
import { AppContext } from '../context/appContext'

export interface CartItemProps {
    amount: number;
    price: number;
    productName: string;
    productId: number;
    productImage: ImageSourcePropType;
}

export const CartItemComponent = ({ amount, price, productName, productImage, productId }: CartItemProps) => {

    const { removeItemFromCart } = useContext( AppContext );

  return (
    <View style={ styles.itemContainer }>
        <View style={ styles.imageContainer }>
            <Image 
                style={styles.image}
                source={productImage}
            />
        </View>
        <View style={ styles.descriptionContainer }>
            <Text style={[
                styles.text,
                globalStyles.globalRegularText
            ]}>
                { productName }
            </Text>
            <View style={ styles.textContainer }>
                <Text style={[
                    styles.text,
                    globalStyles.globalRegularText
                ]}>
                    ${ price } x { amount }
                </Text>
                <Text style={[
                    styles.text,
                    globalStyles.globalBoldText,
                    styles.totalText
                ]}>
                    ${ price * amount }
                </Text>
            </View>
        </View>
        <TouchableOpacity 
            style={ styles.iconContainer }
            onPress={ () => removeItemFromCart( productId ) }
        >
            <Icon 
                name="trash-outline" 
                size={20}
                color={'grey'}
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2
    },
    imageContainer: {
        width: 65,
        height: 65,
        borderRadius: 10,
        marginRight: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: 10
    },
    descriptionContainer: {
    },
    textContainer: {
        marginTop: 5,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        color: colors.descriptions
    },
    iconContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    totalText: {
        color: colors.titles,
        marginLeft: 10,
    }
})
