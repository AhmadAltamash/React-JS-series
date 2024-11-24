import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Footer } from './components/index.js';
import './App.css';
import authentication from './appwrite/auth.js';
import { login, logout } from './store/authSlice.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Create an instance of Authenticate with dispatch
    const authInstance = authentication(dispatch);

    // Call the getCurrentUser method on the instance
    authInstance.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="h-screen w-full flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
          Todo:
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
