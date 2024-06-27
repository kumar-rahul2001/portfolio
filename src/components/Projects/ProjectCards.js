import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Carousel>
        {props.imgPaths.map((imgPath, index) => (
          <Carousel.Item key={index}>
            <LazyLoadImage
              className="d-block w-100 rounded img-padding"
              src={imgPath}
              alt={`slide-${index}`}
              effect="blur"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title style={{ color: "#c770f0", fontWeight: "bold" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "small" }}>
          {props.description}
          {props.frontend && (
            <p
              style={{ fontSize: "small", marginTop: "5px", marginBottom: "0" }}
            >
              <span
                style={{
                  color: "#c770f0",
                  fontWeight: "bold",
                }}
              >
                Frontend:{" "}
              </span>
              {props.frontend}
            </p>
          )}
          {props.backend && (
            <p style={{ fontSize: "small", marginBottom: "0" }}>
              <span
                style={{
                  color: "#c770f0",
                  fontWeight: "bold",
                }}
              >
                Backend:{" "}
              </span>
              {props.backend}
            </p>
          )}
          {props.database && (
            <p style={{ fontSize: "small", marginBottom: "0" }}>
              <span
                style={{
                  color: "#c770f0",
                  fontWeight: "bold",
                }}
              >
                Database:{" "}
              </span>
              {props.database}
            </p>
          )}
          {props.otherTools && (
            <p style={{ fontSize: "small", marginBottom: "0" }}>
              <span
                style={{
                  color: "#c770f0",
                  fontWeight: "bold",
                }}
              >
                Other Tools:{" "}
              </span>
              {props.otherTools}
            </p>
          )}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
