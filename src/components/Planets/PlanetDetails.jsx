// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// services 
import { getPlanet } from "../../services/sw-api"

const PlanetDetails = () => {
  const [planetDetails, setPlanetDetails] = useState({})
  const { planetId } = useParams()

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      const planetData = await getPlanet(planetId)
      setPlanetDetails(planetData)
    }
    fetchPlanetDetails()
  }, [planetId])

  console.log(planetDetails)

  return (
    <>
      <h1>{planetDetails.name} Details</h1>
      <div className="planet-details-container">
        <div className="planet-details">
          <h3>Populations: {planetDetails.population}</h3>
          <h3>Climate: {planetDetails.climate}</h3>
          <h3>Terrain: {planetDetails.terrain}</h3>
          <Link to='/planets'>RETURN</Link>
        </div>
      </div>
    </>
  )
}

export default PlanetDetails