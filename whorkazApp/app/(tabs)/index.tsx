import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../App';  // Path to the App.js file
import appJson from '../../app.json'; // Import the entire JSON file

const appName = appJson.expo.name; // Access the name property under expo

AppRegistry.registerComponent(appName, () => App);

const Index = () => {
    return <App />;
};

export default Index;