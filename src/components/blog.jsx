import React, { useContext } from "react";
import { ArticlesContext } from "../context/articles.context";
import Logo from "../assets/img/core-img/logo.png";
import BackgroundImage from "../assets/img/blog-img/bg2.jpg";

const Blog = () => {
  const {
    currentArticle = {},
    setCurrentArticle,
    topStories,
  } = useContext(ArticlesContext);
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
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="Logo" />
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
                        <a className="dropdown-item" href="index.html">
                          Home
                        </a>
                        <a className="dropdown-item" href="catagory.html">
                          Catagory
                        </a>
                        <a className="dropdown-item" href="single-blog.html">
                          Single Blog
                        </a>
                        <a className="dropdown-item" href="regular-page.html">
                          Regular Page
                        </a>
                        <a className="dropdown-item" href="contact.html">
                          Contact
                        </a>
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
      <div
        className="hero-area height-600 bg-img background-overlay"
        style={{
          backgroundImage: `url(${
            currentArticle.backgroundImage || BackgroundImage
          })`,
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="single-blog-title text-center">
                {/* Catagory */}
                <div className="post-cta">
                  <a href="#">travel</a>
                </div>
                <h3>
                  {currentArticle.headline ||
                    "How Did van Gogh’s Turbulent Mind Depict One of the Most Concepts in Physics?"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********** Hero Area End ********** */}
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* ============= Post Content Area ============= */}
            <div className="col-12 col-lg-8">
              <div className="single-blog-content mb-100">
                {/* Post Meta */}
                <div className="post-meta">
                  <p>
                    <a href="#" className="post-author">
                      {currentArticle.author || "Katy Liu"}
                    </a>{" "}
                    on{" "}
                    <a href="#" className="post-date">
                      {currentArticle.publicDate || "Sep 29, 2017 at 9:48 am"}
                    </a>
                  </p>
                </div>
                {/* Post Content */}
                <div className="post-content">
                  {currentArticle.content || (
                    <>
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce enim nulla, mollis eu metus in, sagittis fringilla
                        tortor. Phasellus eget purus id felis dignissim
                        convallis. Suspendisse et augue dui. Morbi gravida sed
                        justo vel venenatis. Ut tempor pretium maximus. Donec
                        libero diam, faucibus vitae lectus nec, accumsan gravida
                        dui. Nam interdum mi eget lacus aliquet, sit amet
                        ultricies magna pharetra. In ut odio a ligula egestas
                        pretium et quis sapien. Etiam faucibus magna eu porta
                        vulputate. Aliquam euismod rhoncus malesuada. Nunc
                        rutrum hendrerit semper.
                      </h6>
                      <h6>
                        Maecenas vitae sem varius, imperdiet nisi a, tristique
                        nisi. Sed scelerisque suscipit leo cursus accumsan.
                        Donec vel turpis quam. Mauris non nisl nec nunc gravida
                        ullamcorper id vestibulum magna. Donec non velit
                        finibus, laoreet arcu nec, facilisis augue. Aliquam sed
                        purus id erat accumsan congue. Mauris semper ullamcorper
                        nibh non pellentesque. Aenean euismod purus sit amet
                        quam vehicula ornare.
                      </h6>
                      <blockquote className="mb-30">
                        <h6>
                          Aliquam auctor lacus a dapibus pulvinar. Morbi in elit
                          erat. Quisque et augue nec tortor blandit hendrerit
                          eget sit amet sapien. Curabitur at tincidunt metus,
                          quis porta ex. Duis lacinia metus vel eros cursus
                          pretium eget.
                        </h6>
                        <div className="post-author">
                          <p>Robert Morgan</p>
                        </div>
                      </blockquote>
                      <h6>
                        Donec orci dolor, pretium in luctus id, consequat vitae
                        nibh. Quisque hendrerit, lorem sit amet mollis
                        malesuada, urna orci volutpat ex, sed scelerisque nunc
                        velit et massa. Sed maximus id erat vel feugiat.
                        Phasellus bibendum nisi non urna bibendum elementum.
                        Aenean tincidunt nibh vitae ex facilisis ultrices.
                        Integer ornare efficitur ultrices. Integer neque lectus,
                        venenatis at pulvinar quis, aliquet id neque. Mauris
                        ultrices consequat velit, sed dignissim elit posuere in.
                        Cras vitae dictum dui.
                      </h6>
                      {/* Post Tags */}
                      <ul className="post-tags">
                        <li>
                          <a href="#">Manual</a>
                        </li>
                        <li>
                          <a href="#">Liberty</a>
                        </li>
                        <li>
                          <a href="#">Recommendations</a>
                        </li>
                        <li>
                          <a href="#">Interpritation</a>
                        </li>
                      </ul>
                      {/* Post Meta */}
                      <div className="post-meta second-part">
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
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* ========== Sidebar Area ========== */}
            <div className="col-12 col-md-8 col-lg-4">
              <div className="post-sidebar-area mb-100">
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
                      <div
                        key={story.id}
                        className="single-blog-post post-style-2 d-flex align-items-center widget-post"
                      >
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                          <img src={`assets/img/blog-img/b1${story.id}.jpg`} alt="" />
                        </div>
                        {/* Post Content */}
                        <div className="post-content">
                          <a href="#" className="headline">
                            <h5 className="mb-0">{story.headline}</h5>
                          </a>
                        </div>
                      </div>
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
                        <img src="img/blog-img/b22.jpg" alt="" />
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
          {/* ============== Related Post ============== */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              {/* Single Blog Post */}
              <div className="single-blog-post">
                {/* Post Thumbnail */}
                <div className="post-thumbnail">
                  <img src="img/blog-img/b1.jpg" alt="" />
                  {/* Catagory */}
                  <div className="post-cta">
                    <a href="#">travel</a>
                  </div>
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <a href="#" className="headline">
                    <h5>
                      How Did van Gogh’s Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </h5>
                  </a>
                  <p>
                    How Did van Gogh’s Turbulent Mind Depict One of the Most
                    Complex Concepts in...
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
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {/* Single Blog Post */}
              <div className="single-blog-post">
                {/* Post Thumbnail */}
                <div className="post-thumbnail">
                  <img src="img/blog-img/b2.jpg" alt="" />
                  {/* Catagory */}
                  <div className="post-cta">
                    <a href="#">travel</a>
                  </div>
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <a href="#" className="headline">
                    <h5>
                      How Did van Gogh’s Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </h5>
                  </a>
                  <p>
                    How Did van Gogh’s Turbulent Mind Depict One of the Most
                    Complex Concepts in...
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
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {/* Single Blog Post */}
              <div className="single-blog-post">
                {/* Post Thumbnail */}
                <div className="post-thumbnail">
                  <img src="img/blog-img/b7.jpg" alt="" />
                  {/* Catagory */}
                  <div className="post-cta">
                    <a href="#">travel</a>
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
                    <h5>
                      How Did van Gogh’s Turbulent Mind Depict One of the Most
                      Complex Concepts in Physics?
                    </h5>
                  </a>
                  <p>
                    How Did van Gogh’s Turbulent Mind Depict One of the Most
                    Complex Concepts in...
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
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="post-a-comment-area mt-70">
                <h5>Get in Touch</h5>
                {/* Contact Form */}
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="group">
                        <input type="text" name="name" id="name" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Enter your name</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group">
                        <input type="email" name="email" id="email" required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Enter your email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="group">
                        <textarea
                          name="message"
                          id="message"
                          required
                          defaultValue={""}
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Enter your comment</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn world-btn">
                        Post comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              {/* Comment Area Start */}
              <div className="comment_area clearfix mt-70">
                <ol>
                  {/* Single Comment Area */}
                  <li className="single_comment_area">
                    {/* Comment Content */}
                    <div className="comment-content">
                      {/* Comment Meta */}
                      <div className="comment-meta d-flex align-items-center justify-content-between">
                        <p>
                          <a href="#" className="post-author">
                            Katy Liu
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            Sep 29, 2017 at 9:48 am
                          </a>
                        </p>
                        <a href="#" className="comment-reply btn world-btn">
                          Reply
                        </a>
                      </div>
                      <p>
                        Pick the yellow peach that looks like a sunset with its
                        red, orange, and pink coat skin, peel it off with your
                        teeth. Sink them into unripened...
                      </p>
                    </div>
                    <ol className="children">
                      <li className="single_comment_area">
                        {/* Comment Content */}
                        <div className="comment-content">
                          {/* Comment Meta */}
                          <div className="comment-meta d-flex align-items-center justify-content-between">
                            <p>
                              <a href="#" className="post-author">
                                Katy Liu
                              </a>{" "}
                              on{" "}
                              <a href="#" className="post-date">
                                Sep 29, 2017 at 9:48 am
                              </a>
                            </p>
                            <a href="#" className="comment-reply btn world-btn">
                              Reply
                            </a>
                          </div>
                          <p>
                            Pick the yellow peach that looks like a sunset with
                            its red, orange, and pink coat skin, peel it off
                            with your teeth. Sink them into unripened...
                          </p>
                        </div>
                      </li>
                    </ol>
                  </li>
                  {/* Single Comment Area */}
                  <li className="single_comment_area">
                    {/* Comment Content */}
                    <div className="comment-content">
                      {/* Comment Meta */}
                      <div className="comment-meta d-flex align-items-center justify-content-between">
                        <p>
                          <a href="#" className="post-author">
                            Katy Liu
                          </a>{" "}
                          on{" "}
                          <a href="#" className="post-date">
                            Sep 29, 2017 at 9:48 am
                          </a>
                        </p>
                        <a href="#" className="comment-reply btn world-btn">
                          Reply
                        </a>
                      </div>
                      <p>
                        Pick the yellow peach that looks like a sunset with its
                        red, orange, and pink coat skin, peel it off with your
                        teeth. Sink them into unripened...
                      </p>
                    </div>
                  </li>
                </ol>
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
                  <img src="img/core-img/logo.png" alt="" />
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
                    id="eemail"
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
export default Blog;
