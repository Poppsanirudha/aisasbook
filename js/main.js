// Preloader Script 
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 2000);
// end



  function myFunction(x) {
    x.classList.toggle("change");
  }
// wow animation
  new WOW().init();

// title animation
  $(document).ready(function() {
    $("#text-anime").textillate({
      loop: true
    });
  });

// blog new hide
$(document).ready(function(){
$("#blog-new-hide").click(function(){
  $("#blog-new").hide();
});
});



// COMMENT BOX FONT SIZE CHANGE
// When + or - buttons are clicked the font size of the h1 is increased/decreased by 2
// The max is set to 50px for this demo, the min is set by min font in the user's style sheet

function getSize() {
size = $( "#font-change" ).css( "font-size" );
size = parseInt(size, 10);
$( "#font-size" ).text(  size  );
}

//get inital font size
getSize();

$( "#up" ).on( "click", function() {

// parse font size, if less than 50 increase font size
if ((size + 2) <= 30) {
$( "#font-change" ).css( "font-size", "+=2" );
$( "#font-size" ).text(  size += 2 );
}
});

$( "#down" ).on( "click", function() {
if ((size - 2) >= 12) {
$( "#font-change" ).css( "font-size", "-=2" );
$( "#font-size" ).text(  size -= 2  );
}
});

// sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

// Sticky nav menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("stickymenu").style.top = "60px";
  } else {
    document.getElementById("stickymenu").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "";
    moreText.style.display = "inline";
  }
}

function afterimg(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#afterimage').css('background-image', 'url('+e.target.result +')');
          $('#afterimage').hide();
          $('#afterimage').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#afterimageupload").change(function() {
  afterimg(this);
});

function beforimg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#beforeimage').css('background-image', 'url('+e.target.result +')');
            $('#beforeimage').hide();
            $('#beforeimage').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#beforimageupload").change(function() {
  beforimg(this);
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});






// jQuery(document).ready(function($){
//   var dragging = false,
//       scrolling = false,
//       resizing = false;
//   //cache jQuery objects
//   var imageComparisonContainers = $('.cd-image-container');
//   //check if the .cd-image-container is in the viewport 
//   //if yes, animate it
//   checkPosition(imageComparisonContainers);
//   $(window).on('scroll', function(){
//       if( !scrolling) {
//           scrolling =  true;
//           ( !window.requestAnimationFrame )
//               ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
//               : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
//       }
//   });
  
//   //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
//   imageComparisonContainers.each(function(){
//       var actual = $(this);
//       drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//   });

//   //upadate images label visibility
//   $(window).on('resize', function(){
//       if( !resizing) {
//           resizing =  true;
//           ( !window.requestAnimationFrame )
//               ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
//               : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
//       }
//   });

//   function checkPosition(container) {
//       container.each(function(){
//           var actualContainer = $(this);
//           if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
//               actualContainer.addClass('is-visible');
//           }
//       });

//       scrolling = false;
//   }

//   function checkLabel(container) {
//       container.each(function(){
//           var actual = $(this);
//           updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
//           updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
//       });

//       resizing = false;
//   }

//   // draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
//   function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//       dragElement.on("mousedown vmousedown", function(e) {
//           dragElement.addClass('draggable');
//           resizeElement.addClass('resizable');

//           var dragWidth = dragElement.outerWidth(),
//               xPosition = dragElement.offset().left + dragWidth - e.pageX,
//               containerOffset = container.offset().left,
//               containerWidth = container.outerWidth(),
//               minLeft = containerOffset + 10,
//               maxLeft = containerOffset + containerWidth - dragWidth - 10;
          
//           dragElement.parents().on("mousemove vmousemove", function(e) {
//               if( !dragging) {
//                   dragging =  true;
//                   ( !window.requestAnimationFrame )
//                       ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
//                       : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
//               }
//           }).on("mouseup vmouseup", function(e){
//               dragElement.removeClass('draggable');
//               resizeElement.removeClass('resizable');
//           });
//           e.preventDefault();
//       }).on("mouseup vmouseup", function(e) {
//           dragElement.removeClass('draggable');
//           resizeElement.removeClass('resizable');
//       });
//   }
//   function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//     var isDragging = false;
//     var touchIdentifier = null;
  
//     dragElement.on("mousedown", function(e) {
//       startDragging(e.pageX);
//     }).on("touchstart", function(e) {
//       var touch = e.originalEvent.touches[0];
//       startDragging(touch.pageX);
//       touchIdentifier = touch.identifier;
//     });
  
//     function startDragging(pageX) {
//       isDragging = true;
  
//       var dragWidth = dragElement.outerWidth(),
//         xPosition = dragElement.offset().left + dragWidth - pageX,
//         containerOffset = container.offset().left,
//         containerWidth = container.outerWidth(),
//         minLeft = containerOffset + 10,
//         maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
//       $(document).on("mousemove", function(e) {
//         if (isDragging) {
//           animateDraggedHandle(e.pageX, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth);
//         }
//       }).on("touchmove", function(e) {
//         if (isDragging) {
//           var touch = getTouchWithId(e.originalEvent.touches, touchIdentifier);
//           if (touch) {
//             animateDraggedHandle(touch.pageX, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth);
//           }
//         }
//       }).on("mouseup", function(e) {
//         stopDragging();
//       }).on("touchend", function(e) {
//         if (getTouchWithId(e.originalEvent.changedTouches, touchIdentifier)) {
//           stopDragging();
//           touchIdentifier = null;
//         }
//       });
//     }
  
//     function stopDragging() {
//       isDragging = false;
//       $(document).off("mousemove touchmove mouseup touchend");
//     }
  
//     function getTouchWithId(touches, identifier) {
//       for (var i = 0; i < touches.length; i++) {
//         if (touches[i].identifier === identifier) {
//           return touches[i];
//         }
//       }
//       return null;
//     }
  
//     function animateDraggedHandle(pageX, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth) {
//       var leftValue = pageX + xPosition - dragWidth;
//       leftValue = Math.max(leftValue, minLeft);
//       leftValue = Math.min(leftValue, maxLeft);
  
//       dragElement.offset({
//         left: leftValue
//       });
//       resizeElement.width(leftValue + dragWidth - containerOffset);
//       updateLabel(labelResizeElement, resizeElement, 'left');
//       updateLabel(labelContainer, resizeElement, 'right');
//     }
//   }

//   function updateLabel(label, resizeElement, position) {
//       if(position == 'left') {
//           ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//       } else {
//           ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//       }
//   }
// });

jQuery(document).ready(function($) {
  var dragging = false,
      scrolling = false,
      resizing = false;

  // Cache jQuery objects
  var imageComparisonContainers = $('.cd-image-container');

  // Check if the .cd-image-container is in the viewport
  // If yes, animate it
  checkPosition(imageComparisonContainers);

  $(window).on('scroll', function() {
      if (!scrolling) {
          scrolling = true;
          (!window.requestAnimationFrame)
              ? setTimeout(function() { checkPosition(imageComparisonContainers); }, 100)
              : requestAnimationFrame(function() { checkPosition(imageComparisonContainers); });
      }
  });

  // Make the .cd-handle element draggable and modify .cd-resize-img width according to its position
  imageComparisonContainers.each(function() {
      var actual = $(this);
      drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
  });

  // Update images label visibility
  $(window).on('resize', function() {
      if (!resizing) {
          resizing = true;
          (!window.requestAnimationFrame)
              ? setTimeout(function() { checkLabel(imageComparisonContainers); }, 100)
              : requestAnimationFrame(function() { checkLabel(imageComparisonContainers); });
      }
  });

  // Touch and Mouse event handling
  imageComparisonContainers.on('mousedown vmousedown touchstart', '.cd-handle', function(e) {
      var isTouch = e.type === "touchstart";
      var pageX = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;

      var dragElement = $(this);
      var resizeElement = dragElement.siblings('.cd-resize-img');
      var container = dragElement.closest('.cd-image-container');
      var labelContainer = container.find('.cd-image-label[data-type="original"]');
      var labelResizeElement = container.find('.cd-image-label[data-type="modified"]');

      var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;

      $(document).on(isTouch ? "touchmove" : "mousemove", function(e) {
          var pageXMove = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;
          if (!dragging) {
              dragging = true;
              (!window.requestAnimationFrame)
                  ? setTimeout(function() {
                      animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement, isTouch);
                  }, 100)
                  : requestAnimationFrame(function() {
                      animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement, isTouch);
                  });
          }
      }).on(isTouch ? "touchend" : "mouseup", function() {
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');

          $(document).off(isTouch ? "touchmove" : "mousemove").off(isTouch ? "touchend" : "mouseup");
      });

      e.preventDefault();
  });


  function checkPosition(container) {
      container.each(function(){
          var actualContainer = $(this);
          if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
              actualContainer.addClass('is-visible');
          }
      });

      scrolling = false;
  }

  function checkLabel(container) {
      container.each(function(){
          var actual = $(this);
          updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
          updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
      });

      resizing = false;
  }

  //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
  function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
    dragElement.on("mousedown vmousedown touchstart", function(e) {
        var isTouch = e.type === "touchstart";

        // Common logic for both mouse and touch events
        var pageX = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;

        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var dragWidth = dragElement.outerWidth(),
            xPosition = dragElement.offset().left + dragWidth - pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;

        $(isTouch ? document : window).on(isTouch ? "touchmove" : "mousemove", function(e) {
            var pageXMove = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;
            if (!dragging) {
                dragging = true;
                (!window.requestAnimationFrame)
                    ? setTimeout(function() {
                        animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement, isTouch);
                    }, 100)
                    : requestAnimationFrame(function() {
                        animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement, isTouch);
                    });
            }
        }).on(isTouch ? "touchend" : "mouseup", function() {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');

            $(isTouch ? document : window).off(isTouch ? "touchmove" : "mousemove").off(isTouch ? "touchend" : "mouseup");
        });

        e.preventDefault();
    });
}

function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement, isTouch) {
  var pageXMove = isTouch ? e.originalEvent.touches[0].pageX : e.pageX;

  var leftValue = pageXMove + xPosition - dragWidth;
  // Constrain the draggable element to move inside its container
  if (leftValue < minLeft) {
      leftValue = minLeft;
  } else if (leftValue > maxLeft) {
      leftValue = maxLeft;
  }

  var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

  $('.draggable').css('left', widthValue);

  // Update the label and width when touch/mouse ends
  $(isTouch ? document : window).on(isTouch ? "touchend" : "mouseup", function() {
      $('.draggable').removeClass('draggable');
      resizeElement.removeClass('resizable');

      $('.resizable').css('width', widthValue);

      updateLabel(labelResizeElement, resizeElement, 'left');
      updateLabel(labelContainer, resizeElement, 'right');
      dragging = false;

      $(isTouch ? document : window).off(isTouch ? "touchend" : "mouseup");
  });
}



  function updateLabel(label, resizeElement, position) {
      if(position == 'left') {
          ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
      } else {
          ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
      }
  }
});

// jQuery(document).ready(function ($) {
//   var dragging = false,
//     scrolling = false,
//     resizing = false;
  
//   var imageComparisonContainers = $('.cd-image-container');
  
//   checkPosition(imageComparisonContainers);
  
//   $(window).on('scroll', function () {
//     if (!scrolling) {
//       scrolling = true;
//       (!window.requestAnimationFrame)
//         ? setTimeout(function () { checkPosition(imageComparisonContainers); }, 100)
//         : requestAnimationFrame(function () { checkPosition(imageComparisonContainers); });
//     }
//   });

//   imageComparisonContainers.each(function () {
//     var actual = $(this);
//     drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
//   });

//   $(window).on('resize', function () {
//     if (!resizing) {
//       resizing = true;
//       (!window.requestAnimationFrame)
//         ? setTimeout(function () { checkLabel(imageComparisonContainers); }, 100)
//         : requestAnimationFrame(function () { checkLabel(imageComparisonContainers); });
//     }
//   });

//   function checkPosition(container) {
//     container.each(function () {
//       var actualContainer = $(this);
//       if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
//         actualContainer.addClass('is-visible');
//       }
//     });

//     scrolling = false;
//   }

//   function checkLabel(container) {
//     container.each(function () {
//       var actual = $(this);
//       updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
//       updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
//     });

//     resizing = false;
//   }

//   function drags(dragElement, resizeElement, container) {
//     var isDragging = false;
//     var touchIdentifier = null;

//     dragElement.on("mousedown", function (e) {
//       startDragging(e.pageX);
//     }).on("touchstart", function (e) {
//       var touch = e.originalEvent.touches[0];
//       startDragging(touch.pageX);
//       touchIdentifier = touch.identifier;
//     });

//     function startDragging(pageX) {
//       isDragging = true;

//       var dragWidth = dragElement.outerWidth(),
//         containerOffset = container.offset().left,
//         containerWidth = container.outerWidth(),
//         minLeft = containerOffset + 10,
//         maxLeft = containerOffset + containerWidth - dragWidth - 10;

//       $(document).on("mousemove", function (e) {
//         if (isDragging) {
//           animateDraggedHandle(pageX, dragWidth, minLeft, maxLeft, containerOffset, containerWidth);
//         }
//       }).on("touchmove", function (e) {
//         if (isDragging) {
//           var touch = getTouchWithId(e.originalEvent.touches, touchIdentifier);
//           if (touch) {
//             animateDraggedHandle(touch.pageX, dragWidth, minLeft, maxLeft, containerOffset, containerWidth);
//           }
//         }
//       }).on("mouseup", function (e) {
//         stopDragging();
//       }).on("touchend", function (e) {
//         if (getTouchWithId(e.originalEvent.changedTouches, touchIdentifier)) {
//           stopDragging();
//           touchIdentifier = null;
//         }
//       });
//     }

//     function stopDragging() {
//       isDragging = false;
//       $(document).off("mousemove touchmove mouseup touchend");
//     }

//     function getTouchWithId(touches, identifier) {
//       for (var i = 0; i < touches.length; i++) {
//         if (touches[i].identifier === identifier) {
//           return touches[i];
//         }
//       }
//       return null;
//     }

//     function animateDraggedHandle(pageX, dragWidth, minLeft, maxLeft, containerOffset, containerWidth) {
//       var leftValue = pageX - containerOffset;
//       leftValue = Math.max(leftValue, minLeft);
//       leftValue = Math.min(leftValue, maxLeft);

//       dragElement.offset({
//         left: leftValue
//       });
//       resizeElement.width(leftValue + dragWidth);
//       updateLabel(container.find('.cd-image-label[data-type="modified"]'), resizeElement, 'left');
//       updateLabel(container.find('.cd-image-label[data-type="original"]'), resizeElement, 'right');
//     }
//   }

//   function updateLabel(label, resizeElement, position) {
//     if (position == 'left') {
//       (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
//     } else {
//       (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
//     }
//   }
// });
