import express from 'express';

import renderer from './helper/renderer';

const PORT = process.env.PORT || 3006;
const app = express();

/* Not load index.html */
app.use(express.static('./build', { index: false }));

app.get('*', (req, res) => {
  return res.send(renderer(req));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
