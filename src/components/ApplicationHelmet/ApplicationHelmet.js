import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

const ApplicationHelmet = ({ title, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content={description} />
                <title> {title} </title>
            </Helmet>
        </HelmetProvider>
    );
};

ApplicationHelmet.defaultProps = {
    title: "React App",
    description: "Web site created using create-react-app",
};

ApplicationHelmet.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ApplicationHelmet;
