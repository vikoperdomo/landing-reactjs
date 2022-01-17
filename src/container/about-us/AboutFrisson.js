import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../components/header/elements/logo";
import logo from "../../assets/img/logo/logo.png";

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

const MobileComponent = () => (
  <div className="frisson-about-area pt--40 pt_md--40 pt_sm--20 bg-shape">
    <Container>
      <Row>
        <Col xs={12}>
          <div className="about-content text-center max-width--990">
            <div className="header-left flex-20 pb--20">
              <Logo logo={logo} />
            </div>
            <h3 className="heading heading-h3 line-height-1-62 text-white font-40">
              What Gives You Frisson...?
            </h3>
            <div className="text-center pt--20">
              <iframe
                className="frisson_video"
                width="500"
                height="315"
                src="https://www.youtube.com/embed/oONwrwEIwLs?rel=0&amp;autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&hd=1&loop=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="frisson"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const DesktopComponent = () => (
  <div className="frisson-about-area pt--40 pt_md--40 pt_sm--20 bg-shape">
    <Container>
      <Row>
        <Col xs={12}>
          <div className="about-content text-center max-width--990">
            <div className="header-left flex-20 pb--20">
              <Logo logo={logo} />
            </div>
            <h3 className="heading heading-h3 line-height-1-62 text-white font-40">
              What Gives You Frisson...?
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const About = () => {
  const { width } = useViewport();
  const breakpoint = 1027;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

const AboutFrisson = () => {
  return (
    <ViewportProvider>
      <About />
    </ViewportProvider>
  );
};

export default AboutFrisson;
