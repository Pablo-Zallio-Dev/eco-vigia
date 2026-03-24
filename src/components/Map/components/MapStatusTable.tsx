
const MapStatusTable = () => {
  return (
    <section className=" map__table ">
      <h2 className=" text-xs ">Status</h2>
      <section className=" flex flex-col ">
            <div className=" flex items-center gap-2 ">
                  <div className=" bg-red-600 rounded-full w-2 h-2 "></div>
                  <div className="">Abierta</div>
            </div>
            <div className=" flex items-center gap-2 ">
                  <div className=" bg-yellow-400 rounded-full w-2 h-2 "></div>
                  <div className="">En proceso</div>
            </div>
            <div className=" flex items-center gap-2 ">
                  <div className=" bg-green-600 rounded-full w-2 h-2 "></div>
                  <div className="">Resuelta</div>
            </div>
      </section>
    </section>
  )
}

export default MapStatusTable