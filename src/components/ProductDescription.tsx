import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import globalStyles, { colors } from '../theme/appTheme'
import { CartItem } from '../data/Products';

interface ProductDescriptionProps {
    product: CartItem;
}

export const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <View style={[
        globalStyles.globalMarginHorizontal,
        globalStyles.globalMarginTop
    ]}>
        <Text style={[
            styles.companyTitle,
            globalStyles.globalBoldText
        ]}>
            Sneaker Company
        </Text>
        <Text style={[
            styles.productTitle,
            globalStyles.globalBoldText
        ]}>
            { product.productName }
        </Text>
        <Text style={[
            styles.producDescription,
            globalStyles.globalRegularText
        ]}>
            { product.productDescription }
        </Text>

        {/* Price  */}
        <View style={ styles.priceContainer }>
            <Text style={[
                styles.priceText,
                globalStyles.globalBoldText
            ]}>
                {
                    product.discount
                        ? `$${ product.price - ( product.price * ( product.discount / 100 ) ) }`
                        : `$${ product.price }`
                }
            </Text>
            <View style={ styles.discountContainer }>
                {
                    product.discount && (
                        <Text style={[
                            styles.discountText,
                            globalStyles.globalBoldText
                        ]}>
                            { product.discount }%
                        </Text>
                    )
                }
            </View>
            {
                product.discount && (
                    <Text style={[
                        styles.originalPriceText,
                        globalStyles.globalBoldText
                    ]}>
                        ${ product.price }
                    </Text>
                )
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    companyTitle: {
        fontSize: 16,
        color: colors.primary,
        textTransform: 'uppercase',
        letterSpacing: 1.5
    },
    productTitle: {
        fontSize: 34,
        color: colors.titles,
        textTransform: 'capitalize',
        marginTop: 15
    },
    producDescription: {
        fontSize: 19,
        color: colors.descriptions,
        marginTop: 13,
        lineHeight: 28
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    priceText: {
        fontSize: 34,
        color: colors.titles,
        marginRight: 15,
        alignSelf: 'flex-end'
    },
    discountContainer: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        backgroundColor: colors.paleOrange,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    discountText: {
        fontSize: 19,
        color: colors.primary,
    },
    originalPriceText: {
        color: 'grey',
        fontSize: 20,
        textDecorationLine: 'line-through',
        alignSelf: 'center',
        marginLeft: 'auto'
    }
})