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

	checkLines($(this).text());
	checkDiagonal($(this).text());
};

function checkLines(player) {
	for (var i = 1; i <= 3; i++) {
		var $rows = $('.row:nth-child(' + i + ')').text();
		var $columns = $('.cell:nth-child(' + i + ')').text();
		if (( $columns === ' X  X  X ' || $columns === ' O  O  O ') || ( $rows === ' X  X  X ' || $rows === ' O  O  O ')) {
			gameover(player);
		}
	};

};

function checkDiagonal(player) {
		var $top_left = $('.cell').eq(0).text();
		var $top_right = $('.cell').eq(2).text();
		var $center = $('.cell').eq(4).text();
		var $bottom_left = $('.cell').eq(6).text();
		var $bottom_right = $('cell').eq(8).text();

		if ((($top_left === $center) && ($top_left === $bottom_right)) && ($center)) {
			gameover(player);
		}
		else if ((($top_right === $center) && ($center === $bottom_left)) && ($center)) {
			gameover(player);
		};
};


function gameover(player) {
	$('h1').append('<p> Game over ' + player + ' wins </p>');
};