import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

export default function Dashboard() {
  const [formData, setFormData] = useState({
    dealNumber: '',
    fundName: '',
    investorName: '',
    tradeType: '',
    td: '',
    sd: '',
    amount: '',
    currency: 'EUR',
    shareAmount: '',
    apexReference: '',
    tradeReceived: ''
  });

  const [data, setData] = useState([]);

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Add data to the table
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setFormData({
      dealNumber: '',
      fundName: '',
      investorName: '',
      tradeType: '',
      td: '',
      sd: '',
      amount: '',
      currency: 'EUR',
      shareAmount: '',
      apexReference: '',
      tradeReceived: ''
    });
  };

  // Remove data row
  const handleRemoveRow = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  return (
    <div className="form-container">
      <h2>Enter Investment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Deal Number</label>
          <input
            type="text"
            name="dealNumber"
            value={formData.dealNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Fund Name</label>
          <input
            type="text"
            name="fundName"
            value={formData.fundName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Investor Name</label>
          <input
            type="text"
            name="investorName"
            value={formData.investorName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Trade Type</label>
          <input
            type="text"
            name="tradeType"
            value={formData.tradeType}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Trade Date (TD)</label>
          <input
            type="date"
            name="td"
            value={formData.td}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Settlement Date (SD)</label>
          <input
            type="date"
            name="sd"
            value={formData.sd}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Currency</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
          >
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="form-group">
          <label>Share Amount</label>
          <input
            type="number"
            name="shareAmount"
            value={formData.shareAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Apex Reference</label>
          <input
            type="text"
            name="apexReference"
            value={formData.apexReference}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Trade Received</label>
          <input
            type="text"
            name="tradeReceived"
            value={formData.tradeReceived}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Investment</button>
      </form>

      <div className="table-container">
        <h3>Investment Data</h3>
        <table>
          <thead>
            <tr>
              <th>Deal Number</th>
              <th>Fund Name</th>
              <th>Investor Name</th>
              <th>Trade Type</th>
              <th>TD</th>
              <th>SD</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Share Amount</th>
              <th>Apex Reference</th>
              <th>Trade Received</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.dealNumber}</td>
                <td>{item.fundName}</td>
                <td>{item.investorName}</td>
                <td>{item.tradeType}</td>
                <td>{item.td}</td>
                <td>{item.sd}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                <td>{item.shareAmount}</td>
                <td>{item.apexReference}</td>
                <td>{item.tradeReceived}</td>
                <td>
                  <button onClick={() => handleRemoveRow(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CSVLink data={data} className="csv-button">
          Export to CSV
        </CSVLink>
      </div>
    </div>
  );
}