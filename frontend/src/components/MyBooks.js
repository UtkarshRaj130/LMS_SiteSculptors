import React from 'react';
import Header from './Header'; // Import Header component
import '../Styles/MyBooks.css'; // Import CSS for MyBooks

const sampleReservedBooks = [
    {
        id: 1,
        title: 'Book Title 1',
        author: 'Author 1',
        department: 'Department 1',
        genre: 'Genre 1',
        vendor: 'Vendor 1',
        vendor_id: 'V001',
        publisher: 'Publisher 1',
        publisher_id: 'P001',
        description: 'Description of Book 1',
        dueIn: 5
    },
    {
        id: 2,
        title: 'Book Title 2',
        author: 'Author 2',
        department: 'Department 2',
        genre: 'Genre 2',
        vendor: 'Vendor 2',
        vendor_id: 'V002',
        publisher: 'Publisher 2',
        publisher_id: 'P002',
        description: 'Description of Book 2',
        dueIn: 2
    },
    {
        id: 3,
        title: 'Book Title 3',
        author: 'Author 3',
        department: 'Department 3',
        genre: 'Genre 3',
        vendor: 'Vendor 3',
        vendor_id: 'V003',
        publisher: 'Publisher 3',
        publisher_id: 'P003',
        description: 'Description of Book 3',
        dueIn: 1
    },
    {
        id: 4,
        title: 'Book Title 4',
        author: 'Author 4',
        department: 'Department 4',
        genre: 'Genre 4',
        vendor: 'Vendor 4',
        vendor_id: 'V004',
        publisher: 'Publisher 4',
        publisher_id: 'P004',
        description: 'Description of Book 4',
        dueIn: 0
    },
    {
        id: 5,
        title: 'Book Title 5',
        author: 'Author 5',
        department: 'Department 5',
        genre: 'Genre 5',
        vendor: 'Vendor 5',
        vendor_id: 'V005',
        publisher: 'Publisher 5',
        publisher_id: 'P005',
        description: 'Description of Book 5',
        dueIn: -3
    },
    {
        id: 6,
        title: 'Book Title 6',
        author: 'Author 6',
        department: 'Department 6',
        genre: 'Genre 6',
        vendor: 'Vendor 6',
        vendor_id: 'V006',
        publisher: 'Publisher 6',
        publisher_id: 'P006',
        description: 'Description of Book 6',
        dueIn: 12
    },
    {
        id: 7,
        title: 'Book Title 7',
        author: 'Author 7',
        department: 'Department 7',
        genre: 'Genre 7',
        vendor: 'Vendor 7',
        vendor_id: 'V007',
        publisher: 'Publisher 7',
        publisher_id: 'P007',
        description: 'Description of Book 7',
        dueIn: -7
    },
    {
        id: 8,
        title: 'Book Title 8',
        author: 'Author 8',
        department: 'Department 8',
        genre: 'Genre 8',
        vendor: 'Vendor 8',
        vendor_id: 'V008',
        publisher: 'Publisher 8',
        publisher_id: 'P008',
        description: 'Description of Book 8',
        dueIn: 1
    }
];

const getDueInClass = (dueIn) => {
    if (dueIn < 0) return 'overdue';
    if (dueIn === 0) return 'due-today';
    if (dueIn === 1 || dueIn === 2) return 'due-soon';
    return '';
};

const getDueInText = (dueIn) => {
    if (dueIn < 0) return `${Math.abs(dueIn)} days ago`;
    if (dueIn === 0) return 'Today';
    if (dueIn === 1) return 'Tomorrow';
    if (dueIn === 2) return `In ${dueIn} days`;
    return `In ${dueIn} days`;
};

// Sort books by dueIn value
const sortedReservedBooks = sampleReservedBooks.sort((a, b) => a.dueIn - b.dueIn);

function MyBooks() {
    return (
        <div>
            <Header /> {/* Add Header here */}
            <div className="my-books">
                <h2>My Reserved Books</h2>
                {sortedReservedBooks.length === 0 ? (
                    <p>No books reserved.</p>
                ) : (
                    <div className="book-card-container">
                        {sortedReservedBooks.map((book) => (
                            <div key={book.id} className={`book-card ${getDueInClass(book.dueIn)}`}>
                                <div className="book-card-header">
                                    <h3 className="book-title-myBooks">{book.title}</h3>
                                </div>
                                <div className="book-card-body">
                                    <p><strong>Due:</strong> <span className={getDueInClass(book.dueIn)}>{getDueInText(book.dueIn)}</span></p>
                                    <p><strong>Author(s):</strong> {book.author}</p>
                                    <p><strong>Department:</strong> {book.department}</p>
                                    <p><strong>Genre:</strong> {book.genre}</p>
                                    <p><strong>Vendor:</strong> {book.vendor}</p>
                                    <p><strong>Vendor ID:</strong> {book.vendor_id}</p>
                                    <p><strong>Publisher:</strong> {book.publisher}</p>
                                    <p><strong>Publisher ID:</strong> {book.publisher_id}</p>
                                    <p><strong>Description:</strong> {book.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyBooks;
