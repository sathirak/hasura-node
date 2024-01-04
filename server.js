const axios = require('axios');

async function fetchDataWithAdminSecret() {
  const hasuraEndpoint = 'http://localhost:8080/v1/graphql';

  try {
    const response = await axios.post(
      hasuraEndpoint,
      {
        query: `
          query GetAllShops {
            abc {
              id
              name
              type
            }
          }
        `
      },
      {
        headers: {
          'X-Hasura-Admin-Secret': 'myadminsecretkey'
        }
      }
    );

    if (response.data.data) {
      const data = response.data.data;
      console.log('Fetched data:');
      console.log(data);
    } else {
      console.error('No data received');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data
fetchDataWithAdminSecret();
