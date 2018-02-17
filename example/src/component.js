import React from 'react';
import Energize from '../../src';

const StatelessComponent = ({ state, setState }) => {
  return (
    <div>
      <button onClick={() => setState(state => ({ count: state.count - 1 }))}>-</button>
      {state.count}
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

export default Energize(StatelessComponent, initialState, lifeCycleMethods);
