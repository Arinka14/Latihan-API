function searchmovie() {
  $('#movie-list').html('');

  $.ajax({
    url: 'https://www.omdbapi.com/',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': 'fb7a98f8',
      's': $('#search-input').val()
    },
    success: function (result) {
      if (result.Response === "True") {
        let movies = result.Search;
        let content = '';

        $.each(movies, function (i, data) {
          let poster = data.Poster !== "N/A"
            ? data.Poster
            : "https://via.placeholder.com/300x450?text=No+Image";

          content += `
            <div class="col-md-4 my-3">
              <div class="card">
                <img src="${poster}" class="card-img-top" alt="${data.Title}">
                <div class="card-body">
                  <h5 class="card-title">${data.Title}</h5>
                  <p class="card-text">Year: ${data.Year}</p>
                  <a href="#" 
                     class="card-link see-detail" 
                     data-bs-toggle="modal" 
                     data-bs-target="#exampleModal" 
                     data-id="${data.imdbID}">
                     See Detail
                  </a>
                </div>
              </div>
            </div>
          `;
        });

        $('#movie-list').html(content);
        $('#search-input').val('');

      } else {
        $('#movie-list').html(`
          <div class="col">
            <h1 class="text-center">${result.Error}</h1>
          </div>
        `);
      }
    }
  });
}

$('#search-button').on('click', function () {
  searchmovie();
});

$('#search-input').on('keyup', function (e) {
  if (e.key === 'Enter') {
    $('#search-button').click();
  }
});

$('#movie-list').on('click', '.see-detail', function () {
  const imdbID = $(this).data('id');
  $('#btn-close-detail').on('click', function () {
  $('#modal-body').html('');
  });

$('#exampleModal').on('hidden.bs.modal', function () {
  $('#modal-body').html('');
  });

  $.ajax({
    url: 'https://www.omdbapi.com/',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': 'fb7a98f8',
      'i': imdbID
    },
    success: function (movie) {
      if (movie.Response === "True") {


        $('#exampleModalLabel').text(movie.Title);
        $('#modal-body').html(`
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="img-fluid" alt="${movie.Title}">
              </div>

              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><strong></strong><h3> ${movie.Title} </h3> </li>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><strong></strong><h3> ${movie.Title} </h3> </li>
                  <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                  <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                  <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                  <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                  <li class="list-group-item"><strong>Plot:</strong> ${movie.Plot}</li>
                </ul>
              </div>
            </div>
          </div>
        `);
      }
    }
  });
});