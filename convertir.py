import os
from PIL import Image

directorio = './public'

print("Procesando imágenes, por favor espera...")

# Recorremos todos los archivos de la carpeta public
for archivo in os.listdir(directorio):
    nombre, extension = os.path.splitext(archivo)
    extension = extension.lower()

    # Filtramos las imágenes que queremos convertir
    if extension in ['.webp', '.webp', '.webp']:
        ruta_entrada = os.path.join(directorio, archivo)
        ruta_salida = os.path.join(directorio, f"{nombre}.webp")

        try:
            # Abrimos la imagen original
            img = Image.open(ruta_entrada)
            
            # Nos aseguramos de que el modo de color sea compatible
            if img.mode not in ('RGB', 'RGBA'):
                img = img.convert('RGBA')

            # Guardamos la imagen en formato WebP con calidad optimizada
            img.save(ruta_salida, 'webp', optimize=True, quality=80)
            print(f"✅ Convertido: {archivo} -> {nombre}.webp")
            
        except Exception as e:
            print(f"❌ Error al convertir {archivo}: {e}")

print("¡Proceso completado!")