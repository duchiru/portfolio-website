---
layout: ../../layouts/ProjectLayout.astro
title: Phát triển kỹ năng viết prompt cho LLM trong học tập
---

# PHÁT TRIỂN KỸ NĂNG VIẾT PROMPT CHO LLM TRONG HỌC TẬP

## 1. Phân tích mục tiêu và lựa chọn tác vụ

Trong bối cảnh học thuật hiện đại, việc sử dụng Mô hình ngôn ngữ lớn (LLM) không chỉ dừng lại ở việc tra cứu thông tin mà là một quá trình tương tác tư duy. Để đạt hiệu quả cao nhất, báo cáo này tập trung vào **3 tác vụ cốt lõi**:

1. **Tóm tắt tài liệu học thuật:** Giúp chắt lọc kiến thức từ các bài báo dài.
2. **Giải thích khái niệm phức tạp:** Chuyển đổi kiến thức trừu tượng thành ngôn ngữ dễ hiểu.
3. **Tạo bộ câu hỏi ôn tập:** Tự kiểm tra và củng cố kiến thức (Active Recall).

## 2. Xây dựng và Thử nghiệm Prompt

### 2.1 Tác vụ 1: Tóm tắt tài liệu học thuật
* **Prompt Cơ bản:** "Tóm tắt bài viết này cho tôi."
* **Prompt Cải tiến:** "Hãy tóm tắt bài viết sau đây trong khoảng 300 từ. Tập trung vào phương pháp nghiên cứu và kết quả chính. Trình bày dưới dạng danh sách gạch đầu dòng."
* **Prompt Nâng cao (Role Play + Chain-of-Thought):** "Bạn là một chuyên gia phân tích dữ liệu học thuật. Hãy đọc văn bản dưới đây và thực hiện theo các bước: 1. Liệt kê các luận điểm chính. 2. Phân tích điểm mạnh yếu của phương pháp. 3. Viết một bản tóm tắt dành cho sinh viên đại học. Hãy suy nghĩ từng bước một để đảm bảo không bỏ sót ý chính."

### 2.2 Tác vụ 2: Giải thích khái niệm phức tạp (Lý thuyết trò chơi)
* **Prompt Cơ bản:** "Lý thuyết trò chơi là gì?"
* **Prompt Cải tiến:** "Giải thích khái niệm 'Cân bằng Nash' trong Lý thuyết trò chơi. Sử dụng ví dụ thực tế để minh họa và so sánh với trạng thái không cân bằng."
* **Prompt Nâng cao (Feynman Technique + Analogies):** "Hãy đóng vai một giáo sư đại học có khả năng giải thích mọi thứ cực kỳ đơn giản. Hãy giải thích 'Cân bằng Nash' cho một học sinh 12 tuổi. Sử dụng một câu chuyện ẩn dụ (như hai bạn nhỏ chia kẹo). Cuối cùng, hãy đưa ra một bài tập nhỏ để kiểm tra xem tôi đã hiểu chưa."

### 2.3 Tác vụ 3: Tạo câu hỏi ôn tập
* **Prompt Cơ bản:** "Tạo 5 câu hỏi trắc nghiệm về lịch sử Việt Nam."
* **Prompt Cải tiến:** "Tạo 5 câu hỏi trắc nghiệm về giai đoạn 1945-1954 của Việt Nam. Mỗi câu có 4 đáp án, có cung cấp đáp án đúng và giải thích ngắn gọn tại sao."
* **Prompt Nâng cao (Few-shot + Bloom's Taxonomy):** "Tôi đang ôn thi môn Lịch sử. Hãy tạo bộ câu hỏi dựa trên các mức độ nhận thức của Bloom (Thông hiểu, Vận dụng, Phân tích). Ví dụ mẫu: - Câu hỏi phân tích: Tại sao chiến dịch Điện Biên Phủ lại là bước ngoặt? Hãy tạo tiếp 3 câu hỏi tương tự cho chủ đề Hiệp định Geneve 1954 kèm lời giải chi tiết."

## 3. So sánh và Phân tích hiệu quả

| Tiêu chí | Prompt Cơ bản | Prompt Cải tiến | Prompt Nâng cao |
| :--- | :--- | :--- | :--- |
| **Độ chính xác** | Trung bình, dễ lạc đề. | Cao, tập trung đúng trọng tâm. | Rất cao, có chiều sâu. |
| **Định dạng** | Văn bản thuần, khó theo dõi. | Có cấu trúc (bullet points). | Chuyên nghiệp, dễ học tập. |
| **Khả năng hiểu** | Hời hợt, định nghĩa từ điển. | Rõ ràng, có ví dụ. | Trực quan, cá nhân hóa cao. |

*Bảng 1: Bảng so sánh kết quả giữa các mức độ Prompt*

## 4. Lý do Prompt nâng cao hiệu quả hơn

Tổng hợp các yếu tố có thể ảnh hưởng đến chất lượng prompt:

* **Context (Bối cảnh):** Việc thiết lập vai diễn (Role-playing) giúp AI giới hạn không gian tri thức và chọn lọc ngôn từ phù hợp.
* **Constraint (Ràng buộc):** Các giới hạn về độ dài, định dạng giúp đầu ra sạch sẽ và có thể sử dụng ngay.
* **Chain-of-Thought:** Yêu cầu AI "suy nghĩ từng bước" giúp giảm thiểu hiện tượng "ảo giác" (hallucination) và tăng tính logic.

Prompt nâng cao bao gồm đủ các yếu tố trên, cung cấp cho AI đủ các thông tin cần thiết để tổng hợp thông tin và ra quyết định.

## 5. Kết luận

Dựa trên thử nghiệm, ta có một bộ nguyên tắc **S.P.E.C.I.A.L**:

* **S (Specific):** Càng cụ thể càng tốt.
* **P (Persona):** Giao vai diễn cho AI.
* **E (Example):** Cung cấp ví dụ (Few-shot prompting).
* **C (Context):** Cung cấp đủ thông tin nền.
* **I (Iterative):** Tinh chỉnh prompt dựa trên phản hồi đầu tiên.
* **AL (Algorithm):** Yêu cầu AI suy nghĩ theo quy trình logic.

**Kỹ thuật Prompt Engineering không chỉ là việc đặt câu hỏi, mà là nghệ thuật điều phối dòng tư duy của AI.** Việc áp dụng các kỹ thuật nâng cao giúp tiết kiệm 70% thời gian biên tập lại nội dung và tăng đáng kể chất lượng tài liệu học tập.