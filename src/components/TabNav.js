import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Myntra from './Myntra';
import Account from './Account';

const Tab = createBottomTabNavigator();

function Categories() {
  return (
    <View style={styles.tabBar}>
      <Text>Categories</Text>
    </View>
  );
}
function MyCart() {
  return (
    <View style={styles.tabBar}>
      <Text>My Cart</Text>
    </View>
  );
}
function WishList() {
  return (
    <View style={styles.tabBar}>
      <Text>Wishlist</Text>
    </View>
  );
}

export default class TabNav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Categories') {
                iconName = 'bars';
              } else if (route.name === 'MyCart') {
                iconName = 'shoppingcart';
              } else if (route.name === 'WishList') {
                iconName = 'hearto';
              } else if (route.name === 'Account') {
                iconName = 'user';
              }
              return (
                <IconAntDesign name={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Myntra} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="MyCart" component={MyCart} />
          <Tab.Screen name="WishList" component={WishList} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
