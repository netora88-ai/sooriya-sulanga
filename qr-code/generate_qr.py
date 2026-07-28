import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer

url = "https://www.sooriyasulanga.com/#ratings"

qr = qrcode.QRCode(
    version=2,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=2,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=RoundedModuleDrawer(),
    fill_color="black",
    back_color="white",
)

img.save("sooriyasulanga-ratings-qr.png")
print("QR code saved to qr-code/sooriyasulanga-ratings-qr.png")
