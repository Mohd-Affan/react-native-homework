// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import TestComponent from './TestComponet'

// export default class DogComponent extends Component {
//     constructor(props)
//     {
//         super(props)
//         console.log("Child Constructor");

//     }

//     static getDerivedStateFromProps(props,state)
//     {
//         console.log(`Child getDerivedStateFromProps called`)
//         console.log(props)
//         console.log(state)
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log(`Child shouldComponentUpdate called`)
//         console.log(nextProps)
//         console.log(nextState)
//         return true
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState)
//     {
//         console.log(`Child getSnapshotBeforeUpdate called`)
//         console.log(prevProps);
//         console.log(prevState);

//     }

//     componentDidMount()
//     {
//         console.log(`Child componentDidMount called`);
//     }
//     componentDidUpdate(prevProps, prevState, snapshot)
//     {
//         console.log(`Child componentDidUpdate`);
//         console.log(prevProps);
//         console.log(prevState);
//         console.log(snapshot);
//     }
//     componentWillUnmount(){
//         console.log(`Child componentWillUnmount called`);
//     }

//     render() {
//         console.log("child render method");
//         const {count} = this.props;
//         return (
//             <View>
//                 <Text>Button is clicked {count} times</Text>
//                 <TestComponent/>
//             </View>
//         );
//     }
// }
