import React from "react";
import { Badge } from "@/components/ui/badge";

const MaterialCard = ({ material }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg">
      <img
        src={`https://d1wh1xji6f82aw.cloudfront.net/${material.CoverPhoto}`}
        alt={material.Title}
        className="w-full h-42 object-cover mb-4 rounded transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-lg font-semibold">{material.Title}</h3>
      <p className="text-gray-500">Sales Price: ${material.SalesPrice}</p>
      <p className="text-gray-500">Drip Price: ${material.DripPrice}</p>
      <Badge variant="secondary" className="mb-2">
        {`Variant : ` + material.VariantTitle}
      </Badge>
    </div>
  );
};

export default MaterialCard;
