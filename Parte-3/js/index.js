$(document).ready(function () {
    $('#formComment').submit(function (e) { 
        e.preventDefault();
        let name = $('.userName').val();
        let comment = $('#userComment').val();
    
        if(name == '' || name == null || name == ' ' || name === undefined){
            window.alert('Error in the Name field.');
        } 
        if(comment == '' || comment == null || comment == ' ' || comment === undefined){
            window.alert('Error in the Comment field.');
        }else{
            postComment(name, comment);
        }
    });
});

function postComment(userName, comment) {
    $('.seccionComments').append('<h4 class="user-name">'+userName+'</h4>').append('<p class="comment">'+comment+'</p>');
}