import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Navbar() {
    const navContent = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support",
    ];

    const [isMenuShown, setIsMenuShown] = useState(false);

    const isMobile = useMediaQuery("(max-width: 768px)");

    console.log(isMobile);

    const setMenuShown = () => {
        setIsMenuShown(!isMenuShown);
    };

    return (
        <header>
            <nav
                className={`${
                    isMenuShown
                        ? "fixed top-0 left-0 w-full h-screen bg-gray-100"
                        : ""
                }`}
            >
                <ul className="p-5 cursor-pointer md:p-2 flex-col md:items-center md:justify-center md:flex-row flex">
                    <svg
                        className="apple-icon w-4 md:w-3.5 md:mr-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>

                    <button onClick={setMenuShown}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className={`bar-icon w-4 absolute top-0 right-0 mr-3 mt-3 ${
                                isMenuShown ? "hidden" : "block"
                            } ${isMobile ? "block" : "hidden"}`}
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </button>

                    <button onClick={setMenuShown}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className={`x-icon w-4 absolute top-0 right-0 mr-3 mt-3 ${
                                isMenuShown ? "block" : "hidden"
                            } ${isMobile ? "block" : "hidden"}`}
                        >
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                        </svg>
                    </button>
                    {navContent.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={`${
                                    !isMobile
                                        ? "font-medium md:text-sm text-2xl m-3"
                                        : `font-medium md:text-sm text-2xl m-3 ${
                                              isMenuShown ? "block" : "hidden"
                                          }`
                                }`}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
