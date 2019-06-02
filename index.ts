import { getServer } from "./server";

async function start(): Promise<void> {
  const server = await getServer();
  await server.start({port: 4000});
}

start().catch(console.log);
