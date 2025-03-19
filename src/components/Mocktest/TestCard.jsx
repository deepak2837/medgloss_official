"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestCard({ test, reattemptAllowed }) {
 
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleStartTest = () => {
    setShowModal(true);
  };

  const confirmStartTest = () => {
    setShowModal(false);
    router.push(`mock-test/take-test/${test._id}`);
  };

  const cancelStartTest = () => {
    setShowModal(false);
  };

  return (
    <div className="relative p-4 border rounded-2xl shadow-md hover:shadow-lg bg-main text-gray-100">
      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {"PROCTORED"}
      </div>

      <h2 className="text-xl font-bold mb-2">{test.testName}</h2>
      <p className="text-gray-200">Time Limit: {test.timeLimit} minutes</p>
      <p className="text-gray-200">Total Questions: {test.numberOfQuestions}</p>
      <p className="text-gray-200">
        Total People Attempted: {test.peopleAttempted}
      </p>
      <button
        onClick={handleStartTest}
        className="mt-4 px-3 py-1 bg-white text-black text-base rounded-xl"
      >
        {reattemptAllowed ? "Reattempt Test" : "Start Test"}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-main p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <h3 className="text-xl font-bold mb-4">Important Information</h3>
            <p className="text-gray-700 mb-4">
              This test will be conducted in full-screen mode. If you exit full
              screen or switch tabs, the test will end immediately.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmStartTest}
                className="px-4 py-2 bg-green-400 text-white rounded-lg"
              >
                Proceed
              </button>
              <button
                onClick={cancelStartTest}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
