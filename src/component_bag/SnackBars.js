
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import { closeSnackBar, openSnackBar } from '../store/actions/generalActions';

function SnackBar(props) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;
  const handleClick = () => {
    setOpen(this.props.snackBarState);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(this.state.snackBarStates);
  };


  return (
    <div>
      <Snackbar
        open={props.snackState}
        autoHideDuration={2000}
        onClose={props.closeSnackBar}
        message={props.snackMessage}
        action={props.snackType}
        anchorOrigin={{ vertical, horizontal }}
        severity = 'error'
        style={{backgroundColor:"red"}}
      />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
      closeSnackBar: (userData) => dispatch(closeSnackBar()),
      openSnackBar: (message,snackType) => dispatch(openSnackBar(message,snackType))
}
}
const mapStateToProps = (state) => {
  return {
      snackType: state.generalReducer.snackBarType,
      snackMessage: state.generalReducer.snackBarMessage,
      snackState: state.generalReducer.snackBarState,
      duration: state.generalReducer.duration,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SnackBar);
