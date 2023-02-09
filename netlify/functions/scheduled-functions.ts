import type { Handler } from "@netlify/functions";
import { schedule } from "@netlify/functions";
import fetchSF from "../../src/scripts/update-sf";

const reportHandler: Handler = async () => {
  await fetchSF();

  return {
    statusCode: 200,
  };
};

const handler = schedule("33 * * * *", reportHandler);

export { handler };
