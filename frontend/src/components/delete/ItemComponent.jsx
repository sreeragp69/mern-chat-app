import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modal from 'react-modal'; // Only if using a library

// Example function to delete an item
const deleteItem = (id) => {
  console.log(`Deleting item with id: ${id}`);
  // Your delete logic here
};

const ItemComponent = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    deleteItem(item.id); // Call your delete function
    setModalIsOpen(false); // Close the modal after deletion
  };

  return (
    <div className='border w-10 h-10'>
      {/* The dots icon to trigger the modal */}
      <BiDotsVerticalRounded onClick={() => setModalIsOpen(true)} />

      {/* Modal for confirmation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Delete Confirmation"
      >
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={handleDelete}>Yes, Delete</button>
        <button onClick={() => setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ItemComponent;
