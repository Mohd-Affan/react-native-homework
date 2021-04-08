import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {addEmployee, getEmployee} from './Schema';
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      salary: '',
      designation: '',
    };
  }
  addData = () => {
    addEmployee(
      this.state.id,
      this.state.name,
      this.state.designation,
      this.state.salary,
    );
    this.props.navigation.reset({
      routes: [{name: 'EmployeeListing'}],
    });
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({id: text})}
            placeholder="Enter Id"
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({name: text})}
            placeholder="Enter Name"
          />
          <TextInput
            style={styles.textinput}
            placeholder="Enter Designation"
            onChangeText={(text) => this.setState({designation: text})}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({salary: text})}
            placeholder="Enter Salary"
          />
          <TouchableOpacity style={styles.but} onPress={this.addData}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default AddEmployee;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    margin: 30,
    fontSize: 20,
    height: 50,
    borderColor: 'orange',
  },
  but: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'orange',
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 20,
    padding: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
  },
  dataContainer: {
    margin: 10,
    backgroundColor: 'red',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    margin: 2,
  },
  btnText: {fontSize: 20, textAlign: 'center', fontWeight: '600'},
});
