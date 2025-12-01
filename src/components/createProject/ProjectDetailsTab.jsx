// src/components/createProject/ProjectDetailsTab.jsx
import React, { useState, useEffect, useRef } from "react";

const platformOptions = ["Platform Alpha", "Platform Beta", "Platform Gamma"];
const ownerOptions = ["Gukhan Sakthivel", "Arshad", "Mahindra Team"];

const STORAGE_KEY = "project-details";

const ProjectDetailsTab = () => {
  const [projectName, setProjectName] = useState("");

  const [imageName, setImageName] = useState("");
  const [imageData, setImageData] = useState(""); // base64 / dataURL

  const [platformHead, setPlatformHead] = useState("");
  const [projectOwner, setProjectOwner] = useState("");
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showOwnerDropdown, setShowOwnerDropdown] = useState(false);

  const fileInputRef = useRef(null);

  /* ---------- Load from localStorage on mount ---------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.projectName) setProjectName(data.projectName);
        if (data.imageName) setImageName(data.imageName);
        if (data.imageData) setImageData(data.imageData);
        if (data.platformHead) setPlatformHead(data.platformHead);
        if (data.projectOwner) setProjectOwner(data.projectOwner);
      } catch (e) {
        console.error("Failed to parse saved project details", e);
      }
    }
  }, []);

  /* ---------- Save to localStorage whenever something changes ---------- */
  useEffect(() => {
    const payload = {
      projectName,
      imageName,
      imageData,
      platformHead,
      projectOwner,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [projectName, imageName, imageData, platformHead, projectOwner]);

  /* ---------- Handlers ---------- */
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setImageName(file.name);

    // read as dataURL for preview + persistence
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result || "");
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setImageName("");
    setImageData("");
    // file input ko bhi reset kar do
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const hasImage = Boolean(imageData);

  return (
    // width thodi slim rakhi hai so that design jaisa lage
    <div className="w-[45%] mt-[2.8vh] space-y-[1.6vh] text-[0.85rem]">
      {/* PROJECT NAME */}
      <div className="relative border border-[#3d4141] bg-black/20 px-[1.8vw] py-[1.3vh]">
        {/* floating label */}
        <span
          className="
            absolute -top-[1.2vh] left-[1.8vw]
            px-[0.7vw] py-[0.3vh]
            bg-[#050505]
            tracking-[0.25em]
            text-[0.8vw]
            text-slate-300 uppercase
          "
        >
          PROJECT NAME (ID)
        </span>

        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="enter project name/code"
          className="
            w-full bg-transparent
            text-sm text-gray-200
            outline-none focus:outline-none
            py-2
          "
        />
      </div>

      {/* PROJECT IMAGE */}
      <div className="relative border border-[#3d4141] bg-black/20 px-[1.8vw] py-[1.5vh]">
        <span
          className="
            absolute -top-[1.2vh] left-[1.8vw]
            px-[0.7vw] py-[0.3vh]
            bg-[#050505]
            tracking-[0.25em]
            uppercase
            text-[0.8vw]
            text-slate-300
          "
        >
          PROJECT IMAGE
        </span>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* --- STATE 1: NO IMAGE -> only big button (figma 2nd image like) --- */}
        {!hasImage && (
          <div className="py-3">
            <button
              type="button"
              onClick={handleUploadClick}
              className="
                bg-white text-black
                h-[5.2vh] px-[2.8vw]
                flex items-center gap-[0.8vw]
                text-sm font-medium
                rounded-sm
                shadow-[0_0_20px_rgba(0,0,0,0.6)]
                hover:bg-gray-100
                transition
              "
            >
              <span
                className="
                  w-[2.4vh] h-[2.4vh]
                  flex items-center justify-center
                  rounded-full border border-black
                  text-lg
                  bg-black text-white
                "
              >
                +
              </span>
              <span className="text-bold">Upload car mock</span>
            </button>
          </div>
        )}

        {/* --- STATE 2: IMAGE SELECTED -> preview + Change/Delete (figma 3rd) --- */}
        {hasImage && (
          <div className="py-4 flex items-center gap-[2vw]">
            {/* Left: image card */}
            <div className="border border-[#4a4f4f] bg-black/40 p-[0.8vh] rounded-sm">
              <div className="w-[16vw] h-[10vw] flex items-center justify-center bg-black/60">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  src={imageData}
                  alt="project mock"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Vertical divider */}
            <div className="h-[8vw] w-px bg-white/20" />

            {/* Right: actions */}
            <div className="flex flex-col gap-[1.2vh] text-sm">
              <button
                type="button"
                onClick={handleUploadClick}
                className="flex items-center gap-[0.6vw] text-gray-200 hover:text-white"
              >
                <img src="/edit.png" alt="" />
                <span>Change</span>
              </button>

              <button
                type="button"
                onClick={handleDeleteImage}
                className="flex items-center gap-[0.6vw] text-[#ff6b6b] hover:text-red-400"
              >
                <img src="/delete.png" alt="" />
                <span>Delete</span>
              </button>

              
            </div>
          </div>
        )}
      </div>

      {/* PLATFORM HEAD */}
      <div className="relative border border-[#3d4141] bg-black/20 px-[1.8vw] py-[1.3vh]">
        <span
          className="
            absolute -top-[1.2vh] left-[1.8vw]
            px-[0.7vw] py-[0.3vh]
            bg-[#050505]
            tracking-[0.25em]
            uppercase
            text-[0.8vw]
            text-slate-300
          "
        >
          PLATFORM HEAD
        </span>

        <button
          type="button"
          onClick={() => setShowPlatformDropdown((v) => !v)}
          className="
            w-full flex items-center justify-between
            text-sm text-gray-300
            bg-transparent
            pt-[0.3vh]
          "
        >
          <span>{platformHead ? platformHead : "select platform head"}</span>
          <span className="text-lg">▾</span>
        </button>

        {showPlatformDropdown && (
          <div className="mt-[0.8vh] border-t border-[#3d4141] pt-[0.8vh] space-y-[0.5vh] text-sm text-gray-200">
            {platformOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setPlatformHead(opt);
                  setShowPlatformDropdown(false);
                }}
                className="w-full text-left hover:text-white hover:bg-white/5 px-[0.5vw] py-[0.35vh] rounded-sm"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* PROJECT OWNER */}
      <div className="relative border border-[#3d4141] bg-black/20 px-[1.8vw] py-[1.3vh]">
        <span
          className="
            absolute -top-[1.2vh] left-[1.8vw]
            px-[0.7vw] py-[0.3vh]
            bg-[#050505]
            tracking-[0.25em]
            uppercase
            text-[0.8vw]
            text-slate-300
          "
        >
          PROJECT OWNER
        </span>

        <button
          type="button"
          onClick={() => setShowOwnerDropdown((v) => !v)}
          className="
            w-full flex items-center justify-between
            text-sm text-gray-300
            bg-transparent
            pt-[0.3vh]
          "
        >
          <span>{projectOwner ? projectOwner : "select project owner"}</span>
          <span className="text-lg">▾</span>
        </button>

        {showOwnerDropdown && (
          <div className="mt-[0.8vh] border-t border-[#3d4141] pt-[0.8vh] space-y-[0.5vh] text-sm text-gray-200">
            {ownerOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setProjectOwner(opt);
                  setShowOwnerDropdown(false);
                }}
                className="w-full text-left hover:text-white hover:bg-white/5 px-[0.5vw] py-[0.35vh] rounded-sm"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsTab;
