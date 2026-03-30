
const MapStatusTable = () => {
  return (
    <section className=" map__table ">
      <h2 className=" text-xs md:text-sm ">Status</h2>
      <section className=" flex flex-col md:gap-2 ">
            <div className=" flex items-center gap-2 ">
                  <div className=" bg-red-600 rounded-full w-2 h-2 "></div>
                  <div className="md:text-xs ">Abierta</div>
            </div>
            <div className=" flex items-center gap-2 ">
                  <div className=" bg-yellow-400 rounded-full w-2 h-2 "></div>
                  <div className="md:text-xs ">En proceso</div>
            </div>
            <div className=" flex items-center gap-2 ">
                  <div className=" bg-green-600 rounded-full w-2 h-2 "></div>
                  <div className="md:text-xs ">Resuelta</div>
            </div>
      </section>
    </section>
  )
}

export default MapStatusTable