import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Checkbox, Typography, Chip
} from '@mui/material';
import { Warning, ErrorOutline, Info } from '@mui/icons-material';

const data = [
  { user: 'Jerry McDonald', date: '25 Sep 2018 07:13', reason: 'Value out of range', status: 'Resolved', statusIcon: <ErrorOutline color="error" /> },
  { user: 'Mark Reus', date: '07 Sep 2018 21:30', reason: 'Required field is empty', status: 'Open', statusIcon: <ErrorOutline color="error" /> },
  { user: 'Carla Bustamante', date: '01 Sep 2018 12:25', reason: 'Required field is empty', status: 'Resolved', statusIcon: <Info color="primary" /> },
  { user: 'Mark Reus', date: '26 Aug 2018 11:01', reason: 'Value out of range', status: 'Open', statusIcon: <ErrorOutline color="error" /> },
];

const statusColors = {
  Resolved: 'success',
  Open: 'warning',
};

const QueryTable = () => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" gutterBottom component="div" style={{ padding: '16px' }}>
        Queries
      </Typography>
      <Table aria-label="query table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>User</TableCell>
            <TableCell>Creation date</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Query reason</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.data}</TableCell>
              <TableCell>
                {row.statusIcon}
                {` ${row.reason}`}
              </TableCell>
              <TableCell>
                <Chip label={row.status} color={statusColors[row.status]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QueryTable;