import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AddMovie = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name,setName]=useState('');
    const [rating,setRating]=useState('1');
    const [image,setImage]=useState('');
    const [date,setDate]=useState('');


    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }
    const handleRating = (x) => setRating(x)
  return (
    <div>
         <button className='btn add-movie-btn' onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <label> Name </label>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
          <label> Date </label>
          <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
          <label> Rating </label>
          <StarRating handleRating={handleRating} rating={rating}/>
          <label> Poster </label>
          <input type='url' value={image} onChange={(e)=>setImage(e.target.value)}/>
          <div>
          <button className='btn'>Confirm</button>
          <button className='btn'>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddMovie