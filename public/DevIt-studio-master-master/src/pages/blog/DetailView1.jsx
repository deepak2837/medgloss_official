import Blogphoto from "../../assets/blogImage1.webp";
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

const DetailView1 = () => {
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
          Learn to communicate with the biosphere
          </h3>
          <div className="content">
            <p className="my-9">
            When we speak of communication systems, we are likely referring to human-made, tech-enabled exchange of information between computers or between computers and humans, digital transfer of information, the internet, satellite communication and so on. And human-to human communication – that is becoming rare. This is an anthropomorphic view. We are unaware that there is a whole universe of communication systems at work on the planet, between all life forms, including flora and fauna, and exchange of information between biological cell networks, both inside a life form as well as between life forms. The total volume of information thus generated and communicated by all life on Earth far exceeds any generated by humans and their creations thus far, as Earth is still dominated, by and large, by animals, plants, bacteria, and all other life other than humans.
            </p>
            <p className="my-9">
            Manasvi Lingam, astrobiologist at the Florida Institute of Technology, says that when that happens, our tech-prowess would have advanced enough to be able to connect with intelligent life on other planets – if such life exists outside of Earth. Volume-wise, the largest transmission of human generated information is via the internet, as “it carries forty terabytes of information”. Biosphere networks including “bird calls, whale song and pheromones are all forms of communication, too”.

When certain proteins are produced, it is the result of communication between molecules and cells. Rao reports that the study’s authors specifically focused on the one hundred octillion single-celled prokaryotes that make up the majority of Earth’s biomass. As all of Earth’s prokaryotes signal to each other, according to the authors’ estimate, they generate around a billion times as much data as our technology, at present. But that may change in a century’s time when humans are likely to create more information than nature.
            </p>
            <p className="my-9 text-#8A90A2">
            Will human-generated bits and bytes drown out signals from other life forms? With all the advancement we are making, could we, one day, master the art of conversing with other life forms as did St Francis of Assisi? There are instances in Hindu and several other mythologies, of humans comprehending the language of other species. Then, perhaps, there will be synergy in exchange of valuable information that could help us improve our relationship with the biosphere, enabling us to better our relationship with Earth and all its constituents.
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

export default DetailView1;