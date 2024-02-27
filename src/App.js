import { useState, useEffect } from 'react'
import Tabla from './Tabla/Tabla'
import API from './api'

function App() {
  const [categorias, setCategorias] = useState([])
  const [platos, setPlatos] = useState([])
  const [restaurantes, setRestaurantes] = useState([])
  const [platosCompletos, setPlatosCompletos] = useState([])

  useEffect(() => {
    fetch(API.CATEGORIES_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la llamada a la API')
        }
        return res.json()
      })
      .then((categorias) => setCategorias(categorias))
      .catch((error) => console.log(error, '********'))

    fetch(API.DISHES_URL)
      .then((res) => res.json())
      .then((platos) => setPlatos(platos))

    fetch(API.RESTAURANTS_URL)
      .then((res) => res.json())
      .then((restaurantes) => setRestaurantes(restaurantes))
  }, [])

  const datosCaragados = Boolean(platosCompletos.length)

  useEffect(() => {
    // merge "restaurantes" and "platos" by fields "restaurante.restauranteID" === "plato.restauranteID"
    const platosExtendido = platos.map((plato) => ({
      ...plato,
      ...restaurantes.find(
        (restaurante) => restaurante.restauranteID === plato.restauranteID
      ),
      ...categorias.find(
        (categoria) => categoria.categoriaID === plato.categoriaID
      ),
    }))
    setPlatosCompletos(platosExtendido)
  }, [restaurantes, platos, categorias])
  console.log(platosCompletos)
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Lista de Restaurantes</h1>
      {datosCaragados && <Tabla platos={platosCompletos} />}
      {!datosCaragados && <p>Cargando datos...</p>}
    </div>
  )
}

export default App