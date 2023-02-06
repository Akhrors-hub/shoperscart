import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Ann from "../components/Ann";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 0px 20px;
`;
const Price = styled.h1`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  fonst-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;

  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Ammount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: purple;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Ann />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380" />
        </ImgContainer>
        <InfoContainer>
          <Title> Full Stack React tutorial</Title>
          <Desc>
            Gist: A service by GitHub that allows you to create, share, and
            discover code snippets. Pastebin: A popular site for sharing and
            storing code snippets, text, and more. CodePen: A social development
            environment for front-end developers. It allows you to write, test,
            and share HTML, CSS, and JavaScript snippets. JSFiddle: A
            lightweight playground for testing and sharing web development
            ideas. Repl.it: A browser-based development environment that
            supports multiple programming languages. Bitbucket Snippets: A
            service by Bitbucket that allows you to store and share code
            snippets, as well as keep track of changes to them.
          </Desc>
          <Price> $34 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmmountContainer>
              <FaPlus />
              <Ammount>1</Ammount>
              <FaMinus />
            </AmmountContainer>
            <Button> Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
