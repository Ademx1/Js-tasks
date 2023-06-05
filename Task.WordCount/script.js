
function countWords() {
  var sentence = document.getElementById('sentence').value;
  var wordCount = 0;
  var inWord = false;

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      inWord = false;
    } else if (!inWord) {
      inWord = true;
      wordCount++;
    }
  }

  document.getElementById('result').innerHTML = 'Number of words: ' + wordCount;
}
