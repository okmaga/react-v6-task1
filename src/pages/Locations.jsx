import React from 'react';
import locations from "../data/location.json"
import Table from "../components/Table";
import _ from "lodash";
import {useNavigate, useSearchParams} from "react-router-dom";

const Locations = () => {
  const navigate = useNavigate()
  const handleClick = (location) => {
    navigate(`/locations/${location.id}`);
  }

  const [sortBy, setSortBy] = useSearchParams({ sortBy: "created", order: "asc" })

  const handleSort = (sortRule) => {
    setSortBy(sortRule);
  }

  const sortedLocations = _.orderBy(
    locations,
    [sortBy.get("sortBy")],
    [sortBy.get("order")]
  );

  return (
    <div className="locations">
      Locations
      <Table
        data={sortedLocations}
        onClick={handleClick}
        sortBy={sortBy}
        onSort={handleSort}
      />
    </div>
  );
};

export default Locations;
