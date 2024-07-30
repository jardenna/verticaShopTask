import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useKeyPress from '../hooks/useKeyPress';
import { KeyCode } from '../types/enums';
import Header from './header/Header';
import Nav from './nav/Nav';
import leftNavItemsList from './nav/navLists/leftNavItemsList';

function Layout() {
  const location = useLocation();
  const [isLeftMenuHidden, setIsLeftMenuHidden] = useState(false);

  const handleToggleMenuHidden = () => {
    setIsLeftMenuHidden(!isLeftMenuHidden);
  };

  const handleHideMenu = () => {
    setIsLeftMenuHidden(true);
  };

  useKeyPress(handleHideMenu, [KeyCode.Esc]);

  useEffect(() => {
    setIsLeftMenuHidden(true);
  }, [location]);

  return (
    <article className="main-container">
      <Header
        onClick={handleToggleMenuHidden}
        isLeftMenuHidden={isLeftMenuHidden}
      />
      <main className="main-content container">
        <article
          className={`left-nav-container ${isLeftMenuHidden ? '' : 'is-active'}`}
        >
          <span className="nav-heading">Shop categories</span>
          <Nav
            navItemsList={leftNavItemsList}
            className="left-nav"
            ariaLabel="Main"
          />
        </article>
        <article className="content-container">
          <div id="main">
            <section className="page-content">
              <Outlet />
            </section>
          </div>
        </article>
      </main>
    </article>
  );
}

export default Layout;
