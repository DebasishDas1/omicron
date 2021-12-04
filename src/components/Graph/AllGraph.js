import { Line } from 'react-chartjs-2';

const AllGraph = () => {

    return (
        <Line
        data={{
          labels: ['26/11/2021', '27/11/2021', '28/11/2021', '29/11/2021', '30/11/2021', '1/12/2021', '2/12/2021', '3/12/2021'],
          datasets: [
            {
              label: `Omicron Case`,
              data:[2, 50, 120, 180, 255, 275, 300, 375],
              backgroundColor: 'rgb(255, 255, 255, 0.5 )',
              borderColor: 'rgb(255, 255, 255, 0.7 )',
              fill: true,
            },
            {
              label: `Death`,
              data:[0, 0, 0, 0, 0, 0, 0, 0],
              backgroundColor: 'rgba(255, 99, 71, 0.5 )',
              borderColor: 'rgba(255, 99, 71, 0.7 )',
              fill: true,
            },
            {
              label: `Recovered`,
              data:[0, 0, 0, 0, 0, 0, 0, 0, 0],
              backgroundColor: 'rgba(112, 204, 112, 0.5 )',
              borderColor: 'rgba(112, 204, 112, 0.7 )',
              fill: true,
            },
            {
              label: `Active Cases`,
              data: [2, 50, 120, 180, 255, 275, 300, 375],
              backgroundColor: 'rgba(185, 185, 233, 0.5 )',
              borderColor: 'rgba(185, 185, 233, 0.5)',
              fill: true,
            },
          ],
        }}
      />
    );
};

export default AllGraph;