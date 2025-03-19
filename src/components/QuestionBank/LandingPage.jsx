const LandingPage = ({ questionBanks }) => {
    const groupedBySubject = Object.entries(questionBanks);
  
    return (
      <div className="p-6">
        {groupedBySubject.map(([subject, banks]) => (
          <div key={subject} className="mb-8">
            <h2 className="text-2xl font-bold">{subject}</h2>
            {banks.map((bank) => (
              <div
                key={bank._id}
                className="bg-gray-100 p-4 mt-2 rounded-lg hover:shadow-lg cursor-pointer"
                onClick={() => router.push(`/questions/${bank._id}`)}
              >
                {bank.name}
                <p className="text-sm text-gray-500">Topics: {bank.topics.join(", ")}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
export default LandingPage  