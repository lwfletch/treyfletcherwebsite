import React, { Component } from 'react';

export default class Posts extends Component {
  state = {
    loading: true,
    users: null
  }
  
  async componentDidMount() {
    const url = 'https://3kldjvur5i.execute-api.us-east-1.amazonaws.com/v1/getcommunityusers'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ users: data, loading: false })
    console.log(data)
  }

  render(){
    return <div>
      {this.state.loading ? <div>loading...</div> : <div>{this.state.users.map((user) => 
        <div>ID: {user.id} Name: {user.first_name} {user.last_name} Email: {user.email}</div>
      )}</div>}
    </div>
  }
}