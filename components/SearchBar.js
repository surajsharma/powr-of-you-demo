import { useCallback, useState, useContext } from "react";

import { Input, Spacer } from "@geist-ui/core";

import { SearchIcon } from "./Icons";
import SvgIcon from "./SvgIcon";
import { AppContext } from "../pages";

export default function SearchBar() {
  const { search, setSearch } = useContext(AppContext);

  return (
    <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      iconRight={<SvgIcon icon={SearchIcon} />}
      placeholder="Search Items..."
    />
  );
}
