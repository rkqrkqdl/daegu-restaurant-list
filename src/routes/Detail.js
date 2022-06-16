import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { location, id } = useParams()
  const [loading, setLoading] = useState(true)
  const [restaurant, setRestaurant] = useState('')
  const getRestaurant = async () => {
    const response = await fetch(`/kor/api/tasty.html?mode=json&addr=${location}`)
    const json = await response.json()
    const restaurants = json.data
    setRestaurant(restaurants.find(x => x.OPENDATA_ID === id))
    setLoading(false)
  }
  useEffect(() => {
    getRestaurant()
  }, [])

  console.log(restaurant)

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{restaurant.BZ_NM}</h1>
      <h4>카테고리 : {restaurant.FD_CS}</h4>
      <h4>영업 시간 : {restaurant.MBZ_HR}</h4>
      <h4>주소 : {restaurant.GNG_CS}</h4>
      <h4>연락처 : {restaurant.TLNO}</h4>
      <h4>설명 : {restaurant.SMPL_DESC}</h4>
    </div>
  )
}

export default Detail
