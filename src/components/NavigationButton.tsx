import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import globalStyles from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { CartItem } from '../data/Products';

interface NavigationButtonProps {
    direction: 'back' | 'forward';
    setImageNumber: (number: number) => void;
    imageNumber: number;
    product: CartItem
}

export const NavigationButton = ({ direction, imageNumber, setImageNumber, product }: NavigationButtonProps ) => {

    const handlePress = () => {
        if( direction == 'back' && imageNumber == 0 ) return;
        if( direction == 'forward' && imageNumber == product.productImagesList.length - 1 ) return;

        if( direction == 'forward' ) {
            setImageNumber( imageNumber + 1 )
        } else {
            setImageNumber( imageNumber - 1 )
        }
    }

  return (
    <TouchableOpacity style={[
        styles.buttonContainer,
        globalStyles.globalMarginHorizontal
    ]}
    onPress={ handlePress }
    >
        <Icon 
            name={`chevron-${direction}-outline`}
            size={25}
            color='black'
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})