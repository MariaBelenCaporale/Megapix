const API_URL = 'https://stage-backend.megapix.lat/api/v1';

export const getArsPrice = async () => {
  try {
    const response = await fetch(`${API_URL}/manteca/prices/USDT_ARS`, {
      method: 'GET'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching ARS price:', error);
    throw error;
  }
};

export const getBrlCotization = async (amount) => {
  try {
    const response = await fetch(`${API_URL}/pix/quote_brl?amount=${amount}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data; 
  } catch (error) {
    console.error('Error fetching BRL cotization:', error);
    throw error; 
  }
};
