import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';



function createData(ProjectTitle, GroupName, Contributers, Contributions) {
    const Balance = Contributers/Contributions
  return {ProjectTitle, GroupName, Contributers, Contributions, Balance};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    // maxHeight: 540,
    height:"100%"
  },
});

export default function AdvancedTable(props) {
  console.log("ROWS", props.rows, "COLUMNS",props.columns)
  const columns = props.columns?props.columns:[

    { id: 'GroupName', label: 'Group Name', minWidth: 100 },
    {
      id: 'Contributers',
      label: 'No. of Contributers',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Contributions',
      // label: 'Size\u00a0(km\u00b2)',
      label: 'Total Contributions',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'Balance',
      label: 'Balance',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

  const rows =props.rows?props.rows:[
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
    {ProjectTitle:"Purchasing a car for the school", GroupName:"IN", Contributers:"1324171354", Contributions:"878", Balance:"qwe"},
  ];
  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,  color:"#333", fontFamily:"Helvetica Neue", fontWeight:"300" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
