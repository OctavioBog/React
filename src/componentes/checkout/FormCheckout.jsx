import React from 'react';

const FormCheckout = ({ dataform, handlechangeform, handleSubmitform }) => {
  return (
    <div>
      <form onSubmit={handleSubmitform}>
        <label>Nombre Completo</label>
        <input
          type="text"
          value={dataform.fullname} // Asegúrate de usar "fullname", no "Fullname"
          name="fullname"
          onChange={handlechangeform}
        />
        <label>Teléfono</label>
        <input
          type="number"
          value={dataform.phone}
          name="phone"
          onChange={handlechangeform}
        />
        <label>Email</label>
        <input
          type="email"
          value={dataform.email} // Asegúrate de usar "email", no "Email"
          name="email"
          onChange={handlechangeform}
        />
        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};

export default FormCheckout;
