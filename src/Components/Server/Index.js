const express = require("express")
const PORT = process.env.PROT || 3000;


const app = express();

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
    