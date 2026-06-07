

const Heading = ({props, center}) => {
  return (
    <div className="">
    <h2 className={`text-[30px] font-bold leading-9 mb-8 ${center}`}>{props}</h2>
    </div>
  )
}

export default Heading