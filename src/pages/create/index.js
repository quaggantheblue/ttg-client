// pages/create/index.js

import CharacterForm from "@/components/CharacterForm";
import LocationsForm from "@/components/LocationForm";
import MapForm from "@/components/MapForm";
import OptionCard from "@/components/OptionCard";
import QuestForm from "@/components/QuestForm";
import { useState } from "react";

const options = [
  {
    id: "characters",
    title: "Characters",
    description: "Generate unique characters for your tabletop campaigns.",
    image: "/placeholder/card_character.png",
  },
  {
    id: "locations",
    title: "Locations",
    description: "Create breathtaking locations for your story.",
    image: "/placeholder/card_environment.png",
  },
  {
    id: "quests",
    title: "Quests",
    description: "Design epic quests to immerse your players.",
    image: "/placeholder/card_quest.png",
  },
  {
    id: "maps",
    title: "Maps",
    description: "Generate detailed maps for exploration.",
    image: "/placeholder/card_map.png",
  },
];

function CreatePage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleGoBack = () => {
    setSelectedOption(null);
  };

  return (
    <div className="p-6">
      {/* characters */}
      {selectedOption === "characters" ? (
        <CharacterForm onBack={handleGoBack} />
      ) : /* locations */
      selectedOption === "locations" ? (
        <LocationsForm onBack={handleGoBack} />
      ) : /* maps */
      selectedOption === "maps" ? (
        <MapForm onBack={handleGoBack} />
      ) : /* quests */
      selectedOption === "quests" ? (
        <QuestForm onBack={handleGoBack} />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-8">
            Choose What to Create
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {options.map((option) => (
              <OptionCard
                key={option.id}
                title={option.title}
                description={option.description}
                image={option.image}
                onSelect={() => handleSelect(option.id)} // Pass the selected option's ID
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CreatePage;
