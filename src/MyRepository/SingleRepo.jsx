import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContextApi } from "../App";

function SingleRepo() {
  const { id } = useParams();
  const [repo, setRepo] = useState([]);
  const [repos] = useContext(MyContextApi);
  const fetchSingleRepo = async () => {
    const getSingleRepo = await repos.filter(
      (value) => value.id === Number(id)
    );
    setRepo(getSingleRepo);
  };
  useEffect(() => {
    fetchSingleRepo();
  }, []);
  return <div>{
    repo && repo.map(
        (per) => <div key={per.id}>
            {per.id}
            <p>{per.svn_url}</p>
            <p>{per.name}</p>
        </div>
    )
    }</div>;

    //you can start styling no pagination
}

export default SingleRepo;
