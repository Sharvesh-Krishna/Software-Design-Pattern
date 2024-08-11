import Navbar from '@/components/Shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {

    return (
        <>
            <div className='h-12 w-screen overflow-x-hidden m-0 p-0 flex flex-col overflow-y-auto'>
                <Navbar />
            </div>
            <div className='h-screen w-screen   flex flex-col'>
                <Outlet />
            </div>
        </>
    )
}

export default HomeLayout