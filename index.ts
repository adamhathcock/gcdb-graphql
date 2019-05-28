import { getServer } from "./server";

async function start(): Promise<void> {
  const server = await getServer();
  await server.start();
}

start().catch(console.log);
