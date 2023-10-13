// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Home.css"
import { useFetch } from "../../hooks/useFetch"

const url = "http://localhost:3000/books"

export const Home = () => {

  const {data, error, loading} = useFetch(url)
 

  return (
    <div>
      <h4 className="hearder">Livros</h4>

        {loading && <p>Carregando Dados...</p>}
        {error && <h2>{error}</h2>} 

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

export default Home