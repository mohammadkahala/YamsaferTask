import React from 'react';
import { logInFromLocalStorage } from '../redux/actions';
import { connect } from 'react-redux';
import status from '../../constants';

class App extends React.Component{
  componentDidMount() {
    this.props.logInFromLocalStorage();
  }

  render() {
    if (this.props.registrationStatus === status.PENDING)
      return <div>Loading</div>;

    return (
      this.props.children
    )
  }
}

const mapStateToProps = (state) => {
  return { registrationStatus: state.loggedIn };
};

export default connect(mapStateToProps, { logInFromLocalStorage })(App);