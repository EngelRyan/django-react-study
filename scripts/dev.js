const { execSync } = require("child_process");

const run = (command) => {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
};

const args = process.argv;

if (args.includes("--setup")) {
  run("npm run setup");
}

if (args.includes("--m")) {
  run("npm run migrations");
}

run(
  'concurrently --names "FRONTEND,BACKEND" --prefix-colors "blue,green" "npm run frontend" "npm run backend"'
);