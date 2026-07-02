# Portfolio de El Mustapha El Mojahid - Chatbot IA Interactif (RAG)

Ce projet comprend un portfolio web moderne avec une console interactive connectée à un véritable chatbot basé sur l'API Google Gemini (modèle `gemini-1.5-flash`).

## Fonctionnement du Chatbot

La console interactive utilise une architecture hybride :
1. **Mode Connecté (LLM de Production)** : Le frontend interroge le serveur proxy local `/api/chat` (développé en FastAPI) qui communique de façon sécurisée avec l'API Gemini en lui fournissant le contexte complet du CV.
2. **Mode Hors-ligne (Fallback local)** : Si le serveur de chatbot n'est pas démarré ou si la clé API n'est pas configurée, le système bascule automatiquement sur un moteur de recherche sémantique local (côté client) pour répondre précisément et instantanément aux questions clés sur son parcours.

## Démarrage Local

Pour lancer le portfolio avec le chatbot IA actif :

### 1. Installer les dépendances
Installez les bibliothèques requises répertoriées dans `requirements.txt` :
```bash
pip install -r requirements.txt
```

### 2. Configurer la clé API Gemini
Obtenez une clé API gratuite sur [Google AI Studio](https://aistudio.google.com/) et exportez-la comme variable d'environnement :

* **Sur Windows (PowerShell)** :
  ```powershell
  $env:GEMINI_API_KEY="VOTRE_CLE_API"
  ```
* **Sur Windows (CMD)** :
  ```cmd
  set GEMINI_API_KEY=VOTRE_CLE_API
  ```
* **Sur Linux / macOS** :
  ```bash
  export GEMINI_API_KEY="VOTRE_CLE_API"
  ```

### 3. Démarrer le serveur FastAPI
Lancez le serveur d'applications :
```bash
uvicorn app:app --reload
```

Le portfolio sera accessible à l'adresse suivante : **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**.

Vous pouvez poser n'importe quelle question sur le parcours d'El Mustapha (ex: *"Quelles sont ses compétences en NLP ?"*, *"Où a-t-il étudié ?"*, etc.) et l'IA y répondra précisément en se basant sur le CV.
