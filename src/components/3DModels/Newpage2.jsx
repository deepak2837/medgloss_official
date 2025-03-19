"use client";

import React, { useState } from "react";
import { AiOutlineBook } from "react-icons/ai";

export default function Newpage() {
    const anatomyItems = [
        { 
            name: "Anatomy by Region", 
            content: [
                { title: "Head & Neck", desc: "Details about head & neck anatomy." },
                { title: "Thorax", desc: "Learn about thoracic anatomy." },
                { title: "Abdomen", desc: "Explore abdominal anatomy." },
                { title: "Limbs", desc: "See upper and lower limb details." }
            ]
        },
        { 
            name: "Bony Landmarks, Origins, and Insertions", 
            content: [
                { title: "Skull", desc: "Important skull landmarks." },
                { title: "Spine", desc: "Details of vertebral column." },
                { title: "Pelvis", desc: "Pelvic bone structure." },
                { title: "Upper Limb", desc: "Muscle attachment sites in arms." }
            ]
        },
        { 
            name: "Complete Anatomy", 
            content: [
                { title: "Organs", desc: "Detailed study of human organs." },
                { title: "Nervous System", desc: "Explore neurons and brain function." },
                { title: "Cardiovascular System", desc: "Heart and blood vessels anatomy." },
                { title: "Muscular System", desc: "Study muscle groups." }
            ]
        },
        { 
            name: "Cross Sections and Microanatomy", 
            content: [
                { title: "Brain Sections", desc: "Understand different brain layers." },
                { title: "Histology", desc: "Study of tissues under the microscope." },
                { title: "Abdominal Sections", desc: "Cross-sections of the abdomen." },
                { title: "Spinal Cord", desc: "Learn about spinal cord anatomy." }
            ]
        },
        { 
            name: "Anatomy Quizzes", 
            content: [
                { title: "Skeletal System Quiz", desc: "Test your bones knowledge." },
                { title: "Muscular System Quiz", desc: "Challenge your muscle knowledge." },
                { title: "Organ Systems Quiz", desc: "Quiz on body systems." },
                { title: "Nervous System Quiz", desc: "Brain and nerve-related quiz." }
            ]
        },
    ];

    const [selectedCards, setSelectedCards] = useState(anatomyItems[0]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = (item) => {
        setSelectedCards(item);
        setSearchTerm(""); // Reset search when switching categories
    };

    const filteredContent = selectedCards.content.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen w-full flex justify-center items-center p-6" 
            style={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}>
            <div className="w-full max-w-7xl bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row gap-8 border border-white/30">

                {/* Left Side - Anatomy List */}
                <div className="md:w-1/3 w-full bg-white bg-opacity-30 backdrop-blur-md shadow-md rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                        <AiOutlineBook className="text-4xl text-pink-600" /> Anatomy 📖
                    </h2>
                    <ul className="space-y-3">
                        {anatomyItems.map((item, index) => (
                            <li 
                                key={index} 
                                className={`p-4 rounded-xl cursor-pointer transition-all text-lg font-semibold 
                                    ${selectedCards.name === item.name 
                                    ? "bg-pink-600 text-white scale-105 shadow-lg" 
                                    : "bg-white bg-opacity-40 text-gray-800 hover:bg-pink-500 hover:text-white hover:scale-105 transition"}`}
                                onClick={() => handleClick(item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side - Show Selected Cards */}
                <div className="md:w-2/3 w-full">
                    <input 
                        type="text" 
                        className="w-full shadow-lg rounded-lg p-2 mb-4 focus:outline-none border border-gray-300"
                        placeholder="Search for anatomy"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {selectedCards && (
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-5">{selectedCards.name}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {filteredContent.length > 0 ? (
                                    filteredContent.map((card, index) => (
                                        <div key={index} className="shadow-lg p-6 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white transform hover:scale-105 transition-all">
                                            <h4 className="text-xl font-bold">{card.title}</h4>
                                            <p className="text-md mt-2">{card.desc}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-white text-lg">No matching results found.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
