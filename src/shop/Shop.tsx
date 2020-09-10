import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Button,
  Modal,
  Row,
  Col,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { ShopType } from "../types/Types";

type AcceptedProps = {
  sessionToken: string;
  clearToken: () => void;
};

type ShopState = {
  shop: ShopType;
};

class Shop extends React.Component<AcceptedProps, ShopState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      shop: {
        title: "",
        image: "",
        price: 10000,
        description: "",
      },
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3002/shop/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk5NzIwNzE5LCJleHAiOjE1OTk4MDcxMTl9.0wqWGHc8jydZkPwHoGGWXgU83RRPfGPzSkNFTysARlc",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          shop: {
            title: json[0].title,
            image: json[0].image,
            price: json[0].price,
            description: json[0].description,
          },
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <div className="container page">
            <div className="">
              <h2></h2>
              <Row>
                <Col>
                  <Card>
                    <CardImg
                      top
                      width="286"
                      height="180"
                      src="{this.state.shop.title}"
                      alt="Your Post Needs An Image"
                    />
                    <CardBody>
                      <CardTitle>{this.state.shop.title}</CardTitle>
                      <CardSubtitle>{this.state.shop.price}</CardSubtitle>
                      <CardText>{this.state.shop.description}</CardText>
                      <Button>Buy</Button>
                      <Button>comment - Modal</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
