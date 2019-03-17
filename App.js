/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, View } from "react-native";
import { WebView } from "react-native-webview";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          injectedJavaScriptBeforeLoad="window.foo = 'bar';"
          injectedJavaScript="alert(window.foo);"
          source={{ uri: "https://github.com" }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
