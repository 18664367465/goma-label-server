module.exports = (req, res) => {
  const fs = require("fs");
  const path = require("path");

  const which = req.params.which;
  const currentSample = "2019-02-21";

  if(which != 'source' && which != 'label'){
    res.status(404).end()
    return
  }

  let url = path.join(__dirname, '../sample', currentSample, which)

  fs.readdir(url, (e, r)=>{
    if(e){
      res.status(500).end()
      return
    }
    r = r.filter(function(filename){
      if(filename.search(/.DS_Store/g) !== -1) return false
      return true
    })
    res.json({
      data: r,
      sample: currentSample,
      which: which
    })
  })
}