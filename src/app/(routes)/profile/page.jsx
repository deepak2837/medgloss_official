"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import mbbsCollegeList from "@/lib/mbbs_college_list.json";
import LineLoader from "@/components/common/Loader";
import useAuthStore from "@/store/authStore";
import { toast } from "react-toastify";
import useProfile from "@/hooks/profile/useProfile";

const Profile = () => {
  const { getUser } = useAuthStore();
  const user = getUser();
  const { onUpdateProfile } = useProfile();

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    collegeName: "",
    course: "",
    year: "",
    hospitalName: "",
    speciality: "",
    experience: "",
    email: "",
    city: "",
    mobileNumber: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        collegeName: user.role === "student" ? user.collegeName : "",
        course: user.role === "student" ? user.course : "",
        year: user.role === "student" ? user.year : "",
        hospitalName: user.role === "doctor" ? user.hospitalName : "",
        speciality: user.role === "doctor" ? user.speciality : "",
        experience: user.role === "doctor" ? user.experience : "",
        mobileNumber: user.mobileNumber,
        city: user.city,
      });
    }
    setIsLoading(false);
  }, [user]);

  // Generate last 7 years
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) =>
    (currentYear - i).toString()
  );
  const experiences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // Course options
  const courses = ["MBBS", "MD", "MS"];

  // Sample college list - you can replace this with your actual college list
  const colleges = mbbsCollegeList.map((college) => college.collegeName);

  useEffect(() => {
    // If user data is available in the store, use it
    if (user) {
      setProfileData({
        collegeName: user.role === "student" ? user.collegeName : "",
        course: user.role === "student" ? user.course : "",
        year: user.role === "student" ? user.year : "",
        hospitalName: user.role === "doctor" ? user.hospitalName : "",
        speciality: user.role === "doctor" ? user.speciality : "",
        experience: user.role === "doctor" ? user.experience : "",
        mobileNumber: user.mobileNumber || "",
        city: user.city || "",
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Mobile number validation
    if (name === "mobileNumber") {
      // Only allow numeric values and max length of 10
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }

    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const toggleEdit = async () => {
    if (isEditing) {
      try {
        const response = await onUpdateProfile(profileData);
        if (response.status === 200) {
          updateUser({
            ...user,
            ...profileData,
          });

          setIsEditing(false);
          toast.success("Profile updated successfully");
        }
      } catch (error) {
        console.error("Failed to update profile:", error);
        toast.error("Failed to update profile");
      }
    } else {
      setIsEditing(true);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LineLoader />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-3">
            User Not Found
          </h2>
          <p className="text-gray-700">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  // Determine avatar based on user role
  const avatarSrc = user.role === "doctor" ? "/doctor.jpg" : "/student.jpg";

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden">
        {/* Header with curved design */}
        <div className="bg-main h-32 md:h-48 rounded-b-[40%] flex items-center justify-center relative">
          <div className="absolute -bottom-16 md:-bottom-20 bg-white rounded-full p-1 border-4 border-white shadow-lg">
            <Image
              src="/doctor.jpg"
              alt={`${user.name}'s Avatar`}
              width={120}
              height={120}
              className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
            />
          </div>
        </div>

        {/* Profile Information */}
        <div className="mt-20 md:mt-24 px-4 pb-8">
          {/* User Basic Info */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {user.name}
            </h2>
            <p className="text-indigo-600 font-medium mt-1">@{user.username}</p>
            <p className="text-gray-500 mt-1 capitalize">
              {user.role === "doctor"
                ? "Healthcare Professional"
                : "Medical Student"}
            </p>
          </div>

          {/* Edit/Save Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={toggleEdit}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isEditing
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-main hover:bg-indigo-700 text-white"
              }`}
            >
              {isEditing ? (
                <>
                  <span className="mr-2">✓</span>Save Changes
                </>
              ) : (
                <>
                  <span className="mr-2">✏️</span>Edit Profile
                </>
              )}
            </button>
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-indigo-800">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <span className="text-indigo-700">📱</span>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    {isEditing ? (
                      <input
                        type="text"
                        name="mobileNumber"
                        value={profileData.mobileNumber}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        maxLength={10}
                      />
                    ) : (
                      <p className="font-medium">
                        {profileData.mobileNumber || "Not specified"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <span className="text-indigo-700">🏙️</span>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    {isEditing ? (
                      <input
                        type="text"
                        name="city"
                        value={profileData.city}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <p className="font-medium">
                        {profileData.city || "Not specified"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Information Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-indigo-800">
                {user.role === "doctor"
                  ? "Professional Information"
                  : "Academic Information"}
              </h3>
              <div className="space-y-4">
                {user.role === "student" && (
                  <>
                    <div>
                      <p className="text-sm text-gray-500">College Name</p>
                      {isEditing ? (
                        <select
                          name="collegeName"
                          value={profileData.collegeName}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Select College</option>
                          {colleges.map((college) => (
                            <option key={college} value={college}>
                              {college}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p className="font-medium">
                          {profileData.collegeName || "Not specified"}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Course</p>
                        {isEditing ? (
                          <select
                            name="course"
                            value={profileData.course}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="">Select Course</option>
                            {courses.map((course) => (
                              <option key={course} value={course}>
                                {course}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p className="font-medium">
                            {profileData.course || "Not specified"}
                          </p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Year</p>
                        {isEditing ? (
                          <select
                            name="year"
                            value={profileData.year}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="">Select Year</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <p className="font-medium">
                            {profileData.year || "Not specified"}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {user.role === "doctor" && (
                  <>
                    <div>
                      <p className="text-sm text-gray-500">Hospital Name</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="hospitalName"
                          value={profileData.hospitalName}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <p className="font-medium">
                          {profileData.hospitalName || "Not specified"}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Speciality</p>
                      {isEditing ? (
                        <input
                          type="text"
                          name="speciality"
                          value={profileData.speciality}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <p className="font-medium">
                          {profileData.speciality || "Not specified"}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Experience (Years)
                      </p>
                      {isEditing ? (
                        <select
                          name="experience"
                          value={profileData.experience}
                          onChange={handleInputChange}
                          className="border border-gray-300 rounded-md px-3 py-1 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Select Experience</option>
                          {experiences.map((exp) => (
                            <option key={exp} value={exp}>
                              {exp} {exp === 1 ? "year" : "years"}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p className="font-medium">
                          {profileData.experience
                            ? `${profileData.experience} ${
                                profileData.experience === "1"
                                  ? "year"
                                  : "years"
                              }`
                            : "Not specified"}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
