// import './main.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initSplitters } from './utils/splitter';

let workspaces = [
  <main className="layout-row resizable-container" data-resize-basis="70" data-resize-type="column">
    <section id="panel-1" className="panel resizable">
      <div className="layout-column resizable resizable-container" data-resize-basis="30" data-resize-type="row">
        <section id="panel-3" className="panel resizable"></section>
        <section id="panel-4" className="panel resizable"></section>    
        <div className="resize-bar resize-bar-row"></div>
      </div>  
    </section>
    <section id="panel-2" className="panel resizable"></section>    
    <div className="resize-bar resize-bar-column"></div>
  </main>, 

  <main className="layout-column resizable-container" data-resize-basis="60" data-resize-type="row">
    <section id="panel-1" className="panel resizable">
      <div className="layout-row resizable resizable-container" data-resize-basis="70" data-resize-type="column">
        <section id="panel-1" className="panel resizable"></section>
        <section id="panel-2" className="panel resizable"></section>    
        <div className="resize-bar resize-bar-column"></div>
      </div>  
    </section>
    <section id="panel-3" className="panel resizable"></section>    
    <div className="resize-bar resize-bar-row"></div>
  </main>,

<div></div>
];

const Workspace = ({ workspace }) => {
  useEffect(() => {
    initSplitters();
  });

  return workspaces[workspace];
};

const mapStateToProps = state => ({
  workspace: state.workspace
})

export default connect(
  mapStateToProps
)(Workspace);