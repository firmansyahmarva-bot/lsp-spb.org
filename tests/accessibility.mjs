import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const browser=await chromium.launch({headless:true});
const checks=[
  {path:'/',viewport:{width:390,height:844}},
  {path:'/pelatihan/ahli-k3-umum',viewport:{width:1440,height:900}},
  {path:'/alat/matriks-risiko',viewport:{width:390,height:844}},
];
for(const check of checks){const context=await browser.newContext({viewport:check.viewport});const page=await context.newPage();await page.goto(`http://localhost:3000${check.path}`,{waitUntil:'networkidle'});const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();const serious=results.violations.filter(v=>['serious','critical'].includes(v.impact));if(serious.length)throw new Error(`${check.path}: ${serious.map(v=>`${v.id} ${v.nodes.map(n=>n.target.join(' ')).join(', ')}`).join('; ')}`);console.log(`PASS ${check.path} ${check.viewport.width}px — ${results.violations.length} non-serious issues`);await context.close();}
await browser.close();
