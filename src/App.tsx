import React from 'react';
import { Table } from 'reactstrap';
import Modal from './Modal';
import './App.css';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css';


const TblCmp = () => {
  return (
    <>
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-10">
          <Modal />
        </div>
        <div className="col-md-10">
          
          <TblCmp />
        </div>
      </div>

    </div>
  );
}

export default App;
