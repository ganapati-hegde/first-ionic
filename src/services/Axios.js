import axios from 'axios';
const Axios = async (path) => {
    console.log('here..', `${process.env.REACT_APP_BACKEND}${path}`)
    const res = await axios.get(`${process.env.REACT_APP_BACKEND}${path}`)
    return res;
}
export default Axios