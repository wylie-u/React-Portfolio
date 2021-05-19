import React, { Component } from "react";
import EmployeeList from "../EmployeeList";
import API from "./utils/API";

class EmployeeContainer extends Component {

    state = {

        search: "",
        users: [],
        filterUsers: []

    }

    // when page loads, the randomuser api is called
  componentDidMount() {
    API.search().then((results) => {
      // state is then updated to variable called users, which will be the results of the api call
      this.setState({ users: results.data.results });
    });
  }

 //   - filter based on search field 
// - when user starts to type, the filter should start and should populate results into an empty array and then display 
  filterEmployees = () => {
    let { employees, search } = this.state;
    let filterUsers = employees.filter((each) => {
      return (
        each.name.first.toLowerCase().includes(search.toLowerCase()) ||
        each.name.last.toLowerCase().includes(search.toLowerCase()) ||
        each.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ filterUsers });
  };

  // grab search term, activate sorted
  startfilter = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.filterEmployees();
    });
  };

  render () {

    return (
    <>
  <table style={{width:"100%"}}>
    <thead>
  <tr>
    <th>Picture</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Cell</th>
    <th>Email</th>
    <th>Timezone</th>
  </tr>
  </thead>
  <tbody>
        {
            this.state.filterEmployees.map((user) => (
                <EmployeeList
                key={user.cell} user={user}
                firstname={user.name.first}
                lastname={user.name.last}
                cell={user.cell}
                email={user.name.first}
                location={user.location.timezone.description}
                />

            ))
        }
  </tbody>


  </table>
  </>
  
    )
  }
    
   

}

export default EmployeeContainer;