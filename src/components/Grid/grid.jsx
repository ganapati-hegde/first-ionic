import React, {useState, useEffect} from 'react';
import './grid.css';



const Grid = (props) => {
    const [numberOfRows, setNumberofRows] = useState(1);
    const [numberOfColumns, setNumberOfColumns] = useState(1);

    
    // const getHeading = (columnCount) => {
    //     for (let i = 0; i < columnCount;i++){
    //         return <input />
    //     }
    // }
    // useEffect(() => {
    //     getHeading(numberOfColumns)
    // },[numberOfColumns])

    return (
        <div className="wrapper">
            <div className='input-groups'>
                <input type='number' value={numberOfRows} onChange={(e) => { setNumberofRows(parseInt(e.target.value)) }} />
                <input type='number' value={numberOfColumns} onChange={(e) => { setNumberOfColumns(parseInt(e.target.value)) }} />
            </div>
            <div className='table-wrapper'>
                <table>
                    <thead>
                        <tr>{[numberOfColumns].map(() => {
                            return <input />
                        })
                           
                        }
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>
Hello
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Grid;
