var img1 = document.getElementById('img1');

function createModal_old(e) {
	// création des nouveaux éléments html
	var modal = document.createElement('div');
	var modalContent = document.createElement('div');
	var closeBtn = document.createElement('span');
	var modalImage = document.createElement('div');
	var modalImageContainer = document.createElement('div');


	// création de la partie droite du modal **MCT**
	var modalContentText = document.createElement('div');
	var mctHead = document.createElement('div');
	var mctLike = document.createElement('div');
	var mctUserComment = document.createElement('div');
	var mctComments = document.createElement('div');
	var mctAddComment = document.createElement('div');

	var mctAvatar = document.createElement('img');
	var mctNameLink = document.createElement('a');
	var mctName = document.createElement('p');
	var mctSubscribe = document.createElement('button');

	var mctNumLike = document.createElement('p');
	var mctLikeCount = document.createElement('span');
	var mctDate = document.createElement('p');

	var mctNameLink2 = document.createElement('a');
	var mctName2 = document.createElement('p');
	var mctUserText = document.createElement('p');

	// toute la partie commentaires

	var mctLikeBtn = document.createElement('button');
	var mctLikeImg = document.createElement('i');
	var mctTextComment = document.createElement('input');

	// Les trois petits points (si on veut)

	// ajout des attributs et textes
	modal.setAttribute('class', 'modal-picture');
	modalContent.setAttribute('class', 'modal-picture-content');
	closeBtn.textContent = "x";
	closeBtn.setAttribute('class', 'close');

	// ajout des attributs et des textes **MCT**
	modalContentText.setAttribute('class', 'modalContentText');
	mctHead.setAttribute('class','modalContent-head');
	mctAvatar.setAttribute('src', 'img/gmag.jpg');
	mctAvatar.setAttribute('class', 'modal-avatar');
	mctName.textContent = "g";
	mctName2.textContent = "g";
	mctNameLink.setAttribute('href', '#');
	mctNameLink2.setAttribute('href', '#');
	mctSubscribe.textContent = "S'ABONNER";
	mctSubscribe.setAttribute('class', 'subscribe-btn');

	mctLike.setAttribute('class', 'mct-like');

	mctUserText.textContent = "Lorem ipsum dolor sic amet";

	mctTextComment.setAttribute('placeholder', 'Ajouter un commentaire...');






	// récupérer l'image
	var imgSrc = e.target.getAttribute('src');
	modalImage.style.backgroundImage = "url("+imgSrc+")";
	modalImage.setAttribute('class', 'modal-picture-image');

	// phase d'ajout **MCT**
	modalContentText.appendChild(mctHead);
	modalContentText.appendChild(mctLike);
	modalContentText.appendChild(mctUserComment);
	modalContentText.appendChild(mctComments);
	modalContentText.appendChild(mctAddComment);

	mctHead.appendChild(mctAvatar);
	mctHead.appendChild(mctNameLink);
	mctHead.appendChild(mctSubscribe);

	mctNameLink.appendChild(mctName);

	mctLike.appendChild(mctNumLike);
	mctLike.appendChild(mctDate);

	mctNumLike.appendChild(mctLikeCount);

	mctUserComment.appendChild(mctNameLink2);
	mctUserComment.appendChild(mctUserText);

	mctNameLink2.appendChild(mctName2);

	mctAddComment.appendChild(mctLikeBtn);
	mctAddComment.appendChild(mctTextComment);

	mctLikeBtn.appendChild(mctLikeImg);

	



	// phase d'ajout des éléments crées au document HTML
	modalImageContainer.appendChild(modalImage);
	modalContent.appendChild(modalImageContainer);
	modalContent.appendChild(modalContentText);
	modal.appendChild(modalContent);
	modal.appendChild(closeBtn);
	document.getElementById('body').appendChild(modal);
	//Quand l'utilisateur click en dehors de l'image, la fermer

	modal.addEventListener('click',function(event){
		if (event.target ==  modal) {
			modal.style.display = "none";
		}
	});

	//quand on clique sur la croix, le modal se ferme.
	closeBtn.addEventListener('click',function(){
		modal.style.display = "none";
	});
	
}
// **********************************************************************************************


$("#fenetre").hide();

$('#closeBtn').css('cursor', 'pointer');

$("#closeBtn").click(function () {
	 $("#fenetre").hide();
});

function createModal(id) {        //  photo12.jpg ==>  ' url("img/img12.jpg")  '
	$("#fenetreImg").css("background-image", 'url("img/img'+id.substring(5)+'.jpg")');  
	$("#fenetre").show();
}

$(".main-photos-container-photos").click(function() {
	 //console.log ($(this).attr("id")) ; 
	 createModal($(this).attr("id")); 
	} ) ;
var count = 0;
$("#nb_jaime").html(count);
// quand on clique sur le coeur
$("#jaime").click(function () {
	$(this).removeClass("fa-heart-o");
	$(this).addClass("fa-heart");
	 count++;
	 $("#nb_jaime").html(count);
});

// quand j'appuie sur entree et que le commentaire différent de blanc
$('#commentaire').keypress(function(event){
	if(event.keyCode == '13'){
		$("#messages").append("<li>"+ "<strong>@totolatulipe</strong>" +$("#commentaire").val() +"</li>");
		$("#commentaire").val("");	
	}

});




//img1.addEventListener('click', createModal);

