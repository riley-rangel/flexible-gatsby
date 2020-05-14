import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

import Sidebar from '.././components/sidebar';
import '../styles/main.scss';
import '../styles/fonts/font-awesome/css/font-awesome.min.css';

/**
 * Component responsible for rendering the two-column layout - used as the default.
 *
 * @type {React.FC}
 */
const DefaultLayout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          social {
            twitter
            facebook
            linkedin
            github
            email
          }
        }
      }
    }
  `);

  return (
    <div className="wrapper">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Sidebar siteMetadata={site.siteMetadata} />

      <div className="content-box clearfix">{children}</div>
    </div>
  );
};

export default DefaultLayout;
