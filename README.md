## Installation

### Prérequis
- Typescript version 5.0.0
- Node version 22.13.0

### Commandes

- Pour installer les packages nécessaires: 
```bash
    npm install
```

## Exécution

### Exécuter les tests
```bash
    npm run test
```

## Choix de refactoring

### Problèmes identifiés dans le legacy

1. **Méthode trop longue** : Méthode fait plus de 50 lignes
   - Impact : Il est plus difficile à maintenir sur le long terme.

2. **Magic numbers** : Valeur numérique sans contexte ni explication
   - Impact : Il est difficile à maintenir car sur le long terme, on pourrait oublier à quoi correspond le nombre.


### Solutions apportées

1. **Séparation du code de la méthode en plusieurs modules** :
   - Justification : Pour rendre le code plus lisible et maintenable.

2. **Nommer les magic number en fonction de leur contexte** : 
   - Justification : Pour rendre les nombres plus faciles à comprendre pour la maintenance.

### Architecture choisie

- Modules créés:
  - Le modules calculs pour gérer les calculs de la méthode comme le calcul de la promotion d'une commande.
  - Le module interfaces pour gérer l'ensemble de données de la méthode.
  - Le module parsing pour gérer la transformation du fichier csv en json.

