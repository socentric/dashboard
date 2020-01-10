import './leftnav.css';
import React from 'react';
import { connect } from 'react-redux';
import { setTheme } from './actions';
import classnames from 'classnames';

import logo from '../public/logo.png';

const Leftnav = ({ theme, setTheme }) => {
  return (
    <nav className={classnames(`leftnav ${theme}`)}>
      <section className="leftnav_section leftnav_section-logo">
        <button className="leftnav_button leftnav_button-logo">
          <img className="leftnav_logo-image" src={logo} alt="Taurus" />
          <span className="leftnav_logo-text">Connected</span>
        </button>
      </section>

      <section className="leftnav_section">
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">notifications</span>
          Notifications
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">dashboard</span>
          Dashboard
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">settings</span>
          Settings
        </button>
      </section>

      <section className="leftnav_section">
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">create</span>
          Add Strategy
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">post_add</span>
          Omon
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">view_list</span>
          Blotter
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">library_books</span>
          Ticket
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">trending_up</span>
          Chart
        </button>
      </section>

      <section className="leftnav_section">
        { 
          theme === 'dark' ? (
            <button className="leftnav_button" onClick={setTheme('light')}>
              <span className="material-icons leftnav_button-icon" aria-hidden="true">wb_sunny</span>Light
            </button>
          ) : (
            <button className="leftnav_button" onClick={setTheme('dark')}>
              <span className="material-icons leftnav_button-icon" aria-hidden="true">brightness_3</span>Dark
            </button>
          )
        }
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">power_settings_new</span>
          Log Out
        </button>
      </section>
    </nav>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  setTheme: (theme) => () => dispatch(setTheme(theme))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leftnav);