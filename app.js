import app from "./server";  

app.set("port", process.env.PORT || 5001);
const server = app.listen(app.get("port"), () => {
    console.log(`Server started, running and listening on port ${server.address().port}`);
});
