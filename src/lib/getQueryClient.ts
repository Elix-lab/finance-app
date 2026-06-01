// function to implement QueryClient for the sue of Hydration API(TanstackQuery)

import { QueryClient } from "@tanstack/react-query";

export function getQueryClient() {
  return new QueryClient();
}
