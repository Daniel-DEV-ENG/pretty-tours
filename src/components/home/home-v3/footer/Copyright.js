import React from "react";
import styles from './footer.module.css'

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const footerMenuItems = [
    {
      label: "Privacy",
      link: "#",
    },
    {
      label: "Terms",
      link: "#",
    },
    {
      label: "Sitemap",
      link: "#",
    },
  ];

  return (
    <div className= {`white-bdrt1  pl60 pr60 copyright ${styles.copyright}`} >
      <div className="row">
        <div className="col-sm-6">
          <div className="text-start  text-lg-start">
          <p className="footer-menu ff-heading ">
              {footerMenuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <a className="text-black" href={item.link}>
                    {item.label}
                  </a>
                  {index !== footerMenuItems.length - 1 && " · "}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <div className="text-start text-lg-end">
          <p className="copyright-text  ff-heading">
              © Pretty tours {getCurrentYear()}{" "}
              {/* <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                ib-themes
              </a>{" "} */}
              - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
