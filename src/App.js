import { useState, useEffect } from 'react'
import Tabla from './Tabla'
import API from './api'

function App() {
  const [categorias, setCategorias] = useState([])
  const [platos, setPlatos] = useState([])
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    fetch(API.CATEGORIES_URL)
      .then((res) => res.json())
      .then((categorias) => setCategorias(categorias))

    fetch(API.DISHES_URL)
      .then((res) => res.json())
      .then((platos) => setPlatos(platos))

    fetch(API.RESTAURANTS_URL)
      .then((res) => res.json())
      .then((restaurantes) => setRestaurantes(restaurantes))
  }, [])

  const datosCaragados = Boolean(
    restaurantes.length && platos.length && categorias.length
  )

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Lista de Restaurantes</h1>
      {datosCaragados && (
        <Tabla
          restaurantes={restaurantes}
          platos={platos}
          categorias={categorias}
        />
      )}
      {!datosCaragados && <p>Cargando datos...</p>}
    </div>
  )
}

export default App
