import * as React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  color: #f73c4f;
  *.linkedin-link {
    text-decoration: none;
    color: #f73c4f;
    font-weight: bold;
    &:hover {
      color: #012b81;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Made by &nbsp;
        <a
          className="linkedin-link"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alina-kontarero/"
          target="_blank"
        >
          Aline Kontarero
        </a>{" "}
        with ❤️
      </p>
    </FooterWrapper>
  );
};

export default Footer;
