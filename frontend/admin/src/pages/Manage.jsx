import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Checkbox, Typography, Chip
} from '@mui/material';
import { Warning, ErrorOutline, Info } from '@mui/icons-material';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const data = [
  { user: 'Jerry McDonald', date: '25 Sep 2018 07:13', reason: 'Unable to understand the policy', status: 'Resolved', statusIcon: <ErrorOutline color="error" /> },
  { user: 'Mark Reus', date: '07 Sep 2018 21:30', reason: 'Query due to needed required documents', status: 'Open', statusIcon: <ErrorOutline color="error" /> },
  { user: 'Carla Bustamante', date: '01 Sep 2018 12:25', reason: 'Application error process', status: 'Resolved', statusIcon: <Info color="primary" /> },
  { user: 'Mark Reus', date: '26 Aug 2018 11:01', reason: 'Policy not understood', status: 'Open', statusIcon: <ErrorOutline color="error" /> },
];


const statusColors = {
  Resolved: 'success',
  Open: 'warning',
};

const QueryTable = () => {
  const [queries, setQueries] = useState([]);
  
  useEffect(() => {
    // Fetch queries from the server when the component mounts
    const fetchQueries = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/query');
        setQueries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };
  
    fetchQueries();
  }, []);
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
            <TableCell>Query reason</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {queries.map((query) => (
            <TableRow >
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{query.name}</TableCell>
              <TableCell>{query.description}</TableCell>
              <TableCell>
                <Chip label={query.status}  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QueryTable;