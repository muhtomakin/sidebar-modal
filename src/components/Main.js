import React, { useState } from 'react';
import {ReactComponent as SideBarIcon} from '../svgs/sidebar.svg'
import {ReactComponent as CloseIcon} from '../svgs/close.svg'
import {Links, Social} from './Data'

const Main = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }; 

  return (
      <>
        <main>
            <button onClick={openSidebar} className='sidebarToggle'>
                <SideBarIcon />
            </button>
            <button onClick={openModal} className='btn'>show modal</button>       
        </main>
        <aside className={`${isSidebarOpen ? 'sidebar showSidebar' : 'sidebar'}`}>
            <div className='sidebarHeader'>
                <img src='https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg' alt='coddingaddict' />
                <button className='closeBtn' onClick={closeSidebar}>
                    <CloseIcon />
                </button>
            </div>
            <ul className='links'>
                {Links.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.url}>
                                {link.icon}
                                {link.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className='socialIcons'>
                {Social.map((social) => {
                    return(
                        <li key={social.id}>
                            <a href={social.url}>
                                {social.icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </aside>
        <div className={`${isModalOpen ? 'modalOverlay showModal' : 'modalOverlay'}`}>
            <div className='modalContainer'>
                <h3>modal content</h3>
                <button className='closeModalBtn' onClick={closeModal}>
                    <CloseIcon />
                </button>
            </div>
        </div>
      </>
    );
}

export default Main;

