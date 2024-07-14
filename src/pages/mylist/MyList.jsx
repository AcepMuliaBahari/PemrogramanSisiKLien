import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyDatatable from "../../components/mydatatable/MyDatatable";
import Widget from "../../components/widget/Widget";

const MyList = ({columns} ) => {
  return (
    <div className="myList">
      <Sidebar />
      <div className="myListContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="categories" />
        
        </div>
        <div className="table">
          <MyDatatable columns={columns}  />
        </div>
      </div>
    </div>
  );
};

export default MyList;
