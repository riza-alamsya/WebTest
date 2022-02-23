import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useState,useEffect } from 'react';
import { getQuotes } from 'src/service/api';
import jsCookie from 'js-cookie';

const Customers = () => {
  const [values, setValues] = useState([]);
  const random = async () =>{
    var token = jsCookie.get('token')
    var quotes = await getQuotes(5,token)

    setValues(quotes)
  }
  useEffect(()=>{
    random()
  },[])
  return (
    <>
    <Head>
      <title>
        Quotes
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar random={random}/>
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={values} />
        </Box>
      </Container>
    </Box>
  </>
  )
}


Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
