import logo from '../../../assets/images/logo.webp'

const Logo = () => {
      return (
            <section className=" flex flex-col items-center gap-1 ">
                  <img src={logo} alt="" className=" w-10 md:w-16 " />
                  <p className=" text-xxs text-light ">ECO-VIGIA</p>
            </section>
      )
}

export default Logo