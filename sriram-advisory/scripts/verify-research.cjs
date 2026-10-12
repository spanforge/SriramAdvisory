const {chromium}=require("playwright");
(async()=>{
const browser=await chromium.launch();const page=await browser.newPage();
await page.goto("http://localhost:3000/thinking");
const cards=page.locator("#writing .sa-card");
if(await cards.count()!==2)throw Error("Expected two current-theme posts");
const links=await cards.locator("h3 a").evaluateAll(els=>els.map(el=>el.getAttribute("href")));
for(const href of links){
 const response=await page.goto("http://localhost:3000"+href);
 if(response.status()!==200)throw Error("Article failed");
 if(await page.locator("h1").count()!==1)throw Error("Heading failed");
 if((await page.locator(".sa-article-body").innerText()).length<1000)throw Error("Article incomplete");
 if(await page.locator(".sa-related .sa-card").count()!==1)throw Error("Related curation failed");
}
await page.goto("http://localhost:3000/");
if(await page.getByRole("link",{name:"What nature teaches us about product distribution",exact:true}).count()!==1)throw Error("Homepage article missing");
console.log("Two themed posts, full article bodies, related links and homepage cards passed.");
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
