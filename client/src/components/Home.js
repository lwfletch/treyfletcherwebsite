import React from 'react';
import profile from '../profile.jpg';
import Container from '@material-ui/core/Container'

function Home() {
  return (
    <Container maxWidth="sm">
        <header className="Home-header">
        <img src={profile} className="profile" alt="pic of Trey" />
        <h4>
          Welcome to treyfletcher.com
        </h4>
        <p>This React app is being host on AWS in S3</p>
      </header>
    </Container>
  );
}

export default Home;