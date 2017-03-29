import React, {Component} from 'react';
import * as actions from './AppActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomePage extends Component {
  onClickRadio = (e) => {
    console.log(e.target)
    console.log(document.getElementById("tst"));
    e.target.checked
    if (e.target.checked) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }

  render() {
    const {increment, decrement, count} = this.props;
    const style = {
      margin: 5
    };
    return (
      <div>
        <span className="blue muted">Muted</span>
        <img src="images/giphy.gif" />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    count: store.app
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
