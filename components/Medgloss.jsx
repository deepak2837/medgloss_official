import Image from 'next/image'; // Import the next/image component
 // Import CSS module for styling

const MedglossLogo = () => {
  return (
    <div >
      <div style={{display: 'flex', marginLeft: '-0.5rem',marginRight: '0.5rem',width:"4.1em",height:"4.2rem",borderRadius:"5% 80% 85% 80%",backgroundColor:"white",border:"0px solid red"}}>
        <Image
		
          src="/medglosslogo-photoaidcom-cropped.png" // Path to your logo image in the public directory
          alt="Medgloss Logo"
          width={100} // Set the desired width (in pixels) for your logo
          height={100} // Set the desired height (in pixels) for your logo
          layout="responsive" 
		  // Ensure responsive sizing
        />
      </div>
    </div>
  );
};

export default MedglossLogo;
