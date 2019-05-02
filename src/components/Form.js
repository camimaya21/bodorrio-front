import React, { Component, createRef } from "react";
import { connect } from 'react-redux'
import { USER_UPDATED } from '../actions'

import FormField from "./FormField";
import { formToJson } from "../utils/form"

import "./form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.action = createRef();
    this.form = createRef();
  }

  confirm(e) {
 //   const { updateUser } = this.props
    e.preventDefault();
    const data = formToJson(e.target)
console.log(data)
  //  updateUser(data)
  }

  onChange = value => {
    const data = formToJson(this.form.current)
    this.setState({ ...data });
  };

  render() {
    return (
      <div className="section-wrapper">
        <section className="info-wrapper">
          <h2 className="subtitle">
            Confirmar Asistencia{" "}
            <span role="img" aria-label="ticket">
              🎟️
            </span>{" "}
          </h2>
          <h1 className="title">Entonces... Bolt</h1>
        </section>
        <form className="form-wrapper" ref={this.form} onSubmit={this.confirm}>
          <div className="form-item">
            <h4>¿Contamos contigo?</h4>
            <label className="nes-field">
              <select className="nes-input"  name="confirm" onChange={this.onChange}>
                <option className="form-item" defaultChecked value="yes">Claro que sí guapis 😻</option>
                <option className="form-item" value="no">No 💔</option>
              </select>
            </label>
            
          </div>
          <div className="form-item">
            <h4>Número de Personas</h4>
            <select className="nes-input"  name="numberPeople" onChange={this.onChange}>
              <option className="form-item" defaultChecked value={1}>1</option>
              <option className="form-item" value={2}>2</option>
              <option className="form-item" value={3}>3</option>
            </select>
          </div>
          <div className="form-item">
            <FormField
              type="text"
              name="alergies"
              label="Alergias"
              onChange={this.onChange}
            />
          </div>
          <div className="form-item">
            <h4>Dieta Especial</h4>
            <select className="nes-input"  name="specialDiet" onChange={this.onChange}>
              <option className="form-item" defaultChecked value={1}>Ninguna</option>
              <option className="form-item" value={2}>Vegetariano</option>
              <option className="form-item" value={3}>Vegano</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="textarea_field">Comentarios</label>
            <textarea
              id="textarea_field"
              className="nes-textarea"
              name="coments"
              onChange={this.onChange}
            />
          </div>
        <div className="btn-wrapper">
            <button ref={this.action}>> Confirmar Asistencia</button>
        </div>
        </form>
      </div>
    );
  }
}

const mapState = ({user}) => {
  return {
    user
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser : payload => {
      dispatch({
        type: USER_UPDATED,
        payload
      }) 
    } 
  }
}

export default connect(mapState, mapDispatch)(Form);
