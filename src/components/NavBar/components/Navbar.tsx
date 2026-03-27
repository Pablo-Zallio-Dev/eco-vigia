import BtnMap from "./BtnMap"
//import BtnProfile from "./BtnProfile"
import logo from '../../../assets/images/logo.webp'

const Navbar = () => {
      return (
            <>
                  <section className="absolute bottom-0 left-0 z-1100 w-full bg-navbar flex flex-col items-center  pt-1.5 pb-5  rounded-t-2xl">

                        <section className=" w-full flex justify-around  ">
                              <BtnMap />
                              {/* <BtnProfile /> */}
                              <section className="">
                              <img src={logo} alt="" className=" w-18 " />
                        </section>
                        </section>
                        
                  </section>
            </>
      )
}

export default Navbar