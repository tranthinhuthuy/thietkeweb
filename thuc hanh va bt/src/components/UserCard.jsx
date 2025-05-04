import React from 'react';

const UserCard = ({ user, index, onDelete, onEdit }) => {
    const bgColorClass = index % 2 === 0 ? 'bg-white' : 'bg-blue-50';
    
    return (
        <div className={`p-6 rounded-lg shadow-md flex items-start transition-all hover:shadow-lg ${bgColorClass}`}>
            <img 
                src={user.picture.large} 
                alt={`${user.name.first} ${user.name.last}`}
                className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300 object-cover"
            />
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                    {user.name.first} {user.name.last}
                </h2>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 mt-1">
                    <span className="font-medium">Điện thoại:</span> {user.phone}
                </p>
                <div className="mt-3 flex gap-2">
                    <button
                        onClick={() => onEdit(user)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Chỉnh sửa
                    </button>
                    <button
                        onClick={() => onDelete(user.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;