import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  getEmployee,
  addEmployee,
  sortEmployee,
  searchEmployee,
  deleteEmployee,
} from './Schema';

class EmployeeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      id: '',
      name: '',
      salary: '',
      designation: '',
      reload: false,
    };
  }
  componentDidMount() {
    this.setUser();
  }
  setUser = () => {
    this.setState({
      user: getEmployee(),
    });
  };

  DataStyling({item}) {
    return (
      <View style={styles.dataContainer}>
        <Text style={styles.text}>{item.Emp_id}</Text>
        <Text style={styles.text}>{item.Emp_name}</Text>
        <Text style={styles.text}>{item.Emp_sal}</Text>
        <Text style={styles.text}>{item.Emp_desg}</Text>
      </View>
    );
  }
  addData = () => {
    addEmployee(
      this.state.id,
      this.state.name,
      this.state.designation,
      this.state.salary,
    );
    this.setState({
      isModalVisible: false,
    });
  };

  sortEmployees = (value) => {
    if (value === 'ascending') {
      this.setState({user: sortEmployee('ascending')});
    } else {
      this.setState({user: sortEmployee('descending')});
    }
  };

  delete = () => {
    deleteEmployee();
    this.setState({reload: true});
  };
  searchEmployees = (value) => {
    this.setState({user: searchEmployee(value)});
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.but1}
              onPress={() => this.props.navigation.navigate('AddEmployee')}>
              <Text>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.but1}
              onPress={() => this.sortEmployees('ascending')}>
              <Text>Sort Ascending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.but1}
              onPress={() => this.sortEmployees('descending')}>
              <Text>Sort Descending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but1} onPress={() => this.delete()}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Search"
              style={styles.searchContainer}
              onChangeText={(text) => this.searchEmployees(text)}
            />
          </View>

          {this.state.user.length < 1 ? (
            <View style={styles.empty}>
              <Text style={styles.emptyTxt}>Add an employee</Text>
            </View>
          ) : (
            <FlatList
              data={this.state.user}
              renderItem={this.DataStyling}
              keyExtractor={(item, index) => item + index}
            />
          )}
        </View>
      </>
    );
  }
}
export default EmployeeListing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  button: {
    marginRight: '60%',
    margin: 20,
  },
  but1: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
  },
  dataContainer: {
    margin: 10,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    margin: 2,
  },
  searchContainer: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 30,
    fontSize: 18,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontSize: 20,
    alignSelf: 'center',
  },
  submit: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'yellow',
    width: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
});
