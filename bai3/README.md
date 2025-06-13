# Desserts of the World - Hướng dẫn sử dụng

Đây là một trang web đơn giản giới thiệu các món tráng miệng nổi tiếng trên thế giới, sử dụng HTML và CSS.

## Cách sử dụng

1. **Đảm bảo các file sau nằm trong cùng thư mục `bai3/`:**

   - `index.html` (file trang web chính)
   - `style.css` (file định dạng giao diện)
   - `rasmalai.jpg`, `pie.jpg`, `brigadeiro.jpg`, `tangyuan.jpg` (các hình ảnh món ăn)

2. **Mở trang web:**

   - Nhấp đúp vào file `index.html` hoặc mở bằng trình duyệt web bất kỳ.

3. **Kết quả:**
   - Trang web sẽ hiển thị tiêu đề "Desserts of the World" và thông tin về 4 món tráng miệng, mỗi món có hình ảnh, tên, xuất xứ và mô tả.

## Lưu ý

- Nếu hình ảnh không hiển thị, hãy kiểm tra lại tên file ảnh và đảm bảo chúng nằm đúng vị trí.
- Có thể chỉnh sửa giao diện bằng cách thay đổi file `style.css`.

---

## Phân tích chi tiết các thuộc tính trong `style.css`

### body

- `background-color: lightblue;`  
  Đặt màu nền của toàn bộ trang web là màu xanh nhạt.

### h1

- `font-family: sans-serif;`  
  Sử dụng font chữ không chân (sans-serif) cho tiêu đề lớn nhất, giúp chữ rõ ràng, hiện đại.

### h2

- `font-family: sans-serif;`  
  Áp dụng font chữ không chân cho tiêu đề cấp 2 (tên món ăn), đồng bộ với h1.

### img

- `float: left;`  
  Hình ảnh sẽ nằm về phía bên trái, các phần tử khác (như văn bản) sẽ bao quanh bên phải.
- `width: 250px;`  
  Đặt chiều rộng hình ảnh cố định là 250 pixel, đảm bảo kích thước đồng đều.
- `margin: 10px;`  
  Tạo khoảng cách 10 pixel ở tất cả các phía xung quanh hình ảnh, tránh dính sát vào các phần tử khác.
- `border-color: saddlebrown;`  
  Đặt màu viền hình ảnh là nâu đất, tạo điểm nhấn.
- `border-width: 4px;`  
  Độ dày viền là 4 pixel, giúp viền nổi bật hơn.
- `border-style: solid;`  
  Kiểu viền là đường liền nét.
- `border-radius: 10px;`  
  Bo tròn các góc viền với bán kính 10 pixel, giúp hình ảnh mềm mại hơn.

### p

- `text-align: left;`  
  Căn lề trái cho toàn bộ đoạn văn bản, giúp dễ đọc.
- `font-family: fantasy;`  
  Sử dụng font chữ kiểu fantasy (trang trí), tạo cảm giác vui nhộn, phù hợp với chủ đề món tráng miệng.
- `font-size: 14px;`  
  Đặt cỡ chữ đoạn văn là 14 pixel, đảm bảo dễ đọc trên màn hình.

---
