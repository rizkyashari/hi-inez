import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Hi, Inez :)</title>
      </Helmet>

      <LoginView />
    </>
  );
}
