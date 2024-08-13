import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import cardpic from '@/assets/img/Designer.jpeg';
import cardpic1 from '@/assets/img/Designer-2.jpeg';
import cardpic2 from '@/assets/img/Designer-5.webp';
import cardpic3 from '@/assets/img/Designer-11.png';
import cardpic5 from '@/assets/img/Designer-10.jpeg';
import cardpic6 from '@/assets/img/Designer-9.png';
import home2 from '@/assets/img/home2.jpg'
import demoImage from '/src/assets/img/demoImage-removebg-preview.png';
import Footer from '@/components/Shared/Footer';
import { Button } from '@/components/ui/button';
import TextRevealByWord from '@/components/magicui/text-reveal';
import TypingAnimation from '@/components/magicui/typing-animation';
import GradualSpacing from '@/components/magicui/gradual-spacing';

import { Link, useNavigate } from 'react-router-dom';
import Pricing from './Pricing';

const Home = () => {
    const navigate =  useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const cards = [
        {
            title: "Streamlined Scheduling",
            description: "Effortless Scheduling",
            content: "Quickly organize and manage shifts with our intuitive scheduling tools. Reduce manual effort and errors.",
            image: cardpic1
        },
        {
            title: "Instant Notifications",
            description: "Real-Time Updates",
            content: "Stay informed with instant updates and notifications. Ensure everyone is always on the same page.",
            image: cardpic2
        },
        {
            title: "Access Anywhere",
            description: "Mobile-Friendly Platform",
            content: "Manage your schedules and view updates from anywhere, whether on your phone, tablet, or computer.",
            image: cardpic3
        },
        {
            title: "Flexible Shift Swapping",
            description: "Easy Shift Swapping",
            content: "Allow team members to swap shifts effortlessly, reducing administrative hassle and improving flexibility.",
            image: cardpic
        },
        {
            title: "Compliance Simplified",
            description: "Automated Compliance Tracking",
            content: "Ensure that your schedules adhere to labor laws and regulations automatically, avoiding mistakes.",
            image: cardpic5
        },
        {
            title: "Insightful Analytics",
            description: "Comprehensive Reporting",
            content: "Access detailed reports and analytics to gain valuable insights into your team performance.",
            image: cardpic6
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(cards.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(cards.length / 3)) % Math.ceil(cards.length / 3));
    };

    const handlePricingNavigation = () => {
        navigate('/pricing');
    };

    // Automatically slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // 5000 milliseconds = 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='mt-[39%] mb-12 h-full w-full -z-10 flex flex-col justify-center items-center pt-16'>
            <div className='flex flex-col'>
                <div className='h-5/6 w-full flex flex-col'>
                    <div className='h-screen flex flex-col font-bold justify-center items-center'>
                        <GradualSpacing className="inline-block bg-gradient-to-t from-blue-700 via-green-500 to-indigo-800 bg-clip-text text-transparent md:text-[7rem] md:leading-[6rem]" text='SHIFTSYMPHONY' />
                        <div className="mt-2 text-3xl"> "Orchestrating your workforce with precision and efficiency." </div>
                    </div>
                </div>

                <div className='relative flex items-center justify-center w-full my-10'>
                    <button onClick={prevSlide} className='absolute left-5 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-3 rounded-full hover:bg-gray-200 focus:outline-none z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className='w-5/6 flex justify-center overflow-hidden'>
                        <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {cards.map((card, index) => (
                                <div key={index} className='w-full md:w-1/3 flex-shrink-0'>
                                    <Card className='max-w-xs mx-auto'>
                                        <CardHeader>
                                            <CardTitle className='text-2xl font-semibold'>{card.title}</CardTitle>
                                            <CardDescription className='text-lg font-medium'>{card.description}</CardDescription>
                                        </CardHeader>
                                        <img src={card.image} alt={card.title} className='w-full h-40 object-cover rounded-t' />
                                        <CardContent>
                                            <p className='text-base'>{card.content}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <button className='w-full bg-blue-700 text-white py-2 rounded'>Learn More</button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={nextSlide} className='absolute right-5 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-3 rounded-full hover:bg-gray-200 focus:outline-none z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className='mt-[2%] mb-[2%] gap-6 h-5/6 w-full flex flex-row'>
                    <div className='w-1/2 flex flex-col'>
                        <div className='mt-16 flex font-bold text-center text-4xl justify-center items-center'>
                            "Empower your team with hassle-free scheduling, instant notifications, and comprehensive analytics, accessible anytime, anywhere."
                        </div>

                        <Button className='w-1/2 my-10 mx-[23%] bg-blue-700 text-white py-2 rounded' onClick={handlePricingNavigation}>
                            Try now
                        </Button>
                    </div>
                    <div className='w-1/2 flex flex-row-reverse'>
                        <img src={home2} alt="Demo" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
