import React, { FC } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { strings } from "../../assets/LocalizedStrings";
import { Redirect } from "react-router-dom";

const HomePage: FC = () => {
  useDocumentTitle(strings.council_data_project);

  // Because the home page as is with search bar was confusing to users
  // we want to simply redirect from home page to the /events page for
  // as the primary experience of the app
  return <Redirect to="/events" />;
};

export default HomePage;
