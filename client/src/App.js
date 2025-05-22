import { useEffect, useState } from "react";
import "./App.css";
//import { MdClose } from "react-icons/md";
import Formtable from "./components/Formtable";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
function App() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
   
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        name: "",
        email: "",
        mobile: "",
      });
    }
  };
  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
      // alert(data.data.message)
    }
  };
  //for get data
  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    //alert(data.data.message);
  
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update", formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target;
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };
  return (
    <>
      <div className="container">
        <h1
          style={{ color: "white", textAlign: "center", background: "#194064" }}
        >
          Mansara Family
        </h1>
        <button className="btn btn-add" onClick={() => setAddSection(true)}>
          Add
        </button>

        {addSection && (
          <Formtable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <Formtable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => {
                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEdit(el)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p style={{ textAlign: "center" }}>No data</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
