import React, {useRef} from 'react';

function ProjectItem ({image, name, year}) {

    return (
        <div className="projectItem">
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{year}</p>
        </div>
    );
}

export default ProjectItem;