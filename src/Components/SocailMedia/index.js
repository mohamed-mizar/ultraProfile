import axios from "axios";
import React, { useEffect, useState } from "react";

import { SocialMedia, Social, Icon, Par, Span, SpanInfo } from "./style.js";

const SocailMedia = () => {
  const [socialState, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);

  const socials = socialState.map((social) => {
    return (
      <Social key={social.id} item={social.id}>
        <Icon className={social.icon}></Icon>
        <Par>
          <Span>{social.title}</Span>
          <SpanInfo>{social.body}</SpanInfo>
        </Par>
      </Social>
    );
  });

  return (
    <div>
      <SocialMedia>{socials}</SocialMedia>
    </div>
  );
};

export default SocailMedia;
