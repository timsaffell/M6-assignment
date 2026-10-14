window.addEventListener("load", () => {
    const form = document.getElementById("empForm");
    const getValue = (id) => document.getElementById(id).value;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("ID: " + getValue("id"));
        console.log("Name: " + getValue("name"));
        console.log("Extension: " + getValue("ext"));
        console.log("Email: " + getValue("email"));
        console.log("Department: " + getValue("department"));
    });
});