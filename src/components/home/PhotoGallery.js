import React, { useState } from "react";

import img2016JLA from "static/img/gallery/2016-joe-lewis-arena.jpg";
import img2017Diques from "static/img/gallery/2017-diques-vs-whalers.jpg";
import img2018Belfor from "static/img/gallery/2018-belfor-champions.jpg";
import img2018Keg from "static/img/gallery/2018-keg-americans.jpg";
import img2018MiniKeg from "static/img/gallery/2018-minikeg-wheelin-taylors.jpg";
import img2019AllStar from "static/img/gallery/2019-allstar-on-the-dunes.jpg";
import img2019Broadcast from "static/img/gallery/2019-broadcast-nordiques-vs-northstars.jpeg";
import img2019Keg from "static/img/gallery/2019-keg-nordiques.jpg";
import img2019Seals from "static/img/gallery/2019-seals-warmups.jpg";
import img2020Keg from "static/img/gallery/2020-keg-northstars.jpg";
import img2021LCA from "static/img/gallery/2021-lca-jumbotron.jpg";
import img2022Draft from "static/img/gallery/2022-draft-americans.JPG";
import img2023Keg from "static/img/gallery/2023-keg-tigers.jpg";
import img2024Keg from "static/img/gallery/2024-keg-whalers.jpg";
import img2025Keg from "static/img/gallery/2025-keg-northstars.jpg";
import img2026Keg from "static/img/gallery/2026-keg-whalers.jpg";

const photos = [
  { src: img2026Keg, caption: "2026 Keg Champions - Whalers" },
  { src: img2025Keg, caption: "2025 Keg Champions - North Stars" },
  { src: img2024Keg, caption: "2024 Keg Champions - Whalers" },
  { src: img2023Keg, caption: "2023 Keg Champions - Tigers" },
  { src: img2022Draft, caption: "2022 Fall Draft" },
  { src: img2021LCA, caption: "Little Caesars Arena Skate (2021)" },
  { src: img2020Keg, caption: "2020 Keg Champions - North Stars" },
  { src: img2019AllStar, caption: "2019 All-Star Game" },
  { src: img2019Broadcast, caption: "2019 Playoffs Broadcast" },
  { src: img2019Keg, caption: "2019 Keg Champions - Nordiques" },
  { src: img2019Seals, caption: "Golden Seals (2019)" },
  { src: img2018Belfor, caption: "MNL Belfor Skate (2018)" },
  { src: img2018Keg, caption: "2018 Keg Champions - Americans" },
  { src: img2018MiniKeg, caption: "2018 Spring Champions - Wheelin' Taylors" },
  { src: img2017Diques, caption: "Diques vs. Whalers (2017)" },
  { src: img2016JLA, caption: "Joe Louis Arena Skate (2016)" },
];

export const PhotoGallery = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(() =>
    Math.floor(Math.random() * photos.length),
  );
  const activePhoto = photos[activePhotoIndex];

  const selectPhoto = (index) => {
    setActivePhotoIndex(index);
  };

  const showPreviousPhoto = () => {
    setActivePhotoIndex(
      (currentIndex) => (currentIndex - 1 + photos.length) % photos.length,
    );
  };

  const showNextPhoto = () => {
    setActivePhotoIndex((currentIndex) => (currentIndex + 1) % photos.length);
  };

  return (
    <section className="photo-gallery" aria-label="photo gallery">
      <div className="photo-gallery__stage z-depth-2">
        <button
          type="button"
          className="photo-gallery__nav-zone photo-gallery__nav-zone--left"
          onClick={showPreviousPhoto}
          aria-label="Show previous photo"
        >
          <span
            className="photo-gallery__nav-icon material-icons"
            aria-hidden="true"
          >
            chevron_left
          </span>
        </button>
        <button
          type="button"
          className="photo-gallery__nav-zone photo-gallery__nav-zone--right"
          onClick={showNextPhoto}
          aria-label="Show next photo"
        >
          <span
            className="photo-gallery__nav-icon material-icons"
            aria-hidden="true"
          >
            chevron_right
          </span>
        </button>
        <img
          src={activePhoto.src}
          alt={activePhoto.caption}
          className="photo-gallery__image"
          loading={activePhotoIndex === 0 ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="photo-gallery__overlay">
          <h2 className="photo-gallery__title">{activePhoto.caption}</h2>
          <div
            className="photo-gallery__dots"
            aria-label="Gallery photo selector"
          >
            {photos.map((photo, index) => {
              const isActive = index === activePhotoIndex;

              return (
                <button
                  type="button"
                  key={photo.caption}
                  className={`photo-gallery__dot ${
                    isActive ? "photo-gallery__dot--active" : ""
                  }`}
                  onClick={() => selectPhoto(index)}
                  aria-label={`Show ${photo.caption}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
