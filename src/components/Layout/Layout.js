import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from 'components/NavBar/NavBar';
import { Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </>
  );
};
