import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Search = () => {

  const [params] = useSearchParams("")

  const url = "http://localhost:3000/books?" + params;

  const { data, error, loaging } = useFetch(url)


  return (
    <div>
      <h4 className="hearder">Resultados</h4>

      {loaging && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      <div className="quadro">

        {data && data.map((books) => (
          <div key={books.id} className="books">
            <Link to={`/books/${books.id}`}>
            <img src={books.img} />
            <p><b>{books.name}</b></p>
            <p className="price">R$ {books.price}</p>
            <p>por {books.autor}</p>
              </Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Search