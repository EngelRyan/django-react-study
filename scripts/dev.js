const { execSync } = require("child_process");

const run = (command) => {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
};

run(
  'concurrently --names "FRONTEND,BACKEND" --prefix-colors "blue,green" "npm run frontend" "npm run backend"'
);