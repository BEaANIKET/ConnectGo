import React, { useState } from "react";
import { Search, Filter, Plus, X } from "lucide-react";
import Button from "../ui/Button";

interface TeamFiltersProps {
  onFilterChange: (filters: any) => void;
  setCreateTeamFormOpen: (open: boolean) => void;
}

const TeamFilters: React.FC<TeamFiltersProps> = ({
  onFilterChange,
  setCreateTeamFormOpen,
}) => {
  const [activeSort, setActiveSort] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const handleSortClick = (sort: string) => {
    setActiveSort(sort);
    onFilterChange({ sort });
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search teams..."
            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-red-500"
          />
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex items-center space-x-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button variant="primary" className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span onClick={() => setCreateTeamFormOpen(true)}>Create Team</span>
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Filter Teams
            </h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Team Size
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Any Size
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Small (1-5)
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Medium (6-10)
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Large (10+)
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Activity Level
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Any Activity
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Very Active
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  Moderately Active
                </button>
                <button className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  New Teams
                </button>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveSort("all");
                  onFilterChange({});
                }}
              >
                Clear Filters
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  onFilterChange({ sort: activeSort });
                  setShowFilters(false);
                }}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            activeSort === "all"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleSortClick("all")}
        >
          All Teams
        </button>
        <button
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            activeSort === "active"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleSortClick("active")}
        >
          Most Active
        </button>
        <button
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            activeSort === "newest"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleSortClick("newest")}
        >
          Newest
        </button>
        <button
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            activeSort === "popular"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleSortClick("popular")}
        >
          Most Popular
        </button>
      </div>
    </div>
  );
};

export default TeamFilters;
