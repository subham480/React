import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <div className="user-info">
        <p>{this.props.name}</p>
        <p>{this.props.location}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default UserClass;
