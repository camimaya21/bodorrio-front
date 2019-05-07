import React, { Component, createRef } from "react";
import { connect } from 'react-redux'
import { USER_UPDATED } from '../actions'

import FormField from "./FormField";
import { formToJson } from "../utils/form"
import AuthAPI from '../utils/auth'

import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.action = createRef();
    this.form = createRef();
  }

  confirm(e) {
    e.preventDefault();
    const { history, user } = this.props
    const data = formToJson(e.target)
    const {confirm, numberPeople, alergies, specialDiet, comments } = data
    const id = user.user._id
    AuthAPI.sendForm(id, confirm, numberPeople, alergies, specialDiet, comments).then( user => {
      confirm === "yes" ? (
        alert("Gracias por confirmar... ¡Nos vemos en la boda! 😘")
      ) : (
        alert("Gracias por confirmar... 😘")
      )
      return history.push("/place")
    }).catch(e => {
       console.error(e)
    })
  }

  onChange = value => {
    const data = formToJson(this.form.current)
    this.setState({ ...data });
  };

  render() {
    const { user } = this.props

    return (
      <div className="section-wrapper">
        <section className="info-wrapper">
          <h2 className="subtitle">
            Confirmar Asistencia{" "}
            <span role="img" aria-label="ticket">
              🎟️
            </span>{" "}
          </h2>
          <h1 className="title">Entonces... {user.user.name}</h1>
        </section>
        <form className="form-wrapper" ref={this.form} onSubmit={(e) => this.confirm(e)}>
          <div className="form-item">
            <h4>¿Contamos contigo?</h4>
            <label className="nes-field">
              <select className="nes-input"  name="confirm" onChange={this.onChange}>
              {
        //eslint-disable-next-line react/jsx-no-target-blank
        }
                <option className="form-item" defaultChecked value="yes">Claro que sí guapis <span role="img" aria-label="cat">😻</span></option>
                {
        //eslint-disable-next-line react/jsx-no-target-blank
        }
                <option className="form-item" value="no">No <span role="img" aria-label="broken-heart">💔</span></option>
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
              <option className="form-item" defaultChecked value="Ninguna">Ninguna</option>
              <option className="form-item" value="Vegetariano">Vegetariano</option>
              <option className="form-item" value="Vegano">Vegano</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="textarea_field">Comentarios</label>
            <textarea
              id="textarea_field"
              className="nes-textarea"
              name="comments"
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
