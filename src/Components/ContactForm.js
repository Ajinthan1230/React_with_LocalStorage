import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        fname: "",
        lName: "",
        mobile: "",
        email: "",
        address: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      formControls: {
        ...this.state.formControls,
        [event.target.name]: [event.target.value]
      }
    });
  }

  handleSubmit(event) {
    if((this.state.formControls.fName && this.state.formControls.lName && this.state.formControls.mobile && this.state.formControls.email && this.state.formControls.address ) !== ''){
        if(new RegExp(/[0]+[0-9]{9}$/g).test(this.state.formControls.mobile)){
             var inputObj = {id: this.state.formControls.email, FName: this.state.formControls.fName,LName: this.state.formControls.lName, mobile: this.state.formControls.mobile, address: this.state.formControls.address};
            if(localStorage.getItem("users") === null){
                let newObj = [];
                newObj.push(inputObj);
                localStorage.setItem("users",JSON.stringify(newObj));
            } else {
                let existingObj = JSON.parse(localStorage.getItem("users"));
                localStorage.removeItem("users");
                existingObj.push(inputObj);
                localStorage.setItem("users",JSON.stringify(existingObj));
            }
        }else{
            alert("Input correct phone number");
        }
    }else{
        alert("Fill All Details");
    }
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div>Input Data</div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-user-alt"></i>
                </div>
              </div>

              <input
                className="form-control"
                name="fName"
                placeholder="First Name"
                value={this.state.formControls.fName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <input
                className="form-control"
                name="lName"
                placeholder="Last Name"
                value={this.state.formControls.lName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-mobile-alt"></i>
                </div>
              </div>

              <input
                type="number"
                className="form-control"
                name="mobile"
                placeholder="Mobile"
                value={this.state.formControls.mobile}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.formControls.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="address"
              placeholder="Address"
              value={this.state.formControls.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Save"
              className="btn btn-primary btn-block"
            />
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
