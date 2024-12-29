import { useState } from "react";
import { EXAMPLES } from "../../data.jsx";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <h4>Please Select a Topic</h4>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h4>{EXAMPLES[selectedTopic].title}</h4>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Componennts
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {/* Alternative Method-I 
    {!selectedTopic ? <h4>Please Select a Topic</h4> : null}
    {selectedTopic ? (
      <div id="tab-content">
        <h4>{EXAMPLES[selectedTopic].title}</h4>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    ) : null} 
    */}

      {/* Altenative Method-II
    {!selectedTopic ? (
      <h4>Please Select a Topic</h4>
    ) : (
      <div id="tab-content">
        <h4>{EXAMPLES[selectedTopic].title}</h4>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}

      {/* Altenative Method-III
    {!selectedTopic && <h4>Please Select a Topic</h4>}
    {selectedTopic && (
      <div id="tab-content">
        <h4>{EXAMPLES[selectedTopic].title}</h4>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}

      {tabContent}
    </section>
  );
}
