import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

  await page.goto('http://localhost:5173'); // Assuming vite runs on 5173
  
  // Wait for the What We Do section
  await page.waitForSelector('text="What We Do"');
  
  // Let's attach an event listener to the button to log when it's clicked
  await page.evaluate(() => {
    const btns = document.querySelectorAll('button');
    btns.forEach(b => {
      if (b.innerHTML.includes('lucide-chevron-right')) {
        b.addEventListener('click', () => console.log('RIGHT BUTTON CLICKED'));
      }
    });
  });

  console.log('Testing right arrow click...');
  
  // Find the button with ChevronRight
  const rightBtn = await page.locator('button:has(svg.lucide-chevron-right)').first();
  await rightBtn.click();
  
  await page.waitForTimeout(500);

  // Check scroll position of the carousel
  const scrollPos = await page.evaluate(() => {
    const carousel = document.querySelector('.snap-x.snap-mandatory');
    return carousel ? carousel.scrollLeft : -1;
  });
  
  console.log('Scroll Position after right click:', scrollPos);

  await browser.close();
})();
