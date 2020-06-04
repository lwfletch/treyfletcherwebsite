import React, { useState, useEffect } from 'react';
import profile from '../profile.jpg';
import Container from '@material-ui/core/Container'

function Home() {
	const [state, setState] = useState()
	useEffect(() => {
		fetch("https://3kldjvur5i.execute-api.us-east-1.amazonaws.com/v1/").then(
			res => setState(res.data)
		)
	})

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