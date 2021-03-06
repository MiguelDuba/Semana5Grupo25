const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

const imagenes = [];
const rutaBase = 'kraken-escenarios/screenshots'

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let capturas = [];
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    for(b of browsers){

        if (!fs.existsSync(`./results/${datetime}`)){
          fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }
        

        var files =fs.readdirSync(`../${rutaBase}/version3419/`)
          
        files.forEach(function (file) {

            imagenes.push(file)

        });
        
        console.log(imagenes);
        for(let i=0; i<imagenes.length; i++){
          
          var nombreRuta= imagenes[i];

          const data = await compareImages(
              fs.readFileSync(`../${rutaBase}/version3419/${nombreRuta}`),
              fs.readFileSync(`../${rutaBase}/version4413/${nombreRuta}`),
              options
          );
          resultInfo[nombreRuta] = {
              isSameDimensions: data.isSameDimensions,
              dimensionDifference: data.dimensionDifference,
              rawMisMatchPercentage: data.rawMisMatchPercentage,
              misMatchPercentage: data.misMatchPercentage,
              diffBounds: data.diffBounds,
              analysisTime: data.analysisTime
          }
          fs.writeFileSync(`./results/${datetime}/compare-${nombreRuta}`, data.getBuffer());
        }

    }
    
    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Versi??n 3.41.9</span>
        <img class="img2" src="../../../${rutaBase}/version3419/${b}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Versi??n 4.41.3</span>
        <img class="img2" src="../../../${rutaBase}/version4413/${b}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${imagenes.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}