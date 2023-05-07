// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import { getStarship } from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  console.log('starship', starshipDetails)
  
  return (
    <main>
      <div className="starship-details">
        <h1>Starship Details</h1>
        <h2>Name: {starshipDetails.name}</h2>
        <h2>Model: {starshipDetails.model}</h2>
      </div>
    </main>
  )
}

export default StarshipDetails