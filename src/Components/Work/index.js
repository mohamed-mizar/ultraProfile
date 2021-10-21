import axios from "axios";
import React, { Component } from "react";

import {
  WorkSection,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  PartTitle,
  Line,
  PartDesc,
} from "./style.js";

class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      console.log(res.data.works);
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const workslist = works.map((workItem) => {
      return (
        <WorkPart key={workItem.id} first={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTitle>{workItem.title}</PartTitle>
          <Line />
          <PartDesc>
            {workItem.body}
          </PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {workslist}
        </div>  
      </WorkSection>
    );
  }
}

export default Work;
