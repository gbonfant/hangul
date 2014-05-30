(function() {
  'use strict';

  // Hangul
  var data = [
    { roman: 'a',   hangul: 'ㅏ', type: 'vowel' },
    { roman: 'eo',  hangul: 'ㅓ', type: 'vowel' },
    { roman: 'o',   hangul: 'ㅗ', type: 'vowel' },
    { roman: 'u',   hangul: 'ㅜ', type: 'vowel' },
    { roman: 'eu',  hangul: 'ㅡ', type: 'vowel' },
    { roman: 'i',   hangul: 'ㅣ', type: 'vowel' },
    { roman: 'ya',  hangul: 'ㅑ', type: 'vowel' },
    { roman: 'yeo', hangul: 'ㅕ', type: 'vowel' },
    { roman: 'yo',  hangul: 'ㅛ', type: 'vowel' },
    { roman: 'yu',  hangul: 'ㅠ', type: 'vowel' },
    { roman: 'ae',  hangul: 'ㅐ', type: 'vowel' },
    { roman: 'yae', hangul: 'ㅒ', type: 'vowel' },
    { roman: 'e',   hangul: 'ㅔ', type: 'vowel' },
    { roman: 'ye',  hangul: 'ㅖ', type: 'vowel' },
    { roman: 'ui',  hangul: 'ㅢ', type: 'vowel' },
    { roman: 'wa',  hangul: 'ㅘ', type: 'vowel' },
    { roman: 'wae', hangul: 'ㅙ', type: 'vowel' },
    { roman: 'oe',  hangul: 'ㅚ', type: 'vowel' },
    { roman: 'wo',  hangul: 'ㅝ', type: 'vowel' },
    { roman: 'we',  hangul: 'ㅞ', type: 'vowel' },
    { roman: 'wi',  hangul: 'ㅟ', type: 'vowel' },

    { roman: 'g',   hangul: 'ㄱ', type: 'consonant' },
    { roman: 'n',   hangul: 'ㄴ', type: 'consonant' },
    { roman: 'd',   hangul: 'ㄷ', type: 'consonant' },
    { roman: 'l',   hangul: 'ㄹ', type: 'consonant' },
    { roman: 'r',   hangul: 'ㄹ', type: 'consonant' },
    { roman: 'm',   hangul: 'ㅁ', type: 'consonant' },
    { roman: 'b',   hangul: 'ㅂ', type: 'consonant' },
    { roman: 's',   hangul: 'ㅅ', type: 'consonant' },
    { roman: 'o',   hangul: 'ㅇ', type: 'consonant' },
    { roman: 'ng',  hangul: 'ㅇ', type: 'consonant' },
    { roman: 'j',   hangul: 'ㅈ', type: 'consonant' },
    { roman: 'ch',  hangul: 'ㅊ', type: 'consonant' },
    { roman: 'k',   hangul: 'ㅋ', type: 'consonant' },
    { roman: 't',   hangul: 'ㅌ', type: 'consonant' },
    { roman: 'p',   hangul: 'ㅍ', type: 'consonant' },
    { roman: 'h',   hangul: 'ㅎ', type: 'consonant' },
  ];

  if (!localStorage.getItem('correct')) {
    localStorage.setItem('correct', 0);
  }

  if (!localStorage.getItem('incorrect')) {
    localStorage.setItem('incorrect', 0);
  }

  updateScore();


  // Handlebars compilation for hangul table
  var source     = document.getElementById('template').text;
  var template   = Handlebars.compile(source);
  var flashcards = { flashcards: data };

  $('body').append(template(flashcards));


  // Randomizer
  var flashcardSource   = document.getElementById('flashcard-template').text;
  var flashcardtemplate = Handlebars.compile(flashcardSource);

  var randomCard = data[Math.floor(Math.random() * data.length)];

  $('body').append(flashcardtemplate({ flashcard: randomCard }));


  function updateScore() {
    $('#correct').text(localStorage.getItem('correct'));
    $('#incorrect').text(localStorage.getItem('incorrect'));
  }


  // Input validation
  $('#flashcard-input').focus();
  $('#flashcard-input').on('keyup', function(e, a) {
    $(this).parent().removeClass('has-error');

    if (e.keyCode == 13) {
      // Check for validity
      if (randomCard.roman === this.value.toLowerCase()) {

        localStorage.setItem('correct', parseInt(localStorage.getItem('correct')) + 1);
        updateScore();

        $('#success-msg').removeClass('hide');

        setTimeout(function() {
          location.reload();
        }, 1000);
      } else {
        localStorage.setItem('incorrect', parseInt(localStorage.getItem('incorrect')) + 1);
        updateScore();

        $(this).parent().addClass('has-error');
      }
    }
  })
})()
