import { useState, useRef, useEffect } from "react";
import "./Filter.css";
import FilterDropdown from "./FilterDropdown";

function Filter() {
    const [open, setOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (!open) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <div className="filter" ref={filterRef}>
            <button
                className="burger-filter-btn"
                aria-label="Open filter"
                onClick={() => setOpen(prev => !prev)}
            >
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
            </button>
            {open && (
                <FilterDropdown isOpen={open} onClose={handleClose} />
            )}
        </div>
    );
}

export default Filter;