import React, { useState } from "react";
import HeadText from "../../../../components/common/HeadText";
import ParaText from "../../../../components/common/ParaText";
import Buttons from "../../../../components/common/Buttons";

const Section1 = () => {
  const [dataList, setDataList] = useState([]);
  const [copied, setCopied] = useState(false);
  const [formFields, setFormFields] = useState([{ name: "" }]);
  const [textAreaValue, setTextAreaValue] = useState("");

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
    const { value } = event.target;
    setFormFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index].name = value;
      return updatedFields;
    });
  };

  const handleAddField = () => {
    setFormFields([...formFields, { name: "" }]);
  };

  const handleRemoveField = (index) => {
    setFormFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = formFields.filter((field) => field.name.trim() !== "");

    if (newData.length === 0) {
      alert("Please enter a valid name.");
      return;
    }

    setDataList([...dataList, ...newData]);
    setTextAreaValue((prevText) =>
      prevText
        ? prevText + "\n" + newData.map((item) => item.name).join("\n")
        : newData.map((item) => item.name).join("\n")
    );

    setFormFields([{ name: "" }]);
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
                <pre>{JSON.stringify(dataList, null, 2)}</pre>
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
                  <textarea
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={field.name}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="border-ec side-input h-input rounded-5"
                  />
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

export default Section1;
