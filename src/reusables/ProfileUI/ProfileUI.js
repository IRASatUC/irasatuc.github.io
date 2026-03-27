import "./ProfileUI.css";
import Placeholder from "../../components/img/Placeholder_people.png";
import { useEffect, useRef } from "react";

export default function ProfileUI(props) {
  const website = props.website;
  const descRef = useRef(null);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const MAX = 12;  // start font size (px)
    const MIN = 7;   // smallest allowed (px)

    const fit = () => {
      // reset first (important when resizing bigger)
      let size = MAX;
      el.style.setProperty("--desc-font", `${size}px`);

      // shrink until fits or hits MIN
      while (size > MIN && el.scrollHeight > el.clientHeight + 1) {
        size -= 0.5;
        el.style.setProperty("--desc-font", `${size}px`);
      }
    };

    // run now + on resize
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [props.name, props.title, props.description]);

  return (
    <div className="profile-row">
      {/* Circle */}
      <div className="profile-row__avatarWrap">
        <img
          className="profile-row__avatar"
          src={props.imgUrl || Placeholder}
          alt={props.name || "profile"}
        />
      </div>

      {/* Rectangle */}
      <div className="profile-row__card">
        <h2 className="profile-row__name">{props.name}</h2>
        <h3 className="profile-row__title">{props.title}</h3>
    

        {/* Description */}
        <div className="profile-row__desc" ref={descRef}>
          {props.description ? props.description() : null}
        </div>

        {/* Hover CTA */}
        {website && (
          <div className="profile-row__cta">
            <a href={website} target="_blank" rel="noreferrer">
              Personal Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
