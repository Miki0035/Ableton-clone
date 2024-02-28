import React from "react";
import Image from "next/image";
import { BackgroundColorImage, Card, Content } from "@/components";
import Graph from "@/assets/graph-image.jpg";
const Main = () => {
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="relative flex items-center justify-center w-2/3">
          <img
            src={"/ab-main-img.jpg"}
            alt="Albeton image"
            className="w-full"
          />
          <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-ab-orange font-bold text-5xl min-[1200px]:text-9xl z-1">
            Ableton
          </p>
        </div>
      </main>
      <section>
        <Content
          mainText="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
          subText="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
        />
        <BackgroundColorImage
          position={`right-0 bottom-0`}
          bgColor={"#fbffa7"}
          bgImages={["girl-laptop-image.jpg", "girl-blured-image.jpg"]}
        />
        <Content
          mainText="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
          subText="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
        />
        <BackgroundColorImage
          videoUrl={"https://youtube.com/embed/9SbnhgjeyXA"}
          position={`flex justify-center`}
          bgColor={""}
          bgImages={[""]}
        />
        <Content
          mainText="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
          subText="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
        />
        <BackgroundColorImage
          position={`left-0 bottom-0`}
          bgColor={"#b6ffc0"}
          bgImages={[
            "man-writing-image.jpg",
            "man-girl-image.jpg",
            "ab-wall-image.jpg",
          ]}
        />
        <Content
          mainText="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
          subText="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
        />
        <div className="relative flex items-center justify-center">
          <Image src={Graph} alt="Albeton image" className="w-5/6" />
        </div>
        <Content
          mainText="We're passionate about what we do, but we're equally passionate about improving who we are."
          subText="We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.

Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
        />
        <BackgroundColorImage
          position={`top-0 left-56`}
          bgColor={"#d5b3ff"}
          bgImages={[
            "girl-explain-girl-image.jpg",
            "group-discussion-image.jpg",
            "ab-wall-image.jpg",
          ]}
        />
        <Content
          mainText="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
          subText="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
        />
      </section>
      <Card
        image={"ab-live9-image.jpg"}
        mainText="We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us."
        linkText="See latest jobs"
        bgColor="#b1c5ff"
      />
    </>
  );
};

export default Main;
