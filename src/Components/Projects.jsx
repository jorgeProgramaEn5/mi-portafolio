import React from 'react';
import '../Style/Projects.css';
import { projects } from '../Constant';
import { Container, Row, Col, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard'



function Projects() {
  return (
    <section className='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magni eum soluta 
                        architecto suscipit ipsam nostrum dolore alias libero nemo possimus nobis vitae sapiente 
                        perferendis, non, magnam placeat unde quo.
                    </p>
                    <TabContainer id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tree</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent >
                            <TabPane eventKey="first">
                                <Row className='container-items-nav'>
                                    {
                                        projects.map((project, index)=>{
                                            return (    
                                            <ProjectCard  
                                                key={index}
                                                {...project}
                                            />
                                        )})
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey="second">Loren Iosu</TabPane>
                            <TabPane eventKey="third">Loren Casuo</TabPane>
                        </TabContent>
                    </TabContainer>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects