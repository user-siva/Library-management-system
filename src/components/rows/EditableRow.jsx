import React from 'react';

function EditableRow({ editFormData, handleEditFormChange, handleCancelClick, }) {
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
                    placeholder="Enter an name..."
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    required
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Enter a phone number..."
                    name="phone"
                    value={editFormData.phone}
                    onChange={handleEditFormChange}
                    required
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter an Department..."
                    name="dept"
                    value={editFormData.dept}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter Experiance"
                    name="exp"
                    value={editFormData.exp}
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

export default EditableRow;
