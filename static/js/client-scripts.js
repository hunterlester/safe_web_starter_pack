require('./sample_module');

const fileInputEl = document.getElementById('fileExplorer');
fileInputEl.addEventListener('change', function(fileEvent) {
    let fileReader = new FileReader();
    fileReader.onload = function(event) {
      console.log(event);
      let image = document.getElementById('test-image');
      let file = fileEvent.target.files[0];
      image.src = event.target.result;
    }

    fileReader.readAsDataURL(fileEvent.target.files[0]);
});
