import React, { useState, Fragment } from "react";
import VisibilitySensor from "react-visibility-sensor";

import LayoutDefault from "../../layouts/LayoutDefault";
import AboutFrisson from "../../container/about-us/AboutFrisson";

import Footer from "../../container/footer/Footer";
import LandingForms from "../../components/forms/LandingForms";
import { Helmet } from "react-helmet";
import frisson from "../../data/frisson.json";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const DesktopComponent = () => (
  <Fragment>
    <div className="ui embed">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oONwrwEIwLs?rel=0&amp;autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&hd=1&loop=1"
        title="Frisson Live Stream"
        frameBorder="0"
        allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture "
        allowFullScreen
      />
    </div>
    <section className="seperator-wrapper">
      <div className="seperator gradient"></div>
    </section>
  </Fragment>
);

const VideoFrisson = () => {
  const { width } = useViewport();
  const breakpoint = 1028;

  return width > breakpoint ? <DesktopComponent /> : "";
};

const Home = () => {
  const [bgColor, setBgColor] = useState("#e00346");

  return (
    <Fragment>
      <Helmet>
        <title>{`${frisson.title}`}</title>
      </Helmet>
      <LayoutDefault className="template-color-6 template-font-1">
        <ViewportProvider>
          <VideoFrisson />
        </ViewportProvider>
        <div
          className="home-frisson"
          style={{ backgroundColor: bgColor, transition: "2s" }}
        >
          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#e00346");
            }}
          ></VisibilitySensor>

          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#f12e69");
            }}
          >
            <AboutFrisson />
          </VisibilitySensor>

          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#ae2883");
            }}
          ></VisibilitySensor>

          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#f05874");
            }}
          ></VisibilitySensor>

          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#f17191");
            }}
          >
            <LandingForms />
          </VisibilitySensor>

          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#f05874");
            }}
          ></VisibilitySensor>

          <VisibilitySensor
            partialVisibility={true}
            onChange={(isVisible) => {
              isVisible && setBgColor("#151517");
            }}
          >
            <Fragment>
              <Footer />
            </Fragment>
          </VisibilitySensor>
        </div>
      </LayoutDefault>
    </Fragment>
  );
};

export default Home;
