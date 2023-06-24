import { loaded } from "../action";

const fetchData=async(dispatch)=>{
    const response= await fetch("http://localhost:9000/books");
    const datas=await response.json();
    dispatch(loaded(datas));
}
export default fetchData;