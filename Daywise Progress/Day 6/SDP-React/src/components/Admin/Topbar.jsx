import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'
import ProfileImage from '/src/assets/img/graphic-designer-digital-avatar-generative-ai_934475-9292.avif'

const Topbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0 h-[4rem] w-full flex justify-center items-center shadow-sm shadow-primary bg-current '>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
                <ModeToggle />
                <Avatar>
                    <AvatarImage src={ProfileImage} alt="@shadcn" />
                    <AvatarFallback> SP </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar
