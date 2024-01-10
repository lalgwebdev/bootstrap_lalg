(function ($, Drupal) {
  Drupal.behaviors.setFocus = {
    attach: function (context, settings) {
      $(context).find('input#edit-group-search').once('setFocus').focus();
    }
  };
})(jQuery, Drupal);
