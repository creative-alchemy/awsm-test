import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  ipMetaData: any;
  ipAddress: string;
};

const SearchResultCard = ({ ipMetaData, ipAddress }: Props) => {
  return (
    <Card className="w-[350px] transition-all">
      <CardHeader>
        <CardTitle>Search Result</CardTitle>
        <CardDescription>For IP Address: {ipAddress}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="net-range">Net Range</Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div>
                {ipMetaData?.startAddress} - {ipMetaData?.endAddress}
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;
