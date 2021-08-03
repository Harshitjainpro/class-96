import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
export default class CheckList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.listheader}>Groceries</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('groceries')}
        </Text>

        <Text style={styles.listheader}>Food</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('food')}
        </Text>

        <Text style={styles.listheader}>Cloths</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('cloths')}
        </Text>

        <Text style={styles.listheader}>Accessories</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('accessories')}
        </Text>

        <Text style={styles.listheader}>Home_decor</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('Home_decor')}
        </Text>

        <Text style={styles.listheader}>kitchen_tools</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('Kitchen_tools')}
        </Text>

        <Text style={styles.listheader}>electronics</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('electronics')}
        </Text>

        <Text style={styles.listheader}>sports_kit</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('sports_kit')}
        </Text>

        <Text style={styles.listheader}>toys</Text>
        <Text style={styles.listText}>
          {this.props.navigation.getParam('toys')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#bff776',
  },
  listText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  listheader: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
