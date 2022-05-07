import React, { useEffect, useState, useReducer } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Axios from 'axios';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import FlashMessage from './components/flash-message/FlashMessage';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LoginOTP from './pages/LoginOTP';
import GetOTP from './pages/GetOTP';
import LoginPassword from './pages/LoginPassword';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Contact from './pages/Contact';
import CompareProducts from './pages/CompareProducts';
import Shop from './pages/Shop';
import Category from './pages/Category';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Faq from './pages/Faq';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/MyAccount';
import Setting from './pages/Setting';
import MyFavourite from './pages/MyFavourite';
import ChangePassword from './pages/ChangePassword';
import AddressBook from './pages/AddressBook';
import TrackOrder from './pages/TrackOrder';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import Legal from './pages/Legal';
import SiteMap from './pages/SiteMap';
import Features from './pages/Features';
import NewArrivals from './pages/NewArrivals';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Deal from './pages/Deal';

import StateContext from './context/StateContext';
import DispatchContext from './context/DispatchContext';

// Styles
import './App.css';

Axios.defaults.baseURL = 'https://themetoaster.site/avon-elastomers/api';
// Axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

const App = () => {
  useEffect(() => {
    const indexRequest = Axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await Axios.get('/index', {
          cancelToken: indexRequest.token,
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        });
        const responseData = response.data.data;
        setAboutUs(responseData.about_us);
        setBlogs(responseData.blogs);
        setBrands(responseData.brands);
        setCategories(responseData.categories);
        setFaqs(responseData.faqs);
        setFeaturedCategories(responseData.featured_categories);
        setGalleries(responseData.galleries);
        setLegalPolicy(responseData.legal);
        setPrivacyPolicy(responseData.privacy_policy);
        setRefundPolicy(responseData.sale_and_refund);
        setTeams(responseData.teams);
        setTermsAndCondition(responseData.terms_and_condition);
        setTestimonials(responseData.testimonials);
        setFlashDeal1(responseData.flash_deal_1);
        setFlashDeal2(responseData.flash_deal_2);
        setFlashDeal3(responseData.flash_deal_3);
        setFlashDealPotrait(responseData.flash_deal_potrait);
        setFlashDealSuper(responseData.flash_deal_super);
        setFlashDealSuperProducts(responseData.flash_deal_super_products);
        setTopSellingProducts(responseData.top_selling_products);
        setWebsiteSetting(responseData.website_setting);
        setFeaturedProducts(responseData.featured_products);
        setHomepageSetting(responseData.homepage_setting);
        setCountries(responseData.countries);
        dispatch({ type: 'setWishlistCount', value: responseData.wishlistCount });
        setIsLoading(false);
      } catch (e) {
        console.log('error');
      }
    }
    fetchData();
    return () => {
      indexRequest.cancel();
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [aboutUs, setAboutUs] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const [legalPolicy, setLegalPolicy] = useState({});
  const [privacyPolicy, setPrivacyPolicy] = useState({});
  const [refundPolicy, setRefundPolicy] = useState({});
  const [teams, setTeams] = useState([]);
  const [termsAndCondition, setTermsAndCondition] = useState({});
  const [testimonials, setTestimonials] = useState([]);
  const [flashDeal1, setFlashDeal1] = useState({});
  const [flashDeal2, setFlashDeal2] = useState({});
  const [flashDeal3, setFlashDeal3] = useState({});
  const [flashDealPotrait, setFlashDealPotrait] = useState({});
  const [flashDealSuper, setFlashDealSuper] = useState({});
  const [flashDealSuperProducts, setFlashDealSuperProducts] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [websiteSetting, setWebsiteSetting] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [homepageSetting, setHomepageSetting] = useState({});
  const [recentlyViewedProducts, setRecenltyViewedProducts] = useState([]);
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);

  const initialState = {
    flashMessages: [],
    loggedIn: Boolean(localStorage.getItem('avonToken')),
    wishlistItemCount: 0,
    cartItemCount: 0,
    user: {
      token: localStorage.getItem('avonToken'),
      name: localStorage.getItem('avonName'),
      email: localStorage.getItem('avonEmail'),
      mobileNumber: localStorage.getItem('avonMobileNumber'),
      profileImage: localStorage.getItem('avonProfileImage'),
      lastLogin: localStorage.getItem('avonLastLogin'),
    },
  };

  function ourReducer(state, action) {
    console.log(action);
    switch (action.type) {
      case 'login':
        return { flashMessages: state.flashMessages, loggedIn: true, user: action.data, wishlistItemCount: state.wishlistItemCount, cartItemCount: state.cartItemCount };
      case 'logout':
        return { flashMessages: state.flashMessages, loggedIn: false, user: {}, wishlistItemCount: 0, cartItemCount: state.cartItemCount };
      case 'flashMessage':
        return { flashMessages: state.flashMessages.concat(action.value), loggedIn: state.loggedIn, user: state.user, wishlistItemCount: state.wishlistItemCount, cartItemCount: state.cartItemCount };
      case 'setUser':
        return { flashMessages: state.flashMessages, loggedIn: state.loggedIn, user: action.data, wishlistItemCount: state.wishlistItemCount, cartItemCount: state.cartItemCount };
      case 'setWishlistCount':
        return { flashMessages: state.flashMessages, loggedIn: state.loggedIn, user: state.user, wishlistItemCount: action.value, cartItemCount: state.cartItemCount };
      default:
        return;
    }
  }

  const [state, dispatch] = useReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem('avonToken', state.user.token);
      localStorage.setItem('avonName', state.user.name);
      localStorage.setItem('avonEmail', state.user.email);
      localStorage.setItem('avonMobileNumber', state.user.mobileNumber);
      localStorage.setItem('avonProfileImage', state.user.profileImage);
      localStorage.setItem('avonLastLogin', state.user.lastLogin);
    } else {
      localStorage.removeItem('avonToken');
      localStorage.removeItem('avonName');
      localStorage.removeItem('avonEmail');
      localStorage.removeItem('avonMobileNumber');
      localStorage.removeItem('avonProfileImage');
      localStorage.removeItem('avonLastLogin');
    }
  }, [state.loggedIn]);

  Axios.defaults.headers.common['Authorization'] = state.user.token;

  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <StateContext.Provider value={{ state, categories, testimonials, faqs, blogs, brands, homepageSetting, featuredProducts, topSellingProducts, recentlyViewedProducts, setRecenltyViewedProducts, productSuggestions, setProductSuggestions, countries, flashDeal1, flashDeal2, flashDeal3, flashDealPotrait, flashDealSuper, flashDealSuperProducts }}>
          <DispatchContext.Provider value={dispatch}>
            <FlashMessage messages={state.flashMessages} />
            <Header featuredCategories={featuredCategories} websiteSetting={websiteSetting} />
            <Routes>
              <Route path="/" exact element={<Home isLoading={isLoading} />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/sign-up" exact element={<SignUp />} />
              <Route path="/shop" exact element={<Shop />} />
              <Route path="/category/:slug" exact element={<Category />} />
              <Route path="/product/:slug" exact element={<ProductDetails />} />
              <Route path="/new-arrival" exact element={<NewArrivals />} />
              <Route path="/contact-us" exact element={<Contact websiteSetting={websiteSetting} />} />
              <Route path="/faq" exact element={<Faq isLoading={isLoading} />} />
              <Route path="/about-us" exact element={<About isLoading={isLoading} aboutUs={aboutUs} />} />
              <Route path="/compare-products" exact element={<CompareProducts isLoading={isLoading} />} />
              <Route path="/gallery" exact element={<Gallery galleries={galleries} isLoading={isLoading} />} />
              <Route path="/team" exact element={<Team teams={teams} isLoading={isLoading} />} />
              <Route path="/blogs" exact element={<Blog />} />
              <Route path="/blog/:slug" exact element={<BlogDetail />} />
              <Route path="/privacy-policy" exact element={<Privacy privacyPolicy={privacyPolicy} />} />
              <Route path="/terms-and-condition" exact element={<Terms termsAndCondition={termsAndCondition} />} />
              <Route path="/refund-policy" exact element={<RefundPolicy refundPolicy={refundPolicy} />} />
              <Route path="/legal" exact element={<Legal legalPolicy={legalPolicy} />} />
              <Route path="/deal/:slug" exact element={<Deal />} />

              <Route path="/dashboard" exact element={state.loggedIn ? <Dashboard /> : <Navigate to="/" replace />} />
              <Route path="/my-account" exact element={state.loggedIn ? <MyAccount /> : <Navigate to="/" replace />} />
              <Route path="/setting" exact element={state.loggedIn ? <Setting /> : <Navigate to="/" replace />} />
              <Route path="/my-favourite" exact element={state.loggedIn ? <MyFavourite /> : <Navigate to="/" replace />} />
              <Route path="/change-password" exact element={state.loggedIn ? <ChangePassword /> : <Navigate to="/" replace />} />
              <Route path="/address-book" exact element={state.loggedIn ? <AddressBook /> : <Navigate to="/" replace />} />

              <Route path="/forgot-password" exact element={<ForgotPassword />} />
              <Route path="/reset-password" exact element={<ResetPassword />} />

              <Route path="/LoginOTP" exact element={<LoginOTP />} />
              <Route path="/GetOTP" exact element={<GetOTP />} />
              <Route path="/LoginPassword" exact element={<LoginPassword />} />
              <Route path="/Cart" exact element={<Cart />} />
              <Route path="/Checkout" exact element={<Checkout />} />
              <Route path="/Success" exact element={<Success />} />
              <Route path="/TrackOrder" exact element={<TrackOrder />} />
              <Route path="/Features" exact element={<Features />} />
              <Route path="/Pricing" exact element={<Pricing />} />
              <Route path="/site-map" exact element={<SiteMap />} />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
            <Footer websiteSetting={websiteSetting} />
          </DispatchContext.Provider>
        </StateContext.Provider>
      </div>
    </div>
  );
};

export default App;
