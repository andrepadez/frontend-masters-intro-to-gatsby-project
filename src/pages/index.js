import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage () {
  return (
    <main>
      <h1>Gatsby!!!</h1>
      <Link to='/about'>About page</Link>
    </main>
  );
}
