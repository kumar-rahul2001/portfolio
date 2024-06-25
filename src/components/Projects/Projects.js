import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectsData from "../../Helper/Data/Projects";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(ProjectsData.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = ProjectsData.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const renderPaginationItems = () => {
    const paginationItems = [];

    if (totalPages <= 7) {
      for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    } else {
      paginationItems.push(
        <Pagination.Item
          key={1}
          active={1 === currentPage}
          onClick={() => handlePageChange(1)}
        >
          1
        </Pagination.Item>
      );

      if (currentPage > 4) {
        paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
      }

      for (
        let number = Math.max(currentPage - 2, 2);
        number <= Math.min(currentPage + 2, totalPages - 1);
        number++
      ) {
        paginationItems.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }

      if (currentPage < totalPages - 3) {
        paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
      }

      paginationItems.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {currentProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPaths={project.imgPaths}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                frontend={project.frontend}
                backend={project.backend}
                database={project.database}
                otherTools={project.otherTools}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        <Pagination>
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {renderPaginationItems()}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </Container>
    </Container>
  );
}

export default Projects;
