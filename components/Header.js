import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
        Supper_Market_Check_List 
        </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
 headerText:{
   fontSize:20,
   fontWeight:"bold",
   padding:10,
 },
 headerView:{
  backgroundColor:"#000cff",
     alignItems:"center",
   justifyContent:"center",
 }
})