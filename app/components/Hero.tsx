"use client";
import React, { useEffect, useState } from "react";
import Dot from "../svg components/dot";
import Image from "next/image";
import ImageData from "../_data/image.json";

interface ImageDataItem {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  tags: boolean;
}

const Hero = () => {
  const token: ImageDataItem[] = ImageData;
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((prevIndex) => {
        if (prevIndex === ImageData.length - 1) {
          return 0;
        } else {
          return index + 1;
        }
      });
    }, 4000);
  }, []);
  return (
    <div className="w-full overflow-hidden flex flex-row">
      {token.map((item, index) => (
        <div className="" key={index}>
          <div
            className="w-full flex flex-row "
            style={{
              objectFit: "cover",
              width: "703px",
              height: "500px",
              maxWidth: "703px",
              borderRadius: "8px",
              translate: `${-1000 * index}%`,
              flexShrink: 0,
              flexGrow: 0,
              transition: "translate 0.5s ease-in-out",
            }}
          >
            <div className="w-[50%] bg-white ">
              <div className=" flex flex-col gap-4 mx-auto ">
                <h1 className="text-3xl font-semibold ">{item.title}</h1>
                <p className="font-normal text-2xl">{item.body}</p>
              </div>
            </div>
            <div className="w-[50%]">
              <Image src={item.imageUrl} alt="image" width={703} height={500} />
            </div>
          </div>
          <div className="flex flex-row gap-1">
            {ImageData.map((_, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    index === idx
                      ? "bg-white w-2 h-2 rounded-full cursor-pointer"
                      : "bg-black w-2 h-2 rounded-full cursor-pointer"
                  }
                  onClick={() => setIndex(idx)}
                ></div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
