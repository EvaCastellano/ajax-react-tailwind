import ReadMoreReact from 'read-more-react'

function FilaTabla({ plato, index }) {
  const {
    plato: nombrePlato,
    descripcion,
    precio,
    categoria,
    restaurante,
  } = plato
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{nombrePlato}</td>
      <td>
        <ReadMoreReact text={descripcion || ''} />
      </td>
      <td>{precio.toFixed(2)} €</td>
      <td>{categoria}</td>
      <td>{restaurante}</td>
    </tr>
  )
}

export default FilaTabla
