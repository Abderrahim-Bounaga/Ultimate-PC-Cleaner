    // Or with ECMAScript 6
    
    let btnn = document.getElementById("btn");
    btnn.addEventListener("click" ,() =>{
    const os = require('os');
    const fs = require('fs');
    const file = require('file-system');
    const aM = document.getElementById("analystmpe");
    const sM = document.getElementById("sizetmpe");

    const data = {};
            
    ////////////reade file/////////////
        fs.readdir(`${os.tmpdir()}`, (err, files) => {        
        if (err) {
         return;
        }else{
            
            aM.innerHTML=files.length;
           
        }

    ///////////FOLDER SIZE///////////


        const getSize = require('get-folder-size');
 
        getSize(`${os.tmpdir()}`, (err, size) => {
        if (err) { throw err; }
        sM.innerHTML = (size / 1024 / 1024).toFixed(2) + ' MB';
        

        ///// add data ///////

            ;
            let dataG = [
                 files.length ,
                 (size / 1024 / 1024).toFixed(2) + ' MB'
            ];
            fs.appendFile('log.csv',dataG, function (err) {
                if (err) {
                    // append failed
                } else {
                    // done
                }
            })

        });

    }); 
      
    


        
     
    }, false);

    let btnncook = document.getElementById("btncook");

    btnncook.addEventListener("click" ,() =>{
    // const tmp = require('temp');
    const os = require('os');
    const path = require('path');
    const fs = require('fs');
    const file = require('file-system');
    const aC = document.getElementById("analyscook");
    const diri = "C:\\Users\\Administrateur\\AppData\\Local\\Mozilla\\Firefox\\Profiles\\897f2s61.default";
    const arrFile = [];
        

            fs.readdir(diri, (err, cookie) => {
                if (err) throw err;
                alert(cookie.length);
                arrFile.push(cookie);
                console.log(arrFile);

                for (const file of cookie) {
                    fs.unlink(path.join(diri, file), err => {
                        if (err) throw err;
                    });
                }
            });        
  
        



        

        // fs.unlink(diri, function(err) {
        //         if (err) {
        //             throw err
        //         } else {
        //             alert("Successfully deleted the file.")
        //         }
        //         })
    }, false);