// Main JavaScript for Portfolio

// Inlined Translations with Real CV Content & Medium Projects
const translationsData = {
    fr: {
        nav: {
            home: "Accueil",
            about: "Profil",
            education: "Formation",
            experience: "Expérience",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact"
        },
        hero: {
            greeting: "Bonjour, je suis",
            name: "Ammar Souchon",
            role: "Futur Ingénieur Big Data & IA",
            tagline: "Passionné par l'IA et la data, je conçois des systèmes intelligents pour la santé et l'industrie.",
            cta_cv: "Télécharger mon CV",
            cta_link_cv: "CV_Ammar_Souchon-FR.pdf",
            cta_contact: "Me contacter"
        },
        about: {
            title: "Profil",
            description: "Élève ingénieur en Technologies pour la Santé (EPISEN, UPEC), spécialisation Big Data & IA. Actuellement en alternance au Ministère de l'Économie (développement Python et automatisation de tests), je recherche pour 2026 une nouvelle alternance orientée IA appliquée aux systèmes intelligents.",
            values: {
                title: "Mes Atouts",
                v1: "Persévérance",
                v2: "Relationnel",
                v3: "Passion"
            }
        },
        education: {
            title: "Diplômes et Formations",
            items: [
                {
                    degree: "Ingénieur Technologies pour la Santé",
                    school: "EPISEN (UPEC) - Vitry-sur-Seine",
                    date: "Sept 2025 - Présent",
                    desc: "Spécialisation Big Data, IA, Réseau et Développement."
                },
                {
                    degree: "BUT Informatique",
                    school: "IUT de Créteil-Vitry (UPEC) - Vitry-sur-Seine",
                    date: "Sept 2022 - Août 2025",
                    desc: "Parcours Administration, gestion et exploitation des données."
                }
            ]
        },
        experience: {
            title: "Expériences Professionnelles",
            items: [
                {
                    role: "Alternance – Développeur Python (Tests Automatisés)",
                    company: "Ministère de l'Économie et des Finances (DDFIP)",
                    date: "Sept 2025 - Présent",
                    desc: "Développement de scripts Python pour tests automatisés (Sécurité, Non-régression). Gestion de projets AGILE/SCRUM."
                },
                {
                    role: "Alternance – Gestionnaire Parc & Dév Outils",
                    company: "Ministère de l'Économie et des Finances (DDFIP)",
                    date: "Sept 2024 - Août 2025",
                    desc: "Dév application mobile (Dart/Flutter) pour inventaire. Scripts d'automatisation (AutoIT, Python). Tests de conformité."
                },
                {
                    role: "Stage – Dév Web/Mobile & IA",
                    company: "Laboratoire LISSI / Consortium ADP",
                    date: "Avril 2024 - Juil 2024",
                    desc: "Vision par ordinateur pour reconnaissance de plantes (Python). Scraping (BeautifulSoup, Selenium). Projet européen."
                }
            ]
        },
        projects: {
            title: "Projets Réalisés",
            items: [
                {
                    id: "buildai",
                    title: "BuildAI",
                    desc: "Plateforme pour enseignants du bâtiment. Scraping, DB multimodale, LLM (Mistral 8B), App Flutter.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Résumé</h3>
                        <p class="mb-4">Notre projet vise à faciliter le travail des professionnels enseignant les métiers du bâtiment en leur fournissant une plateforme qui centralise les informations, permet des recherches et offre une communication avec une IA spécialisée. Pour y parvenir, nous avons utilisé des technologies de web scraping, de nouveaux types de bases de données et l’intelligence artificielle.</p>
                        
                        <div class="flex gap-4 mb-8">
                            <a href="assets/img/buildai/Poster_technique_BuildAI.pdf" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Voir le Poster Technique (PDF)
                            </a>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Vue d’ensemble : Pourquoi BuildAI est une révolution ?</h3>
                        <p class="mb-4">BuildAI est une plateforme innovante qui révolutionne l’accès aux connaissances liées au bâtiment en s’appuyant sur la récupération et la structuration de données pilotées par l’IA.</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Connaissance centralisée :</strong> Agrège diverses ressources liées à la construction en un seul hub accessible.</li>
                            <li><strong>Recherche assistée par IA :</strong> Utilise la recherche sémantique et les LLMs pour retrouver les informations les plus pertinentes.</li>
                            <li><strong>Système hybride de bases de données :</strong> Gère efficacement les données avec des bases vectorielles, graphe et documentaires.</li>
                            <li><strong>Extraction de données en temps réel :</strong> Scrape et met à jour en continu le contenu lié à l’industrie.</li>
                            <li><strong>Adapté aux formateurs :</strong> Conçu pour que les enseignants puissent facilement créer et personnaliser du matériel pédagogique.</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Impacts clés de BuildAI</h3>
                        <p class="mb-4">BuildAI transforme la manière dont les professionnels du secteur du bâtiment accèdent et utilisent la connaissance. En combinant recherche pilotée par IA, bases de données structurées et mises à jour en temps réel, il offre des avantages significatifs :</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Accès plus rapide à l’information :</strong> Élimine les recherches manuelles grâce à une structuration intelligente du savoir.</li>
                            <li><strong>Expérience d’apprentissage intelligente :</strong> Recommandations IA pour contenus pédagogiques adaptés.</li>
                            <li><strong>Accessibilité totale :</strong> Plateforme web + application mobile.</li>
                            <li><strong>Base de connaissances interconnectée :</strong> Bases vectorielles, graphe et documentaires.</li>
                            <li><strong>Évolutif et orienté “future proof” :</strong> Extensible à d’autres domaines nécessitant une gestion avancée du savoir.</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Comment fonctionne le Web Scraping</h3>
                        <p class="mb-4">Le Web scraping permet d’extraire automatiquement des informations structurées depuis des sites web. BuildAI l’utilise pour collecter et organiser des données du secteur de la construction.</p>
                        <p class="mb-2 font-bold text-primary">Étapes principales :</p>
                        <ol class="list-decimal list-inside mb-6 space-y-2 text-slate-300">
                            <li>Identification des sites cibles : documents réglementaires, supports pédagogiques, blogs techniques…</li>
                            <li>Envoi de requêtes HTTP : via Selenium, BeautifulSoup, etc.</li>
                            <li>Analyse du HTML : extraction des textes, tableaux, images, métadonnées.</li>
                            <li>Nettoyage et normalisation des données.</li>
                            <li>Stockage en bases de données : vectorielles, graphe, documentaires.</li>
                            <li>Mises à jour continues pour garantir un savoir toujours actuel.</li>
                        </ol>
                        <p class="mb-4">Le Web scraping permet de collecter des données à grande échelle, prêtes à être utilisées par les professionnels.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Architecture des bases de données : Neo4j, MongoDB, Qdrant</h3>
                        <p class="mb-4">BuildAI repose sur une architecture hybride composée de trois bases spécialisées :</p>
                        <img src="assets/img/buildai/architecture.svg" alt="Architecture BuildAI" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="p-4 rounded-lg bg-slate-900 border border-white/5">
                                <h4 class="text-lg font-bold text-primary mb-2">Neo4j – Base graphe</h4>
                                <ul class="text-sm text-slate-400 space-y-1">
                                    <li>Stocke les relations entre entités (matériaux, techniques, normes).</li>
                                    <li>Idéal pour les systèmes de recommandations et knowledge graphs.</li>
                                    <li>Fournit des recherches rapides de chemins/concepts liés.</li>
                                </ul>
                            </div>
                            <div class="p-4 rounded-lg bg-slate-900 border border-white/5">
                                <h4 class="text-lg font-bold text-primary mb-2">MongoDB – Base documentaire</h4>
                                <ul class="text-sm text-slate-400 space-y-1">
                                    <li>Stocke des données non ou semi-structurées (documents, rapports).</li>
                                    <li>Structure flexible (documents type JSON).</li>
                                    <li>Adaptée à l’organisation de contenus variés.</li>
                                </ul>
                            </div>
                            <div class="p-4 rounded-lg bg-slate-900 border border-white/5">
                                <h4 class="text-lg font-bold text-primary mb-2">Qdrant – Base vectorielle</h4>
                                <ul class="text-sm text-slate-400 space-y-1">
                                    <li>Optimisée pour la recherche sémantique haute dimension.</li>
                                    <li>Utilise des embeddings générés par IA.</li>
                                    <li>Récupère les informations selon leur sens et leur contexte.</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mb-4">La combinaison de ces trois systèmes assure : performance, évolutivité, compréhension contextuelle du savoir.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">BuildAI : Plateforme web, application mobile, LLM et moteur de recherche</h3>
                        <img src="assets/img/buildai/workflow.svg" alt="Workflow Utilisateur" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        
                        <div class="space-y-4 mb-6">
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Application mobile (Flutter)</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li>Interface intuitive et responsive.</li>
                                    <li>Intégration avec le moteur de recherche IA.</li>
                                    <li>Accès hors-ligne aux ressources.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Plateforme web (PHP)</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li>Gestion complète des contenus.</li>
                                    <li>Ajout/structuration de supports pédagogiques.</li>
                                    <li>Connexion avec Neo4j, MongoDB et Qdrant.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Large Language Model (LLM)</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li>Traite les requêtes en langage naturel.</li>
                                    <li>Génère des résumés rapides des documents.</li>
                                    <li>Fournit une aide contextuelle intelligente.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Moteur de recherche piloté par IA</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li><strong>Recherche vectorielle (Qdrant) :</strong> pertinence par sens et non par mots-clés.</li>
                                    <li><strong>Recherche graphe (Neo4j) :</strong> exploration des concepts liés.</li>
                                    <li><strong>Indexation documentaire (MongoDB) :</strong> navigation structurée dans les données.</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mb-4">Cette combinaison donne une plateforme intégrée, évolutive et simple d’utilisation.</p>
                    `,
                    tags: ["LLM", "RAG", "Python", "Flutter"],
                    img: "project-buildai.png"
                },
                {
                    id: "mnist",
                    title: "Réseau de Neurones (MNIST)",
                    desc: "Implémentation d'un réseau de neurones à partir de zéro (NumPy uniquement) pour la reconnaissance de chiffres.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">Le dataset MNIST (Modified National Institute of Standards and Technology) est la base de données de référence pour la reconnaissance d'images. Il contient 60 000 images d'entraînement et 10 000 images de test de chiffres manuscrits.</p>
                        <p class="mb-4">L'objectif de ce projet est de démystifier le "Deep Learning" en construisant un réseau de neurones complet sans utiliser de frameworks comme TensorFlow ou PyTorch. Juste des mathématiques et du code Python pur (avec NumPy).</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Architecture du Réseau</h3>
                        <p class="mb-4">Nous avons conçu un Perceptron Multi-Couches (MLP) simple avec :</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Couche d'entrée :</strong> 784 neurones (images 28x28 pixels aplaties).</li>
                            <li><strong>Couche cachée :</strong> 10 neurones avec activation ReLU.</li>
                            <li><strong>Couche de sortie :</strong> 10 neurones (chiffres 0-9) avec activation Softmax.</li>
                        </ul>
                        <img src="assets/img/mnist/architecture.svg" alt="Architecture Réseau de Neurones" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Les Mathématiques du Réseau</h3>
                        <p class="mb-4">Le fonctionnement repose sur deux phases principales : la propagation avant (Forward Propagation) et la rétropropagation (Backpropagation).</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Forward Propagation</h4>
                        <p class="mb-2">On fait passer les données à travers le réseau pour obtenir une prédiction.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def forward_prop(W1, b1, W2, b2, X):
    Z1 = W1.dot(X) + b1
    A1 = ReLU(Z1)
    Z2 = W2.dot(A1) + b2
    A2 = softmax(Z2)
    return Z1, A1, Z2, A2</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Fonctions d'Activation</h4>
                        <p class="mb-4"><strong>ReLU (Rectified Linear Unit) :</strong> Introduit de la non-linéarité.</p>
                        <img src="assets/img/mnist/relu.svg" alt="ReLU Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4"><strong>Softmax :</strong> Transforme les scores en probabilités.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Backpropagation</h4>
                        <p class="mb-2">On calcule l'erreur et on ajuste les poids pour minimiser cette erreur (Descente de Gradient).</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def back_prop(Z1, A1, Z2, A2, W1, W2, X, Y):
    dZ2 = A2 - one_hot(Y)
    dW2 = 1 / m * dZ2.dot(A1.T)
    db2 = 1 / m * np.sum(dZ2)
    dZ1 = W2.T.dot(dZ2) * ReLU_deriv(Z1)
    dW1 = 1 / m * dZ1.dot(X.T)
    db1 = 1 / m * np.sum(dZ1)
    return dW1, db1, dW2, db2</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Résultats</h3>
                        <p class="mb-4">Après entraînement sur le dataset MNIST, ce modèle simple atteint une précision d'environ <strong>85-90%</strong> sur les données de test.</p>
                        <p class="mb-4">Ce projet prouve qu'il n'est pas nécessaire d'avoir une "boîte noire" pour faire de l'IA. Comprendre les mathématiques sous-jacentes donne une maîtrise totale sur le modèle.</p>

                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Voir le Code Complet sur GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "Deep Learning", "Maths", "NumPy"],
                    img: "mnist/cover.png"
                },
                {
                    id: "knn",
                    title: "Iris detection using K-NN",
                    desc: "Implémentation complète de l'algorithme KNN sans librairie, expliqué sur le dataset Iris.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">K-Nearest Neighbors (K-NN) est l'un des algorithmes d'apprentissage automatique les plus simples. Si vous voulez commencer à apprendre le Machine Learning, c'est un point de départ facile et intuitif.</p>
                        <p class="mb-4">Il fonctionne en calculant des distances et en utilisant un vote majoritaire pour déterminer la classe correcte d'un nouveau point de données.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Explication</h3>
                        <p class="mb-4">L'algorithme K-NN est basé sur le calcul de distance pour mesurer à quel point un point est proche d'un autre (comme un nouveau point, P-new).</p>
                        <p class="mb-4">Une fois toutes les distances calculées, l'algorithme effectue un vote. Nous choisissons une valeur pour k (le nombre de voisins), sélectionnons les k points les plus proches, récupérons leurs classes et attribuons la classe majoritaire au nouveau point.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Aperçu du Dataset : Iris</h3>
                        <p class="mb-4">Le dataset utilisé dans ce projet est le célèbre dataset Iris. Il contient des informations sur 150 fleurs, divisées en 3 espèces : Iris-setosa, Iris-versicolor et Iris-virginica. Chaque fleur a 4 caractéristiques : longueur des sépales, largeur des sépales, longueur des pétales et largeur des pétales.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Mathématiques derrière K-NN</h3>
                        <p class="mb-4">Il y a une formule essentielle à connaître : le calcul de la distance. Voici les 3 méthodes principales :</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Distance Euclidienne</h4>
                        <img src="assets/img/knn/euclidean.svg" alt="Formule Distance Euclidienne" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">La racine carrée de la somme des différences au carré.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Distance de Manhattan</h4>
                        <img src="assets/img/knn/manhattan.svg" alt="Formule Distance Manhattan" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">La somme des différences absolues.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Distance de Minkowski</h4>
                        <img src="assets/img/knn/minkowski.svg" alt="Formule Distance Minkowski" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">Généralisation des deux précédentes.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Implémentation de K-NN "From Scratch"</h3>
                        
                        <h4 class="text-xl font-bold mb-2 text-primary">1. Chargement des Données</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Load dataset
dataframe = pd.read_csv("data/iris.csv")
distance = {}
iris_class = {'Iris-setosa':0, 'Iris-versicolor':0, 'Iris-virginica':0 }</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Fonction de Distance Euclidienne</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def euclidean_distance(x, xn):
    dist = 0
    for i in range(1, len(xn)):     
        dist += (x[i] - xn[i])**2
    return math.sqrt(dist)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Calcul des Distances et Vote</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Sort and select k neighbors
sorted_items = sorted(distance.items(), key=lambda item: item[1])
k_smallest = sorted_items[:k]

# Majority Vote
for item in k_smallest:
    # ... count classes ...
print("Class of Pnew :", max(iris_class, key=iris_class.get))</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Comment Choisir la Meilleure Valeur de k</h3>
                        <p class="mb-4">Choisir la bonne valeur pour k est très important. Si k est trop petit, le modèle peut être trop sensible au bruit (surapprentissage). Si k est trop grand, il peut lisser des motifs importants (sous-apprentissage).</p>
                        <p class="mb-4">La meilleure façon de choisir k est de tester différentes valeurs et d'observer l'erreur sur le jeu de test. Comme le montre le graphique ci-dessous, le k optimal est là où l'erreur de test est la plus faible (méthode du coude) :</p>
                        <img src="assets/img/knn/best_k.svg" alt="Graphique Meilleur K" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">K-NN est un excellent point de départ en Machine Learning car il est facile à comprendre et ne nécessite pas de mathématiques complexes ou d'entraînement lourd.</p>
                        
                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Voir le Code Complet sur GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "Algorithms", "Data Science"],
                    img: "project-knn.png"
                },
                {
                    id: "decision-tree",
                    title: "Arbre de Décision (From Scratch)",
                    desc: "Implémentation d'un arbre de décision sans Scikit-Learn sur le dataset Titanic.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">Nous allons explorer le fonctionnement d'un arbre de décision sans utiliser de bibliothèques magiques comme scikit-learn. C'est une approche "from scratch", conçue pour vous aider à comprendre véritablement comment le modèle fonctionne en interne.</p>
                        <p class="mb-4">C'est étonnamment simple : dans cet article, j'utilise la programmation orientée objet en Python pour construire un classifieur par arbre de décision étape par étape.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Qu'est-ce qu'un Arbre de Décision ?</h3>
                        <p class="mb-4">Un arbre de décision est l'un des algorithmes d'apprentissage automatique les plus simples mais l'un des plus puissants à comprendre.</p>
                        <p class="mb-4">À la base, il fonctionne comme une série de questions. Chaque nœud interne pose une question oui/non sur une caractéristique (par exemple, "Le passager est-il un homme ?"), et selon la réponse, les données vont à gauche ou à droite.</p>
                        <p class="mb-4">Cela continue jusqu'à ce que les données atteignent une feuille, où une prédiction finale est faite comme "A survécu" ou "N'a pas survécu".</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">Idée de base et intuition</h4>
                        <p class="mb-4">L'arbre est construit en divisant le jeu de données plusieurs fois en sous-groupes qui sont de plus en plus "purs" (groupes où la plupart des passagers partagent le même résultat).</p>
                        <p class="mb-4">À chaque étape, l'algorithme choisit la meilleure question pour réduire l'incertitude, basée sur une métrique comme l'impureté de Gini ou l'entropie.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Objectif de ce Projet</h3>
                        <p class="mb-4">Dans ce projet, nous ne voulons pas seulement utiliser un arbre de décision — nous voulons le construire à partir de zéro, ligne par ligne.</p>
                        <p class="mb-4">L'objectif est simple : comprendre ce qui se passe réellement sous le capot.</p>
                        <p class="mb-4">Nous entraînerons notre arbre de décision sur le dataset Titanic, l'un des plus célèbres en data science. C'est une classification binaire : survécu (1) ou non (0), basée sur des caractéristiques comme le sexe, l'âge et la classe.</p>
                        <p class="mb-4">Mais au lieu d'utiliser un modèle pré-construit de Scikit-Learn, nous allons :</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>Tout implémenter nous-mêmes en Python pur</li>
                            <li>Utiliser une approche Orientée Objet (POO) avec des classes comme <code>DecisionTree</code> et <code>Node</code></li>
                            <li>Éviter toute bibliothèque de machine learning pour rester proche de la logique</li>
                            <li>Comprendre chaque décision : comment les divisions sont faites, comment la pureté est calculée, comment les prédictions sont faites</li>
                        </ul>
                        <p class="mb-4">Ce projet ne vise pas à atteindre la plus haute précision. Il s'agit d'acquérir une véritable intuition en construisant l'outil soi-même.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Structure du Code</h3>
                        <p class="mb-4">Pour garder les choses propres et modulaires, le projet est structuré en utilisant deux classes principales :</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Node.py</h4>
                        <p class="mb-4">Cette classe représente chaque nœud de l'arbre — que ce soit un nœud de décision (avec une condition de division) ou une feuille (avec une prédiction).</p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li><code>feature_index</code> : quelle caractéristique est utilisée pour diviser</li>
                            <li><code>threshold</code> : valeur de comparaison</li>
                            <li><code>left / right</code> : nœuds enfants</li>
                            <li><code>is_leaf</code> : Vrai si c'est une feuille</li>
                            <li><code>prediction</code> : valeur prédite si c'est une feuille</li>
                            <li><code>samples_count</code> : nombre d'échantillons ayant atteint ce nœud</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. DecisionTree.py</h4>
                        <p class="mb-4">C'est la classe principale qui va :</p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li>Entraîner l'arbre (<code>fit</code>)</li>
                            <li>Le construire récursivement (<code>build_tree</code>)</li>
                            <li>Trouver la meilleure division (<code>best_split</code>)</li>
                            <li>Faire des prédictions (<code>predict</code> et <code>predict_sample</code>)</li>
                            <li>Utiliser Gini ou l'entropie comme critère de division</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Main.py</h4>
                        <p class="mb-4">C'est le script qui lie tout ensemble. Il gère le chargement des données, la construction du modèle et l'évaluation des performances.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Le Dataset Titanic</h3>
                        <p class="mb-4">Pour tester notre arbre, nous utilisons l'un des datasets les plus célèbres : le Titanic.</p>
                        <div class="overflow-x-auto mb-6">
                            <table class="w-full text-left text-slate-300 border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-700">
                                        <th class="py-2 px-4">Feature</th>
                                        <th class="py-2 px-4">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Pclass</td><td class="py-2 px-4">Classe passager (1ère, 2ème, 3ème)</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Sex</td><td class="py-2 px-4">Genre (homme ou femme)</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Age</td><td class="py-2 px-4">Âge en années</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">SibSp</td><td class="py-2 px-4">Nombre de frères/époux à bord</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Parch</td><td class="py-2 px-4">Nombre de parents/enfants à bord</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Fare</td><td class="py-2 px-4">Prix du billet</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Embarked</td><td class="py-2 px-4">Port d'embarquement (C, Q, S)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Construction de l'Arbre Étape par Étape</h3>
                        <p class="mb-4">Maintenant, plongeons sous le capot et explorons la logique derrière un arbre de décision — pas seulement conceptuellement, mais mathématiquement et en code.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">Impureté de Gini</h4>
                        <p class="mb-4">Objectif : mesurer à quel point un ensemble d'exemples est "pur". Si un nœud ne contient que des survivants ou que des non-survivants, il est parfaitement pur. Sinon, l'impureté augmente.</p>
                        <img src="assets/img/decision_tree/gini_formula.svg" alt="Formule Impureté de Gini" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">Où Pi est la proportion d'échantillons de la classe i dans le dataset D, et C est le nombre de classes.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def gini_impurity(y):
    counts = Counter(y)
    impurity = 1.0
    for label in counts:
        prob_of_lbl = counts[label] / len(y)
        impurity -= prob_of_lbl ** 2
    return impurity</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Meilleure Division (Best Split)</h4>
                        <p class="mb-4">C'est l'étape la plus importante. Pour chaque caractéristique, nous essayons chaque seuil possible, divisons les données et calculons l'impureté de Gini pondérée. L'objectif est de minimiser l'impureté après la division.</p>
                        <img src="assets/img/decision_tree/weighted_gini.svg" alt="Formule Gini Pondéré" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def best_split(X, y):
    best_gain = float('inf')
    best_feature, best_threshold = None, None

    for feature in range(X.shape[1]):
        thresholds = np.unique(X[:, feature])
        for t in thresholds:
            left_idx = X[:, feature] <= t
            right_idx = X[:, feature] > t

            if len(y[left_idx]) == 0 or len(y[right_idx]) == 0:
                continue

            gini_left = gini_impurity(y[left_idx])
            gini_right = gini_impurity(y[right_idx])
            gini_split = (len(y[left_idx]) * gini_left + len(y[right_idx]) * gini_right) / len(y)

            if gini_split < best_gain:
                best_gain = gini_split
                best_feature = feature
                best_threshold = t

    return best_feature, best_threshold</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Construction Récursive de l'Arbre</h3>
                        <p class="mb-4">Une fois la meilleure division trouvée, nous divisons les données et répétons le processus sur les deux sous-ensembles (gauche et droite). C'est géré par la méthode <code>build_tree()</code>.</p>
                        <p class="mb-4">La récursion s'arrête quand :</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>Tous les échantillons appartiennent à la même classe (pur)</li>
                            <li>Ou plus aucune division utile ne peut être faite</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Logique de Prédiction</h3>
                        <p class="mb-4">Pour prédire, nous suivons l'arbre : à chaque nœud interne, on vérifie la valeur de la caractéristique, on va à gauche ou à droite selon le seuil, jusqu'à atteindre une feuille.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def predict_sample(self, x):
    node = self.root
    while not node.is_leaf:
        if x[node.feature_index] <= node.threshold:
            node = node.left
        else:
            node = node.right
    return node.prediction</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Entraînement sur les Données Titanic</h3>
                        <p class="mb-4">Maintenant que nous avons construit notre arbre, il est temps de l'entraîner sur un dataset réel.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">Préparation des Données</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Step 1: Load and prepare the dataset
def load_titanic_data(file_path):
    # ... (code to load CSV) ...
    # Use selected features: Pclass, Sex, Age
    pclass = int(row['Pclass'])
    sex = 0 if row['Sex'] == 'male' else 1  # Encode: male = 0, female = 1
    age = float(row['Age']) if row['Age'] else None
    # ...
    return X, y</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Entraînement du Modèle</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Initialize and train the decision tree
tree = DecisionTree(max_depth=3, min_samples_split=2, criterion="gini")
tree.fit(X, y)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Évaluation de la Précision</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Step 3: Predict on training data
predictions = tree.predict(X)

# Step 4: Compare predictions to actual results
correct = sum(1 for i in range(len(y)) if y[i] == predictions[i])
accuracy = correct / len(y)
print(f"\nAccuracy on training data: {accuracy:.2f}")</code></pre>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-white">Forces et Limites</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 class="text-xl font-bold mb-2 text-primary">Forces</h4>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Facile à Comprendre :</strong> Reflète la prise de décision humaine.</li>
                                    <li><strong>Pas de Mise à l'Échelle :</strong> Divise sur des seuils, pas des distances.</li>
                                    <li><strong>Données Mixtes :</strong> Gère bien le numérique et le catégoriel.</li>
                                    <li><strong>Efficace sur Petits Datasets :</strong> Bon pour des insights rapides.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold mb-2 text-primary">Limites</h4>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Surapprentissage (Overfitting) :</strong> Peut apprendre par cœur sans élagage.</li>
                                    <li><strong>Instable :</strong> Sensible aux petits changements de données.</li>
                                    <li><strong>Biaisé vers les Attributs Dominants :</strong> Favorise les caractéristiques avec beaucoup de niveaux.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">Dans cet article, nous n'avons pas juste utilisé un arbre de décision — nous en avons construit un de zéro. Pas de raccourcis, pas de fonctions magiques de scikit-learn.</p>
                        <p class="mb-4">En faisant tout manuellement, nous avons compris comment le modèle fonctionne réellement. Cette connaissance est essentielle pour tout ingénieur ML avant de passer aux frameworks de haut niveau.</p>
                        <p class="mb-4">Quand vous construisez quelque chose de zéro, vous cessez d'être un "utilisateur d'outils" pour devenir un créateur de solutions.</p>

                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Code complet sur mon GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "ML from Scratch", "OOP", "Titanic"],
                    img: "project-dt.png"
                },
                {
                    id: "logistic",
                    title: "Diabetes Detection using logistic regression",
                    desc: "Comprendre la régression logistique avec un exemple sur le dataset Diabète.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">La régression logistique est un algorithme d'apprentissage automatique inspiré de la régression linéaire. Cependant, le nom peut être trompeur car la régression logistique n'est pas utilisée pour prédire des valeurs continues — elle est en fait utilisée pour la classification.</p>
                        <p class="mb-4">Généralement, la régression logistique est appliquée aux problèmes de classification binaire, où le résultat est l'une des deux catégories : par exemple, 1 ou 0, cancer ou non, malade ou en bonne santé, etc.</p>
                        <p class="mb-6">Dans la régression linéaire, la sortie est une ligne droite. En revanche, la régression logistique produit une courbe en forme de S, connue sous le nom de courbe sigmoïde, qui mappe tout nombre réel en une probabilité entre 0 et 1.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Les Mathématiques derrière la Régression Logistique</h3>
                        <p class="mb-4">En régression logistique, il y a six formules importantes à comprendre :</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>Calcul du score linéaire (z)</li>
                            <li>Application de la fonction sigmoïde</li>
                            <li>Entropie croisée (Perte/Loss)</li>
                            <li>Calcul du gradient</li>
                            <li>Calcul du gradient pour un poids</li>
                            <li>Descente de gradient</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Calcul du Score Linéaire (z)</h4>
                        <img src="assets/img/logistic_regression/Linear score calculation (z).webp" alt="Formule Score Linéaire" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2"><strong>z = w₀ + w₁x₁ + ... + wₙxₙ</strong></p>
                        <p class="mb-4 text-sm text-slate-400">Où <em>w</em> sont les poids et <em>x</em> sont les caractéristiques d'entrée.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Method linear scoring
def linear_score(x1, x2, x3, x4, x5, x6, x7, x8):
    z = w0 + x1*w1 + x2*w2 + x3*w3 + x4*w4 + x5*w5 + x6*w6 + x7*w7 + x8*w8
    return z</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Application de la Fonction Sigmoïde (σ)</h4>
                        <img src="assets/img/logistic_regression/sigmoïd function (σ).webp" alt="Formule Sigmoïde" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">La fonction sigmoïde mappe 'z' vers une probabilité entre 0 et 1.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Sigmoid function
def sigmoid_function(z):
    if z >= 0:
        return 1 / (1 + math.exp(-z))
    else:
        exp_z = math.exp(z) 
        return exp_z / (1 + exp_z)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Entropie Croisée (Loss)</h4>
                        <img src="assets/img/logistic_regression/Cross entropy (Loss).webp" alt="Formule Entropie Croisée" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">Mesure la différence entre la probabilité prédite et la classe réelle.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Cross entropy
def cross_entropy(y, p, eps=1e-15):
    p = max(min(p, 1 - eps), eps)
    loss = -(y * math.log(p) + (1 - y) * math.log(1 - p))
    return loss</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">4. Calcul du Gradient</h4>
                        <img src="assets/img/logistic_regression/Gradient calculation.webp" alt="Formule Gradient" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">Calcule le terme d'erreur (prédit - réel).</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Gradient calcul
def gradient_calcul(y,p):
    return p - y</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">5. Calcul du Gradient pour un Poids</h4>
                        <img src="assets/img/logistic_regression/Gradient calculation for a weight.webp" alt="Formule Gradient Poids" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h4 class="text-xl font-bold mb-2 text-primary mt-6">6. Descente de Gradient (Mise à jour des Poids)</h4>
                        <img src="assets/img/logistic_regression/Gradient descent.webp" alt="Formule Descente Gradient" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">Met à jour les poids pour minimiser la perte.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Weight update
def weight_update(learning_rate, w, grad):
    return w - learning_rate * grad</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Entraînement du Modèle</h3>
                        <p class="mb-4">Nous avons utilisé la <strong>Pima Indians Diabetes Database</strong>. L'entraînement consiste à optimiser les poids sur plusieurs époques.</p>
                        <img src="assets/img/logistic_regression/elbow method.webp" alt="Graphique Méthode Coude" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Training Loop (Simplified)
for j in range(epochs):
    for i in range(len(dataframe)):
        # ... load features x1 to x8 ...
        z = linear_score(x1, ... x8)
        p = sigmoid_function(z)
        error = gradient_calcul(true_class, p)
        
        # Update weights
        w0 = weight_update(learning_rate, w0, grad(error, 1))
        w1 = weight_update(learning_rate, w1, grad(error, x1))
        # ... repeat for all weights ...</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">En implémentant la régression logistique à partir de zéro, nous avons acquis une compréhension approfondie des mathématiques sous-jacentes — en particulier comment le modèle apprend via la descente de gradient et minimise la perte. Cette base est cruciale avant de maîtriser des bibliothèques comme Scikit-Learn.</p>
                        
                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo/Diabet-detection-using-Logistic-Regression" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Voir le Code Complet sur GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "Maths", "Optimization"],
                    img: "project-logistic.png"
                },
                {
                    id: "flask",
                    title: "API avec Python Flask",
                    desc: "Création d'une API RESTful complète pour les données de pollution (LCSQA).",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">Dans le cadre d'un projet universitaire, nous avons travaillé sur le développement d'une API (Application Programming Interface). L'objectif était de créer une API pour les données environnementales fournies par le LCSQA (Laboratoire Central de Surveillance de la Qualité de l’Air).</p>
                        <p class="mb-4">Une API est un système qui permet d'accéder à des données externes via des requêtes HTTP ou HTTPS. Ce système est particulièrement utile pour mettre en œuvre une architecture microservices.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Comment ça marche ?</h3>
                        <p class="mb-4">Le fonctionnement est simple : vous effectuez une requête HTTP vers le serveur et, en retour, vous accédez à des données structurées au format JSON.</p>
                        <img src="assets/img/api/api_diagram.svg" alt="Diagramme API" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Avantages et Inconvénients des API</h3>
                        <h4 class="text-xl font-bold mb-2 text-primary">Avantages :</h4>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li><strong>Facilité d'intégration :</strong> Les API permettent une intégration transparente entre différents systèmes.</li>
                            <li><strong>Efficacité :</strong> Accéder aux fonctionnalités sans tout reconstruire à partir de zéro.</li>
                            <li><strong>Évolutivité :</strong> Facilite l'ajout de services supplémentaires.</li>
                            <li><strong>Automatisation :</strong> Facilite l'automatisation sans intervention humaine.</li>
                            <li><strong>Expérience Utilisateur :</strong> Enrichit les fonctionnalités avec des services tiers.</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">Inconvénients :</h4>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Risques de sécurité :</strong> Vulnérabilités si non sécurisées correctement.</li>
                            <li><strong>Dépendance :</strong> Dépendance à la disponibilité des services externes.</li>
                            <li><strong>Complexité :</strong> Peut ajouter de la complexité à l'architecture du système.</li>
                            <li><strong>Limites de débit :</strong> Restrictions sur le nombre de requêtes.</li>
                            <li><strong>Maintenance :</strong> Mises à jour continues requises.</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Étapes de Création</h3>
                        <img src="assets/img/api/api_workflow.svg" alt="Workflow API" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <ol class="list-decimal list-inside mb-6 space-y-2 text-slate-300">
                            <li>Définir l'objectif</li>
                            <li>Architecture de la Base de Données</li>
                            <li>Définir les sources de données</li>
                            <li>Importer les données</li>
                            <li>Créer le code Python avec Flask</li>
                            <li>Déploiement & Visualisation</li>
                        </ol>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Architecture de la Base de Données</h4>
                        <p class="mb-4">Nous avons identifié 5 tables importantes : Polluants, Organismes, ZAS (Zone Administrative de Surveillance), Stations et Mesures.</p>
                        <img src="assets/img/api/architecture_bd.webp" alt="Schéma Base de Données" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Importation des Données</h4>
                        <p class="mb-4">J'ai utilisé 3 scripts : <code>Recuperation.py</code> (téléchargement CSV), <code>Create_base.py</code> (création SQLite) et <code>Insert_data.py</code> (insertion des données).</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Exemple : Insert_data.py (Extrait)
def insert_data_from_csv(year, db_name="pollution_data.db"):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    # ... (lecture CSV et insertion) ...
    cursor.execute('''INSERT INTO Mesures (...) VALUES (...)''', (...))
    conn.commit()</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Création de l'API avec Flask</h4>
                        <p class="mb-4">L'objectif est de créer des routes contenant des données JSON. Voici quelques endpoints : <code>/organismes</code>, <code>/stations</code>, <code>/mesures</code>.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">@app.route('/stations', methods=['GET'])
def get_stations():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Stations')
    stations = cursor.fetchall()
    conn.close()
    return jsonify([dict(row) for row in stations])</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Visualisation des Données</h3>
                        <p class="mb-4">J'ai créé un tableau de bord utilisant PowerBI pour visualiser les données exposées par l'API.</p>
                        <img src="assets/img/api/dashboard.webp" alt="Dashboard PowerBI" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">La création d'une API permet d'externaliser les données et de séparer l'application en services distincts. C'est une compétence essentielle pour le développement moderne.</p>
                        
                        <h3 class="text-2xl font-bold mb-4 text-white">Bibliographie</h3>
                        <p class="mb-4"><strong>Articles et Tutoriels :</strong></p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li>“Creating a RESTful API with Python and Flask” par Miguel Grinberg.</li>
                            <li>“Flask-RESTful Quickstart” sur flask-restful.readthedocs.io.</li>
                        </ul>
                        <p class="mb-4"><strong>Documentation :</strong></p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li>Documentation Flask : <a href="https://flask.palletsprojects.com/en/2.0.x/" class="text-primary hover:underline">flask.palletsprojects.com</a></li>
                            <li>Documentation SQLite : <a href="https://www.sqlite.org/docs.html" class="text-primary hover:underline">sqlite.org</a></li>
                        </ul>
                        <p class="mb-4"><strong>Vidéo :</strong></p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>“REST APIs with Flask and Python in 2022” par Tech With Tim sur YouTube.</li>
                        </ul>

                        <div class="flex gap-4 mt-8">
                            <a href="https://medium.com/@ammar.souchon/how-to-create-an-api-with-python-flask-5fbee3ebad5e" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Lire l'article complet sur Medium
                            </a>
                        </div>
                    `,
                    tags: ["Web Dev", "Python", "Flask", "API"],
                    img: "project-api.png"
                }
            ]
        },
        skills: {
            title: "Compétences",
            categories: [
                {
                    name: "Langages & Dév",
                    items: "Python, Dart/Flutter, SQL, PL/SQL"
                },
                {
                    name: "Data & IA",
                    items: "Pandas, NumPy, Scikit-Learn, OpenCV, K-NN, Naïves Bayes, LDA, Decision Tree, Random Forest, Base de données orientée document, Base de données orientée graph, Base de données vectorielle"
                },
                {
                    name: "Outils & Web",
                    items: "Flask, Power BI, Git, GitHub, Agile, Scrum, Kanban"
                }
            ]
        },
        footer: {
            rights: "Tous droits réservés.",
            made_with: "Conçu avec passion et du code."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            greeting: "Hello, I am",
            name: "Ammar Souchon",
            role: "Futur Big Data & AI Engineer",
            tagline: "Passionate about AI and data, I design intelligent systems for healthcare and industry.",
            cta_cv: "Download my resume",
            cta_link_cv: "CV_Ammar_Souchon-EN.pdf",
            cta_contact: "Contact Me"
        },
        about: {
            title: "About Me",
            description: "Engineering student in Health Technologies (EPISEN, UPEC), specializing in Big Data & AI. Currently an apprentice at the Ministry of Economy (Python development and test automation), I am looking for a new apprenticeship for 2026 focused on AI applied to intelligent systems.",
            values: {
                title: "My Strengths",
                v1: "Perseverance",
                v2: "Relational",
                v3: "Passion"
            }
        },
        education: {
            title: "Education",
            items: [
                {
                    degree: "Engineer in Health Technologies",
                    school: "EPISEN (UPEC) - Paris",
                    date: "Sept 2025 - Present",
                    desc: "Specialization in Big Data, AI, Network, and Development."
                },
                {
                    degree: "Bachelor of Computer Science",
                    school: "IUT de Créteil-Vitry (UPEC) - Paris",
                    date: "Sept 2022 - Aug 2025",
                    desc: "Track: Data Administration, Management, and Exploitation."
                }
            ]
        },
        experience: {
            title: "Professional Experience",
            items: [
                {
                    role: "Apprentice – Python Developer (Automated Tests)",
                    company: "Ministry of Economy and Finance (DDFIP)",
                    date: "Sept 2025 - Present",
                    desc: "Development of Python scripts for automated tests (Security, Non-regression). AGILE/SCRUM project management."
                },
                {
                    role: "Apprentice – Fleet Manager & Tool Dev",
                    company: "Ministry of Economy and Finance (DDFIP)",
                    date: "Sept 2024 - Aug 2025",
                    desc: "Mobile app dev (Dart/Flutter) for inventory. Automation scripts (AutoIT, Python). Compliance testing."
                },
                {
                    role: "Intern – Web/Mobile Dev & AI",
                    company: "LISSI Laboratory / ADP Consortium",
                    date: "April 2024 - July 2024",
                    desc: "Computer vision for plant recognition (Python). Scraping (BeautifulSoup, Selenium). European project."
                }
            ]
        },
        projects: {
            title: "Projects",
            items: [
                {
                    id: "buildai",
                    title: "BuildAI",
                    desc: "Platform for construction teachers. Scraping, Multimodal DB, LLM (Mistral 8B), Flutter App.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Summary</h3>
                        <p class="mb-4">Our project aims to facilitate the work of professionals teaching construction trades by providing a platform that centralizes information, enables searches, and offers communication with a specialized AI. To achieve this, we used web scraping technologies, new types of databases, and artificial intelligence.</p>
                        
                        <div class="flex gap-4 mb-8">
                            <a href="assets/img/buildai/Poster_technique_BuildAI.pdf" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                View Technical Poster (PDF)
                            </a>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Overview: Why BuildAI is a Revolution?</h3>
                        <p class="mb-4">BuildAI is an innovative platform that revolutionizes access to construction-related knowledge by leveraging AI-driven data retrieval and structuring.</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Centralized Knowledge:</strong> Aggregates various construction-related resources into a single accessible hub.</li>
                            <li><strong>AI-Assisted Search:</strong> Uses semantic search and LLMs to retrieve the most relevant information.</li>
                            <li><strong>Hybrid Database System:</strong> Efficiently manages data with vector, graph, and document databases.</li>
                            <li><strong>Real-Time Data Extraction:</strong> Continuously scrapes and updates industry-related content.</li>
                            <li><strong>Tailored for Trainers:</strong> Designed for teachers to easily create and customize educational material.</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Key Impacts of BuildAI</h3>
                        <p class="mb-4">BuildAI transforms how construction professionals access and use knowledge. By combining AI-driven search, structured databases, and real-time updates, it offers significant advantages:</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Faster Access to Information:</strong> Eliminates manual searches through intelligent knowledge structuring.</li>
                            <li><strong>Smart Learning Experience:</strong> AI recommendations for adapted educational content.</li>
                            <li><strong>Total Accessibility:</strong> Web platform + mobile application.</li>
                            <li><strong>Interconnected Knowledge Base:</strong> Vector, graph, and document databases.</li>
                            <li><strong>Scalable and Future-Proof:</strong> Extensible to other domains requiring advanced knowledge management.</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">How Web Scraping Works</h3>
                        <p class="mb-4">Web scraping allows for the automatic extraction of structured information from websites. BuildAI uses it to collect and organize construction sector data.</p>
                        <p class="mb-2 font-bold text-primary">Main Steps:</p>
                        <ol class="list-decimal list-inside mb-6 space-y-2 text-slate-300">
                            <li>Identification of target sites: regulatory documents, educational materials, technical blogs...</li>
                            <li>Sending HTTP requests: via Selenium, BeautifulSoup, etc.</li>
                            <li>HTML Parsing: extraction of text, tables, images, metadata.</li>
                            <li>Data cleaning and normalization.</li>
                            <li>Storage in databases: vector, graph, document.</li>
                            <li>Continuous updates to ensure always current knowledge.</li>
                        </ol>
                        <p class="mb-4">Web scraping allows for large-scale data collection, ready for use by professionals.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Database Architecture: Neo4j, MongoDB, Qdrant</h3>
                        <p class="mb-4">BuildAI relies on a hybrid architecture composed of three specialized databases:</p>
                        <img src="assets/img/buildai/architecture.svg" alt="BuildAI Architecture" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="p-4 rounded-lg bg-slate-900 border border-white/5">
                                <h4 class="text-lg font-bold text-primary mb-2">Neo4j – Graph DB</h4>
                                <ul class="text-sm text-slate-400 space-y-1">
                                    <li>Stores relations between entities (materials, techniques, standards).</li>
                                    <li>Ideal for recommendation systems and knowledge graphs.</li>
                                    <li>Provides fast searches of related paths/concepts.</li>
                                </ul>
                            </div>
                            <div class="p-4 rounded-lg bg-slate-900 border border-white/5">
                                <h4 class="text-lg font-bold text-primary mb-2">MongoDB – Document DB</h4>
                                <ul class="text-sm text-slate-400 space-y-1">
                                    <li>Stores unstructured or semi-structured data (documents, reports).</li>
                                    <li>Flexible structure (JSON-like documents).</li>
                                    <li>Adapted for organizing varied content.</li>
                                </ul>
                            </div>
                            <div class="p-4 rounded-lg bg-slate-900 border border-white/5">
                                <h4 class="text-lg font-bold text-primary mb-2">Qdrant – Vector DB</h4>
                                <ul class="text-sm text-slate-400 space-y-1">
                                    <li>Optimized for high-dimensional semantic search.</li>
                                    <li>Uses AI-generated embeddings.</li>
                                    <li>Retrieves information based on meaning and context.</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mb-4">The combination of these three systems ensures: performance, scalability, and contextual understanding of knowledge.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">BuildAI: Web Platform, Mobile Application, LLM and Search Engine</h3>
                        <img src="assets/img/buildai/workflow.svg" alt="User Workflow" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        
                        <div class="space-y-4 mb-6">
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Mobile Application (Flutter)</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li>Intuitive and responsive interface.</li>
                                    <li>Integration with the AI search engine.</li>
                                    <li>Offline access to resources.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Web Platform (PHP)</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li>Complete content management.</li>
                                    <li>Addition/structuring of educational materials.</li>
                                    <li>Connection with Neo4j, MongoDB, and Qdrant.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">Large Language Model (LLM)</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li>Processes natural language queries.</li>
                                    <li>Generates quick summaries of documents.</li>
                                    <li>Provides intelligent contextual help.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-white mb-1">AI-Driven Search Engine</h4>
                                <ul class="list-disc list-inside text-slate-300">
                                    <li><strong>Vector Search (Qdrant):</strong> relevance by meaning, not keywords.</li>
                                    <li><strong>Graph Search (Neo4j):</strong> exploration of related concepts.</li>
                                    <li><strong>Document Indexing (MongoDB):</strong> structured navigation in data.</li>
                                </ul>
                            </div>
                        </div>
                        <p class="mb-4">This combination provides an integrated, scalable, and easy-to-use platform.</p>
                    `,
                    tags: ["LLM", "RAG", "Python", "Flutter"],
                    img: "project-buildai.png"
                },
                {
                    id: "mnist",
                    title: "Neural Network (MNIST)",
                    desc: "Implementation of a neural network from scratch (NumPy only) for digit recognition.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">The MNIST dataset (Modified National Institute of Standards and Technology) is the benchmark database for image recognition. It contains 60,000 training images and 10,000 test images of handwritten digits.</p>
                        <p class="mb-4">The goal of this project is to demystify "Deep Learning" by building a complete neural network without using frameworks like TensorFlow or PyTorch. Just mathematics and pure Python code (with NumPy).</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Network Architecture</h3>
                        <p class="mb-4">We designed a simple Multi-Layer Perceptron (MLP) with:</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Input Layer:</strong> 784 neurons (flattened 28x28 pixel images).</li>
                            <li><strong>Hidden Layer:</strong> 10 neurons with ReLU activation.</li>
                            <li><strong>Output Layer:</strong> 10 neurons (digits 0-9) with Softmax activation.</li>
                        </ul>
                        <img src="assets/img/mnist/architecture.svg" alt="Neural Network Architecture" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">The Mathematics of the Network</h3>
                        <p class="mb-4">The operation relies on two main phases: Forward Propagation and Backpropagation.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Forward Propagation</h4>
                        <p class="mb-2">Data is passed through the network to get a prediction.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def forward_prop(W1, b1, W2, b2, X):
    Z1 = W1.dot(X) + b1
    A1 = ReLU(Z1)
    Z2 = W2.dot(A1) + b2
    A2 = softmax(Z2)
    return Z1, A1, Z2, A2</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Activation Functions</h4>
                        <p class="mb-4"><strong>ReLU (Rectified Linear Unit):</strong> Introduces non-linearity.</p>
                        <img src="assets/img/mnist/relu.svg" alt="ReLU Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4"><strong>Softmax:</strong> Transforms scores into probabilities.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Backpropagation</h4>
                        <p class="mb-2">We calculate the error and adjust the weights to minimize this error (Gradient Descent).</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def back_prop(Z1, A1, Z2, A2, W1, W2, X, Y):
    dZ2 = A2 - one_hot(Y)
    dW2 = 1 / m * dZ2.dot(A1.T)
    db2 = 1 / m * np.sum(dZ2)
    dZ1 = W2.T.dot(dZ2) * ReLU_deriv(Z1)
    dW1 = 1 / m * dZ1.dot(X.T)
    db1 = 1 / m * np.sum(dZ1)
    return dW1, db1, dW2, db2</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Results</h3>
                        <p class="mb-4">After training on the MNIST dataset, this simple model achieves an accuracy of about <strong>85-90%</strong> on the test data.</p>
                        <p class="mb-4">This project proves that you don't need a "black box" to do AI. Understanding the underlying mathematics gives total mastery over the model.</p>

                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                View Full Code on GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "Deep Learning", "Maths", "NumPy"],
                    img: "mnist/cover.png"
                },
                {
                    id: "knn",
                    title: "Iris detection using K-NN",
                    desc: "Complete implementation of K-NN algorithm without libraries, explained on the Iris dataset.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">K-Nearest Neighbors (K-NN) is one of the simplest machine learning algorithms. If you want to start learning Machine Learning, it's an easy and intuitive starting point.</p>
                        <p class="mb-4">It works by calculating distances and using a majority vote to determine the correct class of a new data point.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Explanation</h3>
                        <p class="mb-4">The K-NN algorithm is based on distance calculation to measure how close a point is to another (like a new point, P-new).</p>
                        <p class="mb-4">Once all distances are calculated, the algorithm performs a vote. We choose a value for k (the number of neighbors), select the k closest points, retrieve their classes, and assign the majority class to the new point.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Dataset Overview: Iris</h3>
                        <p class="mb-4">The dataset used in this project is the famous Iris dataset. It contains information on 150 flowers, divided into 3 species: Iris-setosa, Iris-versicolor, and Iris-virginica. Each flower has 4 characteristics: sepal length, sepal width, petal length, and petal width.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Mathematics Behind K-NN</h3>
                        <p class="mb-4">There is one essential formula to know: the distance calculation. Here are the 3 main methods:</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Euclidean Distance</h4>
                        <img src="assets/img/knn/euclidean.svg" alt="Euclidean Distance Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">The square root of the sum of squared differences.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Manhattan Distance</h4>
                        <img src="assets/img/knn/manhattan.svg" alt="Manhattan Distance Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">The sum of absolute differences.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Minkowski Distance</h4>
                        <img src="assets/img/knn/minkowski.svg" alt="Minkowski Distance Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">Generalization of the previous two.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Implementing K-NN "From Scratch"</h3>
                        
                        <h4 class="text-xl font-bold mb-2 text-primary">1. Loading Data</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Load dataset
dataframe = pd.read_csv("data/iris.csv")
distance = {}
iris_class = {'Iris-setosa':0, 'Iris-versicolor':0, 'Iris-virginica':0 }</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Euclidean Distance Function</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def euclidean_distance(x, xn):
    dist = 0
    for i in range(1, len(xn)):     
        dist += (x[i] - xn[i])**2
    return math.sqrt(dist)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Calculating Distances and Voting</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Sort and select k neighbors
sorted_items = sorted(distance.items(), key=lambda item: item[1])
k_smallest = sorted_items[:k]

# Majority Vote
for item in k_smallest:
    # ... count classes ...
print("Class of Pnew :", max(iris_class, key=iris_class.get))</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">How to Choose the Best k Value</h3>
                        <p class="mb-4">Choosing the right value for k is very important. If k is too small, the model can be too sensitive to noise (overfitting). If k is too large, it can smooth out important patterns (underfitting).</p>
                        <p class="mb-4">The best way to choose k is to test different values and observe the error on the test set. As shown in the graph below, the optimal k is where the test error is lowest (elbow method):</p>
                        <img src="assets/img/knn/best_k.svg" alt="Best K Graph" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">K-NN is an excellent starting point in Machine Learning because it is easy to understand and does not require complex mathematics or heavy training.</p>
                        
                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                View Full Code on GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "Algorithms", "Data Science"],
                    img: "project-knn.png"
                },
                {
                    id: "decision-tree",
                    title: "Decision Tree (From Scratch)",
                    desc: "Implementation of a decision tree without Scikit-Learn on the Titanic dataset.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">We will explore how a decision tree works without using magic libraries like scikit-learn. This is a "from scratch" approach, designed to help you truly understand how the model works internally.</p>
                        <p class="mb-4">It's surprisingly simple: in this article, I use object-oriented programming in Python to build a decision tree classifier step by step.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">What is a Decision Tree?</h3>
                        <p class="mb-4">A decision tree is one of the simplest yet most powerful machine learning algorithms to understand.</p>
                        <p class="mb-4">Basically, it works like a series of questions. Each internal node asks a yes/no question about a feature (e.g., "Is the passenger male?"), and depending on the answer, the data goes left or right.</p>
                        <p class="mb-4">This continues until the data reaches a leaf, where a final prediction is made like "Survived" or "Did not survive".</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">Core Idea and Intuition</h4>
                        <p class="mb-4">The tree is built by splitting the dataset multiple times into subgroups that are increasingly "pure" (groups where most passengers share the same outcome).</p>
                        <p class="mb-4">At each step, the algorithm chooses the best question to reduce uncertainty, based on a metric like Gini impurity or entropy.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Goal of this Project</h3>
                        <p class="mb-4">In this project, we don't just want to use a decision tree — we want to build it from scratch, line by line.</p>
                        <p class="mb-4">The goal is simple: understand what really happens under the hood.</p>
                        <p class="mb-4">We will train our decision tree on the Titanic dataset, one of the most famous in data science. It is a binary classification: survived (1) or not (0), based on features like sex, age, and class.</p>
                        <p class="mb-4">But instead of using a pre-built Scikit-Learn model, we will:</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>Implement everything ourselves in pure Python</li>
                            <li>Use an Object-Oriented (OOP) approach with classes like <code>DecisionTree</code> and <code>Node</code></li>
                            <li>Avoid any machine learning library to stay close to the logic</li>
                            <li>Understand every decision: how splits are made, how purity is calculated, how predictions are made</li>
                        </ul>
                        <p class="mb-4">This project does not aim for the highest accuracy. It is about gaining true intuition by building the tool yourself.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Code Structure</h3>
                        <p class="mb-4">To keep things clean and modular, the project is structured using two main classes:</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Node.py</h4>
                        <p class="mb-4">This class represents each node of the tree — whether it is a decision node (with a split condition) or a leaf (with a prediction).</p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li><code>feature_index</code>: which feature is used to split</li>
                            <li><code>threshold</code>: comparison value</li>
                            <li><code>left / right</code>: child nodes</li>
                            <li><code>is_leaf</code>: True if it is a leaf</li>
                            <li><code>prediction</code>: predicted value if it is a leaf</li>
                            <li><code>samples_count</code>: number of samples reaching this node</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. DecisionTree.py</h4>
                        <p class="mb-4">This is the main class that will:</p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li>Train the tree (<code>fit</code>)</li>
                            <li>Build it recursively (<code>build_tree</code>)</li>
                            <li>Find the best split (<code>best_split</code>)</li>
                            <li>Make predictions (<code>predict</code> and <code>predict_sample</code>)</li>
                            <li>Use Gini or entropy as splitting criterion</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Main.py</h4>
                        <p class="mb-4">This is the script that ties everything together. It handles data loading, model building, and performance evaluation.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">The Titanic Dataset</h3>
                        <p class="mb-4">To test our tree, we use one of the most famous datasets: the Titanic.</p>
                        <div class="overflow-x-auto mb-6">
                            <table class="w-full text-left text-slate-300 border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-700">
                                        <th class="py-2 px-4">Feature</th>
                                        <th class="py-2 px-4">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Pclass</td><td class="py-2 px-4">Passenger Class (1st, 2nd, 3rd)</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Sex</td><td class="py-2 px-4">Gender (male or female)</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Age</td><td class="py-2 px-4">Age in years</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">SibSp</td><td class="py-2 px-4">Number of siblings/spouses aboard</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Parch</td><td class="py-2 px-4">Number of parents/children aboard</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Fare</td><td class="py-2 px-4">Ticket price</td></tr>
                                    <tr class="border-b border-slate-800"><td class="py-2 px-4">Embarked</td><td class="py-2 px-4">Port of Embarkation (C, Q, S)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Building the Tree Step by Step</h3>
                        <p class="mb-4">Now, let's dive under the hood and explore the logic behind a decision tree — not just conceptually, but mathematically and in code.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">Gini Impurity</h4>
                        <p class="mb-4">Goal: measure how "pure" a set of examples is. If a node contains only survivors or only non-survivors, it is perfectly pure. Otherwise, impurity increases.</p>
                        <img src="assets/img/decision_tree/gini_formula.svg" alt="Gini Impurity Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">Where Pi is the proportion of samples of class i in dataset D, and C is the number of classes.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def gini_impurity(y):
    counts = Counter(y)
    impurity = 1.0
    for label in counts:
        prob_of_lbl = counts[label] / len(y)
        impurity -= prob_of_lbl ** 2
    return impurity</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Best Split</h4>
                        <p class="mb-4">This is the most important step. For each feature, we try every possible threshold, split the data, and calculate the weighted Gini impurity. The goal is to minimize impurity after the split.</p>
                        <img src="assets/img/decision_tree/weighted_gini.svg" alt="Weighted Gini Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def best_split(X, y):
    best_gain = float('inf')
    best_feature, best_threshold = None, None

    for feature in range(X.shape[1]):
        thresholds = np.unique(X[:, feature])
        for t in thresholds:
            left_idx = X[:, feature] <= t
            right_idx = X[:, feature] > t

            if len(y[left_idx]) == 0 or len(y[right_idx]) == 0:
                continue

            gini_left = gini_impurity(y[left_idx])
            gini_right = gini_impurity(y[right_idx])
            gini_split = (len(y[left_idx]) * gini_left + len(y[right_idx]) * gini_right) / len(y)

            if gini_split < best_gain:
                best_gain = gini_split
                best_feature = feature
                best_threshold = t

    return best_feature, best_threshold</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Recursive Tree Construction</h3>
                        <p class="mb-4">Once the best split is found, we split the data and repeat the process on the two subsets (left and right). This is handled by the <code>build_tree()</code> method.</p>
                        <p class="mb-4">Recursion stops when:</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>All samples belong to the same class (pure)</li>
                            <li>Or no more useful splits can be made</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Prediction Logic</h3>
                        <p class="mb-4">To predict, we follow the tree: at each internal node, check the feature value, go left or right depending on the threshold, until reaching a leaf.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def predict_sample(self, x):
    node = self.root
    while not node.is_leaf:
        if x[node.feature_index] <= node.threshold:
            node = node.left
        else:
            node = node.right
    return node.prediction</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Training on Titanic Data</h3>
                        <p class="mb-4">Now that we have built our tree, it's time to train it on a real dataset.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">Data Preparation</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Step 1: Load and prepare the dataset
def load_titanic_data(file_path):
    # ... (code to load CSV) ...
    # Use selected features: Pclass, Sex, Age
    pclass = int(row['Pclass'])
    sex = 0 if row['Sex'] == 'male' else 1  # Encode: male = 0, female = 1
    age = float(row['Age']) if row['Age'] else None
    # ...
    return X, y</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Training the Model</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Initialize and train the decision tree
tree = DecisionTree(max_depth=3, min_samples_split=2, criterion="gini")
tree.fit(X, y)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Accuracy Evaluation</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Step 3: Predict on training data
predictions = tree.predict(X)

# Step 4: Compare predictions to actual results
correct = sum(1 for i in range(len(y)) if y[i] == predictions[i])
accuracy = correct / len(y)
print(f"\nAccuracy on training data: {accuracy:.2f}")</code></pre>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-white">Strengths and Limitations</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 class="text-xl font-bold mb-2 text-primary">Strengths</h4>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Easy to Understand:</strong> Reflects human decision-making.</li>
                                    <li><strong>No Scaling Needed:</strong> Splits on thresholds, not distances.</li>
                                    <li><strong>Mixed Data:</strong> Handles numerical and categorical well.</li>
                                    <li><strong>Efficient on Small Datasets:</strong> Good for quick insights.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold mb-2 text-primary">Limitations</h4>
                                <ul class="list-disc list-inside space-y-2 text-slate-300">
                                    <li><strong>Overfitting:</strong> Can memorize data without pruning.</li>
                                    <li><strong>Unstable:</strong> Sensitive to small data changes.</li>
                                    <li><strong>Biased towards Dominant Attributes:</strong> Favors features with many levels.</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">In this article, we didn't just use a decision tree — we built one from scratch. No shortcuts, no magic scikit-learn functions.</p>
                        <p class="mb-4">By doing everything manually, we understood how the model really works. This knowledge is essential for any ML engineer before moving to high-level frameworks.</p>
                        <p class="mb-4">When you build something from scratch, you stop being a "tool user" and become a solution creator.</p>

                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Full Code on my GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Python", "ML from Scratch", "OOP", "Titanic"],
                    img: "project-dt.png"
                },
                {
                    id: "logistic",
                    title: "Logistic Regression from Scratch",
                    desc: "Understanding logistic regression with an example on the Diabetes dataset.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">Logistic regression is a machine learning algorithm inspired by linear regression. However, the name can be misleading because logistic regression is not used for predicting continuous values — it’s actually used for classification.</p>
                        <p class="mb-4">Typically, logistic regression is applied to binary classification problems, where the outcome is one of two categories: for example, 1 or 0, cancer or not, sick or healthy, etc.</p>
                        <p class="mb-6">In linear regression, the output is a straight line. In contrast, logistic regression produces an S-shaped curve, known as a sigmoid curve, which maps any real-valued number into a probability between 0 and 1.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">The Mathematics Behind Logistic Regression</h3>
                        <p class="mb-4">In logistic regression, there are six important formulas to understand:</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>Linear score calculation (z)</li>
                            <li>Applying the sigmoid function</li>
                            <li>Cross entropy (Loss)</li>
                            <li>Gradient calculation</li>
                            <li>Gradient calculation for a weight</li>
                            <li>Gradient descent</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Linear Score Calculation (z)</h4>
                        <img src="assets/img/logistic_regression/Linear score calculation (z).webp" alt="Linear Score Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2"><strong>z = w₀ + w₁x₁ + ... + wₙxₙ</strong></p>
                        <p class="mb-4 text-sm text-slate-400">Where <em>w</em> are weights and <em>x</em> are input features.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Method linear scoring
def linear_score(x1, x2, x3, x4, x5, x6, x7, x8):
    z = w0 + x1*w1 + x2*w2 + x3*w3 + x4*w4 + x5*w5 + x6*w6 + x7*w7 + x8*w8
    return z</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Applying the Sigmoid Function (σ)</h4>
                        <img src="assets/img/logistic_regression/sigmoïd function (σ).webp" alt="Sigmoid Function Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">The sigmoid function maps 'z' to a probability between 0 and 1.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Sigmoid function
def sigmoid_function(z):
    if z >= 0:
        return 1 / (1 + math.exp(-z))
    else:
        exp_z = math.exp(z) 
        return exp_z / (1 + exp_z)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Cross Entropy (Loss)</h4>
                        <img src="assets/img/logistic_regression/Cross entropy (Loss).webp" alt="Cross Entropy Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">Measures the difference between the predicted probability and the actual class.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Cross entropy
def cross_entropy(y, p, eps=1e-15):
    p = max(min(p, 1 - eps), eps)
    loss = -(y * math.log(p) + (1 - y) * math.log(1 - p))
    return loss</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">4. Gradient Calculation</h4>
                        <img src="assets/img/logistic_regression/Gradient calculation.webp" alt="Gradient Calculation Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">Calculates the error term (predicted - actual).</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Gradient calcul
def gradient_calcul(y,p):
    return p - y</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">5. Gradient Calculation for a Weight</h4>
                        <img src="assets/img/logistic_regression/Gradient calculation for a weight.webp" alt="Gradient Weight Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        
                        <h4 class="text-xl font-bold mb-2 text-primary mt-6">6. Gradient Descent (Weight Update)</h4>
                        <img src="assets/img/logistic_regression/Gradient descent.webp" alt="Gradient Descent Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-2">Updates weights to minimize the loss.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Weight update
def weight_update(learning_rate, w, grad):
    return w - learning_rate * grad</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Training the Model</h3>
                        <p class="mb-4">We used the <strong>Pima Indians Diabetes Database</strong>. The training consists of optimizing weights over several epochs.</p>
                        <img src="assets/img/logistic_regression/elbow method.webp" alt="Elbow Method Graph" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Training Loop (Simplified)
for j in range(epochs):
    for i in range(len(dataframe)):
        # ... load features x1 to x8 ...
        z = linear_score(x1, ... x8)
        p = sigmoid_function(z)
        error = gradient_calcul(true_class, p)
        
        # Update weights
        w0 = weight_update(learning_rate, w0, grad(error, 1))
        w1 = weight_update(learning_rate, w1, grad(error, x1))
        # ... repeat for all weights ...</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">By implementing logistic regression from scratch, we gained a deep understanding of the underlying mathematics — particularly how the model learns via gradient descent and minimizes loss. This foundation is crucial before mastering libraries like Scikit-Learn.</p>
                        
                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo/Diabet-detection-using-Logistic-Regression" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                View Full Code on GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Machine Learning", "Python", "Maths"],
                    img: "project-logistic.png"
                },
                {
                    id: "flask",
                    title: "API with Python Flask",
                    desc: "Creating a complete RESTful API for pollution data (LCSQA).",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">During a university project, we worked on developing an API (Application Programming Interface). The goal was to create an API for environmental data provided by LCSQA (Laboratoire Central de Surveillance de la Qualité de l’Air).</p>
                        <p class="mb-4">An API is a system that allows access to external data via HTTP or HTTPS requests. This system is particularly useful for implementing a microservices architecture.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">How does it work?</h3>
                        <p class="mb-4">The functioning is simple: you make an HTTP request to the server, and in return, you access structured data in JSON format.</p>
                        <img src="assets/img/api/api_diagram.svg" alt="API Diagram" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Advantages and Disadvantages of APIs</h3>
                        <h4 class="text-xl font-bold mb-2 text-primary">Advantages:</h4>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li><strong>Ease of Integration:</strong> APIs enable seamless integration between different systems.</li>
                            <li><strong>Efficiency:</strong> Access functionality without building from scratch.</li>
                            <li><strong>Scalability:</strong> Easily scale by integrating additional services.</li>
                            <li><strong>Automation:</strong> Facilitate automation without human intervention.</li>
                            <li><strong>Improved User Experience:</strong> Enhance functionality with third-party services.</li>
                        </ul>

                        <h4 class="text-xl font-bold mb-2 text-primary">Disadvantages:</h4>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Security Risks:</strong> Vulnerabilities if not properly secured.</li>
                            <li><strong>Dependency:</strong> Reliance on external services availability.</li>
                            <li><strong>Complexity:</strong> Can add complexity to system architecture.</li>
                            <li><strong>Rate Limits:</strong> Restrictions on request numbers.</li>
                            <li><strong>Maintenance:</strong> Ongoing updates required.</li>
                        </ul>

                        <h3 class="text-2xl font-bold mb-4 text-white">Creation Steps</h3>
                        <img src="assets/img/api/api_workflow.svg" alt="API Workflow" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <ol class="list-decimal list-inside mb-6 space-y-2 text-slate-300">
                            <li>Define the objective</li>
                            <li>Database Architecture</li>
                            <li>Define data sources</li>
                            <li>Import data</li>
                            <li>Create Python code with Flask</li>
                            <li>Deployment & Visualization</li>
                        </ol>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Database Architecture</h4>
                        <p class="mb-4">We identified 5 important tables: Polluants, Organismes, ZAS (Zone Administrative de Surveillance), Stations, and Mesures.</p>
                        <img src="assets/img/api/architecture_bd.webp" alt="Database Schema" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Importing Data</h4>
                        <p class="mb-4">I used 3 scripts: <code>Recuperation.py</code> (download CSV), <code>Create_base.py</code> (create SQLite), and <code>Insert_data.py</code> (insert data).</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Example: Insert_data.py (Excerpt)
def insert_data_from_csv(year, db_name="pollution_data.db"):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    # ... (read CSV and insert) ...
    cursor.execute('''INSERT INTO Mesures (...) VALUES (...)''', (...))
    conn.commit()</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Creating the API with Flask</h4>
                        <p class="mb-4">The goal is to create routes containing JSON data. Here are some endpoints: <code>/organismes</code>, <code>/stations</code>, <code>/mesures</code>.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">@app.route('/stations', methods=['GET'])
def get_stations():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Stations')
    stations = cursor.fetchall()
    conn.close()
    return jsonify([dict(row) for row in stations])</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Data Visualization</h3>
                        <p class="mb-4">I created a dashboard using PowerBI to visualize the data exposed by the API.</p>
                        <img src="assets/img/api/dashboard.webp" alt="PowerBI Dashboard" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">Creating an API allows for externalizing data and separating the application into distinct services. It is an essential skill for modern development.</p>
                        
                        <h3 class="text-2xl font-bold mb-4 text-white">Bibliography</h3>
                        <p class="mb-4"><strong>Articles and Tutorials:</strong></p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li>“Creating a RESTful API with Python and Flask” by Miguel Grinberg.</li>
                            <li>“Flask-RESTful Quickstart” on flask-restful.readthedocs.io.</li>
                        </ul>
                        <p class="mb-4"><strong>Documentation:</strong></p>
                        <ul class="list-disc list-inside mb-4 space-y-2 text-slate-300">
                            <li>Flask Documentation: <a href="https://flask.palletsprojects.com/en/2.0.x/" class="text-primary hover:underline">flask.palletsprojects.com</a></li>
                            <li>SQLite Documentation: <a href="https://www.sqlite.org/docs.html" class="text-primary hover:underline">sqlite.org</a></li>
                        </ul>
                        <p class="mb-4"><strong>Video:</strong></p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li>“REST APIs with Flask and Python in 2022” by Tech With Tim on YouTube.</li>
                        </ul>

                        <div class="flex gap-4 mt-8">
                            <a href="https://medium.com/@ammar.souchon/how-to-create-an-api-with-python-flask-5fbee3ebad5e" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Read Full Article on Medium
                            </a>
                        </div>
                    `,
                    tags: ["Python", "Flask", "API", "SQLite"],
                    img: "project-api.png"
                }
            ]
        },
        skills: {
            title: "Skills",
            categories: [
                {
                    name: "Languages & Dev",
                    items: "Python, Dart/Flutter, SQL, PL/SQL"
                },
                {
                    name: "Data & IA",
                    items: "Pandas, NumPy, Scikit-Learn, OpenCV, K-NN, Naïves Bayes, LDA, Decision Tree, Random Forest, Oriented document database, Graph database, Vector database"
                },
                {
                    name: "Tools & Web",
                    items: "Flask, Power BI, Git, GitHub, Agile, Scrum, Kanban"
                }
            ]
        },
        footer: {
            rights: "All rights reserved.",
            made_with: "Designed with passion and code."
        }
    }
};

// State
let currentLang = navigator.language.startsWith('fr') ? 'fr' : 'en';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the project detail page
    if (window.location.pathname.includes('project.html')) {
        loadProjectDetail();
    } else {
        updateContent();
    }

    initAnimations();
    initParticles();

    // Event Listeners
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    updateFlag();
});

function updateContent() {
    const translations = translationsData[currentLang];

    // Update simple text elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key.includes('items.')) return;

        const keys = key.split('.');
        let value = translations;

        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                value = null;
                break;
            }
        }

        if (value && typeof value === 'string') {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.innerHTML = value;
            }
        }
    });

    // Update CV Link HREF
    const cvLink = document.querySelector('span[data-i18n="hero.cta_cv"]')?.closest('a');
    if (cvLink && translations.hero.cta_link_cv) {
        cvLink.href = translations.hero.cta_link_cv;
    }

    // Update Lists
    updateList('education-list', translations.education.items, createEducationItem);
    updateList('experience-list', translations.experience.items, createExperienceItem);
    updateList('projects-list', translations.projects.items, createProjectItem);
    updateList('skills-list', translations.skills.categories, createSkillItem);

    updateFlag();
}

function loadProjectDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const translations = translationsData[currentLang];
    const project = translations.projects.items.find(p => p.id === projectId);

    const container = document.getElementById('project-content');
    if (!container) return;

    if (project) {
        container.innerHTML = `
            <div class="fade-in-up">
                <div class="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-2xl">
                    <div class="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10"></div>
                    <img src="assets/img/${project.img}" alt="${project.title}" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 left-0 p-8 z-20">
                        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">${project.title}</h1>
                        <div class="flex flex-wrap gap-2">
                            ${project.tags.map(tag => `<span class="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30 font-mono backdrop-blur-md">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="glass-card p-8 rounded-2xl border border-white/5">
                    <h2 class="text-2xl font-bold mb-6">À propos du projet</h2>
                    <div class="text-lg leading-relaxed mb-8 space-y-4">
                        ${project.fullDesc}
                    </div>
                    
                    <div class="flex gap-4">
                        <a href="https://medium.com/@ammar.souchon" target="_blank" class="px-6 py-3 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors shadow-lg">
                            Lire sur Medium
                        </a>
                        <a href="https://github.com/AmmarSo" target="_blank" class="px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors">
                            Voir le Code
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `<p class="text-center text-xl text-red-500">Projet non trouvé.</p>`;
    }
    updateFlag();
}

function updateList(containerId, items, createItemFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    items.forEach((item, index) => {
        container.innerHTML += createItemFn(item, index);
    });
    initAnimations();
}

function createEducationItem(item, index) {
    return `
        <div class="relative pl-8 border-l-2 border-primary/30 fade-in-up" style="animation-delay: ${index * 0.1}s">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
            <div class="mb-1 text-sm text-primary font-mono">${item.date}</div>
            <h3 class="text-xl font-bold">${item.degree}</h3>
            <div class="text-slate-500 dark:text-slate-400 mb-2">${item.school}</div>
            <p class="text-slate-600 dark:text-slate-300 text-sm">${item.desc}</p>
        </div>
    `;
}

function createExperienceItem(item, index) {
    return `
        <div class="relative mb-12 timeline-item fade-in-up">
            <div class="md:flex items-center justify-between w-full ${index % 2 === 1 ? 'flex-row-reverse' : ''}">
                <div class="md:w-5/12 mb-4 md:mb-0 ${index % 2 === 1 ? 'pl-8' : 'md:text-right pr-8'}">
                    <h3 class="text-xl font-bold">${item.role}</h3>
                    <div class="text-primary font-medium">${item.company}</div>
                    <div class="text-sm text-slate-500 mt-1 font-mono">${item.date}</div>
                </div>
                <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(14,165,233,0.8)] transform -translate-x-1/2 z-10 mt-1.5"></div>
                <div class="md:w-5/12 ${index % 2 === 1 ? 'md:text-right pr-8' : 'pl-8'}">
                    <div class="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createProjectItem(item, index) {
    return `
        <a href="project.html?id=${item.id}" class="glass-card rounded-xl overflow-hidden group fade-in-up block hover:scale-[1.02] transition-transform duration-300">
            <div class="h-48 bg-slate-900 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80 z-10"></div>
                <img src="assets/img/${item.img}" alt="${item.title}" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <div class="absolute bottom-4 left-4 z-20">
                    <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">${item.title}</h3>
                </div>
            </div>
            <div class="p-6">
                <p class="text-slate-600 dark:text-slate-400 mb-4 text-sm h-20 overflow-hidden line-clamp-3">${item.desc}</p>
                <div class="flex flex-wrap gap-2">
                    ${item.tags.map(tag => `<span class="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

function createSkillItem(category, index) {
    return `
        <div class="glass-card p-6 rounded-xl fade-in-up">
            <h3 class="text-lg font-bold mb-4 border-b border-white/10 pb-2">${category.name}</h3>
            <div class="flex flex-wrap gap-2">
                ${category.items.split(', ').map(skill => `
                    <span class="px-3 py-1.5 text-sm rounded-lg bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-white/5 hover:border-primary/50 hover:text-primary transition-all cursor-default">
                        ${skill}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    if (window.location.pathname.includes('project.html')) {
        loadProjectDetail();
    } else {
        updateContent();
    }
}

function updateFlag() {
    const flagSpan = document.getElementById('current-lang-flag');
    if (flagSpan) {
        flagSpan.textContent = currentLang === 'fr' ? '🇫🇷' : '🇬🇧';
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Particles
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    // Reset canvas to avoid multiple contexts or listeners if called repeatedly
    const oldCanvas = canvas.cloneNode(true);
    canvas.parentNode.replaceChild(oldCanvas, canvas);
    const newCanvas = document.getElementById('particles-canvas');

    const ctx = newCanvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    function resize() {
        width = newCanvas.width = window.innerWidth;
        height = newCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.size = Math.random() * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }
    }

    for (let i = 0; i < 40; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Fixed Dark Mode colors
        const particleColor = 'rgba(14, 165, 233, 0.3)'; // Sky-500
        const lineColor = 'rgba(14, 165, 233, '; // Sky

        particles.forEach(p => {
            p.update();
            ctx.fillStyle = particleColor;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.strokeStyle = `${lineColor}${0.05 * (1 - dist / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}
