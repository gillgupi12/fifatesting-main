import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/footer';

import PageHeading from '../components/Heading/Heading';
import { AboutSection } from '../styles/aboutStyle';
import { Container, EmptySpace } from '../styles/globalStyles';

const About = () => {
  const ref = useRef();
  const [width, setWidth] = useState();

  function getHeight() {
    let wrapperHeight;
    wrapperHeight = `${ref.current.getBoundingClientRect().height}px`;
    document.body.style.height = wrapperHeight;
  }

  useEffect(() => {
    getHeight();
  },[]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      ref={ref}
    >
      <Container>
        <EmptySpace />
        <PageHeading title={'ABOUT US'} />
        <AboutSection className="aboutsection">
          <div className="sectiontitle">
            <h1>WHAT WE DO</h1>
          </div>
          <div className="sectioncontent">
            <div className="top">
              <h2>
               dhasdjlasdflhj
              </h2>
            </div>
            <div className="btm">
              <h3>
                The new FIFA is modernising football to be global, accessible
                and inclusive in all aspects. Not just on one or two continents,
                but everywhere. Under our vision to make football truly global,
                we will help develop football everywhere so that there are at
                least 50 national teams and 50 clubs from all continents that
                can compete at a top competitive level.
              </h3>
            </div>
          </div>
        </AboutSection>
        <AboutSection className="aboutsection">
          <div className="sectiontitle">
            <h1>WHAT WE DO</h1>
          </div>
          <div className="sectioncontent">
            <div className="top">
              <h2>
                FIFA exists to govern football and to develop the game around
                the world. Since 2016, the organisation has been fast evolving
                into a body that can more effectively serve our game for the
                benefit of the entire world.
              </h2>
            </div>
            <div className="btm">
              <h3>
                The new FIFA is modernising football to be global, accessible
                and inclusive in all aspects. Not just on one or two continents,
                but everywhere. Under our vision to make football truly global,
                we will help develop football everywhere so that there are at
                least 50 national teams and 50 clubs from all continents that
                can compete at a top competitive level.
              </h3>
            </div>
          </div>
        </AboutSection>
        <AboutSection className="aboutsection">
          <div className="sectiontitle">
            <h1>WHAT WE DO</h1>
          </div>
          <div className="sectioncontent">
            <div className="top">
              <h2>
                FIFA exists to govern football and to develop the game around
                the world. Since 2016, the organisation has been fast evolving
                into a body that can more effectively serve our game for the
                benefit of the entire world.
              </h2>
            </div>
            <div className="btm">
              <h3>
                The new FIFA is modernising football to be global, accessible
                and inclusive in all aspects. Not just on one or two continents,
                but everywhere. Under our vision to make football truly global,
                we will help develop football everywhere so that there are at
                least 50 national teams and 50 clubs from all continents that
                can compete at a top competitive level.
              </h3>
            </div>
          </div>
        </AboutSection>
      </Container>
      <Footer />
    </motion.div>
  );
};

export default About;
