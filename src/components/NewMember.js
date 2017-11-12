import React, { Component } from 'react';
import { v4 } from 'uuid';
import FontAwesome from 'react-fontawesome';
import { addMember } from '../actions/MembersActions';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';

class NewMember extends Component {
  constructor(props) {
    super(props);
  }

  addMember(values) {
    debugger
    this.props.addMember({
      id: v4(),
      name: 'pepito',
    });
    
  }

  renderNewMember(values) {
    const { meta: { touched, error, pristine, active } } = values;
    const errMsg = touched && error ? error : "";
    const className = `col-md-4 ${errMsg ? 'has-error' : ''}`

    return (
      <div className="row form-group">
        <div className={className}>
          <label>{ values.label }</label>
          <input { ...values.input } className="form-control" type="text"/>
          <span className="text-danger">{ errMsg }</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.addMember)}>
        <div className="row">
          <div className="col-md-11">
            <Field
              component={this.renderNewMember}
              label="Categories"
              name="categories"/>
          </div>
          <div className="col-md-1">
            <button className="btn btn-success">
              <FontAwesome
                className='fa-check'
                name="check"
              />
            </button>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = (props,ownProps) => {
  return props;
}

const connectedComponent = connect(mapStateToProps, { addMember })(NewMember);

export default reduxForm({
  form: 'newPost'
})(connectedComponent);
