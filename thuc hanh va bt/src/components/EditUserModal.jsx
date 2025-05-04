import React, { useState } from 'react';

const EditUserModal = ({ user, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState({
    first: user.name.first,
    last: user.name.last,
    email: user.email,
    city: user.location.city,
    country: user.location.country
  });

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave({
      ...user,
      name: {
        ...user.name,
        first: editedUser.first,
        last: editedUser.last
      },
      email: editedUser.email,
      location: {
        ...user.location,
        city: editedUser.city,
        country: editedUser.country
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <div className="space-y-3">
          <input
            className="w-full p-2 border rounded"
            name="first"
            placeholder="First Name"
            value={editedUser.first}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="last"
            placeholder="Last Name"
            value={editedUser.last}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="email"
            placeholder="Email"
            value={editedUser.email}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="city"
            placeholder="City"
            value={editedUser.city}
            onChange={handleChange}
          />
          <input
            className="w-full p-2 border rounded"
            name="country"
            placeholder="Country"
            value={editedUser.country}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;