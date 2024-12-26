import React, { useState, useEffect, use } from 'react';
import LabTabs from '../../components/tab/tab'
import Axios from '../../services/Axios'
import Wrapper from '../../components/wrapper/wrapper'
import Header from '../../components/Header/header'
import './home.css'

const Home = () => {
    const [activeCourse, setActiveCourse] = useState([]);
    const [upcomigCourse, setUpcomigCourse] = useState([]);
    const [completedCourse, setCompletedCourse] = useState([]);
    const [headerData, setHeaderData] = useState([])
    const filterBasedOnStatus = (data) => {
        data?.forEach(element => {
            if (element.courseStatus === 'Active') {
                setActiveCourse(prevArray => [...prevArray, element])
            } else if (element.courseStatus === 'Upcoming') {
                setUpcomigCourse(prevArray => [...prevArray, element])
            } else {
                setCompletedCourse(prevArray => [...prevArray, element])
            }
        });
    }
    const fetchCourse = async () => {
        try {
            const response = await Axios('api/courses?populate=*');
            filterBasedOnStatus(response?.data?.data);
        } catch (error) {
            console.error(error);
        }
    }
    const fetchHeader = async () => {
        try {
            const response = await Axios('api/header?populate=*');
            setHeaderData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchHeader();
        fetchCourse();
    }, [])

    return (
        <div>
            <div><Header headerData={headerData} /></div>
            <div className='wrapper-container'>
                {/* <div className='wrappers'> */}
                <Wrapper data={{ data: activeCourse, title: "ActiveTraining" }} />
                <Wrapper data={{ data: upcomigCourse, title: "Upcoming Training" }} />
                <Wrapper data={{ data: completedCourse, title: "Upcoming Training" }} />
                {/* </div> */}
            </div>
            <div className='tabs-wrapper'>
                <LabTabs activeCourse={activeCourse} completedCourse={completedCourse} upcomigCourse={upcomigCourse} />
            </div>
        </div>
    );
};

export default Home;