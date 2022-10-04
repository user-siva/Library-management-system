import React from 'react';
import "./stafftable.css"
import { useState } from "react"
import ReadOnlyRow from '../rows/ReadOnlyRow';
import EditableRow from '../rows/EditableRow';

function StaffTable() {

    const [editStaffId, setEditStaffId] = useState(null)

    const [staffs, setStaffs] = useState([
        {
            id: 1,
            name: "Steve",
            phone: 8473094320,
            dept: "CSE",
            exp: 10
        },
        {
            id: 2,
            name: "Dustin",
            phone: 8309212,
            dept: "CSE",
            exp: 3
        },
        {
            id: 3,
            name: "Eddie",
            phone: 3820918,
            dept: "EEE",
            exp: 7
        }
    ])

    var [newstaff, setNewstaff] = useState([
        {
            id: "",
            name: "",
            phone: "",
            dept: "",
            exp: ""
        }
    ])

    const [editFormData, setEditFormData] = useState({
        id: "",
        name: "",
        phone: "",
        dept: "",
        exp: ""
    })

    const handleEdit = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldvalue = e.target.value;
        const newStaff = { ...newstaff };
        newStaff[fieldName] = fieldvalue;
        setNewstaff(newStaff);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStaff = {
            id: newstaff.id,
            name: newstaff.name,
            phone: newstaff.phone,
            dept: newstaff.dept,
            exp: newstaff.exp
        }
        const updateStaff = [...staffs, newStaff]
        setStaffs(updateStaff)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()
        const editedFormData = {
            id: editStaffId,
            name: editFormData.name,
            phone: editFormData.phone,
            dept: editFormData.dept,
            exp: editFormData.exp
        }

        const newData = [...staffs]
        const index = staffs.findIndex((staff) => staff.id === editStaffId)
        newData[index] = editedFormData
        setStaffs(newData)
        setEditStaffId(null)
    }

    const handleEditClick = (event, staff) => {
        event.preventDefault()
        setEditStaffId(staff.id)

        const formData = {
            id: staff.id,
            name: staff.name,
            phone: staff.phone,
            dept: staff.dept,
            exp: staff.exp
        }

        setEditFormData(formData)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldvalue = event.target.value;
        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldvalue
        setEditFormData(newFormData)
    }

    const handleCancelClick = (e) => {
        setEditStaffId(null)
    }

    const handleDelete = (staffId) => {
        const _staffs = [...staffs]
        const index = staffs.findIndex((staff) => staff.id === staffId)
        _staffs.splice(index, 1)
        setStaffs(_staffs)
    }

    return (
        <div className='staffContainer' id='staffContainer'>
            <div className='staffhead'>
                <h1>Staff Details</h1>
            </div>
            <form onSubmit={handleEditFormSubmit}>
                <table id='staff-table'>
                    <thead>
                        <tr>
                            <th>Staff Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Experience</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffs.map((staff) => (
                            <>

                                {editStaffId === staff.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        staff={staff}
                                        handleEditClick={handleEditClick}
                                        handleDelete={handleDelete}
                                    />
                                )
                                }
                            </>
                        ))}
                    </tbody>

                </table>
            </form>
            <form className='edit-form' onSubmit={handleSubmit}>
                <input type="text" name='id' onChange={handleEdit} required />
                <input type="text" name='name' onChange={handleEdit} required />
                <input type="text" name='phone' onChange={handleEdit} required />
                <input type="text" name='dept' onChange={handleEdit} required />
                <input type="text" name='exp' onChange={handleEdit} required />
                <button className='staffbtn'><i class="fa fa-plus"></i>Add Staff</button>
            </form>
        </div >
    );
}

export default StaffTable;