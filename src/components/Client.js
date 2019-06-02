import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Topbar from './Topbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const backgroundShape = require('../images/shape.svg');
const noavatarimg = require('../images/noavatar.png');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.white,
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
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

function createData(name, date, time, length, comments) {
  return { name, date, time, length, comments};
}

const rows = [
  createData('Customer 1', '6/2/2019', '6:00 PM', '2 hours', 'New Customer'),
  createData('Customer 2', '6/5/2019', '10:00 AM', '1 hour', ''),
  createData('Customer 3', '6/11/2019', '1:00 PM', '1.5 hours', ''),
  createData('Customer 4a', '7/14/2019', '7:00 PM', '2 hours', 'Couple Massage'),
  createData('Customer 4b', '7/14/2019', '7:00 PM', '2 hours', 'Couple Massage'),
];


class Client extends Component {

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
            <Grid container justify="center" alignItems="center">
              <Typography variant="h4" component="h4">
                Client
              </Typography>
            </Grid>
            <Grid container justify="center" alignItems="center">
              <Avatar alt="Worker" src={noavatarimg} className={classes.bigAvatar} />
            </Grid>
            <Grid container justify="left" alignItems="left">
              <Typography variant="h5" component="h5">
                Appointment
              </Typography>
            </Grid>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Length</TableCell>
                    <TableCell align="right">Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.length}</TableCell>
                        <TableCell align="right">{row.comments}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
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

export default withRouter(withStyles(styles)(Client));
