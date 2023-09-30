import React from 'react'

const ProjectCard = (props) => {
    let linkToProject = props.link;

    return (
        <div className="project-card">
            <img src={props.img} alt="" />
            <div className="taskInfo">
                <h3>{props.title}</h3>
                <h5>{props.info}</h5>
                <p className='accessible1' onClick={() => window.open(linkToProject )}>Click To Open</p>
            </div>
        </div>
    )
}

export default ProjectCard