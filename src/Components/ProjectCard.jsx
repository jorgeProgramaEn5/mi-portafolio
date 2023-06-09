import React from 'react'
import { Col } from 'react-bootstrap'
import '../Style/Projects.css';


function ProjectCard({title, description, imgUrl, link}) {
  return (
    <>
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="img_project" loading="lazy"/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
                <button><a href={link} target='blank'>view more</a></button>
            </div>
        </div>
    </Col>
    </>
  )
}

export default ProjectCard