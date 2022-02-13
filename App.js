import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home';
import RecommendedMoviesScreen from './screens/Recommendation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import PopularMoviesScreen from './screens/Popular';


export default function App() {
  return 
    <AppContainer/>
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedMovies:{
    screen:RecommendedMoviesScreen, 
    navigationOptions:{
      tabBarLabel:"Recommended",
      tabBarOptions:{
        tabStyle:{backgroundColor:"#fff"}, 
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:"#000"}
      }
    }
  },

  PopularMovies:{
    screen:PopularMoviesScreen, 
    navigationOptions:{
      tabBarLabel:"Popular",
      tabBarOptions:{
        tabStyle:{backgroundColor:"#fff"}, 
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:"#000"}
      }
    }
  }
});


const AppStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{headerShown:false}
  },
  AppTopNav:{
    screen:AppTopNavigation,
    navigationOptions:{headerBackTitle:null,
      headerTintColor:"#fff",
      headerTitle:"RecommendedMovies",
      headerStyle:{backgroundColor:"#D500F9"}
    },
    headerTitleStyle:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:RFValue(18)
    }
  }
  },
  {
    initialRouteName:"Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator)
