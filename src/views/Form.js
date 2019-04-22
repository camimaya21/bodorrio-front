import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import FormField from "../components/Form-field";

import "./form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.action = createRef();
    this.form = createRef();
  }

  confirm(e) {
    e.preventDefault();
  }

  onChange = value => {
    const data = this.form.current;
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
          <div className="form-item form-radio">
            <h4>¿Contamos contigo?</h4>
            <label>
              <input type="radio" className="nes-radio" name="answer" checked />
              <span>Claro que sí <span role="img" aria-label="cat">😻</span></span>
            </label>
            <label>
              <input type="radio" className="nes-radio" name="answer" />
              <span>No <span role="img" aria-label="heart-breaker">💔</span></span>
            </label>
          </div>
          <div className="form-item">
            <FormField
              name="numpersonas"
              label="Nº de personas"
              onChange={this.onChange}
            />
          </div>
          <div className="form-item">
            <FormField
              name="Alergias"
              label="Alergias"
              onChange={this.onChange}
            />
          </div>
          <div className="form-item">
            <label for="textarea_field">Comentarios</label>
            <textarea
              id="textarea_field"
              class="nes-textarea"
              name="Comentarios"
              onChange={this.onChange}
            />
          </div>
        </form>
        <div className="btn-wrapper">
          <Link to="/form">
            <button>> Confirmar Asistencia</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Form;
