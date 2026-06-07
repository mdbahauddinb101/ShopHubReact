

const Banner = () => {
  return (
<section id="banner">
  <div className="container">
    <div className="banner-container">
      <div className="right-banner">
   <h1 className="font-bold text-[60px] leading-15 text-[#FFFFFF] mb-3">
    Summer Sale
   </h1>
   <p className="font-normal text-[20px] leading-7 text-[#DBEAFE] mb-8">
   Up to 70% off on selected items. Limited time offer!
   </p>
   <button className="rounded-lg text-[16px] leading-6 bg-[#E5E7EB] text-[#2563EB] px-8 py-2.5">Shop Now</button>
      </div>
      <img className="left-banner" src="/src/assets/images/banner.png" alt="banner"></img>
    </div>
  </div>
</section>
  )
}

export default Banner