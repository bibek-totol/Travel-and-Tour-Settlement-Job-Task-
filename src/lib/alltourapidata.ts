import { Tour } from "@/app/types/tourdatatype";

import tours from "../../public/api.json";


export async function alltourapidata(): Promise<Tour[]> {
  return tours as Tour[];
}


