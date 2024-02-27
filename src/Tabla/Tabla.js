import FilaTabla from './FilaTabla'

function Tabla({ platos }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Plato</th>
            <th scope="col">Descripción</th>
            <th scope="col" style={{ width: '5rem' }}>
              Precio
            </th>
            <th scope="col">Categoría</th>
            <th scope="col">Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {platos.map((plato, index) => (
            <FilaTabla
              key={plato.platoID}
              index={index}
              plato={plato}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabla
