import resume from "./resume.html";
import cnpf from "./resume-cnpf.html";

const server = Bun.serve({
  routes: {
    "/": resume,
    "/cnpf": cnpf,
  },
  development: true,
});

console.log(`Dev server: ${server.url}`);
