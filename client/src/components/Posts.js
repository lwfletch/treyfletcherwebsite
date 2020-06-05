import React, { Component } from 'react';

export default class Posts extends Component {
  state = {
    loading: true,
    posts: null
  }
  
  async componentDidMount() {
    const url = 'https://3kldjvur5i.execute-api.us-east-1.amazonaws.com/v1/getcommunityposts'
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ posts: data, loading: false })
    console.log(data)
  }

  render(){
    return <div>
      {this.state.loading ? <div>loading...</div> : <div>{this.state.posts.map((post) => 
        <div><h4>{post.id}</h4>{post.post} <br></br><b>{post.author} Email: {post.email}</b></div>
      )}</div>}
    </div>
  }
}