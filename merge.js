const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (p1 , p2 , p3 , p4) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  await merger.add(p3);
  await merger.add(p4);

  let date = new Date().getTime();

  await merger.save(`public/${date}.pdf`); //save under given name and reset the internal document
  return date;
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs};