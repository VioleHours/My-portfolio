import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.webp";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
};

const about = () => {
    return (
        <>
            <Head>
                <title> VioleHours | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I&apos;m Violeta Sol Arias Hours, a Frontend 
                                Web and Mobile Developer focused on building functional, 
                                user-friendly digital experiences.
                                With hands-on experience in real projects 
                                using technologies like Angular, React, and NativeScript,
                                I&apos;m constantly evolving as a developer 
                                and always eager to take on new challenges.
                            </p>
                            <p className="my-4 font-medium">
                                I believe development and design go beyond visuals — 
                                they&apos;re about solving problems and creating
                                intuitive, enjoyable interfaces that make people&apos;s 
                                lives easier.
                            </p>
                            <p className="font-medium">
                                Whether I&apos;m working on a responsive web 
                                platform or a cross-platform mobile app, 
                                I bring a strong attention to detail, 
                                a passion for user experience, and a 
                                collaborative mindset. I&apos;m excited to 
                                contribute my skills, grow with every project, 
                                and help turn great ideas into reality.
                            </p>
                        </div>
                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
            dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 
            "
                        >
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="VioleHours"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2
                                    className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm
                "
                                >
                                    years of experience
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2
                                    className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm
                "
                                >
                                    projects completed
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
