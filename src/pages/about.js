import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title> VioleHours | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                <p>
                  Hi, I&apos;m Violeta Sol Arias Hours, a web developer with a special interest in creating functional and  
                  appealing digital experiences. With a few months of experience in the indstry. I&apos;m always on the lookout for new oportunities to expand
                  my knowledge and skills. My goal is to woork alongside my clients to turn their ideas into reality and deliver high-quality web solutions.
                </p>
                <p>
                  I believe that development and design are about more than just making things look pretty - they&apos;re about solving problems 
                  and creating intuitive, enjoyable experiences for users.
                </p>
                <p>
                  Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to 
                  every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
