import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainApp from './src/navigation/index';
import { persistor, store } from './src/store/index';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={() => {

        }}>
        <MainApp />
      </PersistGate>
    </Provider>

  );
};

export default App;

