import React, { useState } from "react";
import HeadText from "../../../../components/common/HeadText";
import ParaText from "../../../../components/common/ParaText";
import Buttons from "../../../../components/common/Buttons";

const Section6 = () => {
  const [datass, setDatas] = useState([]);
  const [copied, setCopied] = useState(false);
  const [formFields, setFormFields] = useState([
    { id: "", name: "", kela: "" },
  ]);
  const [textAreaValue, setTextAreaValue] = useState("");

  const data = [
    { id: 12, name: "dsa" },
    { id: 23, name: "fdsfd" },
    { id: 23, name: "fdfds" },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textAreaValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][name] = value;
      return updatedFields;
    });
  };

  const handleAddField = () => {
    setFormFields((prevFields) => [
      ...prevFields,
      { id: "", name: "", kela: "" },
    ]);
  };

  const handleRemoveField = (index) => {
    setFormFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = formFields.filter((field) => field.id && field.name.trim());
    if (newData.length === 0) {
      alert("Please enter valid ID and Name");
      return;
    }
    setDatas((prevDatas) => [...prevDatas, ...newData]);
    setTextAreaValue((prevText) =>
      prevText
        ? prevText + "\n" + JSON.stringify(newData, null, 2)
        : JSON.stringify(newData, null, 2)
    );
    setFormFields([{ id: "", name: "", kela: "" }]);
  };

  return (
    <div className="bg_hero py50 md-py50 sm-py40">
      <div className="container mx-auto">
        <ParaText text="All Digitals" size="md" color="gray" secid="HR1002" />
        <HeadText
          text="Digital"
          text2="Systems"
          size="sm"
          color="gray"
          secid="HR1002"
        />

        <div className="mtpx20">
          <div className="grid-cols-3 items-start gap-12 w-full">
            <div className="relative">
              <div className="border-ec rounded-5 bgwhite h-350px overflow-auto newscroll px10">
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
              <div className="absolute top-0 right-0 m8">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke={copied ? "var(--primary2)" : "gray"}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={handleCopy}
                  style={{ cursor: "pointer" }}
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>

            <form className="gap-10 grid-cols-1" onSubmit={handleSubmit}>
              {formFields.map((field, index) => (
                <div key={index} className="flex items-center gap-4">
                  {Object.keys(field).map((key) => (
                    <input
                      key={key}
                      type={key === "id" ? "number" : "text"} // Ensure `id` is numeric
                      name={key}
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize key
                      value={field[key]}
                      onChange={(e) => handleChange(index, e)}
                      required
                      className="border-ec side-input h-input rounded-5"
                    />
                  ))}
                  {formFields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveField(index)}
                    >
                      ❌
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={handleAddField} className="mt-2">
                ➕ Add More
              </button>
              <Buttons
                text="Submit"
                color="primary"
                round="sm"
                size="sm"
                types={true}
              />
            </form>

            <textarea
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
              rows={10}
              cols={30}
              className="border-ec rounded-5 bgwhite h-350px p10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
