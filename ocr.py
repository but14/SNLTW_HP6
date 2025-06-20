import pytesseract
from PIL import Image

# Chỉ định đường dẫn tới tesseract.exe (nếu chưa thêm vào PATH)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Đường dẫn ảnh cần nhận diện (dùng raw string để tránh lỗi escape)
image_path = r"D:\TEKY\snltw_hp6\z6713065942808_6390c682cae4e8ccef7905b1cede54e4.jpg"

# Mở ảnh
image = Image.open(image_path)

# Nhận diện văn bản (lang='vie' cho tiếng Việt, bỏ nếu nhận diện tiếng Anh)
text = pytesseract.image_to_string(image, lang='vie')

print(text)