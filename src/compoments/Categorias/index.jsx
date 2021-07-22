import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../api/api'




const Categorias = () => {
  const [categorias, setCategorias] = useState([])
  useEffect(() => {
    busca(`/categorias`, setCategorias)
  }, [])
  return (
    <div >
      {
        categorias.map((categoria) => (
          <Link to={`/categoria/${categoria.id}`}>
            <h1 >
              {categoria.nome}
            </h1>
          </Link>
        ))
      }
    </div>
  )
}
export default Categorias