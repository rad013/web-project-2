window.onload = () => {
 
  const cards = document.querySelectorAll(".card");
  console.log(cards); 

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {

      console.log("Redirect");
      const clickedCard = event.currentTarget;

      const cardData = getCardData(clickedCard);

      window.location.href = `../Html/PromoDetail.html?data=${JSON.stringify(
        cardData
      )}`;
    });
  });


  function getCardData(card) {
 
    const cardImage = card.querySelector("img");


    const cardImageSrc = cardImage.src;
    const cardDescription = cardImage.dataset.description;


    return {
      src: cardImageSrc,
      description: cardDescription,
    };
  }
};

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
