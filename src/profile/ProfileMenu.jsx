// ProfileMenu.js
import React, { useState } from 'react';
import './ProfileMenu.css'; // Import CSS file

const ProfileMenu = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City, Country',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
  const [editing, setEditing] = useState(false);
  const [originalData, setOriginalData] = useState(null); // Store original data for cancellation

  const handleEdit = () => {
    setOriginalData({ ...profileData }); // Save original data before editing
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Save data to backend or perform any other necessary action
  };

  const handleCancel = () => {
    setProfileData(originalData); // Revert to original data
    setEditing(false);
  };

  const handleChange = (e, field) => {
    setProfileData({
      ...profileData,
      [field]: e.target.value
    });
  };

  const handlePictureChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileData({
          ...profileData,
          profilePicture: reader.result
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
    
    <div className="profile-menu">
      <h2 className='profile'>Profile Details</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={profileData.profilePicture} alt="Profile" />
          {editing && (
            <input type="file" accept="image/*" onChange={handlePictureChange} />
          )}
        </div>
        <div className="profile-fields">
          <p>
            
          &nbsp; Name: 
          
            {editing ? 
            
              <input type="text" value={profileData.name} onChange={(e) => handleChange(e, 'name')} className="edit-input" /> : 
              
          
              <input disabled type="text"  value={profileData.name}/> 
              
            }
          </p>
          <p>
            Age: 
            {editing ? 
              <input type="number" value={profileData.age} onChange={(e) => handleChange(e, 'age')} className="edit-input" /> : 
              <input disabled type="text"  value={profileData.age}/> 
            }
          </p>
          <p>
            Email: 
            {editing ? 
              <input type="email" value={profileData.email} onChange={(e) => handleChange(e, 'email')} className="edit-input" /> : 
              <input disabled type="text"  value={profileData.email}/> 
            }
          </p>
          <p>
            Phone Number: 
            {editing ? 
              <input type="text" value={profileData.phoneNumber} onChange={(e) => handleChange(e, 'phoneNumber')} className="edit-input" /> : 
              <input disabled type="text"  value={profileData.phoneNumber}/> 
            }
          </p>
          <p>
            Address: 
            {editing ? 
              <input type="text" value={profileData.address} onChange={(e) => handleChange(e, 'address')} className="edit-input" /> : 
              <input disabled type="text"  value={profileData.address}/> 
            }
          </p>
          <p>
            Bio: 
            {editing ? 
              <textarea value={profileData.bio} onChange={(e) => handleChange(e, 'bio')} className="edit-input" /> : 
              <input disabled type="text"  value={profileData.bio}/> 
            }
          </p>
        </div>
      </div>
      {editing ? (
        <div>
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      ) : (
        <button onClick={handleEdit} className="edit-button">Edit</button>
      )}
    </div></>
  );
};

export default ProfileMenu;
