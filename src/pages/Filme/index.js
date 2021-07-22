import React, { useState, useEffect } from 'react';
import { busca } from '../../api/api'
import { useParams, useHistory } from 'react-router-dom';

const Filme = () => {
  let history = useHistory()
  const { id } = useParams()
  const [filme, setFilme] = useState({})

  useEffect(() => {
    busca(`/filmes/${id}`, setFilme)
      .catch(() => {
        history.push('/404')
      })
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{filme.title}</h2>
        <p className="carta__texto">{filme.sinopse}</p>
      </article>
    </main>
  )
}

export default Filme