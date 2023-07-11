import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import certificado1 from '../../public/images/certificate/VioletaHours.png'
import certificado2 from '../../public/images/certificate/Certificado-Ingles-preview.png'
import certificado3 from '../../public/images/certificate/certificado-Python-preview.png'
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image)

const FeaturedCertificates = ({ img, title, time, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      
      " />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline sm:text-lg'>{title}</h2>
        <span className='text-primary dark:text-primaryDark font-semibold sm:text-sm'>{time}</span>
      </Link>
    </li>
  );
};

const certificates = () => {
  return (
    <>
      <Head>
        <title> VioleHours | Certificates Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main
        className="w-full mb-16 flex flex-col items-center justify-center
      overflow-hidden dark:text-light
      "
      >
        <Layout className="pt-16 ">
          <AnimatedText
            text="Changing the world starts with you!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedCertificates 
            img={certificado1}
            title='Teaching Assistant Certificate'
            time='Nov. 2022 - Feb. 2023'
            link='/images/certificate/VioletaHours.png'
            />
            <FeaturedCertificates 
            img={certificado2}
            title='English Level'
            time='Jun. 2023'
            link='/EF SET Certificate.pdf'
            />
            <FeaturedCertificates 
            img={certificado3}
            title='Python Certificate'
            time='May 2023'
            link='/certificado-python-profesional.pdf'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certificates;
