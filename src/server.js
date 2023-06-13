const express = require("express");

const app = express();

app.get("/teste/:id/:user", (request, response) => {
  const { id, user } = request.params;
  response.send(`
    Id da mensagem ${id}
    Para o Usuário ${user}
  `);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
