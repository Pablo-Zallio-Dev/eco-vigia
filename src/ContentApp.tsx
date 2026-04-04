import IncidentForms from "./components/IncidentForm/components/IncidentForms"
import MapContent from "./components/Map/components/MapContent"
import Navbar from "./components/NavBar/components/Navbar"
const ContentApp = () => {
  return (
    <>
          <MapContent />
      <IncidentForms />
      <Navbar />
    </>
  )
}

export default ContentApp