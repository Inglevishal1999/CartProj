import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        1^
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-12 rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"> 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
