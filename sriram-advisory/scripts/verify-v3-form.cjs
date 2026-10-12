const {chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch();const page=await browser.newPage();
 await page.goto("http://localhost:3000/");
 if((await page.locator("body").innerText()).toLowerCase().includes("solopreneur"))throw Error("Audience copy remains");
 let requests=0;
 await page.route("https://formspree.io/f/mojzewly",async route=>{requests++;await route.fulfill({status:200,contentType:"application/json",body:'{"ok":true}'});});
 for(const stage of ["idea","market","distribution","adoption"]){
  await page.goto("http://localhost:3000/contact?stage="+stage);
  if(await page.locator("#enquiry-interest").inputValue()!==stage)throw Error("Stage mismatch");
 }
 await page.getByRole("button",{name:"Send enquiry",exact:true}).click();
 await page.locator("#enquiry-errors").waitFor();
 if(requests)throw Error("Invalid form was submitted");
 await page.locator("#enquiry-name").fill("Preview Test");
 await page.locator("#enquiry-email").fill("preview@example.com");
 await page.locator("#enquiry-challenge").fill("I need to understand why users stop using my software product.");
 await page.locator("#enquiry-privacyAcknowledged").check();
 await page.getByRole("button",{name:"Send enquiry",exact:true}).click();
 await page.getByRole("heading",{name:"Thank you. Your enquiry has been received."}).waitFor();
 if(requests!==1)throw Error("Unexpected submission count");
 console.log("Copy, stage selection, validation and mocked Formspree success passed. No real enquiry sent.");
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
