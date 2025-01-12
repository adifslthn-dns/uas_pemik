import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(cors());


const users = [
  {
    username: "admin",
    password: "password123",
    token: "admin-token",
  },
  {
    username: "user",
    password: "userpassword",
    token: "user-token",
  },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username dan password wajib diisi." });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return res.status(200).json({
      message: "Login berhasil.",
      token: user.token,
    });
  } else {
    return res.status(401).json({ message: "Username atau password salah." });
  }
});


app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
