
var entries = document.getElementsByClassName("my-work-entry");
var i;

for (i = 0; i < entries.length; i++) {
    
    entries[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;
        if (content.style.display === "block") content.style.display = "none";
        else content.style.display = "block";
    });
}
