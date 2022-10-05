import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Thank you for taking the time to visit my site. More information about
          me can be found below as well as my contact information!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More Below!</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
