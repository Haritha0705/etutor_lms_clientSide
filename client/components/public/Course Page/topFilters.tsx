import React from 'react';
import {ArrowBigDown, Filter, Search} from "lucide-react";

type TopFiltersProps = {
    filterCount?: number;
    suggestion?: string;
    resultsCount?: number;
    keyword?: string;
    isVisible: boolean;
    onToggle: () => void;
};

const TopFilters = ({
                        onToggle,
                        filterCount,
                        suggestion,
                        resultsCount,
                        keyword,
}:TopFiltersProps) => {
    return (
        <div className="relative">
            <div className="absolute w-full h-[0.1rem] bg-gray-400/30 bottom-5 left-0 right-0"></div>
            <div className="flex justify-between py-5">
                <div className="flex gap-x-6">
                    <button
                        onClick={onToggle}
                        className="flex items-center justify-between px-6 border w-[160px] h-[40px] text-base border-orange-500/30 text-orange-500 hover:bg-orange-100"
                    >
                        <Filter className="w-5 h-5 mr-2"/>
                        <span className="flex-1 text-left">Filter</span>
                        <span className="ml-2 bg-orange-500 w-6 h-6 flex items-center justify-center text-white text-[10px]">
                                {filterCount}
                            </span>
                    </button>
                    <div className="relative flex items-center">
                        <input
                            className="border pr-4 pl-10 py-2 rounded w-64 text-sm border-gray-200"
                            placeholder="UI/UX Design"
                        />
                        <Search className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    </div>
                </div>

                <div className="flex items-center gap-x-3">
                    <span>Sort by:</span>
                    <div className="relative flex items-center">
                        <input
                            className="border px-4 py-2 rounded w-44 pr-10 text-sm border-gray-400"
                            placeholder="Trending"
                        />
                        <ArrowBigDown className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                    </div>
                </div>
            </div>

            <div className="flex gap-x-3 justify-between items-center pb-10">
                <div className="flex gap-x-3">
                    <span className="text-gray-500">Suggestion:</span>
                    <p className="text-orange-500">{suggestion}</p>
                </div>
                <p className="text-gray-500">
                    <span className="text-black">{resultsCount}</span> results found for{" "}
                    <span className="text-gray-500">{keyword}</span>
                </p>
            </div>
        </div>
    );
};

export default TopFilters;