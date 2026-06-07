

const CategoryCard = ({ item }) => {
  return (
    <div className="w-45.5 h-30 text-center flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 bg-[#E5E7EB] rounded-full flex items-center justify-center">
      <img src={item.src} alt={item.name} />
      </div>
      <h3>{item.name}</h3>
    </div>
  )
}

export default CategoryCard