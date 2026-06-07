import Heading from "./Heading"
import FeaturedCard from "./FeaturedCard"


const Featured = () => {
    const products = [
        {
            src: "/src/assets/images/fea-1.png",
            name: "Wireless Headphones",
            description: "Premium quality sound.",
            price: "$99.99",
            btn: "/src/assets/images/button.png",
        },
        {
            src: "/src/assets/images/fea-2.png",
            name: "Smartphone Pro",
            description: "Latest technology",
            price: "$799.99",
             btn: "/src/assets/images/button.png",
        },
        {
            src: "/src/assets/images/fea-3.png",
            name: "Designer Sneakers",
            description: "Comfortable & stylish",
            price: "$129.99",
              btn: "/src/assets/images/button.png",
        },
        
        {
            src: "/src/assets/images/fea-4.png",
            name: "Gaming Laptop",
            description: "High performance",
            price: "$1,299.99",
              btn: "/src/assets/images/button.png",
        },
        
    ]
  return (
    <section id="featured">
        <div className="container">
            <div className="featured-header">
            <Heading  props="Featured Products"/>
            <button className="featured-btn">View All</button>
            </div>
            <div className="featured-container">
               {products.map((product) => (
                <FeaturedCard
                value={product} 
                />  
             ))}
            </div>

        </div>
    </section>
  )
}

export default Featured