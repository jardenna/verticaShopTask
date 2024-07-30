import { FC } from 'react';
import PageTitle from '../components/PageTitle';
import Logo from '../layout/header/Logo';
import Nav from '../layout/nav/Nav';
import topNavItemsList from '../layout/nav/navLists/topNavItemsList';
import { Title } from '../types/enums';

const Home: FC = () => (
  <>
    <PageTitle title={Title.Home} />

    <header className="container" aria-label="secondary">
      <Nav
        navItemsList={topNavItemsList}
        className="top-nav"
        ariaLabel="secondary"
      />
    </header>
    <article className="hero">
      <div className="container">
        <Logo />
      </div>
    </article>
  </>
);
export default Home;
