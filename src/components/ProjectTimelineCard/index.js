import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-con">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="p-upper">
        <h1 className="p-title">{projectTitle}</h1>
        <div className="p-inner-upper">
          <AiFillCalendar className="calender-icon" />
          <p className="p-duration">{duration}</p>
        </div>
      </div>
      <p className="p-desc">{description}</p>
      <a href={projectUrl} className="p-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
