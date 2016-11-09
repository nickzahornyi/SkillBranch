import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2B', function(req, res) {
  console.log(req.query);
  res.send (fullName(req.query));
});

app.listen(3000, function() {
  console.log('Example app listaning on port 3000!')
});

function fullName(getName) {
  if(!getName.fullname){
    return "Invalid fullname";
  }

  let shortName = getName.fullname.toLowerCase();
  console.log( shortName );

  if(shortName.search(/[0-9]|_|\/|\\/) != '-1'){
    return "Invalid fullname";
  }

  shortName = shortName.trim().replace(/\s+/g, " ");

  shortName = shortName.split(" ");
  console.log(shortName.length)
  console.log(`${shortName[2]} ${shortName[0]}. ${shortName[1]}.`);

  switch(shortName.length) {
    case 1: return `${shortName[0][0].toUpperCase() + shortName[0].slice(1)}`;
    case 2: return `${shortName[1][0].toUpperCase() + shortName[1].slice(1)} ${shortName[0][0].toUpperCase()}.`;
    case 3: return `${shortName[2][0].toUpperCase() + shortName[2].slice(1)} ${shortName[0][0].toUpperCase()}. ${shortName[1][0].toUpperCase()}.`;
    default: return "Invalid fullname";
  }
};
