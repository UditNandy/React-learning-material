import { useState } from "react";
import "./folder.css";
import { useAddFolder } from "../../custom-hooks/custom-hooks";

const Folder = ({ explorerData, deleteFolder }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [inputType, setInputType] = useState(null);
  const [changeDetector, setChangeDetector] = useState("");
  const { insertNode } = useAddFolder();
  const addFolder = (e) => {
    e.stopPropagation();
    setInputType("folder");
  };

  const addFile = (e) => {
    e.stopPropagation();
    setInputType("file");
  };

  const onDelete = (id) => {
    console.log("Called from", id);
    explorerData.items = explorerData.items.filter((d) => d.id != id);
    console.log(explorerData);
    setChangeDetector(Math.random());
  };

  if (explorerData.isFolder)
    return (
      <div className="folder-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => {
            setIsHidden((prev) => !prev);
          }}
        >
          <div>📁{explorerData.name}</div>
          <div>
            <button onClick={addFolder}>+ Folder</button>
            <button onClick={addFile}>+ File</button>
            {explorerData.name !== "root" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFolder(explorerData.id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
        {inputType && (
          <div className="folder-wrapper">
            {inputType === "folder" ? <span>📁</span> : <span>📄</span>}
            <input
              onBlur={(e) => {
                insertNode(
                  explorerData,
                  e.target.value,
                  inputType === "folder" ? true : false
                );
                setInputType(null);
              }}
            />
          </div>
        )}
        <div style={isHidden ? { display: "none" } : { display: "block" }}>
          {explorerData?.items.map((d) => (
            <Folder explorerData={d} deleteFolder={onDelete} />
          ))}
        </div>
      </div>
    );
  else
    return (
      <div
        className="folder-wrapper"
        style={isHidden ? { display: "none" } : { display: "block" }}
      >
        📄{explorerData.name}
      </div>
    );
};

export default Folder;
