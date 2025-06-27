from PIL import Image
import pytesseract

# Đường dẫn đến hình ảnh của bạn
image_path = 'path_to_your_image.png'

# Mở hình ảnh
image = Image.open(image_path)

# Sử dụng Tesseract để trích xuất văn bản
text = pytesseract.image_to_string(image, lang='vie')  # Sử dụng 'vie' cho tiếng Việt

# Hiển thị văn bản đã trích xuất
print(text)

