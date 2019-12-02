import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ThirdScreen extends React.Component {

    constructor(props) {
        super(props);
      
    }

  render(){
    return (
        <View style={styles.container}>
          <Text>Navigation</Text>
          <Button 
          title = "Navigate"
          onPress = {() => {
          }}
          />
        </View>
      );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
