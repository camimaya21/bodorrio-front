import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Form extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="info-wrapper">
          <h2 className="subtitle">Confirmar Asistencia</h2>
          <h1 className="title">
            Entonces... ¿contamos contigo?{' '}
            <span role="img" aria-label="ticket">
              🎟️
            </span>
          </h1>
        </section>
        <div className="btn-wrapper">
          <Link className="nes-btn" to="/form">
            <button>> Confirmar Asistencia</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Form
