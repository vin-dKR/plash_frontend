import axios from 'axios';
import React, { useState } from 'react';
import "./Contribute.css"

const InputForm = () => {
  const [file, setFile] = useState(null);
  let [inputTitle, setinputTitle] = useState(' ');
  let [inputCat, setInputCat] = useState(' ');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleInputChange = (e) => {
    setinputTitle(e.target.value) 
  };
  const handleCatChange = (e) => {
    setInputCat(e.target.value) 
  };

  const handleSubmit = async (event) => {
    try {
      const formData = new FormData();
      formData.append('file', file)
      formData.append('text', inputTitle)
      formData.append('category', inputCat)

      await axios.post("http://localhost:5001/api/v1", formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      event.preventDefault()
    } catch (error) {
      console.log("error from contribute", error)
    }
  };

  return (
    <>
    <div className="container">
      <form className='form'>
        <input className='file' type="file" onChange={ handleFileChange } />
        <input className='title_name' placeholder='give title' type="text" onChange={ handleInputChange } />
        <input className='category_name' placeholder='give category' type="text" onChange={ handleCatChange } />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </div>
    </>

  );
};

export default InputForm;
