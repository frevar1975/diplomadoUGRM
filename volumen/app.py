from flask import Flask, request  # Importar 'request' aquí
import os

app = Flask(__name__)

# Asegurarse de que el directorio de logs existe
if not os.path.exists('/app/logs'):
    os.makedirs('/app/logs')

# Función para registrar cada solicitud
def log_request(req):
    with open('/app/logs/access.log', 'a') as log:
        log.write(f"{req.method} {req.path}\n")

@app.route('/')
def index():
    log_request(request)  # 'request' está disponible ahora
    return "Hello, World!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


