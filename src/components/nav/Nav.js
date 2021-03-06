import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import icons for Webpack
import iconLocation from '../../images/icons/location.png';
import iconChild from '../../images/icons/child.png';
import iconViolence from '../../images/icons/violence.png';
import iconFamily from '../../images/icons/family-planning.png';
import iconLifecycle from '../../images/icons/lifecycle.png';
import iconReproductive from '../../images/icons/reproductive.png';
// import images
import imgHeader from '../../images/mAdaptLogo_white.png';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [
        {
          icon: iconLocation,
          text: 'Access',
          url: '/access'
        },
        {
          icon: iconFamily,
          text: 'Family Planning',
          url: '/family-planning'
        },
        {
          icon: iconChild,
          text: 'Pregnancy and Newborn',
          url: '/pregnancy-newborn'
        },
        {
          icon: iconReproductive,
          text: 'Sexual Health',
          url: '/sexual-health'
        },
        {
          icon: iconLifecycle,
          text: 'Family Health',
          url: '/family-health'
        },
        {
          icon: iconViolence,
          text: 'Violence',
          url: '/violence'
        }
      ]
    }
  }

  render() {
    return (
      <div className="nav">
        <NavLink exact activeClassName='active' to='/'>
          <div className="nav-header">
            <h1 className="nav-header-title">
              <img className="image-banner" src={imgHeader} alt="Header Image" />
              mAdapt
            </h1>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Nav
