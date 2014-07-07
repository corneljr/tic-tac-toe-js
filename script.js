$(document).ready( function() {
	window.currentClick = 0;

	$('.cell').on('mouseenter', function() {
		if (!$(this).text()) {
		$(this).css({backgroundColor: 'black'})
		};
	});
	$('.cell').on('mouseleave', function() {
		$(this).css({backgroundColor: 'white'})
	});
	$('.cell').on('click', move)
});

function move() {
	if (window.currentClick % 2 === 0) {
		$(this).text("X");
		$(this).mouseleave();
		window.currentClick += 1;
		$(this).off('click', move);
	}
	else {
		$(this).text("O");
		$(this).mouseleave();
		window.currentClick += 1;
		$(this).off('click', move);
	};

	checkWinner()
}

function checkWinner() {
	var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	$.each(winners, function(index,value) {
		if (cellContents(value[0])) {
			if ((cellContents(value[0]) === cellContents(value[1])) && (cellContents(value[0]) === cellContents(value[2]))) {
				winningCells([value[0],value[1],value[2]]);
				gameover(cellContents(value[0]));
			}
			else if (window.currentClick === 9) {
				gameover('draw');
			};
		};
	});
	return false;
}

function cellContents(num) {
	return $('.cell').eq(num).text();
}

function winningCells(arr) {
	$.each(arr, function(index,cell) {
		$('.cell').eq(cell).css({backgroundColor: 'green'});
	});
	$('.cell').off('click');
	$('.cell').off('mouseenter');
	$('.cell').off('mouseleave');
}

function gameover(result) {
	if (result === 'draw') {
		$('h1').text(' This game ends in a draw');
	}
	else {
		$('h1').text('Game over, ' + result + ' wins!');
	}
}