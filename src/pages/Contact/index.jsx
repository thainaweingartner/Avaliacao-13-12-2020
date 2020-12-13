import React, { useState } from 'react';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
import { Register } from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Error() {
  const [values, setValues] = useState({});
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = event => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  function handleChangeCheckbox() {
    if (checkbox) {
      setCheckbox(false);
      return null;
    }
    setCheckbox(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({
      ...values,
      checkbox: checkbox,
    });
    console.log(values);
  };

  return (
    <>
      <Menu />
        <Register>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome Completo</label>
            <input
              required
              id="name"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <label htmlFor="email">E-mail</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <label htmlFor="cel">Telefone</label>
            <input
              required
              id="cel"
              name="cel"
              onChange={handleChange}
              value={values.cel}
            />
            <label htmlFor="date">Data de Nascimento</label>
            <input
              required
              id="date"
              name="birthday"
              type="date"
              value={values.birthday}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkbox}
                  onChange={handleChangeCheckbox}
                  name="checkbox"
                  color="primary"
                />
              }
              label="Aceito receber newletter"
            />
            <button className="formButton" type="submit">
              <span>Solicitar Amostra</span>
            </button>
          </form>
        </Register>
      <Footer />
    </>
  );
}
