import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList.js';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.viewStyle}>
        <Header headerText='Tech Stack App' />
        <LibraryList />
      </View>
    </Provider>
  );
};

const styles = {
  viewStyle: {
    flex: 1
  }
}

export default App;
