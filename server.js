const {PORT} = require("./config")
const app=require("./app")

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ` + PORT)
})

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
