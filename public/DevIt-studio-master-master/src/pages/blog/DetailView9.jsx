import Blogphoto from "../../assets/blogImage9.webp";
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

const DetailView9 = () => {
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
          Big data, small minds
          </h3>
          <div className="content">
            <p className="my-9">
            Gen Z – is a data centric generation. Every single thing that we observe in our day to day life are data driven. Let us say our decisions for a career, costume or consumption are extracted from the data. Now suppose I want to choose a career – “Foo” I would possibly look at demand and supply data before making that career decision rather than looking out for my Interests. Coming to  the next example `costume` – I would open any of the shopping sites and end up buying the stuff that has been shown to me based on my region and cached data. Moving to our next example `consumption` – I would consume the goods that are being prioritised based on marketing data or In computers we say it – OLAP and OLTP based data. Lastly I would take an example of a cricket player who practices every day & night and another player who practices based on data of previous cricket matches, bowling/batting actions, reflexes, The latter will surely outperform the foregoing player.
            </p>
            <p className="my-9">
            Clearly data is the new oil of this era and rather than oil mining it’s data mining that’s hitting the recent charts. Now I completely agree with the importance that data holds for us. But this has also quashed our creative periphery of our mind. These days students would have access to a plethora of data for his curriculum but he has less access to his own mind to handle pressure or any uncertainties. Recently I came across news from Kota wherein a student ended his life because of his lower scorecard in JEE examination – Now obviously he/she had better access to schooling data but less or (much rather NO) access to his own family or friends. Very recently another news surfaced wherein the CEO of Meta apologised in the senate for the impact of social media on kids.


            </p>
            <p className="my-9 text-#8A90A2">
            Well – We are a digital era civilization where information holds up great value for us but It’s our own fidelity to stay mindful. Obviously data as a tool is an asset in various domains for humanity. But let’s maintain a synergy between our analog and data driven life to reap utmost well being
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

export default DetailView9;
