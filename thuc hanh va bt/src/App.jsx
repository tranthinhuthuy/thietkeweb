import React from 'react';
import UserList from './components/UserList';
import './index.css';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Ứng dụng Quản lý Người dùng
                </h1>
                <UserList />
            </div>
        </div>
    );
}

export default App;