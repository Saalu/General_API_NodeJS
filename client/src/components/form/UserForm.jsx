import React, { useState } from 'react';
import './form.css';
import { useDispatch, useSelector } from 'react-redux';
// import { update, remove } from '../../redux/userSlice';
import { updateUser } from '../../redux/apiCalls';
import { updateUser2 } from '../../redux/userSlice';

const FormComponent = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const {userInfo} = useSelector(state => state.user)
const dispatch = useDispatch()


  const handleUpdate = (e) => {
    e.preventDefault()
dispatch(updateUser2({name,email}))
  }

  const handleDelete = (e) =>{
    e.preventDefault()

    // dispatch(remove())
  }

  return (
    <div className="form">
        <div className="delete-account">
          This is account belongs to <span>{userInfo.name}</span>. Hello, you're welcome <span>{userInfo.name}</span>.
           Space untmpore corrupti voluptates, qui, sequi commodi magni delectus praesentium libero
           nisi voluptatum.
       <div >
       <button className='btn delete' onClick={handleDelete}>Delete</button>
        
       </div>
        </div>
      <h2>Contact Form</h2>
      <form >
      
        <div>
          <label>Name:</label>
          <input
            type="text"
            // value={user.name}
            placeholder={userInfo.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            // value={user.email}
            placeholder={userInfo.email}

            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <input type="submit" >Update</input> */}
        <button type="submit" className='btn' onClick={handleUpdate}>Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
