import CategoryCard from "./CategoryCard"
import Heading from "./Heading"


const Categories = () => {
      const categories = [
        {
            src: "/src/assets/images/cat-1.png",
            name: "Electronics",
        },
        {
            src: "/src/assets/images/cat-2.png",
            name: "Fashion",
        },
        {
            src: "/src/assets/images/cat-3.png",
            name: "Home",
        },
        {
            src: "/src/assets/images/cat-4.png",
            name: "Sports",
        },
        {
            src: "/src/assets/images/cat-5.png",
            name: "Books",
        },
        {
            src: "/src/assets/images/cat-6.png",
            name: "Gaming",
        },

      ]

  return (
   <section id="categories">
    <div className="container">
        <Heading center="text-center" props="Shop by Category" />
        <div className="categories-container">
             {categories.map((item) => (
                <CategoryCard item={item}/>
             ))}
        </div>

    </div>
   </section> 
  )
}

export default Categories