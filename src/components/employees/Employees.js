import React from 'react';
import EmployeeItem from './Employeeitem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Employees = ({ employees, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={employeeStyle}>
        {console.log(employees)}
        {employees.map((employee) => (
          <EmployeeItem key={[employee.login]} employee={[employee]} />
        ))}
      </div>
    );
  }
};

Employees.propTypes = {
  employees: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const employeeStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Employees;
