import React, { Component } from 'react';
import NewMember from '../components/NewMember';
import faStyles from 'font-awesome/css/font-awesome.css';
import { connect } from 'react-redux';
import _ from 'lodash';

class Sorteo extends Component {
  constructor(props) {
    super(props);
    console.log(props.addMember);
  }

  printMember() {
    if(this.props.members) {
      return (
        <ul>
          { _.map(this.props.members,(m) => <li key={m.id}>{m.name}</li>) }
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            { this.printMember() }
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NewMember />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ members }) => ({
  members
});

export default connect(mapStateToProps)(Sorteo);