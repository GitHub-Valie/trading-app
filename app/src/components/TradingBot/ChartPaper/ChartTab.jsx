import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import ChartBATUSDT from "../ChartPaper/ChartBATUSDT";
import ChartXRPUSDT from "../ChartPaper/ChartXRPUSDT";
import { useStyles } from '../../styles/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
export default function ChartTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="static">
        <Tabs 
        value={value} 
        onChange={handleChange} 
        variant='fullWidth' 
        textColor='inherit'>
          <Tab className={classes.chart_tab} label="BATUSDT"  />
          <Tab className={classes.chart_tab} label="XRPUSDT"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ChartBATUSDT />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChartXRPUSDT />
      </TabPanel>
    </>
  );
}
