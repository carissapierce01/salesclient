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
import { ShopType, CommentType } from "../types/Types";

type AcceptedProps = {
  sessionToken: string;
  clearToken: () => void;
};

type ShopState = {
  comment: CommentType;
};

class Comment extends React.Component<AcceptedProps, ShopState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      comment: {
        nameOfCommenter: "",
        content: "",
        shop: [],
      },
    };
  }
  fetchComments() {
    fetch(`http://localhost:3002/comment/`, {
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
          comment: {
            nameOfCommenter: res.nameOfCommenter,
            content: res.content,
            shop: res.shop,
          },
        });
      });
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch(`http://localhost:3002/comment/shop`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: this.props.sessionToken,
      },
      body: JSON.stringify({
        comment: this.state.comment,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("COMMENT UPDATED:", res);
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
                      <CardTitle>
                        {this.state.comment.nameOfCommenter}
                      </CardTitle>
                      <CardSubtitle>{this.state.comment.content}</CardSubtitle>
                      <CardText>{this.state.comment.shop}</CardText>
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
