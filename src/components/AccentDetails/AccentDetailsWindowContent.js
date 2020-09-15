import React from "react";
import { Switch, Route } from "react-router-dom";
import AccentDetailsWords from "./Words/AccentDetailsWords";
import AccentDetailsVideos from "./Videos/AccentDetailsVideos";
import AccentDetailsHome from "./Home/AccentDetailsHome";
export default function AccentDetailsWindowContent(props) {
  const { accent } = props;
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={`/${accent.id}`} component={AccentDetailsHome} />
        <Route
          exact
          path={`/${accent.id}/words`}
          component={AccentDetailsWords}
        />
        <Route exact path={`/${accent.id}`} component={AccentDetailsWords} />
        <Route
          exact
          path={`/${accent.id}/videos`}
          component={AccentDetailsVideos}
        />
        {/* <Route
          exact
          path={`/${accent.id}/people`}
          component={AccentDetailsVideos}
        /> */}
      </Switch>
    </React.Fragment>
  );
}
