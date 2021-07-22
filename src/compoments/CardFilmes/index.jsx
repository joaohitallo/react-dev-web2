import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../api/api'
import './styles.css'

const CardFilmes = ({ url }) => {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    busca(url, setFilmes)

  }, [url]);
  console.log(filmes)
  return (
    <section className="cardContainer">
      {
        filmes.map((filmes) => (
          <div>
            <Link className='linkCard' to={`/filmes/${filmes.id}`}>
              <article key={filmes.id}>
                <h3 className="cartao-post__titulo">
                  {filmes.title}
                </h3>
                <p className="cartao-post__met">{filmes.description}</p>
              </article>
            </Link>
          </div>
        ))
      }
    </section>
  )
}

export default CardFilmes