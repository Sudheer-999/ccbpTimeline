import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    const renderTimelineCard = item => {
      if (item.categoryId === 'COURSE') {
        return <CourseTimelineCard key={item.id} courseDetails={item} />
      }
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }

    return (
      <div className="bg-container">
        <h1 className="head1">
          MY JOURNEY OF <span className="head2">CCBP 4.0</span>
        </h1>

        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{secondary: 'white'}}
          >
            {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
