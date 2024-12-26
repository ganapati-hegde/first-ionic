import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id: string,
    name: string,
    designation: string,
    attended: string,
    upComing: string,
    active: string,
) {
    return { id, name, designation, attended, upComing, active };
}

export default function BasicTable(props) {
    const generateData = (employees) => {
        let a = [];
        employees.map((eahEmployee) => {
            a.push(createData(eahEmployee.id, eahEmployee.name, eahEmployee.designation, eahEmployee.completedCourses.length, eahEmployee.upcomingCourses.length, eahEmployee.activeCourses.length))
        });
        return a;
    }
    const row1 = generateData(props.allEmployees);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Employee#</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Designation</TableCell>
                        <TableCell align="right">Attended</TableCell>
                        <TableCell align="right">Upcoming</TableCell>
                        <TableCell align="right">Active</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {row1.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.designation}</TableCell>
                            <TableCell align="right">{row.attended}</TableCell>
                            <TableCell align="right">{row.upComing}</TableCell>
                            <TableCell align="right">{row.active}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}