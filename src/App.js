import './app.css';
import React, { Fragment } from 'react';
import Leftnav from './Leftnav';
import Workspaces from './Workspaces';

export default () => {
  return (
    <Fragment>
        <Leftnav/>
        <Workspaces/>
    </Fragment>
  );
};
