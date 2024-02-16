import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { GithubContext } from "../../context/context";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3D = ({ data }) => {
  const { isDarkTheme } = React.useContext(GithubContext);
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked",
        theme: "candy",
        yAxisName: "Stars",
        xAxisName: "Repos",
        yAxisNameFontSize: "16px",
        xAxisNameFontSize: "16px",
        bgColor: isDarkTheme ? "#102A42" : "#FFFFFF",
        labelFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
        legendItemFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
        captionFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
        subCaptionFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
        xAxisNameFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
        yAxisNameFontColor: isDarkTheme ? "#FFFFFF" : "#000000",
        canvasBgColor: isDarkTheme ? "#102A42" : "#FFFFFF",
        canvasBaseColor: isDarkTheme ? "#102A42" : "#FFFFFF",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
