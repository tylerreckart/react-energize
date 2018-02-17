import React from 'react';
import Energize from '../../src/index.js';

const StatelessComponent = props => {
  return (
    <div>
      <p>Hello, {props.state.string}</p>
    </div>
  );
};

const componentDidMount = () => {
  console.log('mounted');
};

const lifeCycleMethods = {
  componentDidMount,
};

const initialState = {
  string: 'world',
};

export default Energize(StatelessComponent, initialState, lifeCycleMethods);
