import { useEffect, useState } from "react";
import Folder from "./explorer-view/folder";
import Accordian from "../../shared/accordian/accordian";

const FileExplorer = () => {
  const [fileExplorerData, setFileExplorerData] = useState(null);
  useEffect(() => {
    (async () => {
      let data = await fetch("./assets/machine-coding/file-explorer.json");
      data = await data.json();
      setFileExplorerData(data);
    })();
  }, []);
  return (
    <div>
      <h2>File Explorer</h2>
      <div style={{ width: "350px" }}>
        {fileExplorerData && <Folder explorerData={fileExplorerData} />}
      </div>

      <Accordian header="Interview Questions">
        <ul>
          <li>Try to add delete and rename functionality</li>
        </ul>
      </Accordian>
    </div>
  );
};

export default FileExplorer;
