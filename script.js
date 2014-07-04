function createBoard() {
	for (var i = 0; i < 3; i++) {
		$('.container').append('<div class="row"></div>');
		for (var j = 0; j < 3; j++) {
			$('.row:last-child').append('<div class="cell"></div>');

		};
	};
	$('.cell').css({'border': '1px solid black', 'height':'200px', 'width':'200px', 'display':'inline-block', 'position':'relative'});
};$('.container').css('height', '600px'); 

$(document).ready( function() {
	createBoard();
	window.currentClick = 0;
	$('.cell').on('click', move);
});

function move() {
	if ((window.currentClick % 2 === 0) && !($(this).text())) {
		$(this).append('<div class="filled"> X </div>');
		window.currentClick += 1;
	}
	else if (!($(this).text())) {
		$(this).append('<div class="filled"> O </div>');
		window.currentClick += 1;
	};

	if (checkWin()) {
		gameover()
	}
};

function checkWin() {
	for (var i = 1; i <= 3; i++) {

		var $rows = $('.row:nth-child(' + i + ')').text();
		var $columns = $('.cell:nth-child(' + i + ')').text();
		console.log($rows);
		console.log($columns);
		if (( $columns === ' X  X  X ' || $columns === ' O  O  O ') || ( $rows === ' X  X  X ' || $rows === ' O  O  O ')) {
			gameover();
		}
	};
};

	// if ($('.cell:first-child').text() === " X  X  X " ) {
	// 	gameover('x');
	// }
	// else if ($('.cell:nth-child(2)').text() === " X  X  X ") {
	// 	gameover('x');
	// }
	// else if ($('.cell:last-child').text() === " X  X  X ") {
	// 	gameover('x');
	// }

function gameover(winner) {
	$('h1').append('<p> Game over </p>');
	$('div').on('click', function() {
		location.reload();
	});
};