import{useState} from 'react'
import Form from '../component/Form'
import Table from '../component/Table'

const excludeColumns = ['dob'];
function Home() {
  const [record, setRecord] = useState({
    username: "",
    dob: "",
    email: "",
    address: "",
    contact: "",
  });
  const [items, setItems] = useState([]);
  const [fData, setFData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let rows = [...items];
    console.log(items);
    rows.push({
      username: record.username,
      dob: record.dob,
      email: record.email,
      address: record.address,
      contact: record.contact,
    });
    console.log(items);
    setRecord({
      username: "",
      dob: "",
      email: "",
      address: "",
      contact: "",
    });
    setItems(rows);
  };

  const handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    setRecord({...record,
      [name]: value,
    });
  };
  const handleSearch = value => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === ""){ setItems(items); setFData([])}
    else {
      let rows = [...items];
      console.log(rows);
      const filteredData = rows.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      console.log(filteredData,value)
      setFData(filteredData);
    }
  }

  return (
    <div>
      <Form
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        newUsername={record.username}
        newDob={record.dob}
        newEmail={record.email}
        newAddress={record.address}
        newContact={record.contact}
      />
      <Table items={fData.length >0 ?fData:items} handleSearch={handleSearch} searchText={searchText}/>
    </div>
  );
}
export default Home