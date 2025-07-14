import { useEffect, useRef, useState } from "react";
import apiUrl from '../../apis.js';
import axios from "axios";

import "./style.css";

const sampleHeading =
  "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI";

const Admin = () => {
  const [headingInput, setHeadingInput] = useState(sampleHeading);
  const [saved, setSaved] = useState("Save");
  const textAreaRef = useRef(null);

  const updateHeadingInp = (e) => {
    const text = e.target.value;
    setHeadingInput(text);
  };

  const doFocusTextarea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const maxCharError = `** characters used: ${headingInput.length} / 200`;

  const doSave = () => {
    setSaved("Saving...");
    saveHeadingApi(headingInput.trim());
  };
  const doSaveTimer = (name) => {
    setSaved(name);
    setTimeout(() => {
      setSaved("Save");
    }, 2000);
  };

  const saveHeadingApi = async (text) => {
    console.log(text);
    try {
      const resp = await axios.post(apiUrl, { text });
      console.log(resp);
      doSaveTimer("Saved");
    } catch (e) {
      console.log("Error in api posting heading:", e);
      doSaveTimer("Not Saved");
      // console.error(e);
    }
  };

  const getHeadingApi = async () => {
    try {
      const resp = await axios.get(apiUrl);
      console.log(resp);
      if (resp.data && resp.data.text) {
        setHeadingInput(resp.data.text);
      }
    } catch (e) {
      console.log("Error in fetching heading Api :", e);
    }
  };

  useEffect(() => {
    getHeadingApi();
  }, []);

  return (
    <main>
      <section className="admin-section">
        <h1>Admin Panel</h1>
        <div className="admin-content-box">
          <button
            type="button"
            className="heading-btn"
            onClick={doFocusTextarea}
          >
            Heading
          </button>
          <textarea
            name="heading-text"
            ref={textAreaRef}
            rows={8}
            className="textarea"
            value={headingInput}
            onChange={updateHeadingInp}
            placeholder="Enter Your Heading Text"
          />
          <span
            className={`maxchars-error ${
              headingInput.length > 200 ? "active-error" : ""
            }`}
          >
            {maxCharError}
          </span>
          <br />
          <button type="button" className="edit-btn" onClick={doFocusTextarea}>
            Edit
          </button>
          <button
            type="button"
            disabled={!(headingInput.length <= 200 && saved === "Save")}
            onClick={doSave}
            className={`save-btn ${
              headingInput.length <= 200 && saved === "Save"
                ? "saving-btn"
                : "unsave-btn"
            }`}
          >
            {saved}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Admin;
