type FilterNodeProps = {
  children: React.ReactNode;
};

function FilterNode({ children }: FilterNodeProps) {
  return <div className="filter-node">{children}</div>;
}

export default FilterNode;
