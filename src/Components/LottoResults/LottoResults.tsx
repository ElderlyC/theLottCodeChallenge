import { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "../Ticket/Ticket";

interface DrawResult {
  PrimaryNumbers: number[];
  SecondaryNumbers: number[];
}

interface LottoResultsData {
  DrawResults: DrawResult[];
}

function LottoResults() {
  const [results, setResults] = useState<LottoResultsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post<LottoResultsData>(
          "https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults",
          {
            CompanyId: "GoldenCasket",
            MaxDrawCountPerProduct: 1,
            OptionalProductFilter: ["Powerball"],
          }
        );
        if (response) setResults(response.data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Ticket
        lastDrawnPrimary={results.DrawResults[0].PrimaryNumbers}
        lastDrawnSecondary={results.DrawResults[0].SecondaryNumbers[0]}
      />
    </div>
  );
}

export default LottoResults;
