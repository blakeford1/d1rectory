import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Employee extends Component {
  componentDidMount() {
    this.props.getEmployees(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    employee: PropTypes.object.isRequired,
  };

  render() {
    const {
      name,
      location,
      timezone,
      email,
      login,
      dob,
      picture,
      nat,
    } = this.props.employee;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={picture.thumbnail}
              className='round-img'
              style={{ width: '150px' }}
              alt=''
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {nat && (
              <Fragment>
                <h3>Country</h3>
                <p>{nat}</p>
              </Fragment>
            )}
            <p email={email} className='btn btn-dark my-1'>
              Email Employee
            </p>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {timezone && (
                  <Fragment>
                    <strong>Company: </strong> {timezone}
                  </Fragment>
                )}
              </li>
              <li>
                {dob && (
                  <Fragment>
                    <strong>Birthday: </strong> {dob}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Employee;
