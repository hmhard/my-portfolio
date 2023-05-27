import React, {  } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-awesome-reveal";

interface Props{
  degree:any;
  theme:any;
}
export default function DegreeCard ({degree, theme}:Props) {
  
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip  duration={1500}>
            <div className="">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(1.0)",
                }}
                src={`${degree.logo_path}`}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade  duration={2000} className="medium">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence:any) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
