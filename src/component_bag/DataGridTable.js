import * as React from 'react';
import { DataGrid, GridToolbar,GridToolbarContainer,GridToolbarDensitySelector,GridToolbarExport,GridToolbarColumnsButton,GridToolbarFilterButton
  } from '@mui/x-data-grid';

// import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataGridTable(props) {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const data = {
    columns:[
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ],
    rows:[
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ],
      rowLength: 100,
      maxColumns: 6,
      
}
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}