// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public")); //This is to allow us to use the images and the CSS styling.

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");//this URL comes from the Secrets API documentation.
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username,
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500); //This will indicate if something went wrong in our server.
    }

});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret. 

//(See code above!)


// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

