import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import globalStyles, { colors } from '../theme/appTheme'

interface AddToCartButtonProps {
    onPress: () => void;
}

export const AddToCartButton = ({ onPress }: AddToCartButtonProps) => {
  return (
    <TouchableOpacity 
        style={[
            styles.cartButton,
            globalStyles.globalMarginHorizontal
        ]}
        onPress={ onPress }
    >    
        <Icon 
            name='cart-outline'
            color={'white'}
            size={30}
        />
        <Text style={[
            styles.cartButtonText,
            globalStyles.globalBoldText
        ]}>
            Add to cart
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cartButton: {
        paddingHorizontal: 20,
        paddingVertical: 22,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 200
    },
    cartButtonText: {
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    }
})