import './topnav.css';
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setWorkspace } from './actions';

const Topnav = ({ workspace, setWorkspace }) => {
  return (
    <nav className="topnav">
      <section className="topnav_section">
        <button className={classnames('topnav_button', {'topnav_button-active': workspace === 0})} onClick={setWorkspace(0)}>
          .FTSE
        </button>
        <button className={classnames('topnav_button', {'topnav_button-active': workspace === 1})} onClick={setWorkspace(1)}>
          .GOOG
        </button>
        <button className={classnames('topnav_button', {'topnav_button-active': workspace === 2})} onClick={setWorkspace(2)}>
          Default
        </button>
      </section>
    </nav>
  );
};

const mapStateToProps = state => ({
  workspace: state.workspace
})

const mapDispatchToProps = dispatch => ({
  setWorkspace: (id) => () => dispatch(setWorkspace(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topnav);