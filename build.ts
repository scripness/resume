import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfOptions = {
  format: "A4" as const,
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
};

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
    ...pdfOptions,
  });

  console.log(`PDF generated: ${outputPath}`);

  // Generate technical variant
  await page.evaluate(() => {
    document.querySelector('.resume')!.setAttribute('data-variant', 'technical');
  });

  const technicalOutputPath = join(__dirname, "Andrei Scripcaru - Technical.pdf");
  await page.pdf({
    path: technicalOutputPath,
    ...pdfOptions,
  });

  console.log(`PDF generated: ${technicalOutputPath}`);

  // Generate CNPF variant (separate Romanian file)
  const cnpfHtmlPath = join(__dirname, "resume-cnpf.html");
  await page.goto(`file://${cnpfHtmlPath}`, { waitUntil: "networkidle0" });
  await page.evaluateHandle("document.fonts.ready");

  const cnpfOutputPath = join(__dirname, "Andrei Scripcaru - CNPF.pdf");
  await page.pdf({
    path: cnpfOutputPath,
    ...pdfOptions,
  });

  console.log(`PDF generated: ${cnpfOutputPath}`);

  await browser.close();
}

buildPDF().catch(console.error);
