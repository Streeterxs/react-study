import React, { Component, Fragment } from 'react';

import classes from './Person.css'
import withClasses from '../../../hoc/withClasses'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext

  componentDidMount(){
    this.inputElementRef.current.focus()
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
            {this.context.authenticated? <p>Authenticated!</p>: <p>Please, log in.</p>}     
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            ref={this.inputElementRef}
            onChange={this.props.changed}
            value={this.props.name}
          />
      </Fragment>
    );
  }
}

export default withClasses(Person, classes.Person);
