import axios from 'axios';

const apiUrl = "https://api.pancakeswap.info/api/v2/tokens/0xe55bd75d7cE7bfDe26A347A748d080D3ACdA7FFE";

export const getPrice = async() => {
  const response:any = await axios.get(apiUrl);
  return response.data.data.price;
}