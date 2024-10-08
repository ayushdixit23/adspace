import React from 'react';
import { Input } from '@/components/ui/input';

const DateModal = ({
  isOpen,
  onClose,
  startDate,
  endDate,
  handleDateChange,
}) => {
  if (!isOpen) return null;

  const handleStartDateChange = (event) => {
    handleDateChange([new Date(event.target.value), endDate]);
  };

  const handleEndDateChange = (event) => {
    handleDateChange([startDate, new Date(event.target.value)]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Select Date Range</h2>
          <button onClick={onClose} className="text-gray-500">
            Close
          </button>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <Input
              type="date"
              id="startDate"
              value={startDate ? startDate?.toISOString().split('T')[0] : ''}
              onChange={handleStartDateChange}
              className="mt-1"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <Input
              type="date"
              id="endDate"
              value={endDate ? endDate?.toISOString().split('T')[0] : ''}
              onChange={handleEndDateChange}
              className="mt-1"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 p-2 rounded-md">
            Cancel
          </button>
          <button
            onClick={() => {
              handleDateChange([startDate, endDate]);
              onClose();
            }}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateModal;
