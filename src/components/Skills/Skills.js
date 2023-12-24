import { useState } from "react";
import "./SkillsStyles.css";

export default function Skills() {
  const [currentTabs, setCurrentTabs] = useState();

  const tabs = [
    {
      id: "1",
      title: "HTML",
      content: "A",
    },
    {
      id: "2",
      title: "CSS",
      content: "B",
    },
    {
      id: "3",
      title: "JS",
      content: "C",
    },
    {
      id: "4",
      title: "BOOTSTRAP",
      content: "C",
    },
    {
      id: "5",
      title: "REACTJS",
      content: "C",
    },
    {
      id: "6",
      title: "PHP",
      content: "C",
    },
    {
      id: "7",
      title: "LARAVEL",
      content: "C",
    },
    {
      id: "8",
      title: "MYSQL",
      content: "C",
    }
  ];

  const handleTabsClick = (e) => {
    setCurrentTabs(e.target.id);
  };
  return (
    <div className="container">
      <h1>Skills</h1>
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTabs === `${tab.id}`}
            onClick={handleTabsClick}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTabs === `${tab.id}` && (
              <div>
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
