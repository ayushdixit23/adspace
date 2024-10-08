'use client';
import { useState } from 'react';

// Define your components
import ConfigAdPreview from './ConfigAdPreview';
import ConfigAdPreview2 from './ConfigAdPreview2';
import ConfigAdPreview3 from './ConfigAdPreview3';
const SelectConfig = () => {
  // State to track selected option
  const [selectedOption, setSelectedOption] = useState('Set Up Ads');

  // Handler for select change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to render the selected component
  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'Set Up Ads':
        return <ConfigAdPreview2 />;
      case 'Targetting':
        return <ConfigAdPreview />;
      case 'Payment & Review':
        return <ConfigAdPreview3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <form className="w-full ">
        <select
          className="w-full font-semibold text-[17px] p-4 "
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="Set Up Ads">Set Up Ads</option>
          <option value="Targetting">Targetting</option>
          <option value="Payment & Review">Payment & Review</option>
        </select>
      </form>
      <div className="component-container">{renderSelectedComponent()}</div>
    </div>
  );
};

export default SelectConfig;
