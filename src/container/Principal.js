import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Principal = () => (
  <Link to="/sorteo">
    <div className="btn btn-primary btn-lg btn-block">Iniciar</div>
  </Link>
);
  
export default Principal;