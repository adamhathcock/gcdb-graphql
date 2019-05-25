import server from "./server";

async function start(): Promise<void> {
  // Start the GraphQL server
  server.start(() => {
    console.log("Server is running on localhost:4000");
  });
}

start();
