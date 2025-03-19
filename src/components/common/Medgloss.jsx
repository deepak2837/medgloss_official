import Image from "next/image";

const MedglossLogo = () => {
  return (
    <div
      style={{ display: "flex", marginLeft: "-0.5rem", marginRight: "0.5rem" }}
    >
      <div
        style={{
          width: "4.1em",
          height: "4.2rem",
          borderRadius: "5% 80% 85% 80%",
          backgroundColor: "white",
          border: "0px solid red",
          position: "relative", // Required for next/image with fill
        }}
      >
        <Image
          src="/medglosslogo-photoaidcom-cropped.png"
          alt="Medgloss Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default MedglossLogo;
