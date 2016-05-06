$(document).ready(function() {
	var quotes = [{
		quote: "We look forward to the time when the Power of Love will replace the Love of Power. Then will our world know the blessings of peace.",
		author: "William Ewart Gladstone"
	}, {
		quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
		author: "Maurice Switzer"
	}, {
		quote: "For success, attitude is equally as important as ability.",
		author: "Anonymous"
	}, {
		quote: "Either you run the day, or the day runs you.",
		author: "Jim Rohn"
	}, {
		quote: "Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it’s the only thing that ever has.",
		author: "Margaret Mead"
	}, {
		quote: "To avoid criticism, say nothing, do nothing, be nothing.",
		author: "Fred Shero"
	}, ]; //end quotes
	function getRandomNumber(minimum, maximum) {
		return Math.floor(Math.random() * (maximum - minimum) + minimum);
	};
	//
	$('#qbtn').click(function() {
		var randQuote = quotes[getRandomNumber(0, quotes.length)];
		$('#pquote').html(randQuote.quote);

		$('#pauthor').html(randQuote.author)
	});

	function tweetFixer(text) {
		if (text.length > 140) {
			text = text.slice(0, 140 - 3);
			text += "...";
		};
		return text;
	}
	$('#twtbtn').click(function() {
		//e.preventDefault(); //do not follow
		var quoteToTweet = $('#qtotal').text() + " " + $('#atotal').text();
		var quoteToTweetURL = encodeURIComponent(tweetFixer(quoteToTweet));
		window.open('https://twitter.com/intent/tweet?text='+quoteToTweetURL);

	});

}); // end of document.ready