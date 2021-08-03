import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: '',
      food: '',
      cloths: '',
      accessories: '',
      home_decor: '',
      kitchen_tools: '',
      electronics: '',
      sports_kit: '',
      toys: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ marginTop: 10 }}>
          <Text style={styles.Liststyle}>Grocessories</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(groceries) => this.setState({ groceries })}
            placeholder={'Grocessories'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Food</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(food) => this.setState({ food })}
            placeholder={'Food'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Cloths</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(cloths) => this.setState({ cloths })}
            placeholder={'Cloths'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Accessories</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(accessories) => this.setState({ accessories })}
            placeholder={'accessories'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Home_decor</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(home_decor) => this.setState({ home_decor })}
            placeholder={'Home_decor'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Kitchen_tools</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(kitchen_tools) => this.setState({ kitchen_tools })}
            placeholder={'Kitchen_tools'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Electronics</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(electronics) => this.setState({ electronics })}
            placeholder={'Electronics'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Sports_kit</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(sports_kit) => this.setState({ sports_kit })}
            placeholder={'Sports_kit'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />

          <Text style={styles.Liststyle}>Toys</Text>
          <TextInput
            style={styles.inputFont}
            onChangeText={(toys) => this.setState({ toys })}
            placeholder={'Toys'}
            placeholderTextColor="blue"
            multiline={true}
            numberOfLines={8}
          />
        </View>
        <View style={styles.buttonC}>
          <TouchableOpacity
            style={styles.butonstyle}
            onPress={() =>
              this.props.navigation.navigate('CheckList', {
                groceries: this.state.groceries,
                food: this.state.food,
                cloths: this.state.cloths,
                accessories: this.state.accessories,
                Home_decor: this.state.home_decor,
                Kitchen_tools: this.state.kitchen_tools,
                electronics: this.state.electronics,
                sports_kit: this.state.sports_kit,
                toys:this.state.toys,
              })
            }>
            <Text style={styles.butonText}>Save</Text>
          </TouchableOpacity>
        </View>
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
  Liststyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputFont: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  butonstyle: {
    backgroundColor: '#000cff',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butonText: {
    color: '#bff776',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
