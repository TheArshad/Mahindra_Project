// src/pages/Makeproject.jsx
import React, { useState } from "react";
import ProjectDetailsTab from "../components/createProject/ProjectDetailsTab";
import PartsSpecsTab from "../components/createProject/PartsSpecsTab";
import TestsAndReportTab from "../components/createProject/TestsAndReportTab";
import MetricWeightageTab from "../components/createProject/MetricWeightageTab";
import TeamEngineersTab from "../components/createProject/TeamEngineersTab";

const TABS = [
  { id: "details", label: "Project Details" },
  { id: "parts", label: "Parts & Specs" },
  { id: "tests", label: "Tests and Report" },
  { id: "metric", label: "Metric Weightage" },
  { id: "team", label: "Team & Engineers" },
];

const Makeproject = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [maxStepIndex, setMaxStepIndex] = useState(0); // last unlocked step index

  const renderActiveTab = () => {
    switch (activeTab) {
      case "details":
        return <ProjectDetailsTab />;
      case "parts":
        return <PartsSpecsTab />;
      case "tests":
        return <TestsAndReportTab />;
      case "metric":
        return <MetricWeightageTab />;
      case "team":
        return <TeamEngineersTab />;
      default:
        return <ProjectDetailsTab />;
    }
  };

  const currentIndex = TABS.findIndex((t) => t.id === activeTab);
  const isLastStep = currentIndex === TABS.length - 1;

  const handleTabClick = (tab, index) => {
    if (index <= maxStepIndex) {
      setActiveTab(tab.id);
    }
  };

  const handleSaveNext = () => {
    // TODO: yaha per tab-wise validation add kar sakte ho
    if (!isLastStep) {
      const nextIndex = currentIndex + 1;
      setActiveTab(TABS[nextIndex].id);
      setMaxStepIndex((prev) => Math.max(prev, nextIndex));
    } else {
      console.log("Final submit / save");
    }
  };

  return (
    <div className="font-[Poppins] mt-[3vh] h-full flex flex-col">
      {/* Top heading row */}
      <div className="flex justify-between items-start mb-[3vh]">
        <div>
          <h1 className="text-3xl font-semibold mb-[0.8vh]">Create Project</h1>
          <p className="text-sm text-gray-400">
            You are creating a new project under the Mahindra Vehicle Suite.
          </p>
        </div>

        <button
          className="
            flex items-center gap-[0.6vw]
            h-[5vh] px-[1.6vw]
            border border-white/80 rounded-sm
            text-sm tracking-wide
            hover:bg-white hover:text-black
            transition
          "
        >
          <span className="text-lg leading-none">×</span>
          <span>Close</span>
        </button>
      </div>

      {/* Tabs row with piece-wise underline */}
      <div className="mb-[3vh] border-b border-white/10 pb-[0.4vh]">
        <div className="flex gap-[3vw] text-sm">
          {TABS.map((tab, index) => {
            const isDisabled = index > maxStepIndex;
            const isCompleted = index <= maxStepIndex;
            const isActive = activeTab === tab.id;

            let textClasses = "";
            if (isDisabled) {
              textClasses = "text-gray-500 cursor-not-allowed";
            } else if (isActive) {
              textClasses = "text-emerald-300";
            } else if (isCompleted) {
              textClasses = "text-emerald-500";
            } else {
              textClasses = "text-gray-300";
            }

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab, index)}
                disabled={isDisabled}
                className={`
                  text-[1.1vw]
                  relative
                  pb-[1.6vh]
                  ${textClasses}
                  ${!isDisabled && !isActive ? "hover:text-white" : ""}
                `}
              >
                {tab.label}

                {/* Grey small base under each tab */}
                <span
                  className="
                    pointer-events-none
                    absolute left-1/2 -translate-x-1/2
                    bottom-0
                    h-[0.3vh] w-[120%]
                    rounded-full bg-white/10
                  "
                />

                {/* Green piece-wise progress segment */}
                {isCompleted && (
                  <span
                    className="
                      pointer-events-none
                      absolute left-1/2 -translate-x-1/2
                      bottom-0
                      h-[0.3vh] w-[130%]
                      rounded-full bg-emerald-400
                      transition-all duration-300
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab content area (scrollable) */}
      <div className="flex-1 overflow-y-auto pr-[1vw] pb-[14vh]">
        {renderActiveTab()}
      </div>

      {/* Fixed bottom-right Save / Next button */}
      <button
        onClick={handleSaveNext}
        className="
          fixed
          bottom-[3vh] right-[4vw]
          bg-white text-black
          px-[3vw] py-[1.8vh]
          text-md font-medium
          rounded-sm
          w-[20vw]
          text-bold
          font-[Poppins-bold]
          shadow-[0_0_25px_rgba(0,0,0,0.7)]
          hover:bg-gray-200
          transition
        "
      >
        {isLastStep ? "Save" : "Save and Proceed"}
      </button>
    </div>
  );
};

export default Makeproject;
