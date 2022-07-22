import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../slices/searchSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e));
  }

  return <Input placeholder="Buscar..." onChange={(e)=>handleSearch(e.target.value)}/>
}

export default Searcher;