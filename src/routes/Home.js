import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [location, setLocation] = useState('init')
  const [loading, setLoading] = useState(true)
  const [restaurants, setRestaurants] = useState([])
  const getRestaurant = async () => {
    if (location === 'init') {
    } else {
      setLoading(true)
      const response = await fetch(`/kor/api/tasty.html?mode=json&addr=${location}`)
      const json = await response.json()
      setRestaurants(json.data)
      setLoading(false)
    }
  }
  useEffect(() => {
    getRestaurant()
  }, [location])
  const onSelect = event => {
    setLocation(event.target.value)
  }

  return (
    <div>
      <h1>대구 맛집 리스트</h1>
      <br />
      <label htmlFor="selector">검색할 장소를 선택하세요. </label>
      <select id="selector" onChange={onSelect}>
        <option value="init">장소를 선택하세요.</option>
        <option value="동구">동구</option>
        <option value="서구">서구</option>
        <option value="남구">남구</option>
        <option value="북구">북구</option>
        <option value="중구">중구</option>
        <option value="수성구">수성구</option>
        <option value="달서구">달서구</option>
        <option value="달성군">달성군</option>
      </select>
      {location === 'init' ? null : (
        <div>
          <br />
          <hr />
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              <ul>
                {restaurants.map((restaurant, index) => (
                  <li key={restaurant.OPENDATA_ID}>
                    <Link to={`/detail/${location}/${restaurant.OPENDATA_ID}`}>{restaurant.BZ_NM}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
