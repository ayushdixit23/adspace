'use client';
import { Input } from '@/components/ui/input';
import { serverUrl } from '@/config';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddMoneyModal = ({ setAddMoneyModalOpen }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAddMoney = async () => {
    setError('');

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than zero.');
      return;
    }

    try {
      const response = await axios.post(
        `${serverUrl}/api/v1/transactions/addMoney`,
        { amount: parsedAmount },
        { withCredentials: true }
      );

      const data = response.data;

      console.log(data);

      if (data.success) {
        setAddMoneyModalOpen(false);
        toast.success(data.message);
        router.push(data.url);
      } else {
        setAddMoneyModalOpen(false);
        toast.error(data.error);
        return;
      }

      setAmount('');
    } catch (err) {
      setAddMoneyModalOpen(false);
      toast.error('An error occurred while adding money.');
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 z-40 right-0 bg-[#000000] bg-opacity-50">
      <div className="flex flex-col gap-4 w-[500px] bg-white rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="text-xl font-bold">Add Money</div>
        <div className="text-[12px] font-normal text-[#686B6E] mb-3">
          Add money to your wallet
        </div>

        <Input
          type="number"
          placeholder="Enter Amount"
          className="mb-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {error && <div className="text-red-500 text-xs mb-2">{error}</div>}

        <div className='flex justify-center items-center gap-2 '>


        <button
          className="text-gray-400 border border-gray-400 rounded-[10px] w-full text-center p-2 text-[12px]"
          onClick={() => setAddMoneyModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="text-white bg-[#2D9AFF] rounded-[10px] w-full text-center p-2 text-[12px]"
          onClick={handleAddMoney}
        >
          Add Money
        </button>

       

        </div>

        
      </div>
    </div>
  );
};

export default AddMoneyModal;
