import { useState, useEffect } from "react";
import "./style.css";

const TimelineContent1 = [
  {
    img_url: "right-arrow.png",
    title: "Ready to Go Algos",
    description:
      "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
  },
  {
    img_url: "codesandbox.png",
    title: "Internal capability building",
    description:
      "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
  },
];
const TimelineContent2 = [
  {
    img_url: "database.png",
    title: "Multi-source data",
    description:
      "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
  },
  {
    img_url: "suitcase.png",
    title: "Stakehlder alignment",
    description:
      "No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
  },
  {
    img_url: "reboot.png",
    title: "Continuous engagement",
    description:
      "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
  },
];

const mergedTimelineContent = [];
const maxLength = Math.max(TimelineContent1.length, TimelineContent2.length);
for (let i = 0; i < maxLength; i++) {
  if (i < TimelineContent2.length) {
    mergedTimelineContent.push(TimelineContent2[i]);
  }
  if (i < TimelineContent1.length) {
    mergedTimelineContent.push(TimelineContent1[i]);
  }
}

const TimelineBox = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Set once on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="timeline-box">
      <div className="timeline">
        {(screenWidth > 767 ? TimelineContent1 : mergedTimelineContent).map(
          (each, index) => (
            <div className="timeline-content" key={each.title + index}>
              <img src={each.img_url} alt={each.title + index} />
              <h3>{each.title}</h3>
              <p>{each.description}</p>
            </div>
          )
        )}
      </div>
      <ul className="timeline-line">
        {[...TimelineContent1, ...TimelineContent2].map((each, index) => (
          <li className="timeline-line-ball" key={each.title + index}></li>
        ))}
      </ul>
      {screenWidth > 767 && (
        <div className="timeline">
          {TimelineContent2.map((each, index) => (
            <div className="timeline-content" key={index}>
              <img src={each.img_url} alt={each.title + index} />
              <h3>{each.title}</h3>
              <p>{each.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineBox;
