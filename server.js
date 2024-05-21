const express = require('express');
const path = require('path');
const app = express();
const multer  = require('multer');
const {mergePdfs}  = require('./merge');
const upload = multer({ dest: 'uploads/' });
app.use('/static' , express.static('public'));

app.get('/' , (req , res) =>{

	res.sendFile(path.join(__dirname , "templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 4), async (req, res , next) => {

	console.log(req.files);
	let date = await mergePdfs(path.join(__dirname , req.files[0].path) , (__dirname , req.files[1].path) , (__dirname , req.files[2].path) , (__dirname , req.files[3].path));
	res.redirect(`http://localhost:3000/static/${date}.pdf`)
	// res.send({data: req.files});	
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(3000 , () =>{

	console.log("Server Start At localhost:3000");

})