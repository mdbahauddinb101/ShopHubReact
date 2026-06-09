

const Footer = () => {
  return (
   <footer id="footer">
     <div className="container">
        <div className="footer-container">
            <div className="first-div">
                <h5 className="text-white font-bold text-[20px] leading-7 mb-4">ShopHub</h5>
                <p className="text-[#9CA3AF] font-normal text-[16px] leading-6 mb-4 w-50 md:w-67.25">Your one-stop shop for everything you need.</p>
                <div className="flex gap-4">
                    <img src="/src/assets/images/facebook.png" alt="fb" />
                    <img src="/src/assets/images/twitter.png" alt="twitter" />
                    <img src="/src/assets/images/instagram.png" alt="instagram" />
                </div>
                
            </div>

            <ul>
                    <li className="font-semibold text-[16px] leading-6 mb-4 text-[#FFFFFF]">Quick Links</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-1.5">Home</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-1.5">Categories</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-1.5">Deals</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF]">About Us</li>
                </ul>

                <ul>
                    <li  className="font-semibold text-[16px] leading-6 mb-4 text-[#FFFFFF]">Customer Service</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-1.5" >Contact Us</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-1.5">Shipping Info</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-1.5">Returns</li>
                    <li className="font-normal text-[16px] leading-6 text-[#9CA3AF]">FAQ</li>
                </ul>
                <div className="last-div">
                    <h5 className="font-semibold text-[16px] leading-6 mb-4 text-[#FFFFFF]">Newsletter</h5>
                    <p className="font-normal text-[16px] leading-6 text-[#9CA3AF] mb-4">Subscribe for updates and deals</p>
                    <div className="input-container">
                        <input className="border border-[#E5E7EB] max-w-66.5 h-10 bg-white rounded-tl-lg rounded-bl-lg
                         placeholder:text-[#9CA3AF] placeholder:pl-.75 focus:outline-none pl-4 hidden sm:block" type="text" placeholder="Your email" />
                        <button className="bg-[#3B82F6] font-normal text-[16px]    text-[#FFFFFF] rounded-tr-lg rounded-br-lg p-2">Subscribe</button>
                    </div>
                </div>

        </div>
        <hr className="mt-8 text-[#1F2937]"></hr>
        <h6 className="font-normal text-[16px] leading-6 text-[#9CA3AF] mt-8.25 text-center">© 2024 ShopHub. All rights reserved.</h6>
     </div>
   </footer>
  )
}

export default Footer