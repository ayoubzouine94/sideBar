import React,{useState} from 'react';
import {FaTh,FaBars} from 'react-icons/fa';
import {RiArticleFill,RiFolder4Fill} from 'react-icons/ri';
import {MdImportExport,MdInventory2} from 'react-icons/md';
import {GiHistogram} from 'react-icons/gi';
import {BiImport} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';

const SideBar = ({children}) => {
    const[isOpen, setIsopen] = useState(true);
    const toggle = () =>setIsopen(!isOpen)
    const menuItems=[
        {
            path:'/',
            name:'Login',
            icon:<FaTh />,
        },
       
        {
            path:'/article',
            name:'Article',
            icon:<RiArticleFill />
        },
        {
            path:'/dossier',
            name:'Dossier',
            icon:<RiFolder4Fill />
        },
        {
            path:'/logistique',
            name:'Logistique',
            icon:<MdImportExport />
        },
        {
            path:'/fournisseur',
            name:'Fournisseur',
            icon:<BiImport />
        },
        {
            path:'/inventaire',
            name:'Inventaire',
            icon:<MdInventory2 />
        },
        {
            path:'/historique',
            name:'Historique',
            icon:<GiHistogram />
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