import React,{useState} from 'react';
import {FaTh,FaBars,FaShoppingCart ,FaUserAlt,FaRegChartBar,FaThList,FaCommentAlt} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const SideBar = ({children}) => {
    const[isOpen, setIsopen] = useState(false);
    const toggle = () =>setIsopen(!isOpen)
    const menuItems=[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaTh />,
        },
       
        {
            path:'/about',
            name:'About',
            icon:<FaUserAlt />
        },
        {
            path:'/analytics',
            name:'analytics',
            icon:<FaRegChartBar />
        },
        {
            path:'/comment',
            name:'Comment',
            icon:<FaCommentAlt/>
        },
        {
            path:'/product',
            name:'Product',
            icon:<FaShoppingCart/>
        },
        {
            path:'/productList',
            name:'ProductList',
            icon:<FaThList/>
        },
        
    ]
  return (
    <div className='container'>
        <div style={{width: isOpen ? "250px" :"50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display:isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                <div className="bars" style={{marginLeft:isOpen ? "50px" : "0px"}}>
                   <FaBars onClick={toggle} />   
                </div>
            </div>
            {
                menuItems.map((item , index) =>(
                 <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display:isOpen ? "block" : "none"}}  className="link_text">{item.name}</div>
                 </NavLink>
                )
                
                )
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default SideBar