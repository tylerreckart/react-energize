# react-energize
Universal HOC for injecting state and using lifecycle methods in stateless components

![CircleCI](https://circleci.com/gh/tylerreckart/react-energize.svg?style=shield) ![npm version](https://badge.fury.io/js/react-energize.svg) ![License](https://camo.githubusercontent.com/b4ffb1cf6bd5c0dcc6ec71502aac345d6c0b6928/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7572716c2e737667)

![Energize!](https://media.giphy.com/media/QhcPmeqippizS/giphy.gif)

- [What is `react-energize`](#what-is-energize)
- [Why this exists](#why-this-exists)
- [Install](#install)
- [Getting Started](#getting-started)
- [API](#api)

## What is `react-energize`
`react-energize` is a [higher-order component](https://reactjs.org/docs/higher-order-components.html) that allows you to inject state or utilize lifecycle methods when working with stateless components.

## Why this Exists
When working with stateless components in React, you'll sometimes find yourself wanted to call a lifecycle method or inject a small piece of state into your component without having to completely rewrite the component.

## Install
```sh
yarn add react-energize
```

And then import it:
```js
import React from 'react';
import Energize from 'react-energize';

const StatelessComponent = ({ state }) => (
  <div>
    <p>Hello, {state.string}</p>
  </div>
);

const initialState = { string: 'world' };

export default Energize(StatelessComponent, initialState);
```

## Getting Started
As you can see in the example above, injecting state into a component with Energize is extremely easy. Utilizing React's lifecycle methods is just as easy.

```js
import React from 'react';
import Energize from 'react-energize';

const StatelessComponent = ({ state, setState }) => {
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

export default Energize(StatelessComponent, initialState, lifeCycleMethods);
```

## API

### Lifecycle Methods

| Method |
| ---------------- |
| [`constructor(props)`](https://reactjs.org/docs/react-component.html#constructor) |
| [`componentWillMount()`](https://reactjs.org/docs/react-component.html#componentwillmount) |
| [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount) |
| [`componentWillRecieveProps(nextProps)`](https://reactjs.org/docs/react-component.html#componentwillreceiveprops) |
| [`shouldComponentUpdate(nextProps, nextState)`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) |
| [`componentWillUpdate(nextProps, nextState)`](https://reactjs.org/docs/react-component.html#componentwillupdate) |
| [`componentDidUpdate(prevProps, prevState)`](https://reactjs.org/docs/react-component.html#componentdidupdate) |
| [`componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount) |
| [`componentDidCatch()`](https://reactjs.org/docs/react-component.html#componentdidcatch) |
| [`setState`](https://reactjs.org/docs/react-component.html#setstate) |
| [`forceUdate()`](https://reactjs.org/docs/react-component.html#forceupdate) |

## License
Released under the MIT License.

Copyright &copy; 2018 - present Tyler Reckart
