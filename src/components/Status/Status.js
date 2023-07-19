import React, { useState } from 'react';
import "./Status.css";
const Status = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const statusUpload = (event) => {
    event.preventDefault();
    console.log('clicked');
    const status = event.target.status.value;
    console.log(status);
    const imgUrl = event.target.imgUrl.value;
    console.log(imgUrl);
    const data = { status, imgUrl };
    fetch('https://sm-ph-server.onrender.com/medias', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Status Posted Successfully');

        }
      })
    event.target.reset();
  }
  return (
    <div className='add-message m-5'>
      <h4 className='mt-4 text-center'>Upload Your Status</h4>
      <form onSubmit={statusUpload} className='status-form'>
        <div className='upload-div'>
          <textarea placeholder="What's in your mind?" name="status" id="" cols="30" rows="2"></textarea>
          <input type="text" name="imgUrl" id="" placeholder='url of image' className='image-field' />
        </div>
        <input className='status-submit p-3' type="submit" value="Submit" />
        {/* <div>
                <div>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
                </div> */}
      </form>
    </div>
  );
};

export default Status;