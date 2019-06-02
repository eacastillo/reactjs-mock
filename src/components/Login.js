import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

const backgroundShape = require('../images/shape.svg');

const logo = require('../images/logo.svg');

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
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.unit * 2
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
    width: 152
  },
  blockCenter: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  block: {
    padding: theme.spacing.unit * 2,
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10
  },
  buttonBar: {
    display: 'flex'
  },
  alignRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  noBorder: {
    borderBottomStyle: 'hidden'
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

const HomeLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to="/" {...props} />
));

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
        <div className={classes.root}>
          <Grid container spacing={2} direction="column" justify="center" alignItems="center">
          <div className={classes.logo}>
            <img width={100} height={100} src={logo} alt="" />
          </div>
            <Typography variant="h2" component="h2">
              WELCOME
            </Typography>
          </Grid>
          <Grid container spacing={5} direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={2}>
              <TextField
                  id="outlined-with-placeholder1"
                  label="Email"
                  placeholder="Email"
                  className={classes.textField}
                  margin="normal"
                  fullWidth="true"
                  variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                  id="outlined-with-placeholder2"
                  label="Password"
                  placeholder="Password"
                  className={classes.textField}
                  margin="normal"
                  fullWidth="true"
                  variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="column" justify="center" alignItems="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Button color='primary' variant="contained" className={classes.actionButtom} component={HomeLink}>
                Login
              </Button>
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
