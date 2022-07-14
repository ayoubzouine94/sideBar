import React from "react";
import {FaTh,FaUserAlt} from 'react-icons/fa';
import {RiArticleFill,RiFolder4Fill} from 'react-icons/ri';
import {MdImportExport,MdInventory2} from 'react-icons/md';
import {GiHistogram} from 'react-icons/gi';
import {BiImport} from 'react-icons/bi';

export     const menuItems=[
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
    {
        path:'/client',
        name:'Client',
        icon:<FaUserAlt />
    },

    
]