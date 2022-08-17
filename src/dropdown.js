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
