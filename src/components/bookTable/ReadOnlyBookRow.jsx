import React from 'react';

function ReadOnlyBookRow({ book, handleEditClick, handleDelete }) {
    return (
        <tr id={book.id} key={book.id}>
            <td >{book.id}</td>
            <td >{book.title}</td>
            <td >{book.author}</td>
            <td >{book.location}</td>
            <td>

                <span title='Edit'>
                    <i className="material-icons" onClick={(e) => handleEditClick(e, book)}>&#xE254;</i>
                </span>
                <span title='Delete' >
                    <i className="material-icons" onClick={handleDelete}>&#xE872;</i>
                </span>
            </td>
        </tr>
    );
}

export default ReadOnlyBookRow;