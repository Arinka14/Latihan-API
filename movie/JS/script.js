$('search-button').on('click', function () {


    s.ajax ({
        url:'http//omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
              'apikey': 'fb7a98f8',
              's': $('#search-input').val()
        },
        success: function (result) {
            console.log(result);
            
        }
                
    });
  

 });