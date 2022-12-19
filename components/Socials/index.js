import React from "react";
import Button from "../Button";
import Link from "next/link";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Link key={index} href={social.link} rel="me">
          <Button key={index} onClick={() => window.open(social.link)}>
            {social.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
