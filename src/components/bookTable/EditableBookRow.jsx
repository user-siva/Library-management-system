import React from 'react';

function EditableBookRow({ editFormData, handleEditFormChange, handleCancelClick, }) {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    placeholder="Id"
                    name="id"
                    value={editFormData.id}
                    onChange={handleEditFormChange}
                    required
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Enter a title..."
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                    required
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Enter a author name..."
                    name="Author"
                    value={editFormData.author}
                    onChange={handleEditFormChange}
                    required
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter an location..."
                    name="location"
                    value={editFormData.location}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
}

export default EditableBookRow;