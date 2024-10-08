'use client';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ timeSeries, error, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={timeSeries}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          dataKey="amountSpent"
          type="monotone"
          name="Total Amount Spent"
          stroke="#FF5D5D"
          strokeWidth={3}
        />
        <Line
          dataKey="impressions"
          type="monotone"
          name="Impressions"
          stroke="#77C5FD"
          strokeWidth={3}
        />
        <Line
          dataKey="clicks"
          type="monotone"
          name="Clicks"
          stroke="#FFA800"
          strokeWidth={3}
        />
        <Line
          dataKey="costPerClick"
          type="monotone"
          name="CPC"
          stroke="#27AE60"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
