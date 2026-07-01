fetch('./gs_directory_backup (1).json')
  .then(response => response.json())
  .then(data => console.log(data));