import Blogphoto from "../../assets/blogImage6.webp";
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

const DetailView8 = () => {
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
          Tackling the deepfake menace – The dark side of AI
          </h3>
          <div className="content">
            <p className="my-9">
            AI has taken the world by a pleasant surprise in recent times while at the same time raising some eyebrows. One such use case of AI which has raised concerns is called Deepfakes. Few months back, Hon’ble PM of India said  “I recently saw a video in which I was seen singing a Garba song. There are many other such videos online,” This is the extent of this menace. The Ministry of Electronics and IT had issued the advisory that such cases will fall under the IT Rules 2021 and once notified, users have to remove any such content when reported within 36 hours of reporting. There is also a financial penalty imposed. But is it enough and how can one even know in first place whether  video is genuine or deepfake? It is important to take a technical view on this rather than a cursory helicopter view, which will help us uncover the mystery of deepfakes and its possible detection. 
            </p>
            <p className="my-9">
            Deepfakes are artificially created synthetic media in which a person is impersonated without their consent and approval, using deep learning techniques. It can make audio and video clones which can make it appear as though individuals are doing or saying things which they never did originally. 

Deepfakes are developed by training a deep learning model, such as a generative adversarial network (GAN) on datasets of an individual which could include their audio, video files, They can mimic the face, voice, appearance and body language of the person.
            </p>
            <p className="my-9 text-#8A90A2">
            One would imagine that give the risks association with Deepfakes, we should by now have a robust mechanism in place for handling Deepfakes. The reality is that we are far from catching deepfakes.

It is getting increasingly difficult to detect deepfakes because of their realism now. Researchers are trying new methods to catch it such as Forensic analysis techniques that involve analysing metadata for pattern detection. Deepfakes may exhibit some issue with lip sync and body gestures but now with tools such as Alibaba EMO (Emote Portrait Alive), it is easy to create high res video with just one photo and audio file with amazing details. Some researchers have recorded that Deepfake audio contains distortions that are not present in authentic recordings which can be detected through spectrogram analysis and voiceprint analysis. There is also the possibility of developing counter deep learning techniques which are essentially models trained on datasets of both original and synthetic media to detect differences based on historical data patterns.
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

export default DetailView8;
