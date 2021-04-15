
function Table({ items, handleSearch,searchText}) {
  return (
    <>
    <div className="search-container">
    <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Search..."
        value={searchText}
        className="search-box"
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
    <div id="Table">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
          </tr>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.username}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}


export default Table;
