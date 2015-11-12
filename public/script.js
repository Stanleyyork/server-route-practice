$(function() {

	console.log("jquery works!");

	// Update Single Book
	$('#edit-form').on('submit', function(e){
		e.preventDefault();
		var id = $('#form-id').val();
		var title = $('#form-title').val();
		var ranking = $('#form-ranking').val();
		updateBook(id, title, ranking);
	});

	function updateBook(id, title, ranking){
		$.ajax({
	      type: "PUT",
	      url: 'http://localhost:3000/api/books/' + id,
	      data: {title: title, ranking: ranking},
	      success: function (data) {
	        console.log("Updated!");
	      },
	      error: function (error) {
	        console.error(error);
	      }
	    });
	}

});