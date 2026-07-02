import os
import requests
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI(title="El Mustapha El Mojahid - Portfolio Backend")

# Enable CORS for local testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

# Local Knowledge Base of El Mustapha El Mojahid
CV_CONTEXT = """
Nom: El mustapha El MOJAHID
Profil: AI Engineer | LLM & Computer Vision | MLOps & Scalable Systems
Email: elmustapha.elmojahid@gmail.com
Téléphone: +212 649 086404
Localisation: Rabat, Maroc
LinkedIn: https://www.linkedin.com/in/el-mustapha-el-mojahid-8613341b0/?skipRedirect=true
GitHub: https://github.com/Elmojahid

Compétences Techniques:
- AI & Machine Learning: Deep Learning (CNNs, RNNs, LSTMs, Transformers, Transfer Learning), Computer Vision (Inférence temps réel, optimisation, déploiement), TensorFlow, Keras, Scikit-learn, OpenCV.
- Data Engineering & Databases: Apache Spark, Kafka, SQL Server, MongoDB.
- LLM Engineering & Generative AI: RAG Pipelines, Prompt Engineering, LangChain, LangGraph, bases vectorielles (ChromaDB, Weaviate), Embeddings.
- MLOps & Déploiement: FastAPI, Docker, CI/CD, Quantification de modèles (FP16/INT8), Inférence GPU, Microservices.
- Développement logiciel: Python (Pandas, NumPy), C, C#, .NET Core, React.js, Next.js.
- Langues: Arabe (maternelle), Français (courant), Anglais (professionnel B2).

Parcours professionnel (Chronologie inverse) :
1. MaghrebIT (Déc. 2025 - Présent, 7 mois) - Fondateur & Ingénieur IA / Full Stack.
   - Solutions IA et web de bout en bout (.NET Core, ASP.NET, React/Next.js, MongoDB/SQL).
   - Intégration IA (RAG search, chatbots, inférence vidéo/image).
   - Déploiement et conteneurisation Docker, CI/CD, FastAPI.
2. Parlement, Chambre des Représentants, Maroc (Avr. 2025 - Sept. 2025, 6 mois) - Stagiaire R&D Ingénieur IA/ML.
   - Systèmes NLP bilingues (Arabe/Français) pour documents législatifs.
   - Système RAG pour recherche documentaire (+55% vitesse, -70% effort manuel).
3. Prodigy InfoTech (Nov. 2024 - Déc. 2024, 2 mois) - Stagiaire Machine Learning.
   - Modèles de régression linéaire, nettoyage et préparation de données structurées.
4. HCP - Haut-Commissariat au Plan (Août 2024 - Sept. 2024, 2 mois) - Contrôleur RGPH (Recensement de la Population et de l'Habitat 2024).
5. ZolaDesign (Mars 2024 - Août 2024, 6 mois) - Développeur Full Stack (.NET/React).
6. JobInTech (Déc. 2023 - Avril 2024, 5 mois) - Développeur Full Stack (.NET/React JS) à l'Université Internationale de Rabat.
7. IT Club FSSM (Oct. 2021 - Mars 2023, 1 an 6 mois) - Fondateur & Responsable Logistique/Communication.
8. BEIN ADVANCE (Août 2022 - Octobre 2022, 3 mois) - Téléconseiller Clientèle.
9. Youften_BTP (Fév. 2021 - Nov. 2021, 10 mois) - Assistant Comptable.
10. Youften_BTP (Juin 2019 - Sept. 2019, 4 mois) - Assistant Comptable (Stage).

Études:
- Master Informatique et Intelligence Artificielle (Faculté des Sciences Ibn Tofail, Kenitra, 2023 - 2025).
- Licence Mathématiques et Informatique (Faculté des Sciences Semlalia, Marrakech, 2018 - 2023).
- Baccalauréat Sciences Mathématiques A (Lycée El Aamria, 2016 - 2018).
"""

def get_api_key():
    # 1. Try to read from environment variable
    key = os.environ.get("GEMINI_API_KEY")
    if key:
        return key
    # 2. Try to read from .env file in the same directory
    env_path = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_path):
        try:
            with open(env_path, "r") as f:
                for line in f:
                    if line.strip().startswith("GEMINI_API_KEY="):
                        return line.strip().split("=")[1].strip('"').strip("'")
        except Exception:
            pass
    return None

@app.post("/api/chat")
async def chat(request: ChatRequest):
    api_key = get_api_key()
    if not api_key:
        raise HTTPException(
            status_code=500, 
            detail="Le service de chatbot n'est pas activé (GEMINI_API_KEY manquante)."
        )
    
    # Call Google Gemini API (v1beta model)
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={api_key}"
    
    prompt = f"""
    Tu es l'assistant IA virtuel de El Mustapha El Mojahid, ingénieur IA et développeur Full-Stack.
    Réponds de manière professionnelle, concise et amicale aux questions des recruteurs en te basant uniquement sur son CV ci-dessous.
    
    Règles absolues :
    1. Réponds en Français de préférence (ou en Anglais si la question est posée en Anglais).
    2. Ne mens jamais et n'invente rien qui ne soit pas dans le CV.
    3. Garde tes réponses brèves (maximum 4-5 phrases courtes).
    4. Indique toujours la source (ex: "D'après la base documentaire...") pour conserver le style RAG.
    
    CV de El Mustapha El Mojahid :
    {CV_CONTEXT}
    
    Question du recruteur : {request.message}
    """
    
    payload = {
        "contents": [{
            "parts": [{"text": prompt}]
        }]
    }
    
    try:
        response = requests.post(url, json=payload, timeout=8)
        response.raise_for_status()
        data = response.json()
        text_response = data["candidates"][0]["content"]["parts"][0]["text"]
        return {"response": text_response}
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Erreur API Gemini: {str(e)}")

# Mount static folder to serve index.html, css and js statically from root
app.mount("/", StaticFiles(directory=".", html=True), name="static")
