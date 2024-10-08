"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";

export function DropdownMenuCheckboxes({ campaignState, setCampaignState }) {
  // State to hold the checked status of each option, received from the parent
  const [campaignOptions, setCampaignOptions] = useState(campaignState);

  // Effect to update the internal state when the parent changes
  useEffect(() => {
    setCampaignOptions(campaignState);
  }, [campaignState]);

  const handleCheckedChange = (option, checked) => {
    if (option === "all") {
      const updatedOptions = Object.keys(campaignOptions).reduce((acc, key) => {
        acc[key] = checked;
        return acc;
      }, {});
      setCampaignOptions(updatedOptions);
      setCampaignState(updatedOptions); 
    } else {
      const updatedOptions = {
        ...campaignOptions,
        [option]: checked,
      };
      setCampaignOptions(updatedOptions);
      setCampaignState(updatedOptions);
    }
  };

  const selectedOptions = Object.keys(campaignOptions).filter(option => campaignOptions[option]);
  let buttonLabel = "No Campaign";

  if (selectedOptions.length === 0) {
    buttonLabel = "No Campaign";
  } else if (selectedOptions.length === 1) {
    buttonLabel = selectedOptions[0].charAt(0).toUpperCase() + selectedOptions[0].slice(1);
  } else if (selectedOptions.length === Object.keys(campaignOptions).length) {
    buttonLabel = "All Campaigns";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{buttonLabel} <IoIosArrowDown /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Campaign Status</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={selectedOptions.length === Object.keys(campaignOptions).length}
          onCheckedChange={(checked) => handleCheckedChange("all", checked)}
        >
          All
        </DropdownMenuCheckboxItem>

        {Object.keys(campaignOptions).map(option => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={campaignOptions[option]}
            onCheckedChange={(checked) => handleCheckedChange(option, checked)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
