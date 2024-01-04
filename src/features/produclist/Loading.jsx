import Empty from '../../assets/empty.png'

const Loading = () => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 py-5 px-10">
        <div className=" animate-pulse group bg-white rounded-xl border shadow p-4">
          <div className="relative w-[80%] h-[250px] mx-auto overflow-hidden bg-slate-200 rounded"></div>
          <div className="flex flex-col gap-6 mt-8 bg-slate-200 rounded h-5 "></div>
          <div className="flex flex-col gap-6 mt-2 bg-slate-200 rounded h-5"></div>
        </div>
        <div className=" animate-pulse group bg-white rounded-xl border shadow p-4">
          <div className="relative w-[80%] h-[250px] mx-auto overflow-hidden bg-slate-200 rounded"></div>
          <div className="flex flex-col gap-6 mt-8 bg-slate-200 rounded h-5 "></div>
          <div className="flex flex-col gap-6 mt-2 bg-slate-200 rounded h-5"></div>
        </div>
        <div className=" animate-pulse group bg-white rounded-xl border shadow p-4">
          <div className="relative w-[80%] h-[250px] mx-auto overflow-hidden bg-slate-200 rounded"></div>
          <div className="flex flex-col gap-6 mt-8 bg-slate-200 rounded h-5 "></div>
          <div className="flex flex-col gap-6 mt-2 bg-slate-200 rounded h-5"></div>
        </div>
        <div className=" animate-pulse group bg-white rounded-xl border shadow p-4">
          <div className="relative w-[80%] h-[250px] mx-auto overflow-hidden bg-slate-200 rounded"></div>
          <div className="flex flex-col gap-6 mt-8 bg-slate-200 rounded h-5 "></div>
          <div className="flex flex-col gap-6 mt-2 bg-slate-200 rounded h-5"></div>
        </div>
      </div>
    </>
  )
}

export const EmptyProduct = () => {
  return (
    <div className="col-span-full">
    <div className="flex flex-col items-center justify-center min-h-[68vh] mobile:min-h-[62vh]">
      <img src={Empty} alt="Box Product Empty" className="w-24" />
      <p className="text-gray-400 font-semibold text-lg mt-5">
        No products found.
      </p>
    </div>
  </div>
  )
  
}

export default Loading
