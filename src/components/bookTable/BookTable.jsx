import React from 'react';
import "./booktable.css"
import { useState } from "react"
import EditableBookRow from './EditableBookRow';
import ReadOnlyBookRow from './ReadOnlyBookRow';

function BookTable() {

    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Harry Potter",
            author: "J.K.Rowling",
            location: "USA"
        },
        {
            id: 2,
            title: "Harry Potter",
            author: "J.K.Rowling",
            location: "USA"
        },
        {
            id: 3,
            title: "Harry Potter",
            author: "J.K.Rowling",
            location: "USA"
        }
    ])

    const [editBookId, setEditBookId] = useState(null)

    var [newbook, setNewbook] = useState([
        {
            id: "",
            title: "",
            author: "",
            location: "",

        }
    ])

    const [editFormData, setEditFormData] = useState({
        id: "",
        title: "",
        author: "",
        location: "",
    })

    const handleEdit = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldvalue = e.target.value;
        const newBook = { ...newbook };
        newBook[fieldName] = fieldvalue;
        setNewbook(newBook);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: newbook.id,
            title: newbook.title,
            author: newbook.author,
            location: newbook.location,
        }
        const updateBook = [...books, newBook]
        setBooks(updateBook)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()
        const editedFormData = {
            id: editBookId,
            title: editFormData.title,
            author: editFormData.author,
            location: editFormData.location
        }

        const newData = [...books]
        const index = books.findIndex((book) => book.id === editBookId)
        newData[index] = editedFormData
        setBooks(newData)
        setEditBookId(null)
    }

    const handleEditClick = (event, book) => {
        event.preventDefault()
        setEditBookId(book.id)

        const formData = {
            id: book.id,
            title: book.title,
            author: book.author,
            location: book.location,
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
        setEditBookId(null)
    }

    const handleDelete = (bookId) => {
        const _books = [...books]
        const index = books.findIndex((book) => book.id === bookId)
        _books.splice(index, 1)
        setBooks(_books)
    }

    return (
        <div className='bookContainer'>
            <div className='bookhead'>
                <h1>Book Details</h1>
            </div>
            <form onSubmit={handleEditFormSubmit}>
                <table id='book-table'>
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>title</th>
                            <th>Author</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <>

                                {editBookId === book.id ? (
                                    <EditableBookRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyBookRow
                                        book={book}
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
                <input type="text" name='title' onChange={handleEdit} required />
                <input type="text" name='author' onChange={handleEdit} required />
                <input type="text" name='location' onChange={handleEdit} required />
                <button className='bookbtn'><i class="fa fa-plus"></i>Add Book</button>
            </form>
        </div>
    );
}

export default BookTable;