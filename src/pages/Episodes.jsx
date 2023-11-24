import React from 'react';
import episodes from "../data/episode.json"
import Table from "../components/Table";
import { useNavigate, useSearchParams } from "react-router-dom";
import _ from "lodash";
import locations from "../data/location.json";

const Episodes = () => {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useSearchParams({ sortBy: "created", order: "asc" })

  const handleClick = (episode) => {
    navigate(`/episodes/${episode.id}`);
  }

  const handleSort = (sortRule) => {
    setSortBy(sortRule);
  }

  const sortedEpisodes = _.orderBy(
    episodes,
    [sortBy.get("sortBy")],
    [sortBy.get("order")]
  );

  return (
    <div className="episodes">
      Episodes
      <Table
        data={sortedEpisodes}
        onClick={handleClick}
        sortBy={sortBy}
        onSort={handleSort}
      />
    </div>
  );
};

export default Episodes;
