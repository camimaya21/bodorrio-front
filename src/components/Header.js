import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { Logo } from '../svg/logo'

import './header.css'

class Header extends Component {
  state = {
    fixed: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const heightToShow = window.innerHeight

    if (window.pageYOffset > heightToShow) {
      this.setState({ fixed: true })
    }

    if (window.pageYOffset < heightToShow) {
      this.setState({ fixed: false })
    }
  }

  render() {
    const { toggleMenu, isOpen } = this.props
    const { fixed } = this.state
    const css = classNames('header', { 'is-fixed': fixed }, { 'is-open': isOpen })

    return (
      <header className={css}>
        <div className="container">
          <div className="hamburger-holder">
            <button className="hamburger btn btn-icon" onClick={e => toggleMenu()}>
              <div key="line0" className="line" />
              <div key="line1" className="line" />
            </button>
          </div>
          <div className="logo-container" onClick={e => toggleMenu()}>
            <Logo alt="logo" className="logo" />
          </div>
          <nav className="navigation">
            <ul className="nav-menu">
              <li className="nav-menu-item is-hidden-md" onClick={e => toggleMenu(false)}>
                <Link className="nes-btn" to="/">
                  Lugar & Hora
                </Link>
              </li>
              <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                <Link className="nes-btn" to="/">
                  Código de Vestimenta
                </Link>
              </li>
              <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                <Link className="nes-btn" to="/">
                  Confirmar Asistencia
                </Link>
              </li>
              <li className="nav-menu-item" onClick={e => toggleMenu(false)}>
                <Link className="nes-btn" to="/">
                  Detalles
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
