import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";
import ReactDOM from 'react-dom';
import ScratchCard from 'react-scratchcard';
import cardImage from '../../assets/img/grey.jpg';
import greyBgImg from '../../assets/img/grey.jpg';
import pinkBgImg from '../../assets/img/pink.jpg';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { makeStyles } from '@material-ui/core/styles';

const settings_pink = {
 maxWidth: 350,
  maxHeight: 350,
  image: pinkBgImg,
  finishPercent: 90,
  onComplete: () => console.log('The card is now clear!')
};

const settings_grey = {
  width: 370,
  height: 320,
  image: greyBgImg,
  finishPercent: 90,
  onComplete: () => console.log('The card is now clear!')
};


class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;

    const divStyle = {
      "text-align": "center",
      "margin-top": "150px",
      "font-size": "x-large"
    };

    const cardTitleStyle = {
      "text-align": "center",
      "font-size": "x-large",
      "font-weight":"bold",
      "margin-top":"5 !important"
    };

    const cardStyle = {
      width: 400,
      height: 400,
      maxWidth: 420,
      maxHeight:420
    }

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card style={cardStyle}>
              <CardHeader color="warning" stats icon>
                <h3 className={classes.cardTitle} style={cardTitleStyle}>
                  Scratch Here!
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <ScratchCard {...settings_grey}>
                      <div style={divStyle}><b>Congratulations! You WON!</b></div>
                  </ScratchCard>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
          

         
          
        </GridContainer>
          
        
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
