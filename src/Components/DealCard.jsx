

const DealCard = ({deal}) => {
  return (
    <div className={`w-97.5 h-42 rounded-lg p-6 ${deal.bg}`}>
        <h3 className="font-bold text-[24px] leading-8 mb-2 text-[#FFFFFF]">{deal.h3}</h3>
        <p className="font-normal text-[16px] leading-6 mb-4 text-[#FFFFFF]">{deal.p}</p>
        <button className={`rounded-lg text-[16px] leading-6 py-2 px-4 bg-[#E5E7EB] ${deal.color} border border-[#E5E7EB]`}>{deal.text}</button>
    </div>
  )
}

export default DealCard