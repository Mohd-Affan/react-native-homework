import React, {Component} from 'react';
import {Text, StyleSheet, Image, Button, TouchableOpacity, Modal, View, SafeAreaView, TouchableOpacityBase} from 'react-native';

export default class ModalEx extends Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Button style={styles.btn} title='Show Modal' onPress={()=>{this.setState({show:true})}}/>
          <Modal animationType='slide' transparent={true} visible={this.state.show} >
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  margin: 50,
                  padding: 40,
                  borderRadius: 20,
                  marginTop: 400,
                  marginHorizontal: 100,
                }}>
                <Text style={{fontSize: 40, marginHorizontal:20}}>Hello</Text>
                <Image
               style={{marginLeft:30}}
                source={require('../assets/Ghost.gif')}/>
                <Button title='Hide Modal' onPress={()=>{this.setState({show:false})}}/>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

btn:{
  
},

});




