# Argent Bank API

Projet numéro onze du parcours "D'intégrateur web" chez OpenClassrooms. L'objectif était d'implémentez le front-end d'une application bancaire avec React.

Vous pouvez retrouver le repo github d'origine [ici](https://github.com/OpenClassrooms-Student-Center/ArgentBank-website)

_Voici une capture d'écran du résultat de ma réalisation (voir les autres plus bas)_
![Screenshot du site](./front-end/public/screenshot/Capture%20d’écran%20du%202023-11-17%2017-58-27.png)

## Ma tache

Je viens d’intégrer Argent Bank comme développeur front-end. Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire.
Je dois développer l'application web React pour le nouveau système d'authentification des utilisateurs.
Elle comporte deux phases :

- Phase 1 - Authentification des utilisateurs :

  - Créer l’application web complète et responsive avec React. Comme point de départ, on m'a fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
  - Utiliser Redux pour gérer le state de l'ensemble de l'application.

    Ce que doit faire l’application :

  - L'utilisateur peut visiter la page d'accueil.
  - L'utilisateur peut se connecter au système.
  - L'utilisateur peut se déconnecter du système.
  - L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.
  - L’utilisateur ne peut pas modifier son nom ni son prénom, mais il peut modifier son pseudo.

Forker le repo existant et suivre l’avancement du travail en créant des issues GitHub, grâce aux modèles d’Issues qui y sont inclus.

Les ingénieurs back-end ont déjà créé toutes les routes API que j'aurais besoin et la documentation Swagger i est inclus.

Mettre en place les bonnes pratiques du Green Code en veillant sur ces deux aspects en particulier :

    - que les images soient optimisées tant sur le poids que sur les dimensions.
    - que le code soit optimisé par la création, le plus possible, de composants réutilisables.

- Phase 2 - Transactions (encore en phase de conception) :
  Pour cette phase, il faudra que cette fonctionnalité permette aux utilisateurs :
- de visualiser toutes leurs transactions pour le mois en cours, groupée par compte ;
- de visualiser les détails d'une transaction dans une autre vue ;
- d'ajouter, de modifier ou de supprimer des informations sur une transaction (on ne supprimera pas ou n'ajoutera pas de transaction).

Pour cela, on me demande mon avis sur la façon dont je pense que les routes API devraient être modélisées du côté back-end en fournissant un document décrivant les routes API proposées pour les manipulations sur les transactions, en suivant les directives de Swagger.

Parmi les éléments clés à spécifier pour chaque endpoint de l’API, il faudra :

- la méthode HTTP (ex. : GET, POST, etc.) ;
- la route (ex. : /store/inventory) ;
- la description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie) ;
- les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire) ;
- les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

Je peux utiliser la page des transactions présentée dans les maquettes pour guider mes choix (mais je n'ai pas besoin d'implémenter cette page). Je dois simplement m'assurer que le document soit exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans l'outil d'édition de Swagger.

## Technologies

**Autorisés:** Tout

**Obligatoire:** Redux

**Recommandée:** React Developer Tools et tous ce qu'il sera utile pour le dévellopement de l'API

**Interdit:** Rien

## Notes

**Contraintes :**

- Maquette desktop : non
- Maquette Mobile : oui
- Bonnes Pratiques : Green Code
- Compatibilité : Dernières versions de Chrome, Firefox & Safari.
- Général : Le code ne doit pas produire d'erreur ou de warning dans la console.

## Convention nommage commit

Gitmoji https://gitmoji.dev/

## Tester le projet

Pour tester simplement & rapidement, je vous invite à cloner le project.

clonez le projet :

```terminal
git clone https://github.com/Aeron01/OC-Projet_11_Argent_Bank-website.git
```

## Pre-requis

Argent Bank utilise les technologies suivantes :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Veuillez vous assurer que vous disposez des bonnes versions et téléchargez les deux packages. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre terminal :

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de Mongo
mongo --version
```

### Instructions

1. Forkez ce dépôt
1. Clonez le dépôt sur votre ordinateur
1. Ouvrez une fenêtre de terminal dans le projet cloné
1. Exécutez les commandes suivantes :

```terminal (dans le répertoire back-end)
# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev:server

# Remplir la base de données avec deux utilisateurs
npm run populate-db
```

Votre serveur devrait maintenant fonctionner sur http://locahost:3001 et vous aurez désormais deux utilisateurs dans votre base de données MongoDB !

## Données de base de données remplies

Une fois que vous avez exécuté le script `populate-db`, vous devriez avoir deux utilisateurs dans votre base de données :

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## Documentation de l'API

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs

## Lancement de l'application

```terminal (dans le repertoire front-end)
npm run dev
```

Tapez ou copier/coller ce lien dans une fenêtre de votre navigateur http://localhost:5173/ (ou encore vous pouvez juste cliquez dessus :sunglasses:)

## Screenshot

- Page de connexion :

![Page de connexion](./front-end/public/screenshot/Capture%20d’écran%20du%202023-11-17%2017-58-41.png)
&nbsp;

- Page d'enregistrement :

![Page d'enregistrement](./front-end/public/screenshot/Capture%20d’écran%20du%202023-11-17%2017-58-49.png)
&nbsp;

- Page utilisateur :

![Page utilisateur](./front-end/public/screenshot/Capture%20d’écran%20du%202023-11-17%2017-59-12.png)
&nbsp;

- Edition utilisateur :

![Edition utilisateur](./front-end/public/screenshot/Capture%20d’écran%20du%202023-11-17%2018-45-11.png)
&nbsp;

- Edition utilistateur - Smartphone

![Edition utilisateur - smartphone](./front-end/public/screenshot/Capture%20d’écran%20du%202023-11-17%2018-44-48.png)
