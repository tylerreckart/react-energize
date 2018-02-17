import React from 'react';
import Energize from 'react-energize';

const Counter = ({ state, setState }) => {
  return (
    <div>
      <button onClick={() => setState(state => ({ count: state.count - 1 }))}>-</button>
      {' '}{state.count}{' '}
      <button onClick={() => setState(state => ({ count: state.count + 1 }))}>+</button>
    </div>
  );
};

const componentWillMount = () => {
  window.alert('componentWillMount()');
};

const componentDidMount = () => {
  console.log('componentDidMount()');
};

const lifeCycleMethods = {
  componentWillMount,
  componentDidMount,
};

const initialState = { count: 0 };

Energize(Counter, initialState, lifeCycleMethods);