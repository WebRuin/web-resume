/*!
 * resume
 * Web resume
 * https://tim-smith-resume.surge.sh/
 * @author Tim Smith
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./assets/js/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

  window.addEventListener('load', function(){
      var allimages= document.getElementsByTagName('img');
      for (var i=0; i<allimages.length; i++) {
          if (allimages[i].getAttribute('data-src')) {
              allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
          }
      }
  }, false);

  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', function(e) {
    scroll = window.scrollY;

    if(scroll > 256) {
      nav.classList.add('fixed')
    } else {
      nav.classList.remove('fixed')
    }
  })

})(jQuery, window, document);
