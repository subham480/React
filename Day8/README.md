## Topics covered

---------Class Based Components-----------

Class-based components in React are ES6 classes extending React.Component, using render() and lifecycle methods instead of hooks.

They're fully supported alongside hooks and work with React Router v6 via Higher-Order Components (HOCs).
​

Basic Syntax
Define render() and optional lifecycle methods like componentDidMount

import React, { Component } from 'react';

class UserProfile extends Component {
constructor(props) {
super(props);
this.state = { data: null };
}

componentDidMount() {
// Fetch data (use useEffect equivalent)
fetch(`/api/user/${this.props.userId}`)
.then(res => res.json())
.then(data => this.setState({ data }));
}

render() {
const { userId } = this.props; // From route params
return (

<div>
<h1>User {userId}</h1>
{this.state.data && <p>{this.state.data.name}</p>}
</div>
);
}
}

--why use super(props)?

super(props) in React class components initializes the parent React.Component constructor and binds incoming props to this.props immediately.
​Without it, this.props is undefined inside the constructor (though React sets it later for render()).
​
JavaScript Rule: Subclass constructors must call super() before using this. React components extend React.Component, so super() is mandatory.
​Props Access: Passing props makes them available via this.props right in the constructor

---state, setState

used for useState() hook in class component.
state is declared inside constructor. it stores the state variables

constructor(props) {
super(props);
this.state = { count: 0,
count:1 };
}

setState is used to update the state variable.

setState({
count: this.state.count+1
})
