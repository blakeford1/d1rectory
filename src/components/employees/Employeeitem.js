import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EmployeeItem = ({ employee: { login, picture } }) => {
  return (
    <div className='card text-center'>
      <img
        src={picture}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3> {login}</h3>

      {/* <div>
        <Link to={`/empoloyee/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div> */}
    </div>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeItem;
