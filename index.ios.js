/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View, 
  Navigator
} from 'react-native';

import Main from "./App/Components/Main"
import Setup from "./App/Components/Setup"
import Questionnaire from "./App/Components/Questionnaire"

class DrDick extends Component {
  nextRoute(route) {
    this.props.navigator.push(route);
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'Main', title: 'Main'}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator){
    var routeId = route.id;
    
    if(routeId === 'Main'){
        return(
          <Main
            title={route.title}
            navigator={navigator}
            nextRoute={this.nextRoute}/>
        )
    }
    if(routeId === 'Setup'){
        return(
          <Setup
            title={route.title}
            navigator={navigator}
            nextRoute={this.nextRoute}/>
        )
    }
    if(routeId === 'Questionnaire'){
        return(
          <Questionnaire
            title={route.title}
            navigator={navigator}
            nextRoute={this.nextRoute}/>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DrDick', () => DrDick);
