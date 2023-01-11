import React, { FC } from "react";
import { strings } from "../../../assets/LocalizedStrings";
import bigskychamber from "../../../assets/images/logos/BigSkyChamber.png";
import gfchamber from "../../../assets/images/logos/GFChamber.png";
import helenachamber from "../../../assets/images/logos/HelenaChamber.png";
import kalispellchamber from "../../../assets/images/logos/KalispellChamber.png";
import missoulachamber from "../../../assets/images/logos/MissoulaChamber.png";
import montanaChamberHorizontal from "../../../assets/images/logos/MTC-web-white-horizontal.png"
import "./Footer.css";

interface Link {
  /*Displayed string represents the link*/
  label: string;
  /*URL to which the link redirects*/
  url: string;
}

export interface FooterLinksSection {
  /*Array of links to be displayed below the
  footerLinkSectionName*/
  links: Link[];
  /*Name to be displayed at the top of the footer
  column*/
  footerLinksSectionName: string;
}

export interface FooterProps {
  /**Array of footer columns, each with a name to be displayed at
  the top of the column, and an array of links to be displayed
  below the name*/
  footerLinksSections: FooterLinksSection[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function renderFooterLinksSection(footerLinksSection: FooterLinksSection) {
  return (
    <section className="mzp-c-footer-section">
      <h5 className="mzp-c-footer-heading">{footerLinksSection.footerLinksSectionName}</h5>
      <ul>
        {footerLinksSection.links.map((link) => {
          return (
            <li key={link.label}>
              <a href={link.url}>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer: FC<FooterProps> = ({ footerLinksSections }: FooterProps) => {
  return (
    <footer className="mzp-c-footer">
      <div className="mzp-l-content">
        <nav className="mzp-c-footer-primary" aria-label="footer">
          <div className="mzp-c-footer-sections">
            <section className="cdp-default-links mzp-c-footer-section">
              <h5 className="mzp-c-footer-heading">{strings.about}</h5>
              <ul>
                <li>
                  <a href="https://councildataproject.github.io/">CouncilDataProject</a>
                </li>
                <li style={{marginLeft:'1em'}}>
                  <a href="https://github.com/CouncilDataProject">GitHub</a>
                </li>
                <li>
                  <a href="//openmontana.org" target="_blank" rel="noreferrer">Open Montana</a>
                </li>
              </ul>
            </section>
            <section className="cdp-chamber-logos mzp-c-footer-section">
              <h5 id="cdp-chamber-logo-heading" className="mzp-c-footer-heading">
                This advocacy service was made possible by…
              </h5>
              <ul className="chamber-logos">
                <li>
                  <img src={helenachamber} />
                </li>
                <li>
                  <img src={missoulachamber} />
                </li>
                <li>
                  <img src={bigskychamber} />
                </li>
                <li className="break">
                  {/* this li is here to break the items into two discrete rows */}
                </li>
                <li>
                  <img src={montanaChamberHorizontal} />
                </li>
                <li>
                  <img src={kalispellchamber} />
                </li>
                <li>
                  <img src={gfchamber} />
                </li>
              </ul>
            </section>
            {/* Do not use footerLinkSections since we have a customized footer with the chamber logos */}
            {/* {footerLinksSections.map((footerLinksSection: FooterLinksSection) => {
              return renderFooterLinksSection(footerLinksSection);
            })} */}
          </div>
        </nav>

        <nav className="mzp-c-footer-secondary">
          <p>
            {strings.disclaimer_footer_start}{" "}
            <a
              rel="noopener noreferrer license external"
              target="_blank"
              href="https://cloud.google.com/speech-to-text"
            >
              Google Speech-to-Text
            </a>{" "}
            {strings.disclaimer_footer_end}
          </p>

          <div className="mzp-c-footer-legal mzp-c-footer-license">
            <p>{strings.copyright_notice.replace("{date_range}", "2017-2021")}</p>
            <p>
              {strings.content_license_prefix}
              <a
                rel="noopener noreferrer license external"
                href={strings.content_license_link}
                target="_blank"
              >
                {strings.content_license_link_text}
              </a>
              .
              <br />
              {strings.tools_license_prefix}
              <a
                rel="noopener noreferrer license external"
                href="https://github.com/CouncilDataProject/cookiecutter-cdp-deployment/blob/main/LICENSE"
                target="_blank"
              >
                MIT License
              </a>
              .
            </p>
            <p>
              {strings.styled_using_prefix}
              <a
                rel="noopener noreferrer external"
                href="https://protocol.mozilla.org/"
                target="_blank"
              >
                Mozilla Protocol
              </a>
              .
              <br />
              {strings.artwork_provided_by_prefix}
              <a rel="noopener noreferrer external" href="https://undraw.co/" target="_blank">
                unDraw
              </a>
              .
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
