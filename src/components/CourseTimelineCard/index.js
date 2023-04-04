import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTags = name => (
    <li className="list-item">
      <p className="tag-name">{name}</p>
    </li>
  )

  return (
    <div className="course-con">
      <div className="upper">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="lower-upper">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachItem => renderTags(eachItem.name))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
