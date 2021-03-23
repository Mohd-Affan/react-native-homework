import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    icon: 'location-outline',
    commonIcon: 'ios-chevron-forward',
    title: 'Track Order',
    language: '',
    flag: '',
  },
  {
    id: '2',
    icon: 'resize',
    commonIcon: 'ios-chevron-forward',
    title: 'Size Chart',
    language: '',
    flag: '',
  },
  {
    id: '3',
    icon: 'notifications',
    commonIcon: 'ios-chevron-forward',
    title: 'Notifications',
    language: '',
    flag: '',
  },
  {
    id: '4',
    icon: 'locate-outline',
    commonIcon: 'ios-chevron-forward',
    title: 'Store Locator',
    language: '',
    flag: '',
  },
  {
    id: '5',
  },
  {
    id: '6',
    icon: 'md-globe',
    commonIcon: 'ios-chevron-forward',
    title: 'Country',
    language: 'USD',
    flag: require('../assets/America.jpeg'),
  },
  {
    id: '7',
    icon: 'md-language',
    commonIcon: 'ios-chevron-forward',
    title: 'Language',
    language: 'ENG',
    flag: '',
  },
  {
    id: '8',
    icon: 'person',
    commonIcon: 'ios-chevron-forward',
    title: 'About Us',
    language: '',
    flag: '',
  },
  {
    id: '9',
    icon: 'help',
    commonIcon: 'ios-chevron-forward',
    title: 'FAQ',
    language: '',
    flag: '',
  },
  {
    id: '10',
    icon: 'car',
    commonIcon: 'ios-chevron-forward',
    title: 'Shipping & Returns',
    language: '',
    flag: '',
  },
  {
    id: '11',
    icon: 'chatbox',
    commonIcon: 'ios-chevron-forward',
    title: 'Chat With Us',
    language: '',
    flag: '',
  },
  {
    id: '12',
    icon: 'star-outline',
    commonIcon: 'ios-chevron-forward',
    title: 'Rate Application',
    language: '',
    flag: '',
  },
  {
    id: '13',
    icon: 'md-share-social-outline',
    commonIcon: 'ios-chevron-forward',
    title: 'Share Application',
    language: '',
    flag: '',
  },
  {
    id: '14',
    icon: 'location-outline',
    commonIcon: 'ios-chevron-forward',
    title: 'Privacy Policy',
    language: '',
    flag: '',
  },
  {
    id: '15',
    icon: 'location-outline',
    commonIcon: 'ios-chevron-forward',
    title: 'Terms & Conditions',
    language: '',
    flag: '',
  },
  {
    id: '16',
    icon: 'mail-open',
    commonIcon: 'ios-chevron-forward',
    title: 'Send Us An Email',
    language: '',
    flag: '',
  },
];

const Item = ({id, icon, commonIcon, title, language, flag}) => {
  Click = (msg) => {
    Alert.alert('Alert', msg);
  };
  if (id == '5') {
    return <View style={styles.blank} />;
  } else {
    return (
      <View style={styles.Container}>
        <View style={styles.content}>
          <Ionicons name={icon} size={28} />
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
        <View style={styles.secondContainer}>
          {flag ? <Image style={styles.flag} source={flag} /> : null}
          {language ? <Text>{language}</Text> : null}
          <TouchableOpacity
            onPress={() => {
              this.Click('Clicked');
            }}>
            <Ionicons name={commonIcon} size={28} style={styles.commonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
const Data = () => {
  renderItem = ({item}) => <Item {...item} />;

  return (
    <FlatList
      data={DATA}
      renderItem={this.renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  Container: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blank: {
    borderColor: 'grey',
    borderWidth: 8,
  },
  flag: {width: 40, height: 40},
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginVertical: 10,
    flexDirection: 'row',
  },
});

export default Data;
