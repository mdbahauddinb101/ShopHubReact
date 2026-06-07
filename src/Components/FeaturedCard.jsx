

const FeaturedCard = ({value}) => {
  return (
    <div className="w-71.5 h-86 p-4 bg-white rounded-lg">
        <img className="mb-3" src={value.src}/>
        <h3 className=" font-semibold text-[16px] mb-2">{value.name}</h3>
        <p className="font-normal text-[14px] text-[#4B5563] mb-2.75">{value.description}</p>
        <div clossName="flex items-center mr-28">
            <span className="font-bold text-[20px] leading-7 text-[#111827] mr-28">{value.price}</span>
            <button><img src={value.btn}/></button>

        </div>
    </div>
  )
}

export default FeaturedCard