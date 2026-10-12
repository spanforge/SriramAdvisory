const { chromium } = require("playwright");
(async()=>{
 const browser=await chromium.launch();
 const context=await browser.newContext({permissions:["clipboard-read","clipboard-write"]});
 const page=await context.newPage();
 const errors=[]; page.on("pageerror",e=>errors.push(e.message));
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:844});
  for(const route of ["/","/work-with-sriram","/about","/thinking","/contact?stage=adoption"]){
   const response=await page.goto("http://localhost:3000"+route);
   if(response.status()!==200) throw Error(route+" HTTP "+response.status());
   if(await page.locator("h1").count()!==1) throw Error(route+" needs one H1");
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
   if(overflow) throw Error(route+" overflows at "+width);
  }
  console.log("Responsive routes passed at "+width);
 }
 await page.setViewportSize({width:390,height:844}); await page.goto("http://localhost:3000/");
 const action=page.getByRole("link",{name:"Request a Review",exact:true}).filter({visible:true}).first();
 const box=await action.boundingBox(); if(!box||box.y+box.height>844)throw Error("Mobile hero action below fold");
 await page.getByRole("button",{name:"Menu",exact:true}).click();
 await page.keyboard.press("Escape");
 if(await page.getByRole("button",{name:"Menu",exact:true}).getAttribute("aria-expanded")!=="false")throw Error("Menu Escape failed");
 if(!await page.getByRole("button",{name:"Menu",exact:true}).evaluate(el=>el===document.activeElement))throw Error("Menu focus return failed");
 for(const stage of ["idea","market","distribution","adoption"]){
  await page.goto("http://localhost:3000/contact?stage="+stage);
  const mail=page.getByRole("link",{name:"Email your enquiry",exact:true}).last();
  if(!decodeURIComponent(await mail.getAttribute("href")).toLowerCase().includes("stage: "+stage))throw Error("Stage missing");
 }
 await page.getByRole("button",{name:"Copy email address"}).click();
 await page.getByRole("status").filter({hasText:"Email address copied."}).waitFor();
 if(await page.evaluate(()=>navigator.clipboard.readText())!=="sriram@sriramadvisory.com")throw Error("Clipboard failed");
 await page.goto("http://localhost:3000/work-with-sriram");
 await page.locator("summary").first().click();
 if(!await page.locator("details").first().getAttribute("open") && !await page.locator("details").first().evaluate(el=>el.open))throw Error("FAQ failed");
 await page.goto("http://localhost:3000/thinking");
 const articleHref=await page.getByRole("link",{name:"Read Article →"}).first().getAttribute("href");
 if((await page.goto("http://localhost:3000"+articleHref)).status()!==200)throw Error("Article failed");
 for(const route of ["/resources","/careers","/guides","/products/airs-assessment","/payment-status","/sitemap.xml","/opengraph-image"]){
  const r=await page.request.get("http://localhost:3000"+route);
  if(r.status()!==200)throw Error(route+" HTTP "+r.status());
 }
 const redirect=await page.request.get("http://localhost:3000/services/problem-solving-sprint",{maxRedirects:0});
 if(redirect.status()!==301)throw Error("Expected 301");
 if(errors.length)throw Error(errors.join("\n"));
 await page.setViewportSize({width:1440,height:1000});await page.goto("http://localhost:3000/");await page.screenshot({path:"test-results/v3-home-desktop.png",fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:"test-results/v3-home-mobile.png",fullPage:true});
 console.log("Menu, stage links, clipboard, FAQ, article, retained routes and 301 passed.");
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
