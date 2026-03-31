import Logo from "../../Logo/components/Logo"
import Disconnect from "./Disconnect"

const Navbar = () => {
      return (
                  <section className="absolute bottom-0 left-0 z-1100 flex justify-center w-full  border-amber-400 ">
                        <section className=" w-full lg:w-1/2 bg-navbar flex justify-between items-center px-10 md:px-20  pt-1.5 pb-5  rounded-t-2xl">
                              <Logo />
                              <Disconnect />
                        </section>
                  </section>
      )
}

export default Navbar