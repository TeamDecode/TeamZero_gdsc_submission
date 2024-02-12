import React, { useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Debdutta',
    lastName: 'Naskar',
    headline: '',
    bio: '',
    profilePicture: null, // This will be replaced with the uploaded image
  });

  const [editing, setEditing] = useState(false);
  const [originalData, setOriginalData] = useState(null);

  const handleEdit = () => {
    setOriginalData({ ...profileData });
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Here you would typically save the data to the backend
  };

  const handleCancel = () => {
    setProfileData(originalData);
    setEditing(false);
  };

  const handleChange = (e, field) => {
    setProfileData({
      ...profileData,
      [field]: e.target.value
    });
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileData({
            ...profileData,
            profilePicture: reader.result
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper function to extract initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };


  // Add handleEdit, handleSave, handleCancel, etc. as needed

  return (
    <div className="flex">
    {/* Sidebar */}
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <div className="flex items-center space-x-4 p-2 mb-5">
        {profileData.profilePicture ? (
          <img src={profileData.profilePicture} alt="Profile" className="rounded-full h-12 w-12 object-cover" />
        ) : (
          <div className="rounded-full bg-gray-600 h-12 w-12 flex items-center justify-center uppercase font-bold">
            {getInitials(profileData.firstName)}
          </div>
        )}
        <div>{`${profileData.firstName} ${profileData.lastName}`}</div>
      </div>
      {/* ... rest of your sidebar */}
    </div>

      {/* Main Content */}
      <div className="flex-grow p-10 overflow-auto">
        <h1 className="text-3xl font-semibold mb-6">Public profile</h1>
        <p className="mb-2">Add information about yourself</p>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Basics:</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border rounded mb-2"
              value={profileData.firstName}
              onChange={(e) => handleChange(e, 'firstName')}
              disabled={!editing}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border rounded"
              value={profileData.lastName}
              onChange={(e) => handleChange(e, 'lastName')}
              disabled={!editing}
            />
          </div>
          <div>
            <label className="block font-medium">Headline</label>
            <input
              type="text"
              placeholder="Add a professional headline like 'Instructor at Udemy' or 'Architect'."
              className="w-full p-2 border rounded mb-2"
              value={profileData.headline}
              onChange={(e) => handleChange(e, 'headline')}
              disabled={!editing}
            />
          </div>
          <div>
            <label className="block font-medium">Bio</label>
            <textarea
              placeholder="Tell us more about yourself"
              className="w-full p-2 border rounded"
              value={profileData.bio}
              onChange={(e) => handleChange(e, 'bio')}
              disabled={!editing}
            />
          </div>
          <div>
          <label className="block font-medium">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
          />
        </div>
          {/* Add more fields as necessary */}
        </div>
        {/* Edit/Save button goes here */}
      </div>
    </div>
  );
};

export default Profile;
