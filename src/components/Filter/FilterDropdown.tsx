import FilterSection from "./FilterSection";
import FilterNode from "./FilterNode";

export type FilterDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
};

function FilterDropdown({ isOpen, onClose }: FilterDropdownProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-dropdown-header">
            <h2 className="filter-dropdown-title">Filter</h2>
            <button
              type="button"
              onClick={handleClose}
              className="filter-dropdown-close"
              aria-label="Close filter"
            >
              ×
            </button>
          </div>
          <div className="filter-dropdown-sections">
            <FilterSection title="Sample">
              <FilterNode>Sample options</FilterNode>
            </FilterSection>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterDropdown;
