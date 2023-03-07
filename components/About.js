import React from "react";
import { FaArrowRight } from "react-icons/fa";
import pasta from "/public/assets/pasta.png";
import chef from "/public/assets/chef.jpeg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Best food in town awaits you
          </div>
          <p className="text-sm opacity-70">
            Describing food is not as easy as it would seem. How many ways can
            you say something was really tasty? Not enough to keep you
            interested in what you are writing. That is why we have to borrow
            words from other areas to describe the food and the effect it has on
            us.
          </p>
          <div className="btn">
            <Link href="" className="text-white text-[0.85rem]">
              Explore more
            </Link>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <div className="md:row-start-1">
          <Image src={pasta} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            The cook will prepare meals and follow establishment recipes.
          </div>
          <p className="text-sm opacity-70">
            Duties include preparing ingredients, adhering to the restaurant
            menu, and following food health and safety procedures. Cook, clean,
            assist other cooks and staff and deliver food in a fast-paced
            environment. Work may include operating a grill, oven, or fryer.
            Previous experience in a team environment and various cooking
            methods preferred.
          </p>
        </div>
        <div className="">
          <Image className="" src={chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
