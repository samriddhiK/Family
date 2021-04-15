var images = 
["IMG_5494.jpg";
"WhatsApp image 2021-04-07 at 20.44.07.jpeg"];
var names =
["Me and Sisy", "Aarush", "kaira"];

var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 3
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
