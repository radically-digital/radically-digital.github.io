import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "We're Impactful",
    Svg: require("@site/static/img/Ingenuity.svg").default,
    description: (
      <>
        We're proactive and great at finding better ways of doing things. It's
        about being effective, efficient and prioritising value. Accountable,
        candid, and passionate.
      </>
    ),
  },
  {
    title: "We're Curious",
    Svg: require("@site/static/img/Curiosity.svg").default,
    description: (
      <>
        We approach every challenge with the curiosity of a 5 year old. Baking
        that hunger for learning into everything we do.
      </>
    ),
  },
  {
    title: "We're Inclusive",
    Svg: require("@site/static/img/Inclusion.svg").default,
    description: (
      <>
        We know that great ideas can come from anyone. Whether it's in our
        recruiting, our work with other Radicals or our collaboration with our
        clients, we believe inclusion is a fundamental key to success!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">Our core values</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
