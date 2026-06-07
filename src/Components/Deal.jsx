import DealCard from "./DealCard"
import Heading from "./Heading"


const Deal = () => {
    const dealData = [
        { h3: "Flash Sale",
          p: "Up to 50% off electronics",
          text: "Shop Now",
          bg: "bg-gradient-to-r from-[#EF4444] to-[#EC4899]",
          color: "text-[#EF4444]"
         },
         { h3: "Free Shipping",
          p: "On orders over $50",
          text: "Learn More",
          bg: "bg-gradient-to-r from-[#22C55E] to-[#14B8A6]",
            color: "text-[#22C55E]"
         },
         { h3: "Member Exclusive",
          p: "Extra 20% off for members",
          text: "Join Now",
          bg: "bg-gradient-to-r from-[#A855F7] to-[#6366F1]",
            color: "text-[#A855F7]"
         }
    ]
  return (
    <section id="deal">
        <div className="container">
            <Heading props="Today's Deals" center="text-center" className="mb-8"/>
                <div className="deal-container">
                 {dealData.map((deal) => (
                <DealCard deal={deal}  />
             ))}
                </div>
        </div>
    </section>
  )
}

export default Deal