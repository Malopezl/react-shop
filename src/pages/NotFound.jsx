import React from "react";
import "@styles/NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <h1 className="title-404">404</h1>
      <p className="text-404">
        Either you aren't cool enough to visit this page <br />
        or it doesn't exist
      </p>
      <a className="button-404" href="/">
        Regresar a la pagina principal
      </a>
    </div>
  );
};

export { NotFound };
