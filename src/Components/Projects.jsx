import React from 'react';
import '../Style/Projects.css';
import { projects, projectsPersonales, projectsBussiness } from '../Constant';
import { Container, Row, Col, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ProjectCard from './ProjectCard'
import { BiMoneyWithdraw, BiBriefcaseAlt2 } from 'react-icons/bi';



function Projects() {
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>
                        I've split my projects into two main categories: personal projects and contracted projects. My personal projects are where I get to explore 
                        my own ideas and creative solutions without any restrictions. They come from my curiosity and passion for technology. On the other hand, my 
                        contracted projects are the result of working with external clients and collaborators. In these projects, I have to adapt to their needs and 
                        expectations while keeping my focus on quality and effectiveness.
                    </p>
                    <TabContainer id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills justify-content-center aling-items-center'>
                            <Nav.Item>
                                <Nav.Link eventKey="first"><span>All</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><BiMoneyWithdraw className='icons-hidden' size={25}/><span className='span-hidden'>Personal</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><BiBriefcaseAlt2 className='icons-hidden' size={25}/><span className='span-hidden'>Contracting</span></Nav.Link>
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
                            <TabPane eventKey="second">
                                <Row className='container-items-nav'>
                                    {
                                        projectsPersonales.map((project, index)=>{
                                            return (    
                                            <ProjectCard  
                                                key={index}
                                                {...project}
                                            />
                                        )})
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey="third">
                                <Row className='container-items-nav'>
                                    {
                                        projectsBussiness.map((project, index)=>{
                                            return (    
                                            <ProjectCard  
                                                key={index}
                                                {...project}
                                            />
                                        )})
                                    }
                                </Row>
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects