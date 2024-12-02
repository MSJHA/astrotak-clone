import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Helmet>
        <title>About | Astrotak Clone</title>
      </Helmet>
      <h1>About Astrotak Clone</h1>
      <p>This is a platform to connect with expert astrologers anytime.</p>
    </div>
  );
};

export default About;
