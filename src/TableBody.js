import React from 'react';
const TableBody = props => {
    const rows = props.characterData.map((row, index)=> {
        return (
            <tr key = {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
    // return (
    //    <tbody>
    //         <tr>
    //             <td>Charlie</td>
    //             <td>Janitor</td>
    //         </tr>
    //         <tr>
    //             <td>Mac</td>
    //             <td>Bouncer</td>
    //         </tr>
    //         <tr>
    //             <td>Dee</td>
    //             <td>Aspiring actress</td>
    //         </tr>
    //         <tr>
    //             <td>Dennis</td>
    //             <td>Bartender</td>
    //         </tr>
    //     </tbody>
    // );
}

export default TableBody;