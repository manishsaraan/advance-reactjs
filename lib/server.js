import express from 'express';
import config from './config';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(config.PORT, () => {
	console.log(`App running on ${config.PORT}`);
});