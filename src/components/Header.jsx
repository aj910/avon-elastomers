import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../context/StateContext';
import CategoryDropdownList from './header/category-dropdown-list.component';
import FeaturedCategoryListItem from './header/featured-category-list-item.component';
import SearchBar from './header/searchbar.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap';

const Header = ({ featuredCategories, websiteSetting }) => {
  const appState = useContext(StateContext);
  return (
    <div className="header-section">
      <section className="top-header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <p className="welcome-text">{`Hello ! Welcome to ${websiteSetting.website_name}`}</p>
            </div>
            <div className="col-md-7">
              <div className="topmenublk">
                <ul>
                  <li>
                    <a href={`tel:${websiteSetting.phone_number}`}>{websiteSetting.phone_number}</a>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/TrackOrder">Tracking Orders</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/compare-products">
                      Compare Products
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="middle-header-section">
        <div className="container-fluid">
          <div className="logo-searchbar-block">
            <div className="row align-items-center">
              <SearchBar />
              <div className="col-md-3 col-5 order-md-1">
                <div className="logo-block">
                  <NavLink to="/">
                    <img src={websiteSetting.header_logo} alt="logo" />
                  </NavLink>
                </div>
              </div>
              <div className="col-md-3 col-7 order-md-3">
                <div className="cartlogin-block">
                  <ul>
                    <li>
                      {appState.state.loggedIn ? (
                        <NavLink className="nav-link" to="/dashboard">
                          <i className="bi bi-person"></i>
                        </NavLink>
                      ) : (
                        <NavLink className="nav-link" to="/login">
                          <i className="bi bi-person"></i>
                        </NavLink>
                      )}
                    </li>
                    <li className="fav-menu-block">
                      <NavLink to="/my-favourite">
                        <i className="bi bi-heart"></i>
                        <span>{appState.state.wishlistItemCount}</span>
                      </NavLink>
                    </li>
                    <li className="cart-menu-block">
                      <NavLink to="/Cart">
                        <i className="bi bi-cart"></i>
                        <span>{appState.state.cartItemCount}</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="all-department-menu">
                <ul className="navbar-nav">
                  <CategoryDropdownList />
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="mainmenu-block">
                <nav className="navbar navbar-expand-lg">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Features
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          {featuredCategories.map((featuredCategory) => (
                            <FeaturedCategoryListItem key={featuredCategory.id} featuredCategory={featuredCategory} />
                          ))}
                         
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/shop">
                          Shop
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/new-arrival">
                          New Arrivals
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact-us">
                          Contact Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about-us">
                          About Us
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/compare-products">
                          Compare Products
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
