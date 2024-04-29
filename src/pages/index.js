import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

const Home = () => {
  return (
    <>
      <Head>
        <title>VioleHours | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="VioleImage"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl  
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled frontend developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and certificates, showcasing my expertise in React.js
                and web development.
              </p>
              <div className="flex items-center justify-center self-start gap-2 mt-2 lg:self-center">
                <Link
                  href="\Cv Violeta Sol Arias Hours ES 2024.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark 

                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base mb-4
                "
                  download={true}
                >
                  Resume-ES
                  <LinkArrow className={"w-4 ml-1"} />
                </Link>
                <Link
                  href="\Cv Violeta Sol Arias Hours EN 2024.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark 

                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base mb-4
                "
                  download={true}
                >
                  Resume-EN
                  <LinkArrow className={"w-4 ml-1"} />
                </Link>
                <Link
                  href="mailto:violehours@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        {/* <div className="aboslute right-8 bottom-8 inline-block w-24">
          { <Image src={lightBulb} alt="VioleHours" className="w-full h-auto" />}
        </div> */}
      </main>
    </>
  );
};

export default Home;
