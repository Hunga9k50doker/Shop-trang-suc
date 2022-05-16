import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Helmet from "../../components/common/Helmet";
import { AuthContext } from "../../provider/context/AuthContext";
import { SideBarRightAdmin } from "../../components/common/SideBars";
import { CardStyleOne } from "../../components/common/CardItem";
import userAvatar from "../../assets/img/other/useraccountdefault.png";
const data = [
  {
    title: "Doanh số",
    subtitle: "Doanh số hôm nay",
    value: 23000,
    percent: 70,
  },
  {
    title: "Đơn đặt hàng",
    subtitle: "Đơn đặt hàng hôm nay",
    value: 3,
    percent: 40,
  },
  {
    title: "Doanh thu",
    subtitle: "Doanh thu hôm nay",
    value: 10000,
    percent: 38,
  },
  {
    title: "Ghé thăm",
    subtitle: "Số lượt xem hôm nay",
    value: 2,
    percent: 55,
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueByMonthsChart = () => {
  const revenueByMonths = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    revenuedata: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: "#F7CE68",
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: revenueByMonths.labels,

    datasets: [
      {
        label: "Doanh thu",
        data: revenueByMonths.revenuedata,
      },
    ],
  };
  return (
    <>
      <div className="title mb-0">Doanh thu các tháng (triệu vnđ)</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`250px`} />
      </div>
    </>
  );
};
const HomeAdmin = () => {
  const {
    authState: { user, loading, isAuthenticated, userAuth },
  } = useContext(AuthContext);
  return (
    <Helmet title="Trang chủ quản lý">
      <div className="home__admin">
        <div className="container p-0">
          <div className="row ">
            <div className=" col col-xxl-8 col-xl-8 col-md-12 col-sm-12">
              <div className="account ms-4 p-2 mt-2 mb-4">
                <img src={userAvatar} alt="" />

                <p className="account__title">{user.name}</p>
              </div>
              <div className="row">
                {data.map((e, id) => (
                  <div
                    key={id}
                    className="col mb-4 col-xxl-6 col-md-6 col-sm-12"
                  >
                    <CardStyleOne
                      title={e.title}
                      subtitle={e.subtitle}
                      percent={e.percent}
                      value={e.value}
                    />
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="revenue__month p-2 mb-4 ">
                  <RevenueByMonthsChart />
                </div>
              </div>
            </div>
            <div className=" col col-xxl-4 col-xl-4 col-md-12 col-sm-12">
              <SideBarRightAdmin />
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default HomeAdmin;
