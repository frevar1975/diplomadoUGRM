# script.py
import sys

for line in sys.stdin:
    print(f"Recibido: {line.strip()}")
    break  # Solo queremos una línea en este ejemplo
