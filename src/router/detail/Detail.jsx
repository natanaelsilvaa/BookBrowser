import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import"./Detail.css"

const Detail = () => {
  const { id } = useParams()

  const url = 'http://localhost:3000/books/' + id


  const { data, loading, error } = useFetch(url)
  console.log(data)

  return (
    <>
      <h4 className="hearder">Detalhes</h4>

      {loading && <p>Carregando Dados...</p>}

      {error && <p>{error}</p>}

      {data && (
        
        <div className="quadroDetail">
        <img src={data.img} className="img-detail" /> 

          <div className="books-detail">

          <p><b>Título: </b>{data.name}</p>
          <p><b>Sobre: </b>{data.sobre}</p>
          <p><b>Autor : </b>{data.autor}</p>

          </div>

        </div>
      )}


    </>
  )
}

export default Detail