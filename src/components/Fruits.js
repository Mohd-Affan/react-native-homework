import React, {Component, useState} from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';
import {DATA} from './Data';


Item = ({title, click}) => {
  const [visible, setvisible] = useState(false);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          setvisible(!visible);
          click();
        }}>
        {visible ? (
          <IconAntDesign name="checkcircle" size={15} color="green" />
        ) : (
          <IconAntDesign name="checkcircle" size={15} color="grey" />
        )}
      </TouchableOpacity>
    </View>
  );
};



class Fruits extends Component {
  constructor(props){
    super(props);
    this.state={btnVisible:false}
  }
  clickHandler=()=>{
    this.setState({btnVisible:!this.state.btnVisible})
  }
  render() {
    const {btnVisible}=this.state
    return (
      <View style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => {
            return <Item title={item} click={this.clickHandler} />;
          }}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
     {btnVisible?<TouchableOpacity style={styles.btn}>
          <Text style={{color:'white'}}>Continue</Text>
        </TouchableOpacity>:null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    position:'relative'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
  },
  header: {
    fontSize: 20,
    borderTopWidth: 0.5,
  },
  title: {
    fontSize: 16,
  },
  btn:{
    position:'absolute',
    width:'80%',
    height:40,
    backgroundColor:'#4f8080' ,
    justifyContent:'center',
    alignItems:'center',
    bottom:20,
    left:40
  },
});

export default Fruits;
