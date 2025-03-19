export default function OptionButton({ text, isSelected, onSelect }) {
    return (
      <button
        className={`p-2 w-full border rounded-md mb-2 ${
          isSelected ? 'bg-main text-white' : 'bg-white text-black'
        }`}
        onClick={onSelect}
      >
        {text}
      </button>
    );
  }
  