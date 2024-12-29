import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://whorkaz.com' }} // Replace with your desired URL
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f0f0f0',
    },
    webview: {
        flex: 1,
    },
});
