import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CourseWrapper from 'components/courseWrapper/courseWrapper';
import EmployeeTable from '../../components/EmployeeTable/employeeTable'
import Axios from '../../services/Axios'
import './tabs.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
var styles = {
    default_tab: {
        color: 'yellow',
        fontWeight: 400,
    },
    active_tab: {
        color: '#FD0040',
    }
}
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {
    const [value, setValue] = React.useState(1);
    const [allEmployees, setAllEmployess] = useState([]);

    const fetchAllEmployees = async () => {
        try {
            const response = await Axios('api/employees?populate=*');
            setAllEmployess(response?.data?.data);
        } catch (error) {
            console.error(error);
        }
    }


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue === 4) {
            fetchAllEmployees()
        }
        setValue(newValue);
    };

    return (
        <div className='tabs'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs className='tabs-heading' value={value} onChange={handleChange} aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#FE0042"
                            }
                        }}
                    >
                        <Tab label="Trainings:" disabled />
                        <Tab label="Active" {...a11yProps(1)} />
                        <Tab label="Upcoming" {...a11yProps(2)} />
                        <Tab label="Completed" {...a11yProps(3)} />
                        <Tab label="All Employees" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={1}>
                    {props.activeCourse.map((course) => {
                        return <CourseWrapper course={course} />
                    })}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {props.upcomigCourse.map((course) => {
                        return <CourseWrapper course={course} />
                    })}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {props.completedCourse.map((course) => {
                        return <CourseWrapper course={course} />
                    })}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>

                    <EmployeeTable allEmployees={allEmployees} />

                </CustomTabPanel>
            </Box>
        </div>
    );
}