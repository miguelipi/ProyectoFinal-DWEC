import { useState, useEffect } from "react";
import AccordionItem from "./AcordeonItem";

function Accordion() {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/competitivetiers")
      .then((response) => response.json())
      .then((data) => {
        // Seleccionamos el último set de rangos (el más reciente)
        const lastTierSet = data.data[data.data.length - 1];

        if (!lastTierSet.tiers || lastTierSet.tiers.length === 0) {
            console.error("El último conjunto de tiers está vacío.");
            return;
          }
          else{
            console.log("El último conjunto de tiers no está vacío.");
          }
        // Agrupamos por divisionName
        const divisionMap: { [key: string]: Division } = {};

        lastTierSet.tiers.forEach((tier: any, index: number) => {
          const divisionName = tier.divisionName;

          // ❌ Filtramos las divisiones "Unused"
          if (divisionName.includes("Unused")) return;

          if (!divisionMap[divisionName]) {
            divisionMap[divisionName] = { name: divisionName, ranks: [] };
          }

          divisionMap[divisionName].ranks.push({
            tierName: tier.tierName,
            imageUrl: tier.largeIcon,
          });
        });

        // Convertimos el objeto en un array
        const formattedDivisions = Object.values(divisionMap);
        setDivisions(formattedDivisions);
      })
      .catch((error) => console.error("Error al obtener los rangos:", error));
  }, []);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion pb-4" id="accordionExample">
      {divisions.map((division, index) => {
        console.log(division);
        console.log(division.ranks);
        return (
          <AccordionItem
            key={index}
            index={index}
            divisionName={division.name}
            ranks={division.ranks}
            isActive={activeIndex === index}
            onClick={toggleItem}
          />
        );
      })}
    </div>
  );
}
export default Accordion;