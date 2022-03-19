import React from 'react';
import {
  Card,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  Button,
  ButtonGroup,
  CardContent,
} from '@mui/material';
import { progressJob } from '../CustomData/ProgressDb';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { HiChartBar } from 'react-icons/hi';
import { MdPersonSearch, MdOutlinePostAdd } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import '../App.scss';
ChartJS.register(...registerables);
 async function Home() {
  return (
    <section id="homepage">
      <section id="introcontent">
        <Card sx={{ maxWidth: 500 }} id="item-0">
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="./images/introimg.jpg"
              alt="green iguana"
            />
            <CardContent style={{ color: '#fff' }} className="intotext">
              <Typography gutterBottom variant="h5" component="div">
                Welcome to GetJob.com
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Work From Home / Office / Labour / Marketing
              </Typography>
              <Typography variant="body2">
                Post a Projects Get a Job with Zero Investment and Also You
                pulibsh Your Projects With your skills and Publish a Company Get
                Employes.Our Services is Full and Fully Free and Quantity and
                Most Peoples Get Job from Our website,You Build they Company by
                Your Own Skills We Search for yours Employes You,Thanks For Has
                Account in GetJobs
              </Typography>
            </CardContent>
          </CardActionArea>
          <ButtonGroup className="ms-2 ">
            <Button
              className="text-white fw-bolder "
              variant="contained"
              size="small"
              endIcon={<MdOutlinePostAdd />}
            >
              Post Projects
            </Button>

            <Button
              className="text-white ms-2   fw-bolder"
              size="small"
              variant="contained"
              endIcon={<GiTeacher />}
            >
              Post Jobs
            </Button>
            <Button
              className="text-white ms-2   fw-bolder "
              size="small"
              variant="contained"
              endIcon={<MdPersonSearch />}
            >
              Search Employe
            </Button>
          </ButtonGroup>
        </Card>
        <ProgressBar />
      </section>

      <Box className="progressDetails" id="item-2">
        <Typography variant="h5" className="text-center" component="div">
          Top Jobs
        </Typography>
        {progressJob.map((item) => {
          return (
            <div className="pt-2" key={item.id}>
              <Typography variant="body1" className="text-start" component="h5">
                {item.name}
              </Typography>

              <div className="progress bg-info rounded-pill">
                <div
                  className={`progress-bar progress-bar-striped  progress-bar-animated `}
                  aria-valuenow={75}
                  defaultValue={0}
                  style={{ width: `${item.value}%` }}
                >
                  {item.value}%
                </div>
              </div>
            </div>
          );
        })}
      </Box>
    </section>
  );
}
const options = {
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'skyblue',
      },
    },
  },
  scales: {
    y: {
      gridLines: {
        display: false,
      },
      ticks: {
        color: 'skyblue',
        fontSize: 20,
        stepSize: 1,
        beginAtZero: true,
      },
    },

    x: {
      gridLines: {
        display: false,
      },
      ticks: {
        color: 'skyblue',
        fontSize: 20,
        stepSize: 1,
      },
    },
  },
};

const data = {
  labels: ['March', 'April', 'May', 'June', 'July', 'Aug', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 3, 5, 8.5, 5, 7, 5, 9.5, 7.5],
      backgroundColor: 'skyblue',
      Color: '#Ffff',
      borderColor: 'blue',
      fill: false,
      borderJoinStyle: 'miter',
      fontColor: 'skyblue',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(220,220,220,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
    },
  ],
};

async function ProgressBar() {
  return (
    <div id="item-1" className="w-100">
      <Typography variant="h4" className="text-center mt-2" component="div">
        Growing Company
      </Typography>
      <Line options={options} height={600} width={800} data={data} />
      <ButtonGroup className="mt-3">
        <Button
          className="text-white fw-bolder ps-3 pt-1"
          variant="contained"
          endIcon={<HiChartBar />}
        >
          Invest Plan
        </Button>

        <Button
          className="text-white ms-2   fw-bolder ps-3 pt-1"
          variant="contained"
          startIcon={<FaEye />}
          endIcon={<HiChartBar />}
        >
          See More Stock
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Home;
