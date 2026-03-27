import IncidentForms from "./components/IncidentForm/components/IncidentForms"
import MapContent from "./components/Map/components/MapContent"
import MapStatusTable from "./components/Map/components/MapStatusTable"
import Navbar from "./components/NavBar/components/Navbar"

const App = () => {

      
  return (
      <>
      <section className=" h-dvh ">

      <MapContent />
      <MapStatusTable />
      <IncidentForms />
      <Navbar />
      </section>


      </>
)
}

export default App