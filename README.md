# Binance Traderat App

## Setup serveur et dépendances sous Windows 10

Aller dans le dossier du serveur flask
```cd server```

Créer l'environnement virtuel .venv
```python -m venv .venv```

Activer le .venv
```.venv\Scripts\activate```

Mettre à jour pip
```python -m pip install --upgrade pip```

Installer les dépendances
```pip install flask gunicorn python-binance python-dotenv```

(Optionnel) accéder à la liste des dépendances
```pip list```

Générer un requirements.txt réutilisable et aux normes pour réutilisation éventuelle
```pip freeze > requirements.txt```

### Lancer le serveur flask

```npm run start-server```

### Lancer la react app

```npm start```