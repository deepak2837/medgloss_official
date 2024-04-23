import Blogphoto from "../../assets/blogImage7.webp";
import Blogphoto1 from "../../assets/blog-big-4.jpg";
import Blogphoto2 from "../../assets/blog-sm-5.jpg";
import { useState } from "react";
import Container from "../../components/lib/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faUser,
  faClock,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const DetailView7 = () => {
  const [state] = useState({
    web: 26,
    development: 15,
    branding: 20,
    motion: 18,
    uiux: 30,
    graphic: 99,
    user: "Alextina",
    clock: "MARCH.23.2003",
    comment: 21,
    eye: 1.426,
  });

  return (
    <Container>
      <div className="container flex my-10 mx-auto max-sm:flex-col max-sm:my-0 max-sm:mx-auto max-sm:px-4 sm:flex-col  md:flex-row justify-between mt-14 pt-4 min-h-screen">
        <div className="container max-sm:w-full main w-4/6">
          <img
            src={Blogphoto}
            alt=""
            className="relative w-full max-sm:w-full mb-10 border rounded"
          />
          <FontAwesomeIcon icon="fa-solid fa-check-square" />
          <div className="flex sm:flex-wrap sm:gap-x-12 sm:gap-y-2 max-sm:flex-col mb-10 ">
            <div className="flex justify-between md:justify-between sm:gap-20 max-sm:gap-12">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faUser} className="w-3.5 h-3.5" />
                <span>{state.user}</span>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                <span>{state.clock}</span>
              </div>
            </div>
            <div className="flex justify-between sm:gap-20 max-sm:gap-12 ">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faComments} className="w-3.5 h-3.5" />
                <span>{state.comment} comments</span>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={faEye} className="w-3.5 h-3.5" />
                <span>{state.eye} VIEWS</span>
              </div>
            </div>
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold my-5 ">
          Lights, camera, sora: The future of creative expression
          </h3>
          <div className="content">
            <p className="my-9">
            OpenAI recently announced its new invention ‘Sora’. This AI has the capability to generate real-life videos up to one minute long from simple text inputs, signalling a future where creativity is not just an innate human trait but also a digital commodity. Sora is capable of creating “complex scenes with multiple characters, specific types of motion, and accurate details of the subject and background,” according to OpenAI’s blog post.
            </p>
            <p className="my-9">
            Imagine the possibilities. You prompt the AI with a scenario, and it produces a vivid video, capturing the essence of your words in visual form. Picture this: you type “Give me a Shakespearean drama with cats,” and voila, a fur-filled tragedy unfolds before your eyes. This breakthrough is set to have profound implications across various industries, from movie production to stock video libraries, entertainment, and beyond. As this technology evolves, becoming more nuanced and sophisticated, it will bestow upon the everyday user a level of creative potential previously unimaginable.

For a long time, lots of people wanted to make their own movies, podcasts, or funny pictures but didn’t have the time, the right stuff, or the skills to do it. We all love to hear and tell good stories. Gone are the days when you needed a fancy camera, editing skills, or, let’s be real, any actual talent to narrate your story. With the advent of this AI, high-quality video content will become accessible at the mere input of a few plain English commands. In a few years, the creation of full-length animated movies by AI might become commonplace. From scripting to character development and actual production, AI could autonomously construct a cinematic experience, drawing on the analysis of decades’ worth of films to decipher the formula for intrigue and commercial success.
            </p>
            <p className="my-9 text-#8A90A2">
            This raises a critical question: As AI reaches new heights of creativity, what becomes of human ingenuity? If an AI can produce content indistinguishable from that created by human hands, does this render human creativity obsolete? This scenario is reminiscent of the historical displacement of weavers and artisans with the advent of power looms and factory automation during the industrial revolution. The line between handmade and machine-made was blurred, challenging the value and recognition of human craftsmanship.

In the social media sphere, influencers may find themselves contending with AI-generated profiles and content. Aitana Lopez is an AI-generated Spanish model who has gained popularity on Instagram. The 25-year-old has pink hair and 141,000 followers on Instagram. According to reports, she can earn up to $10,000 a month. This is just the tip of the iceberg. With the introduction of technologies like Apple’s VR (Virtual Reality) glasses, the immersive experience is no longer confined to the imagination. Content creation for VR is set to explode, amplifying the already diverse universe of content on OTTs and short video platforms.
            </p>
          </div>
          
          <div className="buttons-container flex justify-between max-sm:flex-col">
            <div className="buttons flex flex-wrap  max-sm:mb-8">
              <h1 className={"mx-4"}>Tags</h1>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-4 border hover:border-transparent rounded mx-2">
                BUSINESS
              </button>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-3 border hover:border-transparent rounded mx-2">
                DESIGN
              </button>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-3 border hover:border-transparent rounded mx-2">
                APPS
              </button>
              <button className="bg-transparent hover:bg-indigo-200 text-zinc-600 font-normal text-xs hover:text-black py-1 px-3 border hover:border-transparent rounded mx-2">
                DATA
              </button>
            </div>
          </div>
        </div>
        <div className="leftbar w-3/6 sm:w-3/6 md:w-1/6 lg:w-1/6 flex flex-col sm:flex-row md:flex-col lg:mx-auto">
          <div className="recent-post flex flex-col">
            <h1 className="mb-4">Recent Posts</h1>
            <div className="flex max-w-xs mb-3 max-sm:h-28">
  <img
    className="rounded-xl max-sm:w-32 "
    src={Blogphoto2}
    alt=""
  />
  <div className="m-2">
    <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
      FEBRUARY.20.2022
    </p>
    <a href="#">
      <h3 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
        How to add a count up animated the...
      </h3>
    </a>
  </div>
</div>
<div className="flex max-w-xs mb-3 max-sm:h-28">
  <img className="rounded-xl max-sm:w-32 " src={Blogphoto} alt="" />
  <div className="m-2">
    <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
      FEBRUARY.20.2022
    </p>
    <a href="#">
      <h3 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
        When and how to use Freelancers In ...
      </h3>
    </a>
  </div>
</div>
<div className="flex max-w-xs  max-sm:h-28">
  <img
    className="rounded-xl max-sm:w-32 "
    src={Blogphoto1}
    alt=""
  />
  <div className="m-2">
    <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
      MARCH.20.2022
    </p>
    <a href="#">
      <h3 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
        How to grow your business with coll...
      </h3>
    </a>
  </div>
</div>
 
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailView7;
