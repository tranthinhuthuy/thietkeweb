import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import EditUserModal from "./EditUserModal";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingUser, setEditingUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6;

    const fetchRandomUsers = async (count = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${count}`);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            const newUsers = data.results.map(user => ({
                ...user,
                id: user.login?.uuid || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            }));

            setUsers(prevUsers => [...prevUsers, ...newUsers]);
        } catch (error) {
            console.error("Error fetching users:", error);
            alert("Lỗi khi tải người dùng: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
        if (currentPage > 1 && paginatedUsers.length === 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const updateUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
        setEditingUser(null);
    };

    const filteredUsers = users.filter(user => {
        const searchLower = searchTerm.toLowerCase();
        return (
            user.name.first.toLowerCase().includes(searchLower) ||
            user.name.last.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower)
        );
    });

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );

    return (
        <div className="w-full max-w-6xl px-4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded w-full sm:max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2">
                    <button
                        onClick={() => fetchRandomUsers(1)}
                        disabled={loading}
                        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Đang tải...
                            </span>
                        ) : "Thêm 1 người dùng"}
                    </button>
                    <button
                        onClick={() => fetchRandomUsers(5)}
                        disabled={loading}
                        className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        Thêm 5 người dùng
                    </button>
                </div>
            </div>

            {editingUser && (
                <EditUserModal
                    user={editingUser}
                    onSave={updateUser}
                    onClose={() => setEditingUser(null)}
                />
            )}

            {loading && paginatedUsers.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : paginatedUsers.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-600 text-lg">Không tìm thấy người dùng nào.</p>
                    <button 
                        onClick={() => fetchRandomUsers(5)}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Thêm người dùng mới
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedUsers.map((user, index) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            index={index}
                            onDelete={deleteUser}
                            onEdit={() => setEditingUser(user)}
                        />
                    ))}
                </div>
            )}

            {filteredUsers.length > usersPerPage && (
                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-gray-600">
                        Hiển thị {paginatedUsers.length} trong tổng {filteredUsers.length} người dùng
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Trang trước
                        </button>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Trang sau
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;