import Image from "next/image";
import Link from "next/link";
import Noimg from "../../assets/noimg.png";

const CaseStudyCard = ({
  image,
  title,
  date,
  description,
  subject,
  disease,
}) => {
  return (
    <div className="bg-white overflow-hidden h-full flex flex-col border border-solid border-b-4 border-orange-500 p-4 rounded-3xl shadow-md">
      <div className="h-48 relative">
        <Image
          src={image || Noimg}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        {(subject || disease) && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {subject || disease}
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-gray-700 flex-1">
          {description.substring(0, 120)}...
        </p>
        <div className="mt-4 pt-2 border-t border-gray-100">
          <div className="text-blue-600 text-sm font-medium hover:underline">
            Read full case study
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
