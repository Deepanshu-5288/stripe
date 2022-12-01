import React, { useContext, useState } from "react";
import data from "./data";


const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page:'', links:[]});
    const [location, setLocation] = useState({});

    const closeSidebar = () =>{
        setIsSidebarOpen(false);
    }

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false);
    }

    const openSubmenu = (text, cordinates) =>{
        const page = data.find((link) => link.page === text);
        setPage(page);
        setLocation(cordinates);
        setIsSubmenuOpen(true);
    }

    return (<AppContext.Provider value= {{data, isSidebarOpen, closeSidebar, openSidebar,openSubmenu,closeSubmenu,isSubmenuOpen, page, location}}>
        {children}
    </AppContext.Provider>)
}


export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};