import RankCard from "./RankCard";

function AccordionItem({ index, divisionName, ranks, isActive, onClick }: AccordionItemProps) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header text-center w-100">
        <button
          className="button w-100 bg-dark p-3"
          style={{
            fontFamily: "Titulos",
            fontSize: "40px",
            fontStyle: "italic",
            color: "#ff4655",
          }}
          type="button"
          onClick={() => onClick(index)}
          aria-expanded={isActive}
          aria-controls={`collapse${index}`}
        >
          {divisionName}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className={`accordion-collapse collapse ${isActive ? "show" : ""}`}
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="container">
            <div className="row justify-content-around">
              {ranks.map((rank, i) => (
                <div key={i} className="col-md-4">
                  <RankCard title={rank.tierName} imageUrl={rank.imageUrl} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccordionItem;