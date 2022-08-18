import React, { useState } from 'react'
import { useEffect } from 'react'

const url = 'https://restcountries.com/v3.1/all'

function App() {
  const [info, setInfo] = useState([])
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState(true)
  const [loading, setLoading] = useState(true)
  const [filterparams, setFilterparams] = useState('')
  const [allData, setAllData] = useState([])
  const [filterCont, setFilteredCont] = useState([])

  const changeColor = () => {
    setTheme(!theme)
  }
  const fetchCountry = async () => {
    try {
      const resposne = await fetch(url)
      const data = await resposne.json()
      setInfo(data)
      setAllData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCountry()
  }, [])

  const fetchSearch = (value, arrayDatas) => {
    let newCountry = arrayDatas.filter((item) =>
      item.name.common.toLowerCase().includes(value.toLowerCase())
    )
    setInfo(newCountry)
  }
  useEffect(() => {
    if (query && filterparams) {
      return fetchSearch(query, filterCont)
    }
    if (query) {
      fetchSearch(query, allData)
    }
  }, [query, filterparams])

  const fetchCont = (value) => {
    let newCont = allData.filter(
      (item) => item.region.toLowerCase() === value.toLowerCase()
    )
    setInfo(newCont)
    setFilteredCont(newCont)
  }
  useEffect(() => {
    if (filterparams) {
      fetchCont(filterparams)
    } else {
      setFilteredCont([])
    }
  }, [filterparams])

  return (
    <main className={`${theme ? 'white-theme' : 'dark-theme'} `}>
      <header>
        <nav className='section1'>
          <div className='nav-bar'>
            <h3>where in the world?</h3>
            <button className='btn' onClick={changeColor}>
              {theme ? 'Dark mood' : 'Light mood'}
            </button>
          </div>
        </nav>
      </header>
      <section className='search section'>
        <div className='search-form'>
          <form>
            <input
              type='text'
              placeholder='Search for a country'
              className='input-search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <div>
            <select
              type='text'
              placeholder='Filter Countries By Region'
              value={filterparams}
              onChange={(e) => setFilterparams(e.target.value)}
              className='dropdown'
            >
              <option value='all'>Filter by continent</option>
              <option value='Africa'>Africa</option>
              <option value='Americas'>America</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Oceania'>Oceania</option>
            </select>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className={`${loading ? 'loader' : ''} `}></div>
        <div className='cards'>
          {info.length > 0 ? (
            info
              .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
              .map((item, i) => {
                const { name, capital, region, population, flags } = item

                return (
                  <div className='card' key={i}>
                    <div className='card-image'>
                      <img src={flags.png} alt='flag' className='flag' />
                    </div>
                    <div className='card-info'>
                      <h2>{name.common}</h2>
                      <p>
                        Popultion:{' '}
                        <span className='text-span'>{population}</span>
                      </p>
                      <p>
                        region:<span className='text-span'>{region}</span>
                      </p>
                      <p>
                        capital:<span className='text-span'>{capital}</span>
                      </p>
                    </div>
                  </div>
                )
              })
          ) : (
            <h1 className={`${loading ? 'error hide' : 'error'} `}>
              No country found
            </h1>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
