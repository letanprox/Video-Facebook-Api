const fs = require('fs');

let tenfolder = "onepiece_tap851-900";
const testFolder = './'+tenfolder+'/';

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    let namemoi = file.replace(' [zuitan].mp4','');
        namemoi = namemoi.replace('.mp4','').replace(/\D/g, "");
        namemoi = 'onepiece_tap_'+namemoi+'.mp4';
        console.log(namemoi)
        fs.rename(testFolder+file, testFolder+namemoi, function(err) {
          if ( err ) console.log('ERROR: ' + err);
        });
    });
});