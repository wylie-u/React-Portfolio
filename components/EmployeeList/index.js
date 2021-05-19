import React from "react";

// the outline for the data elements that will be displayed on the page (image, name, phone, email, dob)
const EmployeeList = (props) => {
  return (
    
    
      <tr>
        <td>
      <img alt="user" src={props.user.picture.thumbnail}></img>
      </td>
      <td>{props.user.name.first}</td>
      <td>{props.user.name.last}</td>
      <td>{props.user.cell}</td>
      <td>{props.user.email}</td>
      <td>{props.user.location.timezone.description} </td>
      </tr>
    
  );
};
// we'll export this file and call it in employeecontainer, which will be used to map out each index into their own array to display on the page
export default EmployeeList;