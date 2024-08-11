import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, BookMarked, Power } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button } from '../ui/button'

const Leftsidebar = () => {
    const navigate = useNavigate()

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/user/dashboard',
            icon: LayoutDashboard
        }, {
            title: 'Report',
            link: '/user/report',
            icon: BookMarked
        }
    ]

    const handleLogout = () => {
        toast.error("You've logged out successfully. Redirecting to homepage...", {
            autoClose: 1500,
            onClose: () => navigate('/')
        })
    }

    return (
        <div className='fixed top-0 left-0 h-full w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary py-5 z-50 '>
            <div className='h-[5%] text-primary font-bold text-2xl flex py-5 justify-center items-center'>
                ShiftSymphony AI
            </div>
            <div className='h-[90%] w-full border-b-2 border-blue-950 flex flex-col justify-start items-center gap-2'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5 border-b-2 border-b-blue-900 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <Button className='p-7 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'
                    variant="outline"
                    onClick={handleLogout}>
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Leftsidebar
