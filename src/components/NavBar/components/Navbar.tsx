import BtnAdd from "./BtnAdd"
import BtnMap from "./BtnMap"
import BtnProfile from "./BtnProfile"

const Navbar = () => {
  return (
    <section className=" absolute bottom-0 left-0 z-1000 w-full bg-navbar flex justify-around pt-1.5 pb-5 rounded-t-2xl ">
      <BtnMap />
      <BtnAdd />
      <BtnProfile />
    </section>
  )
}

export default Navbar