module.exports = (req, res) => {
  const jsonfile = require("jsonfile");
  const path = require("path");

  const filename = req.body.imagePath.split(".")[0] + ".json";
  const currentSample = "2019-02-21";
  const url = path.join(__dirname, '../sample', currentSample, 'label', filename);

  jsonfile.writeFile(url, JSON.parse(req.body.data), { spaces: 2 }, function (e) {
    if(e){
      res.status(500).end()
      return
    }
    res.json({
      filename: filename
    })
  })
};