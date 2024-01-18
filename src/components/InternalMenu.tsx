import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import globalStyles, { colors } from "../theme/appTheme"

export const InternalMenu = (props: DrawerContentComponentProps) => {

    return (
      <DrawerContentScrollView>
        <TouchableOpacity style={ styles.menuButton }>
          <Text style={[
            styles.buttonText,
            styles.firstButton,
            globalStyles.globalBoldText
          ]}>
            Collections
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={ styles.menuButton }>
          <Text style={[
            styles.buttonText,
            globalStyles.globalBoldText
          ]}>
            Men
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={ styles.menuButton }>
          <Text style={[
            styles.buttonText,
            globalStyles.globalBoldText
          ]}>
            Women
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={ styles.menuButton }>
          <Text style={[
            styles.buttonText,
            globalStyles.globalBoldText
          ]}>
            About
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={ styles.menuButton }>
          <Text style={[
            styles.buttonText,
            globalStyles.globalBoldText
          ]}>
            Contact
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    )
}
  
const styles = StyleSheet.create({
firstButton: {
    marginTop: 30
},
menuButton: {
    marginHorizontal: 25,
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginBottom: 10,
},
buttonText: {
    color: colors.titles,
    fontSize: 24
}
})