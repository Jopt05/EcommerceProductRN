import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { InternalMenu } from '../components/InternalMenu';
import { InternalMenuRight } from '../components/InternalMenuLeft';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <InternalMenu {...props}/>}
    >
      <Drawer.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'sneakers',
          headerTitleStyle: {
            fontSize: 26,
            fontFamily: 'KumbhSans-Bold',
            marginLeft: -22,
            bottom: 3
          },
          headerRight: (props) => <InternalMenuRight />
        }}
      />
    </Drawer.Navigator>
  );
}