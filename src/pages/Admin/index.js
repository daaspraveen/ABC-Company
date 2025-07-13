import { useState } from "react";

const Admin = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    "Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI"
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <main>
      <section style={styles.container}>
        <div style={styles.header}>Heading</div>
        {isEditing ? (
          <textarea
            style={styles.textArea}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <div style={styles.text}>{text}</div>
        )}
        <div style={styles.buttonContainer}>
          {isEditing ? (
            <button style={styles.button} onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button style={styles.button} onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5", // Light background
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "10px",
  },
  text: {
    marginBottom: "10px",
    whiteSpace: "pre-wrap",
  },
  textArea: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    marginRight: "10px",
  },
};

export default Admin;
