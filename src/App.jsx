import { useState } from "react";

export default function App() {
  // ① 画像情報を持つオブジェクト配列
  const images = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" },
  ];

  // ② 表示中の画像
  const [currentImage, setCurrentImage] = useState(images[0]);

  // ③ 暗転状態
  const [isDark, setIsDark] = useState(false);

  // ④ darken / lighten ボタン処理
  function toggleDarken() {
    setIsDark(!isDark);
  }

  return (
    <div>
      {/* 表示用画像 */}
      <div className="display-area">
        <img
          className="display-img"
          src={currentImage.src}
          alt={currentImage.alt}
        />
        <div
          className="overlay"
          style={{
            backgroundColor: isDark ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
          }}
        ></div>
      </div>

      {/* darken / lighten ボタン */}
      <button onClick={toggleDarken}>
        {isDark ? "lighten" : "darken"}
      </button>

      {/* サムネイルバー */}
      <div className="thumb-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
