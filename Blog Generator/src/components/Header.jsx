import React from 'react';
import { Logo, LogoutBtn, Container } from './index.js';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth?.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus
    },
    {
      name: "Signup",
      slug: '/signup',
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: "Add Posts",
      slug: '/add-posts',
      active: authStatus
    }
  ];

  return (
    <header className='py-4 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
