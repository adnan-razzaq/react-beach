import React, { Component } from "react";
import Title from "./Title";
import {
  FaCouch,
  FaIntercom,
  FaSwimmingPool,
  FaCocktail
} from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCouch />,
        title: "Massage services",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et recusandae repellendus ducimus, eos expedita."
      },
      {
        icon: <FaIntercom />,
        title: "High speed in internet",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et recusandae repellendus ducimus, eos expedita."
      },
      {
        icon: <FaCocktail />,
        title: "Free FaCocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et recusandae repellendus ducimus, eos expedita."
      },
      {
        icon: <FaSwimmingPool />,
        title: "Swimming and jacquzi services",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et recusandae repellendus ducimus, eos expedita."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
