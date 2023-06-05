import { useEffect, useState } from "react";
import Editor from "../common/Editor";
import { Header } from "../../common/header";
import { Footer } from "../../common/footer";

const NewsEdittingPage = () => {
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [backgroundImage, setBackgroundImage] = useState();
  const [backgroundImageUrl, setBackgroundImageUrl] = useState();
  const onEditorContentChange = (value) => {
    setContent(value);
  };
  const onBackgroundImageSelected = (e) => {
    const file = e.target.files[0];
    setBackgroundImage(file);
  };

  useEffect(() => {
    if (!backgroundImage) return;
    if (backgroundImageUrl) URL.revokeObjectURL(backgroundImageUrl);
    const image = URL.createObjectURL(backgroundImage);
    setBackgroundImageUrl(image);
  }, [backgroundImage]);

  return (
    <div>
      <Header />
      <div className="hero-area section-padding-100 container">
        <div className="label-area content--space-between">
          <div className="col-lg-2 title">Newspaper</div>
          <div className="load-more-btn text-center">
            <a href="#" className="btn world-btn">
              Create article
            </a>
          </div>
        </div>
        <div className="label-area padding-top-100">
          <label className="col-lg-2">Headline</label>
          <div>
            <textarea
              type="text-area"
              id="headline"
              value={headline}
              rows="4"
              cols="100"
              onChange={(e) => setHeadline(e.target.value)}
              style={{ resize: "none" }}
            ></textarea>
          </div>
        </div>
        <div className="label-area">
          <label className="col-lg-2">Background Image</label>
          <div>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={onBackgroundImageSelected}
            ></input>
            {backgroundImageUrl && <img src={backgroundImageUrl} />}
          </div>
        </div>
        <Editor
          className="hero-area"
          content={content}
          onEditorContentChange={onEditorContentChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NewsEdittingPage;
