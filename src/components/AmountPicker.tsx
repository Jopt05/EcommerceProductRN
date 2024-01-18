import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import globalStyles, { colors } from '../theme/appTheme'
import { CartItem } from '../data/Products';

type Action = 'add' | 'subsctract';

interface AmountPickerProps {
    quantity: number;
    onChange: ( quantity: number ) => void;
}

export const AmountPicker = ({ quantity, onChange }: AmountPickerProps ) => {

    const [amount, setAmount] = useState(quantity);

    const handleAction = (action: Action) => {
        if( action == 'add' ) {
            setAmount( amount + 1 )
            onChange( amount + 1 )
        } else {
            if( amount == 0 ) return;
            setAmount( amount - 1 )
            onChange( amount - 1 )
        }
    }

    useEffect(() => {
        setAmount(quantity)
    }, [quantity])
    

  return (
    <View style={[
        styles.itemAmountContainer,
        globalStyles.globalMarginHorizontal
    ]}>
        <TouchableOpacity 
            style={ styles.itemAmountButtonContainer }
            onPress={ () => handleAction( 'subsctract' ) }
        >
            <Text style={ styles.itemAmountButton }>
                -
            </Text>
        </TouchableOpacity>
        <Text style={ styles.itemAmountText }>
            { amount }
        </Text>
        <TouchableOpacity 
            style={ styles.itemAmountButtonContainer }
            onPress={ () => handleAction( 'add' ) }
        >
            <Text style={ styles.itemAmountButton }>
                +
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemAmountContainer: {
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: colors.grayishBlue,
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemAmountButtonContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemAmountButton: {
        fontSize: 30,
        color: colors.primary,
        fontWeight: 'bold'
    },
    itemAmountText: {
        fontSize: 24,
        color: colors.titles,
        fontWeight: 'bold'
    }
})