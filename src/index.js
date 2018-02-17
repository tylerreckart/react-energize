import React from 'react';
import PropTypes from 'prop-types';

const Energize = (Component, initialState, lifeCycleMethods) => class extends React.Component {
  // We don't want our codebase littered with <Energize /> components
  // Use the static getter function to set the component's name to match that of the child
  static get name() {
    return Component.name;
  }

  constructor(props) {
    super(props);

    this.state = initialState;

    // lifeCycleMethods is not a required prop, therefore it only needs to be iterated
    // when it exists
    if (lifeCycleMethods) {
      // We're able to set lifecycle methods in the constructor, however we are unable to do
      // so for the constructor as a lifecycle method itself
      if (lifeCycleMethods.constructor) {
        const _constructor = lifeCycleMethods.constructor;

        // Call the constructor
        _constructor(props);

        // Remove the constructor function from the lifeCycleMethods object before it
        // is iterated over and functions are assigned
        delete lifeCycleMethods.constructor;
      }

      // Iterate through the properties of the lifeCycleMethods object and assign functions
      Object.keys(lifeCycleMethods).forEach(
        functionName => {
          this[functionName] = lifeCycleMethods[functionName];
        }
      );
    }
  }

  render() {
    return (
      <Component
        {...this.props}
        state={this.state}
        setState={this.setState.bind(this)}
        forceUpdate={this.forceUpdate.bind(this)}
      />
    );
  }
};

Energize.PropTypes = {
  Component: PropTypes.element.isRequired,
  initialState: PropTypes.any,
  lifeCycleMethods: PropTypes.shape({
    constructor: PropTypes.func,
    componentWillMount: PropTypes.func,
    componentDidMount: PropTypes.func,
    componentWillRecieveProps: PropTypes.func,
    shouldComponentUpdate: PropTypes.func,
    componentWillUpdate: PropTypes.func,
    componentDidUpdate: PropTypes.func,
    componentWillUnmount: PropTypes.func,
    componentDidCatch: PropTypes.func,
  }),
};

export default Energize;
