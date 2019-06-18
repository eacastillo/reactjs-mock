import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';

import Topbar from './Topbar';

const backgroundShape = require('../images/shape.svg');

const backgroundShape_full_box = require('../images/champflowerbackground.jpg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  brand: {
    marginBottom: 0,
    height: 400,
    background: `url(${backgroundShape_full_box})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  common_typography: {
    variant: 'h1',
    component: 'h2',
    align: 'center',
    color: 'textPrimary',
    gutterBottom: true,
  }
});

class Main extends Component {

  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  openDialog = (event) => {
    this.setState({learnMoredialog: true});
  }

  dialogClose = (event) => {
    this.setState({learnMoredialog: false});
  }

  openGetStartedDialog = (event) => {
    this.setState({getStartedDialog: true});
  }

  closeGetStartedDialog = (event) => {
    this.setState({getStartedDialog: false});
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <div>
                <div className={classes.brand}/>
              </div>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" align="center" color="textPrimary" gutterBottom>
                ABOUT US
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="body" align="center" color="textPrimary" gutterBottom>
                This is a body saying all this stuff because I said so
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" align="center" color="textPrimary" gutterBottom>
                BENEFITS
              </Typography>
              <Grid item xs={12}>
                <Typography variant="body1" component="body" align="center" color="textPrimary" gutterBottom>
                  This is a body saying all this stuff because I said so
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" align="center" color="textPrimary" gutterBottom>
                CONTACT
              </Typography>
              <Grid item xs={12}>
                <Typography variant="body1" component="body" align="center" color="textPrimary" gutterBottom>
                  This is a body saying all this stuff because I said so
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <SwipeDialog
              open={this.state.learnMoredialog}
              onClose={this.dialogClose} />
          <InstructionDialog
              open={this.state.getStartedDialog}
              onClose={this.closeGetStartedDialog}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(withStyles(styles)(Main));
