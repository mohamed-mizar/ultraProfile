import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ProfileSkills,
  Profiles,
  ProfileList,
  ProfileItem,
  Span,
  SpanWeb,
  Skills,
  SkillsDesc,
  Bar,
  Title,
  Perc,
  Parent,
  ParentSpan,
  SkillsTitle,
  SkillsTitleSpan
} from "./style";

const Profile = () => {

    const [ProfileState, setProfile] = useState([]);
    useEffect(() =>{
        axios.get('js/data.json').then(res => {
            setProfile(res.data.profile)
        });
    },[])
    const profileLis = ProfileState.map(profileLi => {
        return (
            <Bar key = {profileLi.id}>
            <Title>{profileLi.title}</Title>
            <Perc>{profileLi.percent} </Perc>
            <Parent>
              <ParentSpan first={profileLi.id}></ParentSpan>
            </Parent>
          </Bar>
        )
    });
  return (
    <ProfileSkills>
      <div className="container">
        <Profiles>
          <SkillsTitle>
            <SkillsTitleSpan>My </SkillsTitleSpan>Profile
          </SkillsTitle>
          <ProfileList>
            <ProfileItem>
              <Span>Name</Span>
              Mohamed Mizar
            </ProfileItem>
            <ProfileItem>
              <Span>Birthday</Span>
              20/11/1991
            </ProfileItem>
            <ProfileItem>
              <Span>Address</Span>
              Elfayoum
            </ProfileItem>
            <ProfileItem>
              <Span>Phone</Span>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <Span>Email</Span>
              mohamed.mizarr@gmail.com
            </ProfileItem>
            <ProfileItem>
              <Span>Website</Span>
              <SpanWeb>www.google.com</SpanWeb>
            </ProfileItem>
          </ProfileList>
        </Profiles>

        <Skills>
          <SkillsTitle>
            Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          
            {profileLis}
          
        </Skills>
      </div>
    </ProfileSkills>
  );
};

export default Profile;
