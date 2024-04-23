import BlogCard from "../../components/lib/BlogCard/BlogCard";
import { headerColor } from "../../constant/colors";
import image1 from "../../assets/blogImage4.webp";
import image2 from "../../assets/blogImage3.webp";
import image3 from "../../assets/blogImage2.webp";
import image4 from "../../assets/blogImage0.webp";
import image5 from "../../assets/blogImage8.webp";
import image6 from "../../assets/blogImage5.webp";
import image7 from "../../assets/blogImage7.webp";
import image8 from "../../assets/blogImage6.webp";
import image9 from "../../assets/blogImage9.webp";
import image0 from "../../assets/blogImage1.webp";
const techyTitles = [
  "Learn to communicate with the biosphere",
  "Global alignment on AI regulation– what’s the fuss about?",
  "Is it a win for privacy?",
  "How To Create A Vanilla JavaScript Gantt Chart: Adding Task Editing Features",
  "Will Neuralink-like science lead to mind control?",
  "Citizen data science developer",
  "A framework for understanding cybersecurity",
  "Lights, camera, sora: The future of creative expression",
  "Tackling the deepfake menace – The dark side of AI",
  "Big data, small minds",
];

const BlogPage = () => {

const imageArray = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9];
  return (
    <div className="pt-14 min-h-screen">
      <div className="container mx-auto ">
        <h1
          className="container text-5xl flex justify-center pb-16 max-sm:pt-14 max-sm:pb-14 font-bold"
          style={{ color: headerColor }}
        >
          Blogs
        </h1>
        <div className="flex flex-col max-sm:mx-3">
          <div
            className={
              "grid w-full xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mb-10"
            }
          >
            {techyTitles.slice(0, 10).map((title, index) => (
              
              <BlogCard image={imageArray[index]}  key={index} value  = {index} title={title} span={"UI/UX DESIGN"} />
            ))}
          </div>
          <div
            className={
              "grid w-full xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7"
            }
          >
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
