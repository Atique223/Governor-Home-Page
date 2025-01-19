"use client";

import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Image1 from "../../../public/slideShow1.jpg";
import Image2 from "../../../public/slideShow2.jpg";
import Image3 from "../../../public/slideShow3.jpg";
import Image4 from "../../../public/slideShow4.jpg";
import Image5 from "../../../public/slideShow5.jpg";
import Image6 from "../../../public/slideShow6.jpg";
import Image7 from "../../../public/slideShow7.jpg";
import Image8 from "../../../public/slideShow8.jpg";
import Image from "next/image";

export default class ImagesCaurosel extends Component {
    render(): ReactNode {
        const data = [
            {
            img: Image1,
            title: "students learning web3 basics",
            },
            {
                img: Image2,
                title: "students learning AI",
            },
            {
                img: Image3,
                title: "students learning VR",
            },
            {
                img: Image4,
                title: "students learning blockchain",
            },
            {
                img: Image5,
                title: "students learning cybersecurity",
            },
            {
                img: Image6,
                title: "students learning quantum computing",
            },
            {
                img: Image7,
                title: "students learning machine learning",
            },
            {
                img: Image8,
                title: "students learning computer vision",
            }
        ]
        const settings = {
            dots: true,
            dotsClass: "slick-dots line-indicator",
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrow: false,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                }
                
              ],

              custompaging: (i: number) => (
                <div className="mt-2 text-xs opacity-0">{i}</div>
              ),
        };
        return (
            <div className="mt-10 w-full">
                <Slider {...settings} className="w-full">
                    {
                        data.map((val, index) => {
                            return (
                                <div className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none" key={index}>
                                    <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                                        <Image alt={val.title} src={val.img} className="w-full h-[300px] md:h-[600px] object-cover" />
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    
                </Slider>
            </div>
        )
    }
               
}
