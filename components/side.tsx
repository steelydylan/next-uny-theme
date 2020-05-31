import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  // React.useEffect(() => {
  //   // @ts-ignore
  //   (adsbygoogle = window.adsbygoogle || []).push({});
  // }, []);

  return (
    <>
      <div>
        <div className="uc-card _orig-height">
          <div className="uc-card-header">
            <div
              className="uc-card-icon"
              style={{
                backgroundImage: "url(/images/steelydylan.png)"
              }}
            />
            <div className="uc-card-title">堀 悟大</div>
          </div>
          <div className="uc-card-body">
            <p>エンジニア</p>
          </div>
          <div className="uc-card-footer _txt-center">
            <div className="uc-btn _icon">
              <a href="https://www.instagram.com/steelydylan/">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  style={{ height: "20px" }}
                />
              </a>
            </div>
            <div className="uc-btn _icon">
              <a href="https://github.com/steelydylan/">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  style={{ height: "20px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
