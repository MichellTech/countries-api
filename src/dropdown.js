// import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

// const countryOptions = [
//   { key: 'af', value: 'af', text: 'Africa' },
//   { key: 'ax', value: 'ax', text: 'America' },
//   { key: 'al', value: 'al', text: 'Asia' },
//   { key: 'dz', value: 'dz', text: 'Europe' },
//   { key: 'as', value: 'as', text: 'Oceania' },
// ]

// const DropdownExampleSearchSelection = () => (
//   <Dropdown
//     placeholder='continent '
//     fluid
//     search
//     selection
//     options={countryOptions}
//     className='dropdown'
//   />
// )

// export default DropdownExampleSearchSelection

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Card, Input } from 'semantic-ui-react'
// export default function Posts() {
//   const [info, setInfo] = useState([])
//   const [filteredResults, setFilteredResults] = useState([])
//   const [searchInput, setSearchInput] = useState('')
//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
//       setInfo(response.data)
//     })
//   }, [])

//   const searchItems = (searchValue) => {
//     setSearchInput(searchValue)
//     if (searchInput !== '') {
//       const filteredData = APIData.filter((item) => {
//         return Object.values(item)
//           .join('')
//           .toLowerCase()
//           .includes(searchInput.toLowerCase())
//       })
//       setFilteredResults(filteredData)
//     } else {
//       setFilteredResults(APIData)
//     }
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <Input
//         icon='search'
//         placeholder='Search...'
//         onChange={(e) => searchItems(e.target.value)}
//       />
//       <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
//         {searchInput.length > 1
//           ? filteredResults.map((item) => {
//               return (
//                 <Card>
//                   <Card.Content>
//                     <Card.Header>{item.name}</Card.Header>
//                     <Card.Description>{item.email}</Card.Description>
//                   </Card.Content>
//                 </Card>
//               )
//             })
//           : APIData.map((item) => {
//               return (
//                 <Card>
//                   <Card.Content>
//                     <Card.Header>{item.name}</Card.Header>
//                     <Card.Description>{item.email}</Card.Description>
//                   </Card.Content>
//                 </Card>
//               )
//             })}
//       </Card.Group>
//     </div>
//   )
// }

// import React, { useState } from 'react'
// import { useEffect } from 'react'

// const mainurl = 'https://restcountries.com/v3.1/all'
// const searchurl = 'https://restcountries.com/v3.1/name/'
// const regionsearch = 'https://restcountries.com/v3.1/region/'

// function App() {
//   const [info, setInfo] = useState([])
//   const [query, setQuery] = useState('')
//   const [theme, setTheme] = useState(true)
//   const [loading, setLoading] = useState(true)
//   const [filterparams, setFilterparams] = useState('')
//   const [latest, setLatest] = useState([])
//   // const changeColor = () => {
//   //   if (theme === 'light-theme') {
//   //     setTheme('dark-theme')
//   //   } else {
//   //     setTheme('light-theme')
//   //   }
//   // }
//   // document.documentElement.className = theme
//   const changeColor = () => {
//     setTheme(!theme)
//   }
//   const fetchCountry = async () => {
//     let url
//     if (filterparams) {
//       url = `${regionsearch}${filterparams}`
//     } else if (query) {
//       //  url = `${searchurl}${query}`
//       console.log(query, info)
//     } else {
//       url = `${mainurl}`
//     }
//     try {
//       const resposne = await fetch(url)
//       const data = await resposne.json()

//       setInfo(data)
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     fetchCountry()
//   }, [info, theme, filterparams, query])

//   // const combineSearch = (info) => {
//   //   if (query !== '' && filterparams !== '') {
//   //     const filteredData = info.filter((item) => {
//   //       return Object.values(item)
//   //         .join('')
//   //         .toLowerCase()
//   //         .includes(query.toLowerCase())
//   //     })
//   //     setLatest(filteredData)
//   //     console.log(latest)
//   //   }

//   return (
//     <main className={`${theme ? 'white-theme' : 'dark-theme'} `}>
//       <header>
//         <nav className='section1'>
//           <div className='nav-bar'>
//             <h3>where in the world?</h3>
//             <button className='btn' onClick={changeColor}>
//               {theme ? 'Dark mood' : 'Light mood'}
//             </button>
//           </div>
//         </nav>
//       </header>
//       <section className='search section'>
//         <div className='search-form'>
//           <form>
//             <input
//               type='text'
//               placeholder='Search for a country'
//               className='input-search'
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </form>
//           <div>
//             {/* <DropdownExampleSearchSelection /> */}
//             {/* <h4>Filter by region</h4>
//             <AiFillCaretDown className='icon' /> */}
//             <select
//               type='text'
//               placeholder='Filter Countries By Region'
//               value={filterparams}
//               onChange={(e) => setFilterparams(e.target.value)}
//               className='dropdown'
//             >
//               <option value=''>Filter by continent</option>
//               <option value='Africa'>Africa</option>
//               <option value='America'>America</option>
//               <option value='Asia'>Asia</option>
//               <option value='Europe'>Europe</option>
//               <option value='Oceania'>Oceania</option>
//             </select>
//             {/* <select className='dropdown'>
//               <option selected value='filter'>
//                 Filter by continent
//               </option>
//               <option value='Africa'>Africa</option>
//               <option value='America'>America</option>
//               <option value='Asia'>Asia</option>
//               <option value='Europe'>Europe</option>
//               <option value='Oceania'>Oceania</option>
//             </select> */}
//           </div>
//         </div>
//       </section>

//       <section className='section'>
//         <div className={`${loading ? 'loader' : ''} `}></div>
//         <div className='cards'>
//           {info.length > 0 ? (
//             info.map((item, i) => {
//               const { name, capital, region, population, flags } = item

//               return (
//                 <div className='card' key={i}>
//                   <div className='card-image'>
//                     <img src={flags.png} alt='flag' className='flag' />
//                   </div>
//                   <div className='card-info'>
//                     <h2>{name.common}</h2>
//                     <p>
//                       Popultion: <span className='text-span'>{population}</span>
//                     </p>
//                     <p>
//                       region:<span className='text-span'>{region}</span>
//                     </p>
//                     <p>
//                       capital:<span className='text-span'>{capital}</span>
//                     </p>
//                   </div>
//                 </div>
//               )
//             })
//           ) : (
//             <h1 className={`${loading ? 'error hide' : 'error'} `}>
//               No country found
//             </h1>
//           )}
//         </div>
//       </section>
//     </main>
//   )
// }

// export default App
