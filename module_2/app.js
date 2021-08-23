let hotels = {
    JUNCO:{
        name:"Junco",
        location:"Almería",
        img:"img/hotel.png"
    },
    LUNA:{
        name:"Luna",
        location:"Málaga",
        img:"img/hotel.png"
    },
    BLANCO:{
        name:"Blanco",
        location:"Granada",
        img:"img/hotel.png"
    }
}

let selectedHotel = prompt(
    "Indique hotel sobre el que quiere hacer la reseña: Junco, Luna o Blanco",
  ).toUpperCase();

document.getElementById("name-hotel").innerHTML = "Hotel " + hotels[selectedHotel].name;
document.getElementById("location-hotel").innerHTML =
  "Ubicado en " + hotels[selectedHotel].location;
document.getElementById("img-hotel").src = hotels[selectedHotel].img;



const stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

let rating = prompt("Otorga tu puntuación: una, dos, tres, cuatro o cinco estrellas");

document.getElementById("rating").innerHTML = stars[rating];


let anonymous = confirm("¿Quieres realizar una reseña anónima?");

document.getElementById("anonymous").checked = anonymous;

