module.exports = (req, res) => {
  const fs = require("fs");
  const path = require("path");
  
  const which = req.params.which || "";
  const filename = req.params.filename || "";
  const currentSample = "2019-02-21";

  if(which != 'source' && which != 'label'){
    res.status(404).end()
    return
  }

  let url = path.join(__dirname, '../sample', currentSample, which, filename),
      options = {
        encoding: which == 'source' ? 'base64' : 'utf8'
      }

  fs.readFile(url, options, (e, r)=>{
    if(e){
      res.json({
        data: null,
        sample: currentSample,
        which: which,
        filename: filename,
      })
      return
    }
    res.json({
      data: r,
      sample: currentSample,
      which: which,
      filename: filename,
    })
  })
}