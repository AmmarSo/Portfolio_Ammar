# Portfolio - Ammar Souchon

Ce projet est un portfolio personnel moderne, statique et bilingue (FR/EN), conçu pour être hébergé gratuitement sur GitHub Pages.

## 🚀 Installation & Lancement Local

1.  **Cloner le projet** (ou télécharger le dossier) :
    ```bash
    git clone https://github.com/votre-username/portfolio.git
    cd portfolio
    ```

2.  **Ouvrir le site** :
    Il suffit d'ouvrir le fichier `index.html` dans votre navigateur.
    
    *Note : Pour que les traductions (fichiers JSON) se chargent correctement en local, il est recommandé d'utiliser un serveur local (car les navigateurs bloquent parfois les requêtes `fetch` sur le protocole `file://`).*
    
    Si vous avez Python installé :
    ```bash
    python -m http.server 8000
    ```
    Puis ouvrez `http://localhost:8000`.

## 🛠 Personnalisation

### 1. Informations Personnelles
Le contenu textuel se trouve dans les fichiers JSON :
- `assets/i18n/fr.json` (Français)
- `assets/i18n/en.json` (Anglais)

Modifiez ces fichiers pour mettre à jour vos textes.

### 2. Images
- Placez votre photo de profil dans `assets/img/profile.jpg`.
- Vous pouvez ajouter des images pour vos projets dans le même dossier et mettre à jour les balises `<img>` dans `index.html`.

### 3. CV
- Remplacez le fichier `CV_Ammar_SOUCHON_EPISEN_20251007-1.pdf` à la racine par votre CV actuel.

## 🌍 Déploiement sur GitHub Pages

1.  Créez un nouveau dépôt sur GitHub (ex: `portfolio`).
2.  Poussez votre code :
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/votre-username/portfolio.git
    git push -u origin main
    ```
3.  Allez dans les **Settings** du dépôt sur GitHub.
4.  Allez dans la section **Pages** (menu de gauche).
5.  Sous **Source**, sélectionnez `Deploy from a branch`.
6.  Sous **Branch**, sélectionnez `main` et `/ (root)`.
7.  Cliquez sur **Save**.

Votre site sera accessible à l'adresse `https://votre-username.github.io/portfolio/`.

## 🎨 Technologies Utilisées

- **HTML5 / CSS3**
- **TailwindCSS** (via CDN pour simplicité sans build)
- **JavaScript (Vanilla)**
- **GSAP** (Animations)
- **i18n** (Système de traduction JSON maison)

---
*Généré par Antigravity pour Ammar Souchon.*
