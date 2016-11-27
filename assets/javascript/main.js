$(function() {
  // Variables
  $modal = $('#modal');
  modalClose = $modal.find('.close');

  // Bind events
  // = Modal close event
  modalClose.on('click', function(e) {
    e.preventDefault();
    modal.hide($modal);
  });

  // = Modal open event
  $('.gallery-item').on('click', function(e) {
    e.preventDefault();
    $modal.find('img').attr('src', e.currentTarget.href);
    $modal.find('.card').html($(this).find('.card').html());
    modal.show($modal);
  });

});

// -- Gallery
var gallery = (function() {
  var data = [
    {
      title: "Blue miles of sky with brown walls",
      text: "Singapore",
      link: "assets/images/image_2.jpg",
      width: "50"
    },
    {
      title: "Moon and chimney",
      text: "Arusha, Tanzania",
      link: "assets/images/image_3.jpg",
      width: "50"
    },
    {
      title: "Lights by the water at night",
      text: "Pulau Perhentian, Malaysia",
      link: "assets/images/image_4.jpg",
    },
    {
      title: "Coconut trees on rocky breach",
      text: "Pulau Perhentian, Malaysia",
      link: "assets/images/image_5.jpg"
    }
  ];

  var $gallery = $('.gallery');
  var galleryItemTemplate = $("#gallery-item-template").html();

  function _render(data) {
    $gallery.html(Mustache.render(galleryItemTemplate, {links: data}));
  }

  _render(data);
})();

// -- Modal
var modal = (function() {
  function _show(elem) {
    // console.log('showing..');
    elem.show();
  }

  function _hide(elem) {
    // console.log('hiding..');
    elem.hide();
  }

  return {
    show: _show,
    hide: _hide,
  };

})();
