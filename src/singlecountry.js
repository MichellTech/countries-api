import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import flag from './images/flag.jpg'
const endpoint = 'https://restcountries.com/v3.1/name/'

const singlecountry = (i) => {
  const [loadData, setLoadData] = useState([])
  const { name } = useParams()

  const hello = async () => {
    let url
    url = `${endpoint}${name}`
    console.log(url)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setLoadData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    hello()
  }, [name])

  return (
    <div className='main-div section'>
      {loadData.map((item) => {
        const { name, population, flags, region, subregion, capital, borders } =
          item
        console.log(item)
        return (
          <div className='display-content'>
            <div className='display-image'>
              <img src={flags.png} alt='' className='flagging' />
            </div>
            <div className='display-info'>
              <h2>{name.common}</h2>
              <p>
                Official name:
                <span className='text-span'>{name.official}</span>
              </p>
              <p>
                Population:
                <span className='text-span'>{population}</span>
              </p>

              <p>
                Region:
                <span className='text-span'>{region}</span>
              </p>
              <p>
                Sub Region:
                <span className='text-span'>{subregion}</span>
              </p>
              <p>
                Capital:
                <span className='text-span'>{capital}</span>
              </p>

              {/* <p>
                Languages:
                <span className='text-span'>{languages}</span>
              </p> */}
              <p>
                Border Countries:
                <span className='text-span'>{borders[1]}</span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default singlecountry
