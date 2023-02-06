import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 128, 255, 0.3)
    ),
    url("https://cdn.dribbble.com/users/2154712/screenshots/4656839/untitled-1.jpg");
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
flex;1;
min-width:40%;
margin: 10px 0;
padding: 10px;`;

const Link = styled.a`
  font-size: 20px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title> LOG IN</Title>
        <Form>
          <Input placeholder="Username" />

          <Input placeholder="Password" />

          <Button> LOG IN</Button>

          <Link> Forgot the Password ?</Link>
          <Link> Create an account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
