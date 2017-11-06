$('document').ready(function(){
    $('.opening').on('click', function(){
        $('.for_close').hide();
    });

    function burger(action, windowAction){
				action.click(function(){
						if(windowAction.css('display') == 'none') {
								windowAction.slideDown(300);
						}
						else {
								windowAction.slideUp(300);
						}
				});
		}
		function optionBurger(){
				let clickOpen = $('.burgerButton');
				clickOpen.css('cursor', 'pointer');
				let burgerShow = $('.burgerShow').css('display', 'none');
				burger(clickOpen, burgerShow);
		}

		function showNewsBlock(where) {
			let buttonOpenMenu = $('.openPreNews');
			var s = where.find(buttonOpenMenu);
				if(buttonOpenMenu.css('overflow') == 'hidden'){
					buttonOpenMenu.css('overflow', 'unset');
					buttonOpenMenu.css('height', 'auto');
					where.find($('.icon-arrow-forum')).css('transform', 'rotate(-90deg)');
					buttonOpenMenu.show(300);
				}
				else {
					buttonOpenMenu.css('height', '45px');
					buttonOpenMenu.css('overflow', 'hidden');
					where.find($('.icon-arrow-forum')).css('transform', 'rotate(90deg)');
				}
		}
		var click_ShowNewsBlock = $('.actionbutton-showmenu')
		click_ShowNewsBlock.click(function(){
			showNewsBlock($('.wrapper-newsfeed'));
		});

    if (optionBurger() !== undefined)
		optionBurger().click(burger());

    $('#message').click(function(){
        $(".header__box").toggle();
        $(".close-wrap").toggle();
    });
    $('.close-wrap').click(function(){
        $(".header__box").toggle();
        $(".close-wrap").toggle();
    });
    $('#inbox-list').click(function(){
        $(".inbox__list").toggle();
    });
    $('#edit-name').click(function(){
        $("#modal-name").toggle();
    });
    $('#edit-avatar').click(function(){
        $("#modal-avatar").toggle();
    });
    $('#edit-about').click(function(){
        $("#modal-about").toggle();
    });
    $('#edit-video').click(function(){
        $("#modal-video").toggle();
    });
     $('#edit-photo').click(function(){
        $("#modal-photo").toggle();
    });
      $('#edit-logo').click(function(){
        $("#modal-logo").toggle();
    });
    $('#edit-album').click(function(){
        $("#modal-album-new").toggle();
    });
    $('#edit-contacts').click(function(){
        $("#modal-contacts").toggle();
    });
   
    $('#edit-company').click(function(){
        $("#modal-company").toggle();
    });
    $('#edit-languages').click(function(){
        $("#modal-languages").toggle();
    });
    $('#edit-tags').click(function(){
        $("#modal-tags").toggle();
    }); 
    $('#media_upload').click(function(){
        $("#modal-album-upload").toggle();
    }); 

    if( $('.album__img').hasClass('locked') ){
        $('.locked .album__name').prepend( '<img src="img/lock.png" alt="" class="album__lock">' )
    }





    $('#create_albums').click(function(){
    if ( $('#modal-edit__title').val() === "" ) {  
        $('#album__title__error').html("Add a title");
        $('#album__description__error').html("Add a description");       
    }
    else{
            var myData = [];
            var title = $('#modal-edit__title').val();
            var description = $('#modal-edit__description').val();
            myData.push(title,description);
            $('#modal-edit__new_title').html('');
            $('#modal-edit__new_title').html(title);
            $('#modal-edit__new_description').html('');
            $('#modal-edit__new_description').html(description);

        
        $("#modal-album-new").hide();
        $("#modal-album-album").show();
    }

         
       
    }); 
    $('#edit_album').click(function(){
        $("#modal-album-album").hide();
        $("#modal-album-manage_album").show();
       
    }); 

    $('#add_album').click(function(){
        $("#modal-album-albums").show();
    });
 $('#bread_to_name').click(function(){
        $("#modal-album-album").show();
    });
// $('.ac_results').before('#name');

//     $('#name').autocomplete(['Женя', 'Витя', 'Гриша', 'Аня', 'Петя'], {
//         width: 200,
//         max: 3
//     });


var myObj = [
    {
        "name": 'euGene',
        "img": 'img/avatars.png',
        "userId": '0'
        
    },
    {
        "name": 'vasyA',
        "img": 'img/avatars.png',
        "userId": '1'
    },
    {
       "name": 'petya',
        "img": 'img/avatars.png',
        "userId": '2'
    }
]

$('.input__removed').keyup(function () {
     // console.log(myObj.length)
   
       
        if ($(this).val().length >3) {
             renderAutocomplete(myObj);

        }
        
    });






function renderAutocomplete(data) {
    for(var i=0; i<data.length; i++){
            var text_input = $('.input__removed').val().toUpperCase();
            var text_db = data[i].name.toUpperCase();
            // var str = 'http://www.yandex.ru';
            if(text_db.indexOf(text_input) !== -1) {
                    $( "<div class='form-edit__name_full' href='#' id='user"+data[i].userId+"'><img src='"+ data[i].img +"'><p class='form-edit__soloname'>"+ data[i].name +"</p></div>" ).prependTo( ".form-edit__names" );
            }
            $('.form-edit__names').css('display','block');   
            // var result = text_input.match(text_db);
            
            // if ( ewq.math(qwe)) {
            //     console.log('laskd');
            // }
            // if(  ){
// console.log(result)
            // };


        
            
        }
};

$('.youtube_link').change(function(){
var youLink = $('.youtube_link').val().split('=');
var finalLink = 'http://img.youtube.com/vi/'+ youLink[1] +'/0.jpg' ;

if ( (youLink[0].search('youtube') != -1) ) {
$( ".youtube_container" ).append('<div class="youtube_img_wrapper"><img  title="" alt="" src="' + finalLink + '" class="youtube_img" height="180" width="280"/><div class="youtube__cross">✖</div></div>' );
}
$('.youtube_img_wrapper').on('click', function(){
    $(this).remove();
});
});   

if($('.inbox__newmessage').outerHeight() < $('.inbox_width').outerHeight() ){
    var inbox_height = $('.inbox_width').outerHeight();
$('.inbox__newmessage').css('height',inbox_height);
}

$('#compose').click(function(){
      $('.inbox-box.inbox__allmessages').css('display','none');
       $('.inbox-box.inbox__newmessage').css('display','block');
});
$('.inbox__message').on('click', function(){
         $('.inbox-box.inbox__allmessages').css('display','block');
       $('.inbox-box.inbox__newmessage').css('display','none');

$('.section-form__btn').on("click",function(event){
event.stopPropagation();

});
});
// $('.share_brn').on('click', function(event){
// event.stopPropagation();
// $('.forma_wrapper_shares').addClass('active');
// $('.bg').fadeIn(300);
// $('.forma_wrapper2_shares').addClass('active');
// $('body').addClass('modal-open');


// $('.cross').on("click", function(){
//     $('.forma_wrapper2_shares').removeClass('active');
//   $('.forma_wrapper_shares').removeClass('active');
    
//       $('.bg').fadeOut(300);
//       $('body').removeClass('modal-open');
//       $(document).off("click");
// });
// $(document).on("click", function(){
//     $('.forma_wrapper2_shares').removeClass('active');
//   $('.forma_wrapper_shares').removeClass('active');
    
//       $('.bg').fadeOut(300);
//       $('body').removeClass('modal-open');
//       $(document).off("click");
// });
// $('#contact-wrapper_shares').on("click",function(event){
//     event.stopPropagation();
//   });

// });

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInput").change(function(){
    readURL(this);
});










$(document).on("click", function(){
   $('.form-edit__names').empty();
   $('.form-edit__names').css('display','none');
     
});
$('.form-edit__names').on("click",function(event){
event.stopPropagation();
$('.form-edit__name_full').on('click', function(){



// $(this).attr('id');
$('.form-edit__names').css('display','none');
 
var newInput = $(this).children('p').text();
// $('.input__removed').remove();
$('.input__removed').val('');
$('.input__removed').val(newInput);
// $( "<input type='text' class='form-edit__field input__removed' id='' value='"+ newInput +"' autocomplete='off'>" ).prependTo( ".main_input" );
});



  });


    

    


    $('.modal-edit__close, .modal-edit__close-text').click(function(){
        $(".modal-edit").css("display","none");
    });
    $('.dropdown__click_1').click(function(){
        var text;
        text = $(this,".dropdown__click_1").text();
        $(".dropdown__btn_inner_1").html(text);
    });
    $('.dropdown__click_share').click(function(){
        var text;
        text = $(this,".dropdown__click_1").text();
        $(".dropdown__btn_inner_share").html(text);
    });
    $('.dropdown__click_2').click(function(){
        var text;
        text = $(this,".dropdown__click_2").text();
        $(".dropdown__btn_inner_2").html(text);
    }); 
    $('.owl-carousel').owlCarousel({
        nav:true,
        navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
        center:false,
        loop:true,
        smartSpeed: 1000,
        mouseDrag: false,
        touchDrag: true,
        fluidSpeed: true,
        responsive: {
            0 : {
              items:1
            },
            768 : {
              items:3
            },
            1024 : {
                items:3
            }
        }
    });
var swiper = new Swiper('.popup .swiper-container', {
    pagination: '.popup .swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }
});
$('.popup .close_window, .overlay').click(function (){
    $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
  });
  
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27){
      $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
    }
  });

  $('a.open_window').click(function (e){
    $('.popup, .overlay').css({'opacity':'1', 'visibility':'visible'});
    // e.preventDefault();
  });





    
});

//Cropp avatar 
// transform cropper dataURI output to a Blob which Dropzone accepts
var dataURItoBlob = function (dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: 'image/jpeg'});
};

Dropzone.autoDiscover = false;
var c = 0;

var uploadbool = true;
var radiusbool = false;

if ($("form").is("#my-dropzone-container")) {
  var myDropzone = new Dropzone("#my-dropzone-container", {
    addRemoveLinks: true,
    thumbnailWidth : 290,
    thumbnailHeight : 290,
    uploadMultiple: false,
    maxFiles: 1,
    maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    init: function () {
        this.on('success', function (file) {
            var $button = $('<button  class="js-open-cropper-modal" data-file-name="' + file.name + '">Crop & Upload</button>');
            $(file.previewElement).append($button);
            if (uploadbool == true) {
            $( ".js-open-cropper-modal" ).trigger( "click" );
            uploadbool = false;
            }
            $(".dz-default").css("display","none");
            if(radiusbool == false) {
                $(".dz-image img").removeClass("dz-img-radius");
                radiusbool == true;
            }
        });
    }
});
};

if ($("form").is("#my-dropzone-container_photo")) {
var myDropzonePhoto = new Dropzone("#my-dropzone-container_photo", {
    addRemoveLinks: true,
    thumbnailWidth : 150,
    thumbnailHeight : 150,
    uploadMultiple: true,
    maxFiles: 7,
    maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    init: function () {
        this.on('success', function (file) {
            var $button = $('<button  class="js-open-cropper-modal" data-file-name="' + file.name + '">Crop & Upload</button>');
            $(file.previewElement).append($button);
            if (uploadbool == true) {
            $( ".js-open-cropper-modal" ).trigger( "click" );
            uploadbool = false;
            }
            $(".dz-default").css("display","none");
            if(radiusbool == false) {
                $(".dz-image img").removeClass("dz-img-radius");
                radiusbool == true;
            }

// alert('test');

        });
        this.on("addedfile", function(file) { 
            $('#dz-image_container').append($('.dz-preview'));
         });
    }
});
};
if ($("form").is("#my-dropzone-container_upload")) {
var myDropzoneAddPhoto = new Dropzone("#my-dropzone-container_upload", {
    addRemoveLinks: true,
    thumbnailWidth : 150,
    thumbnailHeight : 150,
    uploadMultiple: true,
    maxFiles: 15,
    maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    init: function () {
        this.on('success', function (file) {
            var $button = $('<button  class="js-open-cropper-modal" data-file-name="' + file.name + '">Crop & Upload</button>');
            $(file.previewElement).append($button);
            if (uploadbool == true) {
            $( ".js-open-cropper-modal" ).trigger( "click" );
            uploadbool = false;
            }
            $(".dz-default").css("display","none");
            if(radiusbool == false) {
                $(".dz-image img").removeClass("dz-img-radius");
                radiusbool == true;
            }
        });
        this.on("addedfile", function(file) {
            $('#dz-image_container_upload').append($('.dz-preview'));

            // $('#dz-image_container_upload .dz-preview').append($('<input type="text" id="photo_description" name="description" class="media__photo__description" placeholder="Add description...">'));
         });
    }
});
};
if ($("form").is("#my-dropzone-container_upload2")) {
var myDropzoneAddPhoto2 = new Dropzone("#my-dropzone-container_upload2", {
    addRemoveLinks: true,
    thumbnailWidth : 150,
    thumbnailHeight : 150,
    uploadMultiple: true,
    maxFiles: 15,
    maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    init: function () {
        this.on('success', function (file) {
            var $button = $('<button  class="js-open-cropper-modal" data-file-name="' + file.name + '">Crop & Upload</button>');
            $(file.previewElement).append($button);
            if (uploadbool == true) {
            $( ".js-open-cropper-modal" ).trigger( "click" );
            uploadbool = false;
            }
            $(".dz-default").css("display","none");
            if(radiusbool == false) {
                $(".dz-image img").removeClass("dz-img-radius");
                radiusbool == true;
            }

// alert('test');

        });
        this.on("addedfile", function(file) {
            $('#dz-image_container_upload2').append($('.dz-preview'));
            $('#modal-album-album .modal-edit__help_text').hide();
            // $('#dz-image_container_upload .dz-preview').append($('<input type="text" id="photo_description" name="description" class="media__photo__description" placeholder="Add description...">'));
         });
    }
});
};
if ($("form").is("#my-dropzone-container_logo")) {
var myDropzoneLogo = new Dropzone("#my-dropzone-container_logo", {
    addRemoveLinks: true,
    thumbnailWidth : 200,
    thumbnailHeight : 200,
    uploadMultiple: false,
    maxFiles: 1,
    maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    init: function () {
        this.on('success', function (file) {
            var $button = $('<button  class="js-open-cropper-modal" data-file-name="' + file.name + '">Crop & Upload</button>');
            $(file.previewElement).append($button);
            if (uploadbool == true) {
            $( ".js-open-cropper-modal" ).trigger( "click" );
            uploadbool = false;
            }
            $(".dz-default").css("display","none");
            if(radiusbool == false) {
                $(".dz-image img").removeClass("dz-img-radius");
                radiusbool == true;
            }

// alert('test');

        });
       
    }
});
};
if ($("form").is("#my-dropzone-container_newimg")) {
var myDropzoneNewImg = new Dropzone("#my-dropzone-container_newimg", {
    addRemoveLinks: true,
    thumbnailWidth : 200,
    thumbnailHeight : 200,
    uploadMultiple: false,
    maxFiles: 1,
    maxfilesexceeded: function(file) {
        this.removeAllFiles();
        this.addFile(file);
    },
    init: function () {
        this.on('success', function (file) {
            var $button = $('<button  class="js-open-cropper-modal" data-file-name="' + file.name + '">Crop & Upload</button>');
            $(file.previewElement).append($button);
            if (uploadbool == true) {
            $( ".js-open-cropper-modal" ).trigger( "click" );
            uploadbool = false;
            }
            $(".dz-default").css("display","none");
            if(radiusbool == false) {
                $(".dz-image img").removeClass("dz-img-radius");
                radiusbool == true;
            }

// alert('test');

        });
       
    }
});

};



$('#my-dropzone-container').on('click', '.js-open-cropper-modal', function (e) {
    e.preventDefault();
    var fileName = $(this).data('file-name');

    var modalTemplate =
        '<div class="modal fade" tabindex="-1" role="dialog">' +
        '<div class="modal-dialog modal-lg modal-box" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title">Crop</h4>' +
        '</div>' +
        '<div class="modal-body">' +
        '<div class="image-container">' +
        '<img id="img-' + ++c + '" src="uploads/' + fileName + '">' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-primary crop-upload">Save</button>' +
        '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    var $cropperModal = $(modalTemplate);

    $cropperModal.modal('show').on("shown.bs.modal", function () {
        var cropper = new Cropper(document.getElementById('img-' + c), {
            autoCropArea: 1,
            movable: false,
            cropBoxResizable: true,
            repsponsive: true,
            aspectRatio: 1 / 1,
            rotatable: true
        });
        var $this = $(this);
        $this
            .on('click', '.crop-upload', function () {
                // get cropped image data
                var blob = cropper.getCroppedCanvas().toDataURL();
                // transform it to Blob object
                var croppedFile = dataURItoBlob(blob);
                croppedFile.name = fileName;

                var files = myDropzone.getAcceptedFiles();
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (file.name === fileName) {
                        myDropzone.removeFile(file);
                    }
                }
                myDropzone.addFile(croppedFile);
                $(".dz-image img").addClass("dz-img-radius");
                radiusbool = true;
                $this.modal('hide');
            })
            .on('click', '.rotate-right', function () {
                cropper.rotate(90);
            })
            .on('click', '.rotate-left', function () {
                cropper.rotate(-90);
            })
            .on('click', '.reset', function () {
                cropper.reset();
            })
            .on('click', '.scale-x', function () {
                var $this = $(this);
                cropper.scaleX($this.data('value'));
                $this.data('value', -$this.data('value'));
            })
            .on('click', '.scale-y', function () {
                var $this = $(this);
                cropper.scaleY($this.data('value'));
                $this.data('value', -$this.data('value'));
            });
    });
});