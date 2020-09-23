import React from 'react';
import ContactForm from './ContactForm';

class Contacts extends React.Component {

    List(){
        if(localStorage.getItem('users') !== null){
            var retrievedData = localStorage.getItem("users");
            var details = JSON.parse(retrievedData);
            return details;
            
            
        }else{
            alert("No data available");
        }
        
    }


  render() {
      let userData = this.List();
    return(
        <div style={{marginLeft:100 }}>
            <div>
                <center>
                    <h1> React Data Store </h1>
                </center>            
            </div>
            <div className="row">
                <div>
                    <ContactForm/>
                </div>
            </div>
            <p>List Of Contacts</p>
            <div className="row">
                        
                        
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Address</td>
                            <td>Mobile Number</td>
                            <td>E-mail</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user,key) => {
                            return(
                                <tr>
                                <td>{user.FName}</td>
                                <td>{user.LName}</td>
                                <td>{user.address}</td>
                                <td>{user.mobile}</td>
                                <td>{user.id}</td>
                                
                              
                                <td><i class="btn fas fa-pen"></i></td>

                                <td><i class="btn fas fa-trash" onClick={() => {
                                    let backup = JSON.parse(localStorage.getItem("users"));
                                    backup.splice(key, 1);
                                    localStorage.removeItem("users");
                                    localStorage.setItem("users",JSON.stringify(backup));
                                    alert("Delete Success")
                                }}></i></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default Contacts;