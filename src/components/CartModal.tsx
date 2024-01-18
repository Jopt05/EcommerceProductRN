import React, { useContext, useEffect, useState} from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import globalStyles, { colors } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native'
import { AppContext } from '../context/appContext'
import { CartItemComponent, CartItemProps } from './CartItem'

export const CartModal = () => {

    const { isModalOpen, toggleModal, cartState, removeItemFromCart } = useContext( AppContext );

    const [listOfCartItems, setListOfCartItems] = useState<CartItemProps[]>([]);

    useEffect(() => {
        console.log(cartState.listOfItems)
        const listOfCartItems: CartItemProps[] = [];
        for( const item of cartState.listOfItems ) {
            const isAlreadyMapped = listOfCartItems.find(( cartItem ) => cartItem.productId == item.id);
            if( isAlreadyMapped != undefined ) continue;
            const itemAmount = cartState.listOfItems.filter((i) => item.id = i.id).length;
            listOfCartItems.push({
                amount: itemAmount,
                price: item.discount
                    ? item.price - ( item.price * ( item.discount / 100 ) )
                    : item.price,
                productId: item.id,
                productName: item.productName,
                productImage: item.productImagesList[0]
            })
        }
        setListOfCartItems( listOfCartItems );
    }, [cartState])
    

    return (
        <Modal
            style={ styles.modal }
            animationType='fade'
            transparent={true}
            visible={isModalOpen}
        >
            <View style={ styles.modalContainer }>
                <View style={ styles.modalHeader }>
                    <Text style={[
                        styles.modalTitle,
                        globalStyles.globalBoldText
                    ]}>
                        Cart
                    </Text>
                    <TouchableOpacity
                        style={{ padding: 5, marginRight: 25 }}
                        onPress={ toggleModal }
                    >
                        <Text style={{ fontSize: 16 }}>
                            X
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.modalBody }>
                    {
                        listOfCartItems.length < 1 ? (
                            <View style={ styles.modalEmpty }>
                                <Text style={[
                                    styles.modalEmtpyText,
                                    globalStyles.globalBoldText
                                ]}>
                                    Your cart is empty
                                </Text>
                            </View>
                        )
                        : listOfCartItems.map( (cartItem, index) => (
                            <CartItemComponent
                                key={index}
                                amount={cartItem.amount}
                                price={cartItem.price}
                                productId={cartItem.productId}
                                productName={cartItem.productName}
                                productImage={cartItem.productImage}
                            />
                        ) )
                    }
                </View>

                
                <TouchableOpacity style={[
                    styles.cartButton,
                    globalStyles.globalMarginHorizontal
                ]}>
                    <Text style={[
                        styles.cartButtonText,
                        globalStyles.globalBoldText
                    ]}>
                        Checkout
                    </Text>
                </TouchableOpacity>
            </View>   
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    modalContainer: {
        backgroundColor: 'white',
        top: 62,
        marginHorizontal: 10,
        borderRadius: 15
    },
    modalHeader: {
        flexDirection: 'row',
        paddingVertical: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
        // backgroundColor: 'red'
    },
    modalTitle: {
        fontSize: 20,
        color: colors.titles,
        paddingHorizontal: 25
    },
    modalBody: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        minHeight: 120,
        position: 'relative'
    },
    modalEmpty: {
        flex: 1,
        justifyContent: 'center',
    },
    modalEmtpyText: {
        fontSize: 18,
        textAlign: 'center'
    },
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
        marginBottom: 20
    },
    cartButtonText: {
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    }
})