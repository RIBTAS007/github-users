import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { GithubContext } from "../../context/context";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ data }) => {
  const { isDarkTheme } = React.useContext(GithubContext);
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        doughnutRadius: "45%",
        showPercentValues: 0,
        theme: "candy",
        bgColor: isDarkTheme ? "#102A42" : "#FFFFFF",
        labelFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
