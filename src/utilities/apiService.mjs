import axios from "axios";

async function getData(urlStr) {
  try {
    let res = await axios.get(urlStr);

    let data = res.data;

    data.length = 10;

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export default { getData };