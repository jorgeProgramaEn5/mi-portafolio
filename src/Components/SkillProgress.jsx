import React from 'react';
import "../Style/SkillProgress.css"

function skillProgress() {
  return (
    <div className='container-skills'>
        <div className='progress' style={{'--i':78}}>
            <h3>85<span>%</span></h3>
            <h4>html</h4>
        </div>
    </div>
  )
}

export default skillProgress