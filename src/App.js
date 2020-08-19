import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Search from './components/employees/Search';
import Employees from './components/employees/Employees';
import Employee from './components/employees/Employee';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    employees: [],
    employee: {},
    loading: false,
    alert: null,
  };

  getEmployees = async (text) => {
    this.setState({ loading: true });

    // Gets all users

    const res = await axios.get('https://randomuser.me/api/?results=20&nat=us');

    this.setState({ employees: res.data.results, loading: false });
  };

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { employees, employee, loading, alert } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      getEmployees={this.getEmployees}
                      // clearUsers={this.clearUsers}
                      // showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Employees loading={loading} employees={employees} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              {/* <Route
                exact
                path='/employee/:login'
                render={(props) => (
                  <Employee
                    {...props}
                    getEmployee={this.getEmployees}
                    employee={employee}
                    loading={loading}
                  />
                )}
              /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
