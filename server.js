const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const LINKS = {
  "Bihar Police Constable 2026": "https://csbc.bih.nic.in/",
  "RRB NTPC 2026": "https://rrbapply.gov.in/",
  "SSC GD 2026": "https://ssc.gov.in/",
  "IIT JEE 2026": "https://jeemain.nta.nic.in/",
  "Lekhpal UPSSSC Meja": "https://upsssc.gov.in/"
};

app.post('/fill', (req, res) => {
  const form = req.body.formType;
  const url = LINKS[form] || "https://rrbapply.gov.in/";
  res.json({ ok: true, officialUrl: url });
});

app.get('/', (req, res) => res.send('ANANTAPUR XPRESS BHARAT BACKEND LIVE 🇮🇳'));

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => console.log('live'));
