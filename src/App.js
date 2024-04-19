import './App.css';
import React from 'react';
import Counter from './features/counter/Counter';
import Field from './features/field/Field';
import WeatherApp from './features/api_weather/WeatherApp';
import CatApp from './features/api_cat/CatApp';
import RxComponent from './features/rxjs_example/RxComponent';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="App" style={appStyle}>
      <Counter />
      <Counter />
      <Field />
      <Field />
      <WeatherApp />
      <CatApp />
      <RxComponent />
      <RxComponent />
      <RxComponent />
    </div>
  );
}

export default App;
