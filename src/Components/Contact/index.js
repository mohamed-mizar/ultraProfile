import React from "react";
import Footer from "../Footer/index.js";

import {
  ContactSection,
  DropTitle,
  Span,
  Form,
  Input,
  FormInput,
  Textarea
} from "./style.js";

const Contact = () => {
  return (
    <div>
      <ContactSection>
        <div className="container">
          <DropTitle>
            <Span>Drop </Span>Me A line
          </DropTitle>
          <Form action="">
            <FormInput>
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
            </FormInput>
            <Input type="text" className="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <Input type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </div>
  );
};

export default Contact;
