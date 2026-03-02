import { useState } from "react";

type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

function FilterSection({ title, children }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-section">
      <button
        type="button"
        className="filter-section-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={`filter-section-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="filter-section-title">{title}</span>
        <span className={`filter-section-chevron ${isOpen ? "is-open" : ""}`} aria-hidden>
          ▼
        </span>
      </button>
      <div
        id={`filter-section-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="filter-section-content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterSection;
