"use client";

import React, { SyntheticEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type Props = {
  defaultValue: string;
};

const SearchForm = ({ defaultValue }: Props) => {
  const [ipAddress, setIpAddress] = useState(defaultValue || "");
  const router = useRouter();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/?ipAddress=${ipAddress}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
        <Input
          type="text"
          placeholder="Enter an IP Address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <Button type="submit">Get Range</Button>
      </div>
    </form>
  );
};

export default SearchForm;
