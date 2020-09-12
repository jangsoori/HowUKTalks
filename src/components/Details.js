import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink, Switch, Route } from "react-router-dom";
import { selectAccent, getAccent } from "../redux/actions";
import DetailsWords from "./DetailsWords";
import history from "../history";
import DetailsVideos from "./DetailsVideos";

//MUI
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "100",
    width: "80%",
    height: "80%",
  },
  card: {
    height: "100%",
    width: "100%",
  },
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: "100%",
  },
  tabpanel: {},
}));

export const Details = (props) => {
  const { accent, getAccent } = props;
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Fetch current accent
  useEffect(() => {
    getAccent(props.match.params.id);
  }, []);
  if (!accent) {
    return null;
  }

  //Tabs
  const tabs = [
    { label: "Overview", path: `${props.match.url}` },
    { label: "Words", path: `${props.match.url}/words` },
    { label: "Videos", path: `${props.match.url}/videos` },
    { label: "People", path: `${props.match.url}/people` },
  ];

  return (
    <div className={classes.root}>
      <Card elevation={5} className={classes.card}>
        <Grid
          direction="column"
          alignContent="space-between"
          style={{ height: "100%" }}
          container
          spacing={0}
        >
          <Grid item xs style={{ width: "100%" }}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {accent.name}
              </Typography>

              <div className={classes.tab}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    {tabs.map(({ label, path }) => (
                      <Tab
                        key={label}
                        label={label}
                        className={classes.tabLink}
                        component={NavLink}
                        to={path}
                        // {...a11yProps()}
                      />
                    ))}
                  </Tabs>
                </AppBar>
                <div>
                  {/* <TabPanel value={value} index={0}>
                    <Route
                      exact
                      path={`/${accent.id}/`}
                      component={}
                    />
                  </TabPanel> */}
                  <TabPanel value={value} index={1}>
                    <Route
                      exact
                      path={`/${accent.id}/words`}
                      component={DetailsWords}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Route
                      exact
                      path={`/${accent.id}/videos`}
                      component={DetailsVideos}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    Item Three
                  </TabPanel>
                </div>
              </div>
            </CardContent>
          </Grid>
          <Grid item>
            <CardActions>
              <Button
                onClick={() => history.push("/")}
                variant="contained"
                color="secondary"
              >
                Close
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  accent: state.accents[ownProps.match.params.id],
});

export default connect(mapStateToProps, { selectAccent, getAccent })(Details);
