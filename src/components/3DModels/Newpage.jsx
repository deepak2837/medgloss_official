"use client";

import { useRouter } from 'next/navigation'; // Next.js navigation
import { AiOutlineBook, AiOutlineHeart } from 'react-icons/ai';
import { GiBrain, GiTooth, GiLungs, GiKidneys, GiMuscleUp } from 'react-icons/gi';
import { FaHeart, FaBaby, FaUserMd, FaVirus, FaHospitalAlt } from 'react-icons/fa';
import { MdOutlinePsychology, MdOutlineBloodtype } from 'react-icons/md';

export default function Pages() {
    const router = useRouter();

    const anatomyItems = [
        { name: "Anatomy by Region", icon: <AiOutlineBook /> },
        { name: "Bony Landmarks, Origins, and Insertions", icon: <GiMuscleUp /> },
        { name: "Complete Anatomy", icon: <AiOutlineBook /> },
        { name: "Cross Sections and Microanatomy", icon: <GiBrain /> },
        { name: "Anatomy Quizzes", icon: <MdOutlinePsychology /> },
    ];

    const specialties = [
        { name: "Allergy and Immunology", icon: <FaVirus /> },
        { name: "Neurology and Psychiatry", icon: <GiBrain /> },
        { name: "Cardiology", icon: <FaHeart /> },
        { name: "Obstetrics", icon: <FaBaby /> },
        { name: "Dentistry", icon: <GiTooth /> },
        { name: "Oncology", icon: <FaHospitalAlt /> },
        { name: "Dermatology", icon: <FaUserMd /> },
        { name: "Ophthalmology", icon: <FaUserMd /> },
        { name: "Ear, Nose, and Throat", icon: <FaUserMd /> },
        { name: "Orthopedics and Rheumatology", icon: <GiMuscleUp /> },
        { name: "Endocrinology", icon: <FaUserMd /> },
        { name: "Pediatrics", icon: <FaBaby /> },
        { name: "Gastroenterology", icon: <FaUserMd /> },
        { name: "Physical Therapy", icon: <FaUserMd /> },
        { name: "Gynecology", icon: <FaUserMd /> },
        { name: "Primary Care", icon: <FaUserMd /> },
        { name: "Hematology", icon: <MdOutlineBloodtype /> },
        { name: "Pulmonology", icon: <GiLungs /> },
        { name: "Infectious Disease", icon: <FaVirus /> },
        { name: "Urology and Nephrology", icon: <GiKidneys /> },
    ];

    return (
        <div className="min-h-screen flex justify-center items-center p-4"
            style={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}>

            <div className="max-w-6xl w-full bg-white shadow-md rounded-xl p-8 flex flex-col gap-8">
                {/* Anatomy Section (First Row) */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <AiOutlineBook /> Anatomy 
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {anatomyItems.map((item, index) => (
                            <li 
                                key={index} 
                                className="flex items-center gap-2 text-white font-bold hover:text-pink-600 transition-all duration-300 cursor-pointer bg-gray-100 hover:bg-pink-200 p-3 rounded-full shadow-sm"  
                                style={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}
                                onClick={() => router.push('/3Dmodels/category/result')} // Navigate to /newpage
                            >
                                {item.icon} {item.name}
                            </li> 
                        ))}
                    </ul>
                </div>

                {/* Specialties Section (Second Row) */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <AiOutlineHeart /> Specialties 
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {specialties.map((item, index) => (
                            <li 
                                key={index} 
                                className="flex items-center gap-2 text-white font-bold hover:text-pink-600 transition-all duration-300 cursor-pointer bg-gray-100 hover:bg-pink-200 p-3 rounded-full shadow-sm"  
                                style={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}
                            >
                                {item.icon} {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}