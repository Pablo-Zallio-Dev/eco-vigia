import Spinner from "../../Ux-Ui/Spinner"

const LoadLocation = () => {
  return (
    <section className=" flex flex-col justify-center items-center bg-input  w-full h-screen ">
      <Spinner />
      <p className=" text-light font-black ">Obteniendo datos de ubicacion</p>
    </section>
  )
}

export default LoadLocation