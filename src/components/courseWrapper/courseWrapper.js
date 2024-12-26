import React, { useEffect } from 'react';
import './courseWrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment'

const getEndsInTime = (endDate) => {
    const now = moment();
    const exp = moment(endDate);
    const days = exp.diff(now, 'days');
    const hours = exp.diff(now, 'hours') - (days * 24);
    return `${days} days ${hours} hours`
}
// useEffect(() => {

// }, [])
const getBadgeColor = (status) => {
    if (status === 'Active') {
        return 'active'
    } else if (status === 'Upcoming') {
        return 'upComing'
    }
    return 'completed'
}

const courseWrapper = ({ course }) => {
    return (
        <div className="course-wrapper">
            <div className='course-top-section'>
                <div className='course-trainer-details'>
                    <div className='course-name-wrapper'>
                        <span className='course-name'>{course.name}</span>
                        <span className={`badge ${getBadgeColor(course.courseStatus)}`}>{course.courseStatus}</span>
                    </div>
                    <div className='course-training-details'>
                        <span className='trainer-type'><span className='trainer'>Trainer: </span>{course.trainer}</span><span> &nbsp; |  &nbsp;</span>
                        <span className='trainer-type'><span className='trainer'>Traing Type: </span>{course.trainingType}</span>
                    </div>

                </div>
                <div className='ends-in-user-details'>
                    <span className='ends-in badge'>{`Ends In: ${getEndsInTime(course.endDate)}`}</span>
                    <FontAwesomeIcon icon={faPeopleGroup} /><span className='participants-count'>{course.attenders.length}</span>
                </div>
            </div>
            <div className='course-bottom-section'>
                <div className='start-date-section align-left'>
                    <div className='trainer'>Start Date</div>
                    <div className='trainer-type'>Dec 5th, 2020 at 12</div>
                </div>
                <div className='end-date-section align-left'>
                    <div className='trainer'>End Date</div>
                    <div className='trainer-type'>{course.endDate}</div>
                </div>
                <div className='Duration-section align-left'>
                    <div className='trainer'>Duration</div>
                    <div className='trainer-type'>{course.duration}</div>
                </div>
                <div className='details-section'>
                    <button className='button' color='white' type="button">Details</button>
                </div>
                <div className='kebab-menu-section'>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </div>
    );
};

export default courseWrapper;
