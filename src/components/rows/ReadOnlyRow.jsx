import React from 'react';

function ReadOnlyRow({ staff, handleEditClick, handleDelete }) {
    return (
        <tr id={staff.id} key={staff.id}>
            <td >{staff.id}</td>
            <td >{staff.name}</td>
            <td >{staff.phone}</td>
            <td >{staff.dept}</td>
            <td >{staff.exp}</td>
            <td>

                <span title='Edit'>
                    <i className="material-icons" onClick={(e) => handleEditClick(e, staff)}>&#xE254;</i>
                </span>
                <span title='Delete' >
                    <i className="material-icons" onClick={handleDelete}>&#xE872;</i>
                </span>
            </td>
        </tr>
    );
}

export default ReadOnlyRow;