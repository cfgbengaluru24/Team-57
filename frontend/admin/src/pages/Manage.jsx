import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Checkbox, Typography, Chip
} from '@mui/material';
import { Warning, ErrorOutline, Info } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
    <TableContainer component={Paper} style={{ margin: '20px' }}>
      <Typography variant="h6" gutterBottom component="div" style={{ padding: '16px', fontSize: '1.8rem' }}>
        Queries
      </Typography>
      <Table aria-label="query table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>User</TableCell>
            <TableCell style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Query reason</TableCell>
            <TableCell style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {queries.map((query, index) => (
            <TableRow key={index} hover style={{ cursor: 'pointer' }}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell style={{ fontSize: '1.2rem' }}>{query.name}</TableCell>
              <TableCell style={{ fontSize: '1.2rem' }}>{query.description}</TableCell>
              <TableCell>
                <Chip 
                  label={query.status} 
                  color={statusColors[query.status] || 'default'}
                  style={{ fontSize: '1rem', padding: '0 12px' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QueryTable;
