import React from "react";
import ContentLoader from "react-content-loader";

const SearcherLoader = () => {
  return (
    <div style={{ height: "100%^" }}>
      <ContentLoader
        speed={0.8}
        width={400}
        viewBox="0 0 400 500"
        backgroundColor="#21262d"
        foregroundColor="#1f6feb"
      >
        {/*      1*/}
        <rect x="70" y="27" rx="4" ry="4" width="100%" height="38" />
        <rect x="8" y="22" rx="12" ry="12" width="50" height="50" />
        <rect x="5" y="85" rx="4" ry="4" width="100%" height="1" />
        {/*      2*/}
        <rect x="70" y="105" rx="4" ry="4" width="100%" height="38" />
        <rect x="8" y="100" rx="12" ry="12" width="50" height="50" />
        <rect x="5" y="170" rx="4" ry="4" width="100%" height="1" />
        {/*3*/}
        <rect x="70" y="193" rx="4" ry="4" width="100%" height="38" />
        <rect x="8" y="188" rx="12" ry="12" width="50" height="50" />
        <rect x="5" y="255" rx="4" ry="4" width="100%" height="1" />
        {/*4*/}
        <rect x="70" y="280" rx="4" ry="4" width="100%" height="38" />
        <rect x="8" y="276" rx="12" ry="12" width="50" height="50" />
        <rect x="5" y="345" rx="4" ry="4" width="100%" height="1" />
        {/*5*/}
        <rect x="70" y="368" rx="4" ry="4" width="100%" height="38" />
        <rect x="8" y="364" rx="12" ry="12" width="50" height="50" />
        <rect x="5" y="425" rx="4" ry="4" width="100%" height="1" />
      </ContentLoader>
    </div>
  );
};
export default SearcherLoader;
