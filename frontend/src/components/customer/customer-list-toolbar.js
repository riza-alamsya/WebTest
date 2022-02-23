import {
  Box,
  Button,
  Typography
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export const CustomerListToolbar = (props) => {
  return (
    <Box {...props}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: -1
          }}
        >
          <Typography
            sx={{ m: 1 }}
            variant="h4"
          >
            Quotes
          </Typography>
          <Box sx={{ m: 1 }}>

            <Button
              onClick={props.random}
              color="primary"
              variant="contained"
            >
              Random
            </Button>
          </Box>
        </Box>

      </Box>
    )
}





