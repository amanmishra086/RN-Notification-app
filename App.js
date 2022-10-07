/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import PushNotification from 'react-native-push-notification';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const createChannel=()=>{
  PushNotification.createChannel(
    {
      channelId: "channel-test", // (required)
      channelName: "test channel", // (required)
  })

}

const App= () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressHeader=()=>{
   // Alert.alert('warning!')
   PushNotification.localNotification({
    channelId:'channel-test',
    title:'warning',
    message:'warning sdwqdqwdqwd ',
  })

  // PushNotification.scheduleLocalNotification({
  //   channelId:'channel-test',
  //   title:'warning',
  //   message:'warningwarningwarningwarning warningwarning  warningwarningwarning  warningwarning',
  //   date: new Date(Date.now() + 5 * 1000),
  //   allowWhileIdle:true,
  // })

  }

  useEffect(()=>{
    createChannel();
  },[])

  return (

    <SafeAreaView >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <View style={styles.searchSection}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
     
      <TextInput
          style={styles.input}
          placeholder="User Nickname"
          onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="transparent"
      />
       <Text style={styles.searchIcon}>H</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchSection: {

    marginTop:50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',

    borderColor:'red',
    borderWidth:1,
},
searchIcon: {
    padding: 10,
    fontSize:10,
    fontWeight:'800',

},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
});

export default App;
