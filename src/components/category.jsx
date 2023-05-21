import React, { useContext, useEffect } from "react";
import { ArticlesContext } from "../context/articles.context";
import { useParams } from "react-router-dom";
import { Header } from "./common/header";
import { Footer } from "./common/footer";
import { Sidebar } from "./common/sidebar";

const Category = () => {
  const { filteredArticles = [] } = useContext(ArticlesContext);
  const params = useParams();
  const { category } = params;
  return (
    <div>
      <Header />
      <div
        className="hero-area height-400 bg-img background-overlay"
        style={{ backgroundImage: "url(img/blog-img/bg3.jpg)" }}
      />
      <div className="main-content-wrapper section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="post-content-area mb-100">
                <div className="world-catagory-area">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="title capitalize">{params.category}</li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {filteredArticles.map((article) => (
                      <div className="single-blog-post post-style-4 d-flex align-items-center">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                          <img src={article.backgroundImage} alt="" />
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
            </div>
            {/* ========== Sidebar Area ========== */}
            <Sidebar />
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
      <Footer />
    </div>
  );
};
export default Category;
