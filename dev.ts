import resume from "./resume.html";

const server = Bun.serve({
  routes: {
    "/": resume,
  },
  development: true,
});

console.log(`Dev server: ${server.url}`);
