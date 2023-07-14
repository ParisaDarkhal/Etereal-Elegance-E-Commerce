export default function handler(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://eternal-elegance-app.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    // Handle preflight requests
    res.status(200).end();
    return;
  }

  // Process the actual request
  // Add your server logic here

  res.status(200).json({ message: "Success" });
}
