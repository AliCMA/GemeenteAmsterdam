//Vergrootglas:

document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('myImage');
  var searchArea = document.getElementById('searchArea');

  image.addEventListener('click', function() {
    if (searchArea.style.display === 'none') {
      searchArea.style.display = 'block';
    } else {
      searchArea.style.display = 'none';
    }
  });
});