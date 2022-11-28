import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import MyMarquee from "../components/MyMarquee";

export default function Home() {
    const [displayLogo, setDisplayLogo] = useState(true);
    const [offSet, setOffSet] = useState(null);
    const imgRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const setScroll = () => {
        if (window.innerWidth < 1024) {
            setDisplayLogo(true);
            return;
        }
        if (
            imgRef.current.getBoundingClientRect().bottom < 0 &&
            window.innerWidth > 1024
        ) {
            setDisplayLogo(true);
        } else if (
            imgRef.current.getBoundingClientRect().bottom > 0 &&
            window.innerWidth > 1024
        ) {
            setDisplayLogo(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", setScroll);
        return () => {
            window.removeEventListener("scroll", setScroll);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Gumroad - Sell what you know and see what sticks</title>
                <meta
                    name="description"
                    content="A template for nextjs with tailwindcss"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="px-[2rem] py-[2vw]  hidden lg:block border-b-2 border-b-black">
                    <img src="/gumroad-logo.svg" width="100%" ref={imgRef} />
                </div>
                <div
                    className={`flex justify-between items-center sticky z-10 top-0 pl-[2rem] bg-white border-b-2 border-b-black ${
                        isOpen ? "nav active" : ""
                    }`}
                >
                    <div className={`${displayLogo ? "block" : "hidden"}  `}>
                        <img src="/gumroad-logo.svg" width="100%" />
                    </div>
                    <div className=" gap-10 font-semibold hidden lg:flex">
                        <div className="nav-link">Features</div>
                        <div className="nav-link">Pricing</div>
                        <div className="nav-link">University</div>
                        <div className="nav-link">Blog</div>
                        <div className="nav-link">Discover</div>
                    </div>
                    <div className=" lg:flex font-semibold hidden">
                        <div className=" px-[3vw] py-[1.5rem] border-l-2 border-black hover:bg-[#ff90e8]">
                            Login
                        </div>
                        <div className=" px-[3vw] py-[1.5rem] text-white bg-black hover:text-black hover:bg-[#ff90e8] border-l-2 border-black">
                            Start Selling
                        </div>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className={`burger ${
                            isOpen ? "active" : ""
                        } transition-all duration-200 lg:hidden p-[1.5rem]`}
                    >
                        <div className="bar transition-all duration-200 w-8 h-1 bg-black"></div>
                        <div className="bar transition-all duration-200 w-8 h-1 mt-2 bg-black"></div>
                        <div className="bar transition-all duration-200 w-8 h-1 mt-2 bg-black"></div>
                    </button>
                </div>
                <div
                    className={`menu lg:hidden fixed h-screen -z-10 bg-black w-screen top-10 ${
                        isOpen ? "active" : ""
                    }`}
                >
                    <div className="h-screen px-10 lg:hidden">
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            Login
                        </div>
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            Start Selling
                        </div>
                        <hr />
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            Features
                        </div>
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            Pricing
                        </div>
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            University
                        </div>
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            Blog
                        </div>
                        <div className="text-white text-lg font-bold hover:text-[#ff90e8] py-6">
                            Discover
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col lg:flex-row items-center">
                    <div className=" p-[6.5vw] w-full lg:w-1/2 h-[90vh] bg-[#ff90e8] border-r-2 border-black">
                        <h1 className="text-center lg:text-left text-[5rem] tracking-wide font-bold leading-tight">
                            Go From <br />
                            <span> zero to $1 </span>
                        </h1>
                        <p className="text-center lg:text-left text-[1.5rem] font-semibold pt-10">
                            With Gumroad, anyone can earn their first dollar
                            online. Just start with what you know, see what
                            sticks, and get paid. It’s that easy.
                        </p>
                        <button className="mt-10 px-[2rem] py-[1.1rem] rounded-md text-white bg-black text-center text-[1.25rem] font-semibold">
                            Start Selling
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 h-[90vh] bg-[#ffc900] py-14">
                        <img
                            src="/profile.png"
                            width="70%"
                            className="mx-auto"
                        />
                        <p className="pt-10 pl-10 text-xl font-semibold">
                            Vegalia sells Procreate brushes
                        </p>
                    </div>
                </div>
                <MyMarquee />
                <div className="py-20 text-center text-4xl w-[70%] md:w-[60%] mx-auto">
                    You know all those great ideas you have? We want you to try
                    them, lots of them, and find out what works.
                </div>
                <div className="border-t-2 border-t-black border-b-black border-b-2 grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-[#b23287] text-center flex items-center justify-center px-40 border-black border-b-2 font-semibold text-4xl min-h-[22rem]">Don’t take risks. That’s scary!</div>
                    <div className="bg-[#ff90e8] text-center flex border-black border-b-2 border-l-2 items-center justify-center px-40 font-semibold text-4xl min-h-[22rem]">Place small bets.
That’s exciting!</div>
                    <div className="relative bg-black p-10">
                        <img src="/book.svg" className="mx-auto" alt="" />
                        <div className="absolute bg-white top-2 text-black p-6 text-xl font-semibold rounded-lg border-black border-2">
                        ...Instead of selling a book...
                        </div>
                    </div>
                    <div className="relative p-10 border-l-2 border-black bg-[#ffc900]">
                        <div className="absolute bg-white top-2 text-black p-6 text-xl font-semibold rounded-lg border-black border-2">
                        ...start by selling a blog post!
                        </div>
                        <img src="/blog-post.svg" className="mx-auto" alt="" />
                    </div>
                </div>
                <div className="flex py-40 flex-col items-center justify-center relative border-b-black border-b-2">
                    <h2 className="font-bold text-6xl">Make your own road</h2>
                    <p className="w-[50%] text-center  font-semibold text-xl py-8">
                        Whether you need more balance, flexibility, or just a
                        different gig, we make it easier to chart a new path.
                        You don't have to be a tech expert or even understand
                        how to start a business. You just gotta take what you
                        know and sell it.
                    </p>
                    <div className="nav-link w-fit text-xl font-bold">
                        Explore Features →
                    </div>
                    <img
                        src="/exciting.svg"
                        className="absolute -top-20 right-32"
                        alt=""
                    />
                </div>
            </main>
        </div>
    );
}
