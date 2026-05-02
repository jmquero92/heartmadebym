import os
import time
from PIL import Image, ImageOps, ImageFile
from pillow_heif import register_heif_opener

# Registrar soporte HEIF
register_heif_opener()
ImageFile.LOAD_TRUNCATED_IMAGES = True

directorio = './public'
extensiones_origen = ('.jpg', '.jpeg', '.png', '.heic', '.JPG', '.HEIC')

print("🚀 Intento de rescate de imágenes...")

for archivo in os.listdir(directorio):
    if archivo.startswith('.'): continue
    
    nombre, extension = os.path.splitext(archivo)
    if extension in extensiones_origen:
        ruta_entrada = os.path.join(directorio, archivo)
        ruta_salida = os.path.join(directorio, f"{nombre}.webp")

        try:
            # Pausa mínima para soltar bloqueos del sistema
            time.sleep(0.1)
            
            # Intentamos abrir sin especificar formato
            img = Image.open(ruta_entrada)
            
            # Forzamos la carga de datos para ver si realmente es legible
            img.load() 
            
            img = ImageOps.exif_transpose(img)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGBA")
            else:
                img = img.convert("RGB")

            img.save(ruta_salida, 'webp', optimize=True, quality=80)
            img.close() # Cerramos explícitamente
            
            print(f"✅ Rescatada y Convertida: {archivo}")
            os.remove(ruta_entrada)

        except Exception as e:
            print(f"❌ Imposible leer {archivo} con Python. Error: {e}")
            # NO LO BORRAMOS esta vez para que puedas revisarlos