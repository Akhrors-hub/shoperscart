import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 128, 255, 0.3)
    ),
    url("https://wallpaperaccess.com/full/2484120.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
flex;1;
min-width:40%;
margin: 20px 10px 0 0;
padding: 10px;`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Firstname" />
          <Input placeholder="Lastname" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />

          <Agreement>
            By creating an account , I consent to the proccesing of my personal
            data in according with the <b> PRIVATE POLICY</b>
          </Agreement>
          <Button> CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
