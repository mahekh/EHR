import React, { useState } from 'react';

function RowForm() {
  const [formData, setFormData] = useState([{ name: '', email: '', phone: '' }]);

  function handleInputChange(event, index) {
    const { name, value } = event.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  }

  function handleAddRow() {
    setFormData([...formData, { name: '', email: '', phone: '' }]);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {formData.map((row, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
          <input type="text" name="name" value={row.name} onChange={(event) => handleInputChange(event, index)} />
          <input type="email" name="email" value={row.email} onChange={(event) => handleInputChange(event, index)} />
          <input type="tel" name="phone" value={row.phone} onChange={(event) => handleInputChange(event, index)} />
        </div>
      ))}
      <button type="button" onClick={handleAddRow}>Add row</button>
    </div>
  );
}

export default RowForm;
