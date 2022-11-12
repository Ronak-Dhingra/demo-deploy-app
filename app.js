const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Team 10 - Playbook");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});