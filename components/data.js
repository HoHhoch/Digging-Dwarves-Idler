import Mountain from "./Mountain.js";

// We'll want to read this from some type of save, like a json or something,
// So the data doesn't get reset with the browser every time.
const mountain = new Mountain(
    "../../assets/images/OIP.jpg", 
    "This is a mountain", 
    0, 
    0,
);

export default mountain;