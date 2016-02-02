function hello() {
    console.log("Hello " + this.name);
}
var name = "glolbal";

hello(); // Hello glolbal

// Todo: Skapa några olika objekt och använd dem som kontext för funktionen hello
// på tre olika sätt: Implicit, explicit och hård bindning.

// Vad händer om du binder en funktion flera gånger?

// Vad händer om du sätter new framför funktionsanropet?
