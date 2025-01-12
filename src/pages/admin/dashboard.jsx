import { useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", donation: "", date: "" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "user", donation: "", date: "" });
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.donation || !newUser.date) return; 
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", role: "user", donation: "", date: "" });
  };


  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, role: user.role, donation: user.donation, date: user.date });
  };

  
  const handleSaveEdit = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id
        ? { ...user, name: newUser.name, role: newUser.role, donation: newUser.donation, date: newUser.date }
        : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
    setNewUser({ name: "", role: "user", donation: "", date: "" });
  };


  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="bg-blue-200 p-6 rounded-lg shadow-lg text-gray-900">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-blue-800">Donasi Korban Bncana Alam</h2>
        <div className="flex justify-between items-center mt-4">
          <div className="flex">
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="Enter Name"
              className="px-4 py-2 border border-blue-300 rounded mr-2 text-gray-900"
            />
            <input
              type="date"
              value={newUser.date}
              onChange={(e) => setNewUser({ ...newUser, date: e.target.value })}
              className="px-4 py-2 border border-blue-300 rounded mr-2 text-gray-900"
            />
            <input
              type="text"
              value={newUser.donation}
              onChange={(e) => setNewUser({ ...newUser, donation: e.target.value })}
              placeholder="Enter Donation Amount"
              className="px-4 py-2 border border-blue-300 rounded mr-2 text-gray-900"
            />
            <button
              onClick={editingUser ? handleSaveEdit : handleAddUser}
              className="bg-blue-400 text-white px-4 py-2 rounded ml-2 hover:bg-blue-500"
            >
              {editingUser ? "Save Changes" : "Add User"}
            </button>
          </div>
        </div>
      </div>

      <table className="min-w-full table-auto mt-4 text-gray-900">
        <thead className="bg-blue-400">
          <tr>
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Donation</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-blue-100">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.donation}</td>
              <td className="border px-4 py-2">{user.date}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-400 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
