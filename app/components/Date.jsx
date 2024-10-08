'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

export default function DatePickerComponent({ value, onChange, type }) {

  const handleDateChange = (date) => {
    const formattedDate = date ? date.format('YYYY-MM-DD') : '';
    onChange(formattedDate); // Pass the formatted date to the parent handler
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDatePicker
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
