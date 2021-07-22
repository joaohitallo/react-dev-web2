import React from 'react';
import CardFilmes from '../../compoments/CardFilmes'


const Main = () => {
  return (
    <main>
      <h1>Home</h1>
      <CardFilmes url={'/filmes'} />
    </main>

  )
}
export default Main;
