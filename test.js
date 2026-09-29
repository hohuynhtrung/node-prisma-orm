require("dotenv").config();
require("module-alias/register");

const aiService = require("@/services/ai.service");

async function main() {
  console.log("Đang gửi request tới Gemini...");
  const prompt = `Tạo thumpnail cho thương hiệu brand sau:"Tôi muốn khởi nghiệp bán sản phẩm quần đùi, áo khoác, áo thun,... chủ yếu là đồ mặc. tạo thương hiệu hiện đại, sạch sẽ, phong cách, kiểu genz hiện nay."`;
  const output = await aiService.generateImage(prompt);
  console.log(output);
}

main().catch((err) => {
  console.error("Lỗi khi chạy main:", err);
});
