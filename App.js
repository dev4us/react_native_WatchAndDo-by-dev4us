import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';

import ToDo from "./ToDo";

const { width, height } = Dimensions.get("window"); 

export default class App extends React.Component {
  state = {
    newToDo: ""
  }
  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Watch And Do !</Text>
        <View style={styles.card}>
          <TextInput 
            underlineColorAndroid={'transparent'} 
            style={styles.input} 
            placeholder={"New To Do"} 
            value={newToDo} 
            onChange={this._controlNewToDo} 
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.Todos}>
            <ToDo />
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center'
  },
  title:{
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset:{
          width:0,
          height:-1
        }
      },
      android:{
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    fontSize: 25
  },
  Todos:{
    alignItems: "center"
  }  
});
