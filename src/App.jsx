import { useState } from 'react'
import './App.css'
import Lista from './Components/Lista'
function App() {
  const [search, setSearch] = useState('')
  const [searchList, setSearchList] = useState([])
  const [error, setError] = useState(false)
  let doctores = [
    { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
    { id: 2, nombre: 'Julius Hibbert' , especialidad: 'Dermatologo'},
    { id: 3, nombre: 'Nick Riviera' , especialidad: 'Otrorrinonaringologo'},
    { id: 4, nombre: 'John Zoidberg ' , especialidad: 'Cirujano'}
  ]

  const handleSearch = () => {
      const filteredDocs = doctores.filter((doctor) => doctor.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      setSearchList(filteredDocs)
      if(searchList.length == 0 && search.length > 0){
        setError(true)
      } else {
        setError(false)
      }
      console.log(search)
  }

  return (
    <>
      <input type="text" placeholder='Búsqueda 🔍' onChange={(event) => setSearch(event.target.value.trim())}/>
      <button onClick={handleSearch}>🔍</button>
      {searchList.length > 0 ? null : <Lista doctores={doctores}/>}
      {search}

      {searchList.length > 0  ?
      <>
        <h2>Doctores Encontrados</h2>
        <Lista doctores={searchList}/>
      </>
      : null
      }
      {error && <h3>No se han encontrado doctores</h3> }
    </>
  )
}

export default App
