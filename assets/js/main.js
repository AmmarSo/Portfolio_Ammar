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
            role: "Ingénieur Big Data & IA",
            tagline: "Passionné par l'IA et la data, je conçois des systèmes intelligents pour la santé et l'industrie.",
            cta_cv: "Télécharger mon CV",
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
                    school: "IUT de Créteil-Vitry (UPEC)",
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
                    desc: "Plateforme pour enseignants du bâtiment. Scraping de ressources, DB multimodale (vectoriel, graphe), Fine-tuning LLM (Mistral 8B), App Flutter.",
                    fullDesc: "BuildAI est une plateforme complète conçue pour aider les enseignants dans le domaine du bâtiment à créer des cours interactifs. Le projet intègre plusieurs technologies avancées : scraping de données massives avec Python, une base de données multimodale combinant vectoriel et graphe pour une recherche sémantique précise, et le fine-tuning d'un modèle Mistral 8B pour générer du contenu pédagogique pertinent. Une application mobile Flutter accompagne la plateforme.",
                    tags: ["LLM", "Python", "Flutter", "GraphDB"],
                    img: "project-buildai.png"
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
                    title: "Decision Tree from Scratch",
                    desc: "Construction d'un arbre de décision sans Scikit-Learn sur le dataset Titanic.",
                    fullDesc: "Ce projet est une plongée profonde dans les algorithmes d'arbres de décision. J'ai construit un classifieur complet en Python pur pour prédire la survie des passagers du Titanic. <br><br> <strong>Détails techniques :</strong> <br> - <strong>Entropie & Gain d'Information :</strong> J'ai codé les formules mathématiques de l'entropie de Shannon pour évaluer la pureté des nœuds et maximiser le gain d'information à chaque division (split). <br> - <strong>Récursivité :</strong> L'arbre est construit de manière récursive, divisant les données jusqu'à atteindre une profondeur maximale ou une pureté suffisante. <br> - <strong>Gestion des données :</strong> Traitement des variables catégorielles et numériques sans les abstractions de Pandas/Scikit-Learn. <br><br> Ce projet démontre une maîtrise des structures de données et des mathématiques sous-jacentes au Machine Learning.",
                    tags: ["Python", "Machine Learning", "Titanic"],
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
                    id: "mnist",
                    title: "Neural Network from scratch (MNIST)",
                    desc: "Réseau de neurones complet pour la reconnaissance de chiffres manuscrits.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">Le système de reconnaissance de chiffres manuscrits existe déjà, mais j'ai travaillé pour améliorer mes compétences en réseaux de neurones et je souhaite partager mon expérience sur le sujet. Les réseaux de neurones sont très importants aujourd'hui, car nous les rencontrons dans de nombreuses situations, de la reconnaissance de plantes à l'imagerie médicale. Mon objectif dans cet article est de développer un réseau de neurones à partir de zéro, et pour ce faire, j'ai choisi l'un des problèmes de classification les plus basiques : "Reconnaissance de chiffres manuscrits".</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Réflexion</h3>
                        <p class="mb-4">La première étape avant de coder est de réfléchir et d'apprendre sur les réseaux de neurones. Le réseau de neurones est très simple et peut être simplifié comme suit :</p>
                        <img src="assets/img/mnist/architecture.svg" alt="Architecture Réseau de Neurones" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        
                        <p class="mb-4">Nous pouvons voir 3 couches différentes :</p>
                        <ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
                            <li><strong>Couche d'Entrée :</strong> C'est la première couche pour récupérer les informations d'entrée.</li>
                            <li><strong>Couches Cachées :</strong> C'est la partie la plus importante du réseau de neurones, le traitement invisible.</li>
                            <li><strong>Couche de Sortie :</strong> La couche de sortie est le résultat de notre réseau.</li>
                        </ul>

                        <p class="mb-4">Pour la question des nombres manuscrits, nous allons définir le nombre d'entrées et de sorties. J'utilise le dataset MNIST (images 28x28). Nous avons 10 possibilités pour les couches de sortie (0 à 9).</p>
                        <p class="mb-4 text-sm text-slate-400">Nombre de neurones dans la première couche (entrée) : 28 x 28 = 784 pixels<br>Nombre de neurones dans la dernière couche (sortie) : 10 (nombre de classes)</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Codage</h3>
                        <p class="mb-4">Maintenant, il est temps de créer le réseau de neurones à partir de zéro. Nous avons 4 étapes pour faire cela :</p>
                        <ol class="list-decimal list-inside mb-6 space-y-2 text-slate-300">
                            <li>Créer une classe Neuron</li>
                            <li>Créer une classe Layer</li>
                            <li>Créer une classe Network</li>
                            <li>Créer un code pour entraîner le réseau de neurones et tester la précision</li>
                        </ol>

                        <h4 class="text-xl font-bold mb-2 text-primary">Classe Neuron</h4>
                        <p class="mb-4">Le neurone est basé sur ce que nous savons de l'activité électrique du cerveau humain. Le neurone est très simple à coder, nous avons 4 méthodes importantes : <code>__init__</code>, <code>activation_function</code>, <code>forward</code>, <code>backward</code>.</p>
                        
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def __init__(self, input_size):
    self.weights = np.random.randn(input_size) * np.sqrt(2. / input_size)
    self.bias = 0.0
    self.last_inputs = None
    self.last_z = None</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Fonction d'Activation (ReLU)</h4>
                        <p class="mb-4">Nous utilisons la fonction d'activation la plus simple et la plus populaire (ReLU).</p>
                        <img src="assets/img/mnist/relu.svg" alt="Fonction ReLU" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def activation_function(self, x):
    return np.maximum(0, x)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Forward (Propagation)</h4>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def forward(self, inputs):
    self.last_inputs = np.array(inputs)
    self.last_z = np.dot(self.weights, self.last_inputs) + self.bias
    return self.activation_function(self.last_z)</code></pre>
                        </div>

                        <h4 class="text-xl font-bold mb-2 text-primary">Backward (Rétropropagation)</h4>
                        <p class="mb-4">Dernière méthode et la plus importante. Nous calculons d'abord la dérivée de la fonction d'activation.</p>
                        <img src="assets/img/mnist/relu_derivative.svg" alt="Dérivée ReLU" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python">def backward(self, dL_dout, learning_rate):
    dL_dz = dL_dout * (1 if self.last_z > 0 else 0)
    dL_dw = dL_dz * self.last_inputs
    dL_db = dL_dz
    self.weights -= learning_rate * dL_dw
    self.bias -= learning_rate * dL_db
    dL_dx = self.weights * dL_dz
    return dL_dx</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Entraînement du Modèle</h3>
                        <p class="mb-4">Le processus d'entraînement implique plusieurs étapes clés : Forward Pass, Calcul de la Perte (Cross-Entropy), Backward Pass, et Mise à jour des Paramètres.</p>
                        <div class="bg-slate-950 p-4 rounded-lg mb-6 border border-white/10 font-mono text-sm overflow-x-auto">
<pre><code class="language-python"># Training Loop (Simplified)
for epoch in range(epochs):
    for i in range(len(train_images)):
        outputs = network.forward(train_images[i])
        loss = cross_entropy_loss(train_labels[i], outputs)
        dL_dout = outputs - train_labels[i]
        network.backward(dL_dout, learning_rate)</code></pre>
                        </div>

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">Nous pouvons conclure que le réseau de neurones est un domaine fascinant. Le cas des chiffres manuscrits est le plus simple pour commencer. Dans ce cas, nous pouvons observer de bonnes performances grâce à 350 neurones cachés, un taux d'apprentissage de 0.001 et 3 époques.</p>
                        
                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                Voir le Code Complet sur GitHub
                            </a>
                        </div>
                    `,
                    tags: ["Deep Learning", "Python", "Neural Networks"],
                    img: "mnist/cover.png"
                },
                {
                    id: "flask",
                    title: "API with Python Flask",
                    desc: "Guide de création d'une API RESTful robuste avec Flask.",
                    fullDesc: "Ce projet est un guide pratique sur le développement Backend avec Python et Flask. Il ne s'agit pas seulement de créer des routes, mais de construire une API RESTful robuste et scalable. <br><br> <strong>Concepts abordés :</strong> <br> - <strong>Routing Avancé :</strong> Gestion des méthodes HTTP (GET, POST, PUT, DELETE) et des paramètres d'URL. <br> - <strong>Structure MVC :</strong> Organisation du code pour séparer la logique métier, les modèles de données et les contrôleurs. <br> - <strong>JSON & Sérialisation :</strong> Communication efficace entre le client et le serveur. <br> - <strong>Bonnes Pratiques :</strong> Gestion des erreurs, codes de statut HTTP et validation des données d'entrée.",
                    tags: ["Web Dev", "Python", "Flask", "API"],
                    img: "project-buildai.png"
                }
            ]
        },
        skills: {
            title: "Compétences Techniques",
            categories: [
                {
                    name: "Langages & Dev",
                    items: "Python, Dart, SQL, PL/SQL"
                },
                {
                    name: "Data & IA",
                    items: "Pandas, NumPy, Scikit-Learn, TensorFlow, OpenCV, Mistral 8B (Fine-tuning)"
                },
                {
                    name: "Outils & Web",
                    items: "Flask, Flutter, Power BI, Git, GitHub"
                }
            ]
        },
        footer: {
            rights: "Tous droits réservés.",
            made_with: "Conçu avec passion et code."
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
            role: "Big Data & AI Engineer",
            tagline: "Passionate about AI and data, I design intelligent systems for healthcare and industry.",
            cta_cv: "Download CV",
            cta_contact: "Contact Me"
        },
        about: {
            title: "Profile",
            description: "Engineering student in Health Technologies (EPISEN, UPEC), specializing in Big Data & AI. Currently an apprentice at the Ministry of Economy (Python development and test automation), I am looking for a new apprenticeship in 2026 focused on AI applied to intelligent systems.",
            values: {
                title: "My Strengths",
                v1: "Perseverance",
                v2: "Relational Skills",
                v3: "Passion"
            }
        },
        education: {
            title: "Education",
            items: [
                {
                    degree: "Engineer in Health Technologies",
                    school: "EPISEN (UPEC) - Vitry-sur-Seine",
                    date: "Sept 2025 - Present",
                    desc: "Specialization in Big Data, AI, Network and Development."
                },
                {
                    degree: "BUT Computer Science",
                    school: "IUT of Créteil-Vitry (UPEC)",
                    date: "Sept 2022 - Aug 2025",
                    desc: "Track: Data Administration, Management and Exploitation."
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
                    desc: "Development of Python scripts for automated testing (Security, Non-regression). AGILE/SCRUM project management."
                },
                {
                    role: "Apprentice – IT Asset Manager & Tool Dev",
                    company: "Ministry of Economy and Finance (DDFIP)",
                    date: "Sept 2024 - Aug 2025",
                    desc: "Mobile app dev (Dart/Flutter) for inventory. Automation scripts (AutoIT, Python). Compliance testing."
                },
                {
                    role: "Intern – Web/Mobile Dev & AI",
                    company: "LISSI Lab / ADP Consortium",
                    date: "Apr 2024 - Jul 2024",
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
                    desc: "Platform for construction teachers. Resource scraping, Multimodal DB, LLM Fine-tuning (Mistral 8B), Flutter App.",
                    fullDesc: "BuildAI is a comprehensive platform designed to assist teachers in the construction field in creating interactive courses. The project integrates several advanced technologies: massive data scraping with Python, a multimodal database combining vector and graph for precise semantic search, and the fine-tuning of a Mistral 8B model to generate relevant educational content. A Flutter mobile application accompanies the platform.",
                    tags: ["LLM", "Python", "Flutter", "GraphDB"],
                    img: "project-buildai.png"
                },
                {
                    id: "knn",
                    title: "Iris detection using K-NN",
                    desc: "Complete implementation of KNN algorithm without libraries, explained on Iris dataset.",
                    fullDesc: `
                        <h3 class="text-2xl font-bold mb-4 text-white">Introduction</h3>
                        <p class="mb-4">K-Nearest Neighbors is one of the simplest machine learning algorithms. If you want to start learning machine learning, it’s an easy and intuitive place to begin.</p>
                        <p class="mb-4">It works by calculating distances and using a majority vote to determine the correct class for a new data point.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Explanation</h3>
                        <p class="mb-4">The K-NN algorithm is based on distance calculation to measure how close one point is to another (like a new point, P-new).</p>
                        <p class="mb-4">Once all distances are computed, the algorithm performs a vote. We choose a value for k (the number of neighbors), select the k closest points, retrieve their classes, and assign the majority class to the new point.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Dataset Overview: The Iris Dataset</h3>
                        <p class="mb-4">The dataset used in this project is the famous Iris dataset. It contains information about 150 flowers, divided into 3 species: Iris-setosa, Iris-versicolor, and Iris-virginica. Each flower has 4 features: sepal length, sepal width, petal length, and petal width.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Mathematics behind K-NN</h3>
                        <p class="mb-4">There’s one formula we need to know, and that’s how to calculate distance. Here are the 3 main methods:</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">1. Euclidean Distance</h4>
                        <img src="assets/img/knn/euclidean.svg" alt="Euclidean Distance Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">The square root of the sum of squared differences.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">2. Manhattan Distance</h4>
                        <img src="assets/img/knn/manhattan.svg" alt="Manhattan Distance Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">The sum of absolute differences.</p>

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Minkowski Distance</h4>
                        <img src="assets/img/knn/minkowski.svg" alt="Minkowski Distance Formula" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">
                        <p class="mb-4 text-sm text-slate-400">A generalization of the previous two.</p>

                        <h3 class="text-2xl font-bold mb-4 text-white">Implementing K-NN from Scratch</h3>
                        
                        <h4 class="text-xl font-bold mb-2 text-primary">1. Data Loading</h4>
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

                        <h4 class="text-xl font-bold mb-2 text-primary">3. Sorting and Voting</h4>
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
                        <p class="mb-4">Choosing the right value for k is very important. If k is too small, the model can be too sensitive to noise (overfitting). If k is too large, it may smooth out important patterns (underfitting).</p>
                        <p class="mb-4">The best way to choose k is to test different values and observe the error on the test set. As shown in the graph below, the optimal k is where the test error is the lowest:</p>
                        <img src="assets/img/knn/best_k.svg" alt="Best K Graph" class="max-w-full h-auto rounded-lg my-4 border border-white/10 bg-white/5 p-2">

                        <h3 class="text-2xl font-bold mb-4 text-white">Conclusion</h3>
                        <p class="mb-4">K-NN is a great starting point in machine learning because it’s easy to understand and doesn’t require complex math or training. But it’s also powerful when used properly.</p>
                        
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
                    title: "Decision Tree from Scratch",
                    desc: "Building a decision tree without Scikit-Learn on the Titanic dataset.",
                    fullDesc: "This project is a deep dive into decision tree algorithms. I built a complete classifier in pure Python to predict the survival of Titanic passengers. <br><br> <strong>Technical Details:</strong> <br> - <strong>Entropy & Information Gain:</strong> I coded the mathematical formulas for Shannon entropy to evaluate node purity and maximize information gain at each split. <br> - <strong>Recursion:</strong> The tree is built recursively, splitting data until a maximum depth or sufficient purity is reached. <br> - <strong>Data Handling:</strong> Processing categorical and numerical variables without Pandas/Scikit-Learn abstractions. <br><br> This project demonstrates mastery of data structures and the mathematics underlying Machine Learning.",
                    tags: ["Python", "Machine Learning", "Titanic"],
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
                        <p class="mb-4">By implementing Logistic Regression from scratch, we gained a deep understanding of the underlying mathematics—specifically how the model learns via gradient descent and minimizes loss. This foundation is crucial before mastering libraries like Scikit-Learn.</p>
                        
                        <div class="flex gap-4 mt-8">
                            <a href="https://github.com/AmmarSo/Diabet-detection-using-Logistic-Regression" target="_blank" class="text-primary hover:text-white transition-colors border-b border-primary/50 hover:border-white">
                                View Full Code on GitHub
                            </a>
                        </div>
                    `,
                    fullDesc: "This project is a practical guide to Backend development with Python and Flask. It's not just about creating routes, but building a robust and scalable RESTful API. <br><br> <strong>Concepts Covered:</strong> <br> - <strong>Advanced Routing:</strong> Handling HTTP methods (GET, POST, PUT, DELETE) and URL parameters. <br> - <strong>MVC Structure:</strong> Organizing code to separate business logic, data models, and controllers. <br> - <strong>JSON & Serialization:</strong> Efficient communication between client and server. <br> - <strong>Best Practices:</strong> Error handling, HTTP status codes, and input data validation.",
                    tags: ["Web Dev", "Python", "Flask", "API"],
                    img: "project-buildai.png"
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            categories: [
                {
                    name: "Languages & Dev",
                    items: "Python, Dart, SQL, PL/SQL"
                },
                {
                    name: "Data & IA",
                    items: "Pandas, NumPy, Scikit-Learn, TensorFlow, OpenCV, Mistral 8B (Fine-tuning)"
                },
                {
                    name: "Tools & Web",
                    items: "Flask, Flutter, Power BI, Git, GitHub"
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
