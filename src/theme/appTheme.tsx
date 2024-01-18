import { StyleSheet } from "react-native";

export const colors = {
    primary: 'hsl(26, 100%, 55%)',
    secondary: 'hsl(25, 100%, 94%)',
    titles: 'hsl(220, 13%, 13%)',
    descriptions: 'hsl(219, 9%, 45%)',
    paleOrange: 'hsl(25, 100%, 94%)',
    grayishBlue: 'hsl(223, 64%, 98%)'
}

const globalStyles = StyleSheet.create({
    globalMarginHorizontal: {
        marginHorizontal: 32,
    },
    globalMarginTop: {
        marginTop: 20
    },
    globalRegularText: {
        fontFamily: 'KumbhSans-Regular'
    },
    globalBoldText: {
        fontFamily: 'KumbhSans-Bold',
    }
});

export default globalStyles;