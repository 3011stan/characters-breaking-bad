const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT || 3000}`));