import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";


const AdminLayout = () => {
  const navigate = useNavigate();
  const [isAddingUser, setIsAddingUser] = useState(false); 
  const [users, setUsers] = useState([]); 

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleAddUser = (newUser) => {

    setUsers([...users, newUser]);

    setIsAddingUser(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <nav className="mt-4">
            <ul>
              <li className="py-2 px-4 hover:bg-indigo-800">
                <a href="#">Halaman utama</a>
              </li>
              <li className="py-2 px-4 hover:bg-indigo-800">
                <a href="#">Users</a>
              </li>
              <li className="py-2 px-4 hover:bg-indigo-800">
                <a href="#">Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <div className="flex justify-end items-center">
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Log Out
            </button>
          </div>
        </header>

        {/* User List Section */}
        <div className="flex justify-between items-center mb-1 p-4">
          <h2 className="text-xl font-semibold">Daftar User</h2>

        </div>

        {/* Formulir Tambah Pengguna */}
        {isAddingUser && <AddUserForm onAddUser={handleAddUser} />}

        {/* Main Content */}
        <main className="flex-grow p-4 bg-blue-50">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-indigo-900 text-white p-4 text-center">
          &copy; 2024 Admin Dashboard adif sulthan nafi
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
