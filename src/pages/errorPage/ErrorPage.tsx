import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import './_error-page.scss';

const ErrorPage: FC = () => {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  const isWrongUrl = error.data.includes('No route matches URL');

  return (
    <article>
      <main className={`error-page ${isWrongUrl ? 'error-url' : ''}`}>
        {/* <PageTitle title={Title.Error} /> */}
        <header aria-label="Error page">
          <img
            className="emoji"
            src="/images/sad_smiley.png"
            alt="Really guilty emoji"
          />

          <h1>Something went wrong</h1>
        </header>

        <h2>{error.data}</h2>
      </main>
    </article>
  );
};

export default ErrorPage;
