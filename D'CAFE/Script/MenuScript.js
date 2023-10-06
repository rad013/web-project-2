window.onload = () => {
    
    const cards = document.querySelectorAll(".menu_button");
    console.log(cards); 
  
    
    cards.forEach((menu_button) => {
      menu_button.addEventListener("click", (event) => {
  
        console.log("Redirect");
        const clickedCard = event.currentTarget;
  
        const cardData = getCardData(clickedCard);
  
        window.location.href = `../Html/MenuDetail.html?data=${JSON.stringify(
          cardData
        )}`;
      });
    });
  
    function getCardData(menu_button) {
 
      const cardImage = menu_button.querySelector("img");
  
     
      const cardImageSrc = cardImage.src;
      const cardDescription1 = cardImage.dataset.description1;
      const cardDescription2 = cardImage.dataset.description2;
      const cardDescription3 = cardImage.dataset.description3;
  

      return {
        src: cardImageSrc,
        description1: cardDescription1,
        description2: cardDescription2,
        description3: cardDescription3,
      };
    }
  };