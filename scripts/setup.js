const { execSync } = require("child_process");

const run = (command) => {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
};

console.log("Configurando frontend...");
run("npm install --prefix frontend");

console.log("Instalando binding do Rolldown...");
run("npm install @rolldown/binding-win32-x64-msvc --save-dev --prefix frontend");

console.log("Configurando backend...");
run("cd backend && pip install -r requirements.txt");

console.log("Aplicando migrations...");
run("cd backend && python manage.py migrate");

console.log("\nSetup finalizado!");