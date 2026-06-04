

const Header = () => {
  return (
    <header id="header">
      <div className="container">
    <div className="nav-container">
          <img className="mr-8" src="/src/assets/images/ShopHub.png" alt="shophublogo" />
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Deals</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div className="input-div relative">
          <img className="absolute top-3.5 left-2" src="/src/assets/images/search.png" alt="search-icon" />
          <input className="w-full h-10.5 placeholder:text-[#ADAEBC] border border-[#E5E7EB] rounded-lg placeholder:pl-.75 focus:outline-none pl-8" type="text" placeholder="Search products..." />
        </div>
        <div className="cart-nav">
          <div className="cart-icon">
            <span className="w-5 h-5 bg-[red] text-white rounded-full inline-block pl-2 absolute top-0 right-5">3</span>
          <button><img src="/src/assets/images/cart.png" alt="cart-icon" /></button>
          </div>
          <button>
          <img className="mt-5" src="/src/assets/images/user-2.svg" alt="user-icon" />
          </button>
          
        </div>
    </div>
      </div>
    </header>
    
  
  )
}

export default Header