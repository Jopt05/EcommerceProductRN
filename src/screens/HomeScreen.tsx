import React, { useContext, useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { NavigationButton } from '../components/NavigationButton';
import { ProductDescription } from '../components/ProductDescription';
import { AmountPicker } from '../components/AmountPicker';
import { AddToCartButton } from '../components/AddToCartButton';
import { CartModal } from '../components/CartModal';
import { CartItem, onSaleProducts } from '../data/Products';
import { AppContext } from '../context/appContext';

export const HomeScreen = () => {

    const { addItemToCart } = useContext( AppContext );

    const [imageNumber, setImageNumber] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState<CartItem>(onSaleProducts[0]);
    const [amount, setAmount] = useState(0);

    const handlePress = () => {
        if( amount == 0 ) return;
        const listOfItems: CartItem[] = [];
        for(let i=0; i<amount; i++){
            listOfItems.push(selectedProduct);
        }
        addItemToCart( listOfItems );
        setAmount(0);
    };

    return (
        <ScrollView style={ styles.mainContainer }>

            <CartModal />

            {/* Image carrousel */}
            <View style={ styles.imageCarrousel }>
                <Image
                    style={ styles.image }
                    source={ selectedProduct.productImagesList[imageNumber] }
                />
                <View style={ styles.buttonsContainer }>
                    <NavigationButton 
                        direction='back'
                        imageNumber={ imageNumber }
                        setImageNumber={ setImageNumber }
                        product={ selectedProduct }
                    />
                    <NavigationButton 
                        direction='forward'
                        imageNumber={ imageNumber }
                        setImageNumber={ setImageNumber }
                        product={ selectedProduct }
                    />
                </View>
            </View>

            <ProductDescription product={selectedProduct}/>

            <AmountPicker quantity={ amount } onChange={ ( quantity ) => setAmount( quantity ) } />

            <AddToCartButton onPress={ handlePress }/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    imageCarrousel: {
        height: 350,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})
