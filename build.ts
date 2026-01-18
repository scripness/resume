import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildPDF() {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  const htmlPath = join(__dirname, "resume.html");
  await page.goto(`file://${htmlPath}`, {
    waitUntil: "networkidle0",
  });

  // Wait for fonts to load
  await page.evaluateHandle("document.fonts.ready");

  const outputPath = join(__dirname, "Andrei Scripcaru.pdf");

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  });

  await browser.close();

  console.log(`PDF generated: ${outputPath}`);
}

buildPDF().catch(console.error);
