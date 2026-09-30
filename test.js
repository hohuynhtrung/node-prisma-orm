require("dotenv").config();
require("module-alias/register");
const aiService = require("@/services/ai.service");

(async () => {
  try {
    console.log("Bắt đầu gọi AI...");
    const output = await aiService.streamText(
      "Làm một bài thơ 4-5 khổ, thể loại 6-8, chủ đề về dev chăm chỉ",
    );
    console.log("Output:", output);
  } catch (error) {
    console.error("Lỗi:", error);
  }
})();
