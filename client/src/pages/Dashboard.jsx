import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Editor from '../Editor';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('user-info')
    if(data) {
      const userData = JSON.parse(data)
      setUserInfo(userData);
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user-info')
    navigate('/login')
  }

  const createDocument = () => {
    const newDocument = { id: Date.now(), components: [] };
    setDocuments([...documents, newDocument]);
  };

  const openDocument = (document) => {
    navigate(`/editor/${document.id}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {userInfo.name}</h1>
            <p className="text-gray-600">{userInfo.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div className="mb-6">
          <button
            onClick={createDocument}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
              Create New Document
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Documents</h2>
          <ul className="space-y-4">
            {documents.map((doc) => (
              <li key={doc.id} className="bg-gray-50 p-4 rounded shadow">
                <button
                  onClick={() => openDocument(doc)}
                  className="text-blue-500 hover:underline"
                >
                  Open Document {doc.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-4 rounded shadow">
              <p className="text-gray-600">You created a new document.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded shadow">
              <p className="text-gray-600">You edited a document.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded shadow">
              <p className="text-gray-600">You logged in.</p>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">User Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Documents Created</h3>
              <p className="text-gray-600">{documents.length}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Last Login</h3>
              <p className="text-gray-600">Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard