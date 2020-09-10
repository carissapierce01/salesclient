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
import coffinshelf from "../assets/coffinshelf.jpg";
import wreath from "../assets/skullwreath.jpg";
import halloweeen from "../assets/halloweeen.jpg";
import oliver from "../assets/namesign.jpg";
import mirror from "../assets/vanitymirror.jpg";


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
    fetch(`http://localhost:3001/shop/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk5NzIwNzE5LCJleHAiOjE1OTk4MDcxMTl9.0wqWGHc8jydZkPwHoGGWXgU83RRPfGPzSkNFTysARlc",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          shop: {
            title: res[0].title,
            image: res[0].image,
            price: res[0].price,
            description: res[0].description,
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
                <Col sm="5.5">
                  <Card>
                    <CardImg
                      top
                      width="386"
                      height="280"
                      src={halloweeen}
                      alt="Your Post Needs An Image"
                    />
                    <CardBody>
                      <CardTitle><h2>{this.state.shop.title}</h2></CardTitle>
                      <CardSubtitle><h4>{this.state.shop.price}</h4></CardSubtitle>
                      <CardText><h4>{this.state.shop.description}</h4></CardText>
                      <Button className="btn btn-lg btn-primary">Buy</Button>
                      <Button className="btn btn-lg btn-primary">comment - Modal</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg
                      top
                      width="346"
                      height="480"
                      src={wreath}
                      alt="Your Post Needs An Image"
                    />
                    <CardBody>
                      <CardTitle><h2>Wreath</h2></CardTitle>
                      <CardSubtitle><h4>$100</h4></CardSubtitle>
                      <CardText><h4>Handmade</h4></CardText>
                      <Button className="btn btn-lg btn-primary">Buy</Button>
                      <Button className="btn btn-lg btn-primary">comment - Modal</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg
                      top
                      width="336"
                      height="520"
                      src={coffinshelf}
                      alt="Your Post Needs An Image"
                    />
                    <CardBody>
                      <CardTitle><h2>Coffin Shelf</h2></CardTitle>
                      <CardSubtitle><h4>$200</h4></CardSubtitle>
                      <CardText><h4>Made to order</h4></CardText>
                      <Button className="btn btn-lg btn-primary">Buy</Button>
                      <Button className="btn btn-lg btn-primary">comment - Modal</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg
                      top
                      width="386"
                      height="280"
                      src={oliver}
                      alt="Your Post Needs An Image"
                    />
                    <CardBody>
                      <CardTitle><h2>Name Sign</h2></CardTitle>
                      <CardSubtitle><h4>$50</h4></CardSubtitle>
                      <CardText><h4>Can be customized</h4></CardText>
                      <Button className="btn btn-lg btn-primary">Buy</Button>
                      <Button className="btn btn-lg btn-primary">comment - Modal</Button>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg
                      top
                      width="386"
                      height="480"
                      src={mirror}
                      alt="Your Post Needs An Image"
                    />
                    <CardBody>
                      <CardTitle><h2>Vanity Mirror</h2></CardTitle>
                      <CardSubtitle><h4>$300</h4></CardSubtitle>
                      <CardText><h4>Can be customized</h4></CardText>
                      <Button className="btn btn-lg btn-primary">Buy</Button>
                      <Button className="btn btn-lg btn-primary">comment - Modal</Button>
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
