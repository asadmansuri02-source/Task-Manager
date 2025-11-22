console.log (window);

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("LoggedIn")){
        console.log("hello");
        window.Location.href= "login.html";
        return;
    }
});