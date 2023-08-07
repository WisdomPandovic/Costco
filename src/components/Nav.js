import {Link} from 'react-router-dom';
import Logo from '../images/costcoLogoIdentityIntro@3x (1).png';
import NavImg from '../images/23w07136-grocery-2dy.png'
import {FaShoppingCart} from 'react-icons/fa';
import {FaLocationArrow} from 'react-icons/fa';
import { useContext } from 'react';
import { CostcoContext } from './Context/CostcoContext';

function Nav(){
     const{cart}= useContext(CostcoContext);
    
    return(
        <div>
            
            <nav className="first_nav">
                <div className="first_nav_div">
                    <div className="first_nav_menu">
                        <p>While Supplies Last</p>
                        <p>Treasure Hunt</p>
                        <p>What's New</p>
                        <p>Same-Day</p>
                        <p>Online-Only</p>
                        <p>Warehouse Savings</p>
                        <p>Get Email Offers</p>
                        <p>Customers Service</p>
                        <p>US</p>
                    </div>
                </div>

                <div className="second_nav_div">
                    <div className="second_nav_menu">
                        <div className="flex">
                            <div ><img className="logo" src={Logo} alt="" /></div>
                            <div><input type="text" placeholder="Search" /></div>
                        </div>
                        <div className=" custome flex">
                            <Link to='/signup' className="menu1-text"><p >Sign in / Register</p></Link>
                            <div className="menu1-text"><p>Orders & Return</p></div>
                            <div className="cart-icon">
                                <FaShoppingCart className='cart-count'/>
                                <Link to="/cart">Cart</Link>
                                <div className='cart-count'>
                                    {cart.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="main_nav">
                <div className="main_nav_menu ">
                    <div className="menuu"><Link to="/shopcomputer">Shop</Link>
                        <ul className="ul2">
                            <div className="ul2-links">
                                <li><Link to=''><p className="luggage1">Appliances</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Baby</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Beauty</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Clothing, Luggage & Handbags</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Computer</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Costco NEXT</p></Link ></li>
                                <li><Link to=''><p className="luggage1">Electronics</p></Link ></li>
                                <li><Link to=''><p className="luggage1">flora & Gifts Basket</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Furniture</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Gifts Cards & Ticket</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Gourmet Foods</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                               <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                            </div>
                        </ul>
                    </div>

                    <div className="menuu"><Link to=''>Grocery</Link >
                        <ul className="ul2 ">
                            <div className="flex">
                                <div className="ul2-links">
                                    <div><h3>Groceries & Household</h3></div>
                                        <li><Link to=''><p className="luggage1">Appliances</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Baby</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Beauty</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Clothing, Luggage & Handbags</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Computer</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Costco NEXT</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">Electronics</p></Link ></li>
                                        <li><Link to=''><p className="luggage1">flora & Gifts Basket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Furniture</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gifts Cards & Ticket</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Gourmet Foods</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Groceries, Houshold Essentials & Pet</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Health & Personal Care</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Home & Installation Services</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                        <li><Link to=''><p className="luggage1">Holiday & Seasonal</p> </Link ></li>
                                    </div>
    
                                <div className="ul2-links">
                                    <div><h3>Three Ways to Shop</h3></div>
                                    <p>Delivery Methods:</p>
                                    <p>Standard</p>
                                    <p>Same-Day Delivery</p>
                                    <h5>2-Day Delivery</h5>

                            <div><img src={NavImg} alt=""/></div>
                            
                        </div>
                     </div>
                </ul>
                    </div>

            <div className="menuu"><Link to=''>Same-Day</Link >
                <div className="ul2 center">
                    <h3>Quickest Delivery</h3>
                    <h3>Same-Day in Most Areas</h3>
                    <img src="" alt=""/>
                    <h3>Prices and Availabily Will Vary</h3>
                    <button>Shop Same-Day Now</button>
                </div>
            </div>

            <div><Link to=''>Deals</Link ></div>
            <div><Link to=''>Bussiness Delivery</Link ></div>
            <div><Link to=''>Optical</Link ></div>
            <div><Link to=''>Pharmacy</Link ></div>
            <div><Link to=''>Services</Link ></div>
            <div><Link to=''>Photo</Link ></div>
            <div><Link to=''>Travel</Link ></div>
            <div><Link to=''>Membership</Link ></div>
            <div><Link to=''>Locations</Link ></div>
        </div>
    </header>

            <div className="delivery_route">
            <div className="flex">
            <div className="flex">
                <div>
                    <h5>My Warehouse</h5>
                    <h3><FaLocationArrow/> Seattle</h3>
                </div>

                <div>
                    <h5>Delivery Location</h5>
                    <h3>98101</h3>
                </div>
            </div>

            <div>
                <p>List / Reorder</p>
            </div>
            </div>
            </div><hr></hr>
            
        </div>

    )
}
export default Nav;