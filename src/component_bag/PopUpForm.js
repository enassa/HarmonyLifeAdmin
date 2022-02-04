import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import axios from 'axios';
import { URL_END_POINTS, TOKEN, ALL_URLS } from '../contants/urls';
const countries = [
    { code: 'AD', label: 'University of Ghana - LEGON', phone: '376' },
    { code: 'AE', label: 'Kwame Nkrumah University of Ghana - KNUST', phone: '971' },
    { code: 'AF', label: 'University for development studies - UDS ', phone: '93' },
    { code: 'AG', label: 'University of Winneba - UEW', phone: '1-268' },
    { code: 'AI', label: 'University of CapeCoast - UCC', phone: '1-264' },
    { code: 'AI', label: 'Ashesi University', phone: '1-264' },
]
const years = [
    { code: 'AD', label: '1950', phone: '376' },
    { code: 'AD', label: '1960', phone: '376' },
    { code: 'AD', label: '1970', phone: '376' },
    { code: 'AD', label: '1980', phone: '376' },
    { code: 'AD', label: '1990', phone: '376' },
    { code: 'AE', label: '2000', phone: '971' },
    { code: 'AF', label: '2002', phone: '93' },
    { code: 'AG', label: '2003', phone: '1-268' },
    { code: 'AI', label: '2004', phone: '1-264' },
]
export default function PopUpForm(props) {
  const [open, setOpen] = React.useState(true);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    props.handleClick()
    setOpen(false);
  };
  const  handleSubmit = (data) => {
      props.handleClick()
      props.handleSubmit()
        // this.setState({error:"Authorities will be notified of your request"})
    }
  

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Transcript request form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You will be alerted via email and text concerning this request. You will receive a message when it is received, being processed and completed
          </DialogContentText>
          <FormGenerator
            fields={[
                        {
                            fieldType: FIELDS.input,
                            name: "name",
                            label: "Full Name",
                            placeholder: "Full Name",
                            required: true,
                        },
                        {
                            fieldType: FIELDS.input,
                            name: "index",
                            label: "Index Number",
                            placeholder: "Index Number",
                            required: true,
                        },
                        {
                            fieldType: FIELDS.input,
                            name: "email",
                            label: "Email",
                            placeholder: "Email",
                            required: false,
                        },
                        {
                            fieldType: FIELDS.dropDown,
                            name: "institution",
                            label: "Institution",
                            placeholder: "Institution",
                            dropDownList:countries,
                            required: true,
                        },
                        {
                            fieldType: FIELDS.dropDown,
                            name: "year",   
                            label: "Year Completed",
                            placeholder: "Year Completed",
                            dropDownList:years,
                            required: true,
                        },
                        {
                            fieldType: FIELDS.input,
                            name: "message",
                            label: "Short message",
                            placeholder: "Short message",
                            required: false,
                        },
                    ]
            }
            handleOnSubmit = {(data, resetFunc)=>{
                handleSubmit(data,resetFunc)
            }}
            buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
          
          />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
