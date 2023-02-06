import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Ann from "../components/Ann";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
`;
const ProductName = styled.h1``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const Details = styled.span`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underlined;
  cursor: pointer;
  margin: 0px 10px;
`;

const ProductAmmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Ammount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;
const SummaryTitle = styled.h1``;
const SummaryItem = styled.div``;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const Button = styled.button``;

const Cart = () => {
  return (
    <Container>
      <Ann />
      <Navbar />
      <Wrapper>
        <Title> Your bag</Title>
        <Top>
          <TopButton> CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled"> CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://th.bing.com/th/id/R.a85ff90f27c705e6312ab02acb923fd2?rik=vHFJhTjnsPZLjw&riu=http%3a%2f%2fwww.mobipicker.com%2fwp-content%2fuploads%2f2016%2f02%2fmacbook-pro.jpg&ehk=MAiqx93oK0AxYzEkAtC%2b1FINS04OAt6M6a0VNjnFDZ8%3d&risl=&pid=ImgRaw&r=0" />
                <Details>
                  <ProductName>
                    <b> Product: </b> MAC BOOK PRO
                  </ProductName>
                  <ProductId>
                    <b> ID: </b> 6456546754
                  </ProductId>
                  <ProductColor color="silver" />
                  <ProductSize>
                    <b>Size:</b> 15{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmount>
                  <FaPlus />
                  <Ammount>2</Ammount>
                  <FaMinus />
                </ProductAmmount>
                <ProductPrice> $30 </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://th.bing.com/th/id/R.a85ff90f27c705e6312ab02acb923fd2?rik=vHFJhTjnsPZLjw&riu=http%3a%2f%2fwww.mobipicker.com%2fwp-content%2fuploads%2f2016%2f02%2fmacbook-pro.jpg&ehk=MAiqx93oK0AxYzEkAtC%2b1FINS04OAt6M6a0VNjnFDZ8%3d&risl=&pid=ImgRaw&r=0" />
                <Details>
                  <ProductName>
                    <b> Product: </b> MAC BOOK PRO
                  </ProductName>
                  <ProductId>
                    <b> ID: </b> 6456546754
                  </ProductId>
                  <ProductColor color="silver" />
                  <ProductSize>
                    <b>Size:</b> 15{" "}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmount>
                  <FaPlus />
                  <Ammount>2</Ammount>
                  <FaMinus />
                </ProductAmmount>
                <ProductPrice> $30 </ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice> $80 </SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice> $ 5.90</SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice> $-5.90 </SummaryPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryText total="total">Total</SummaryText>
              <SummaryPrice> $80 </SummaryPrice>
            </SummaryItem>
            <Button> CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
