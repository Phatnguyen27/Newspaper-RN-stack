import React, { Component, useContext } from "react";
import LOGO from "img/blog-img/b1.jpg";
import { ArticlesContext } from "../context/articles.context";
import { categories } from "../config";

const Home = () => {
  const { topStories, highlights, latestArticles, mostPopularArticles } =
    useContext(ArticlesContext);
  const dropdownItems = [
    "Home",
    "Category",
    "Single Blog",
    "Regular Page",
    "Contact",
  ];
  const slideItems = [
    {
      id: 1,
      content:
        "How Did van Gogh’s Turbulent Mind Depict One of the MostComplex",
    },
    {
      id: 2,
      content:
        "How Did van Gogh’s Turbulent Mind Depict One of the MostComplex",
    },
    {
      id: 3,
      content:
        "How Did van Gogh’s Turbulent Mind Depict One of the MostComplex",
    },
    {
      id: 4,
      content:
        "How Did van Gogh’s Turbulent Mind Depict One of the MostComplex",
    },
  ];
  return (
    <div>
      {/* Preloader Start */}
      {/* <div id="preloader">
                <div className="preload-content">
                  <div id="world-load" />
                </div>
              </div> */}
      {/* Preloader End */}
      {/* ***** Header Area Start ***** */}
      <header className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                  <img src="" alt="Logo" />
                </a>
                {/* Navbar Toggler */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#worldNav"
                  aria-controls="worldNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                {/* Navbar */}
                <div className="collapse navbar-collapse" id="worldNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {dropdownItems.map((item) => (
                          <a
                            key={item}
                            className="dropdown-item"
                            href="index.html"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Gadgets
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Lifestyle
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                  {/* Search Form  */}
                  <div id="search-wrapper">
                    <form action="#">
                      <input
                        type="text"
                        id="search"
                        placeholder="Search something..."
                      />
                      <div id="close-icon" />
                      <input className="d-none" type="submit" defaultValue />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
      {/* ********** Hero Area Start ********** */}
      <div className="hero-area">
        {/* Hero Slides Area */}
        <div className="hero-slides owl-carousel">
          {/* Single Slide */}
          <div
            className="single-hero-slide bg-img background-overlay"
            style={{ backgroundImage: "url(/img/blog-img/bg2.jpg)" }}
          />
          {/* Single Slide */}
          <div
            className="single-hero-slide bg-img background-overlay"
            style={{ backgroundImage: "url(/img/blog-img/bg1.jpg)" }}
          />
        </div>
        {/* Hero Post Slide */}
        <div className="hero-post-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-post-slide">
                  {slideItems.map((item) => (
                    <>
                      {/* Single Slide */}
                      <div className="single-slide d-flex align-items-center">
                        <div className="post-number">
                          <p>{item.id}</p>
                        </div>
                        <div className="post-title">
                          <a href="single-blog.html">{item.content}</a>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********** Hero Area End ********** */}
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* ============= Post Content Area Start ============= */}
            <div className="col-12 col-lg-8">
              <div className="post-content-area mb-50">
                {/* Category Area */}
                <div className="world-catagory-area">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="title">Don’t Miss</li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="tab1"
                        data-toggle="tab"
                        href="#world-tab-1"
                        role="tab"
                        aria-controls="world-tab-1"
                        aria-selected="true"
                      >
                        All
                      </a>
                    </li>
                    {categories.map((category) => (
                      <li className="nav-item">
                        <a
                          className="nav-link capitalize"
                          id="tab2"
                          data-toggle="tab"
                          href={`/articles/${category}`}
                          role="tab"
                          aria-controls="world-tab-2"
                          aria-selected="false"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="world-tab-1"
                      role="tabpanel"
                      aria-labelledby="tab1"
                    >
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div
                            className="world-catagory-slider owl-carousel wow fadeInUpBig"
                            data-wow-delay="0.1s"
                          >
                            {[0, 1, 2, 3].map(function (post) {
                              return (
                                <div className="single-blog-post">
                                  {/* Post Thumbnail */}
                                  <div className="post-thumbnail">
                                    <img src="/img/blog-img/b1.jpg" alt="" />
                                    {/* Catagory */}
                                    <div className="post-cta">
                                      <a href="#">travel</a>
                                    </div>
                                  </div>
                                  {/* Post Content */}
                                  <div className="post-content">
                                    <a href="#" className="headline">
                                      <h5>
                                        How Did van Gogh’s Turbulent Mind Depict
                                        One of the Most Complex Concepts in
                                        Physics?
                                      </h5>
                                    </a>
                                    <p>
                                      How Did van Gogh’s Turbulent Mind Depict
                                      One of the Most Complex Concepts in...
                                    </p>
                                    {/* Post Meta */}
                                    <div className="post-meta">
                                      <p>
                                        <a href="#" className="post-author">
                                          Katy Liu
                                        </a>{" "}
                                        on{" "}
                                        <a href="#" className="post-date">
                                          Sep 29, 2017 at 9:48 am
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          {highlights.map(function (post) {
                            return (
                              <div
                                className="single-blog-post post-style-2 d-flex align-items-center wow fadeInUpBig"
                                data-wow-delay="0.2s"
                              >
                                {/* Post Thumbnail */}
                                <div className="post-thumbnail">
                                  <img
                                    src={`/img/blog-img/b${post.id}.jpg`}
                                    alt=""
                                  />
                                </div>
                                {/* Post Content */}
                                <div className="post-content">
                                  <a href="#" className="headline">
                                    <h5>{post.headline}</h5>
                                  </a>
                                  {/* Post Meta */}
                                  <div className="post-meta">
                                    <p>
                                      <a href="#" className="post-author">
                                        {post.author}
                                      </a>{" "}
                                      on{" "}
                                      <a href="#" className="post-date">
                                        {post.publicDate}
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ========== Sidebar Area ========== */}
            <div className="col-12 col-md-8 col-lg-4">
              <div
                className="post-sidebar-area wow fadeInUpBig"
                data-wow-delay="0.2s"
              >
                {/* Widget Area */}
                <div className="sidebar-widget-area">
                  <h5 className="title">About World</h5>
                  <div className="widget-content">
                    <p>
                      The mango is perfect in that it is always yellow and if
                      it’s not, I don’t want to hear about it. The mango’s only
                      flaw, and it’s a minor one, is the effort it sometimes
                      takes to undress the mango, carve it up in a way that
                      makes sense, and find its way to the mouth.
                    </p>
                  </div>
                </div>
                {/* Widget Area */}
                <div className="sidebar-widget-area">
                  <h5 className="title">Top Stories</h5>
                  <div className="widget-content">
                    {/* Single Blog Post */}
                    {topStories.map((story) => (
                      <>
                        <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                          {/* Post Thumbnail */}
                          <div className="post-thumbnail">
                            <img
                              src={`/img/blog-img/b1${story.id}.jpg`}
                              alt=""
                            />
                          </div>
                          {/* Post Content */}
                          <div className="post-content">
                            <a href="#" className="headline">
                              <h5 className="mb-0">{story.headline}</h5>
                            </a>
                          </div>
                        </div>
                        {/* Single Blog Post */}
                      </>
                    ))}
                  </div>
                </div>
                {/* Widget Area */}
                <div className="sidebar-widget-area">
                  <h5 className="title">Stay Connected</h5>
                  <div className="widget-content">
                    <div className="social-area d-flex justify-content-between">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Widget Area */}
                <div className="sidebar-widget-area">
                  <h5 className="title">Today’s Pick</h5>
                  <div className="widget-content">
                    {/* Single Blog Post */}
                    <div className="single-blog-post todays-pick">
                      {/* Post Thumbnail */}
                      <div className="post-thumbnail">
                        <img src="/img/blog-img/b22.jpg" alt="" />
                      </div>
                      {/* Post Content */}
                      <div className="post-content px-0 pb-0">
                        <a href="#" className="headline">
                          <h5>
                            How Did van Gogh’s Turbulent Mind Depict One of the
                            Most Complex Concepts in Physics?
                          </h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="world-latest-articles">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="title">
                  <h5>Latest Articles</h5>
                </div>
                {/* Single Blog Post */}
                {latestArticles.map((article) => (
                  <div
                    className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig"
                    data-wow-delay="0.2s"
                  >
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                      <img
                        src={`/img/blog-img/b1${article.id + 7}.jpg`}
                        alt=""
                      />
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                      <a href="#" className="headline">
                        <h5>{article.headline}</h5>
                      </a>
                      <p>{article.summary}</p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p>
                          <a href="#" className="post-author">
                            {article.author}
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            {article.publicDate}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-12 col-lg-4">
                <div className="title">
                  <h5>Most Popular Videos</h5>
                </div>
                {mostPopularArticles.map((article) => (
                  <div
                    className="single-blog-post wow fadeInUpBig"
                    data-wow-delay="0.2s"
                  >
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                      <img src={`/img/blog-img/b7.jpg`} alt="" />
                      {/* Category */}
                      <div className="post-cta">
                        <a href="#">{article.category}</a>
                      </div>
                      {/* Video Button */}
                      <a
                        href="https://www.youtube.com/watch?v=IhnqEwFSJRg"
                        className="video-btn"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                      <a href="#" className="headline">
                        <h5>{article.headline}</h5>
                      </a>
                      <p>{article.summary}</p>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p>
                          <a href="#" className="post-author">
                            {article.author}
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            {article.publicDate}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Load More btn */}
          <div className="row">
            <div className="col-12">
              <div className="load-more-btn mt-50 text-center">
                <a href="#" className="btn world-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Footer Area Start ***** */}
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="footer-single-widget">
                <a href="#">
                  <img src="/img/core-img/logo.png" alt="" />
                </a>
                <div className="copywrite-text mt-30">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © | Made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                  <p>
                    Proudly distributed by{" "}
                    <a href="https://themewagon.com" target="_blank">
                      ThemeWagon
                    </a>
                  </p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  <p />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-single-widget">
                <ul className="footer-menu d-flex justify-content-between">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Gadgets</a>
                  </li>
                  <li>
                    <a href="#">Video</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-single-widget">
                <h5>Subscribe</h5>
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your mail"
                  />
                  <button type="button">
                    <i className="fa fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ***** Footer Area End ***** */}
      {/* jQuery (Necessary for All JavaScript Plugins) */}
      {/* Popper js */}
      {/* Bootstrap js */}
      {/* Plugins js */}
      {/* Active js */}
    </div>
  );
};
export default Home;
