/*
  Basic File I/O for HDR images for A02G

  Author: Joshua A. Levine
  Email: josh@email.arizona.edu
  
  Edit by: Amir Mohammad Esmaieeli Sikaroudi
  
  Date: Feb 12, 2023
 */


//access DOM elements we'll use
var input = document.getElementById("load_image");
var output = document.getElementById("save_image")
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


//Connect event listeners
input.addEventListener("change", upload);
output.addEventListener("click", download);






//Function to process upload
function upload() {
  if (input.files.length > 0) {
    var file = input.files[0];
    //console.log("You chose", file.name);
    //if (file.type) console.log("It has type", file.type);

    var fReader = new FileReader();
    //for HDR, we'll readAsArrayBuffer
    fReader.readAsArrayBuffer(file)

    fReader.onload = function(e) {
      //if successful, file data has the contents of the uploaded file
      var file_data = fReader.result;

      //calling parseHdr from hdr.js will process the data
      var hdr_data = parseHdr(file_data);

      //hdr_data.shape[0] has the width
      //hdr_data.shape[1] has the height
      //hdr_data.data is an array of size 4xWxH of floats for the pixels
    }
  }
}

//To save PPM file you can use Blob with "FileSaver.js" and "saveAs" function or you can use Blob and "URL.createObjectURL()"
