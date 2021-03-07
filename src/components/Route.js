import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  const [headerText, setheader] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
      <TextInput
        placeholder="Enter Data"
        style={styles.textInput}
        onChangeText={(data) => setheader(data)}></TextInput>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Next Screen', {
            header: headerText,
          });
        }}>
        <Text style={styles.textbtn}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}

function NextScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text>Next Screen</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Go to Home Screen"
          onPress={() => {
            navigation.navigate('Home Screen');
          }}></Button>
        <View style={styles.btnContainer}>
          <Button
            title="Go to Tab Screen"
            onPress={() => {
              navigation.navigate('Tab Screen');
            }}></Button>
        </View>
      </View>
    </View>
  );
}

function settings() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.text}>Here are the settings</Text>
    </View>
  );
}

function profile() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.text}>This is your profile</Text>
    </View>
  );
}

function notifications() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.text}>Here are your notifications</Text>
    </View>
  );
}

function TabScreen(navigation) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{activeTintColor: 'green', labelStyle: {fontSize: 20}}}>
      <Tab.Screen name="settings" component={settings} />
      <Tab.Screen name="profile" component={profile} />
      <Tab.Screen name="notifications" component={notifications} />
    </Tab.Navigator>
  );
}

export const Route = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen
          options={({route}) => ({title: route.params.header})}
          name="Next Screen"
          component={NextScreen}
        />
        <Stack.Screen name="Tab Screen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    borderWidth: 2,
    width: 120,
    height: 30,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbtn: {
    color: 'green',
  },

  txt: {},
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '20%',
  },
  text: {
    fontSize: 50,
  },
});
