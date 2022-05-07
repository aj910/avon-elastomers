import React, { useContext } from 'react';

import Page from '../components/Page';
import BlogSection from '../components/BlogSection';
import BrandSection from '../components/BrandSection';
import FeaturedProductSection from '../components/FeaturedProductSection';
import RecentlyViewedProductSection from '../components/RecentlyViewedProductSection';
import CategorySection from '../components/CategorySection';
import DealSection from '../components/DealSection';
import OurFeatureSection from '../components/OurFeatureSection';
import TopSellingProductSection from '../components/TopSellingProductSection';
import TrendingBannerSection from '../components/TrendingBannerSection';
import FeaturedCategorySection from '../components/FeaturedCategorySection';
import TwoBannerSection from '../components/TwoBannerSection';
import ProductSuggestionSection from '../components/ProductSuggestionSection';
import TwoFeaturedCategorySection from '../components/TwoFeaturedCategorySection';
import BannerSection from '../components/BannerSection';
import Loader from '../components/loader/Loader.component';
import StateContext from '../context/StateContext';

const Home = ({ isLoading }) => {
  const { homepageSetting, categories, topSellingProducts, recentlyViewedProducts, productSuggestions } = useContext(StateContext);
  return (
    <Page title="Home">
      <section className="banner-section">{isLoading ? <Loader /> : <BannerSection banner={homepageSetting.top_banner} />}</section>
      <section className="instrusction-block">
        <OurFeatureSection />
      </section>
      <section className="category-small-section">
        <CategorySection isLoading={isLoading} categories={categories} />
      </section>
      <section className="black-friday-sales-section">
        <DealSection isLoading={isLoading} />
      </section>
      <section className="new-league-section">{isLoading ? <Loader /> : <TrendingBannerSection homepageSetting={homepageSetting} />}</section>
      <section className="feature-product-section slider-section">
        <FeaturedProductSection isLoading={isLoading} />
      </section>
      <section className="electronic-cosmatic-section">{isLoading ? <Loader /> : <TwoBannerSection homepageSetting={homepageSetting} />}</section>
      <section className="feature-product-section slider-section">
        <RecentlyViewedProductSection isLoading={isLoading} recentlyViewedProducts={recentlyViewedProducts} />
      </section>

      <section className="feature-product-section slider-section">
        <FeaturedCategorySection isLoading={isLoading} category={homepageSetting.featured_category_1} image={homepageSetting.featured_category_1_image} />
      </section>
      <section className="feature-product-section slider-section">
        <TopSellingProductSection isLoading={isLoading} topSellingProducts={topSellingProducts} />
      </section>
      <section className="feature-product-section slider-section">
        <FeaturedCategorySection isLoading={isLoading} category={homepageSetting.featured_category_2} image={homepageSetting.featured_category_2_image} />
      </section>
      <section className="feature-product-section slider-section">
        <ProductSuggestionSection isLoading={isLoading} productSuggestions={productSuggestions} />
      </section>
      <section className="home-smartphone-section">
        <TwoFeaturedCategorySection isLoading={isLoading} />
      </section>
      <section className="feature-product-section slider-section">
        <BrandSection isLoading={isLoading} />
      </section>
      <section className="feature-product-section slider-section">
        <BlogSection isLoading={isLoading} />
      </section>
    </Page>
  );
};

export default Home;
