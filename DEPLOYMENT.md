# Publication — OKARAR

- Dépôt : https://github.com/FinalBounce/OKARAR
- Copie de travail : `Documents/GitHub/OKARAR`
- Hébergement : GitHub Pages, branche `main`, dossier racine `/`.
- Domaine principal : https://okarar.com

Le site est statique : aucun Codespace ni serveur Node.js n’est nécessaire en production. `app.js` est le moteur compilé ; `.nojekyll` permet à GitHub Pages de servir directement les fichiers. Les modèles, la musique, les illustrations de secours et les crédits restent locaux au site.

## Modifier et publier

1. Dans ce dossier, exécuter `npm ci` une première fois.
2. Lancer `npm start` pour l’aperçu local (http://127.0.0.1:4174).
3. Après modification : `npm test`, `npm run check`, puis `npm run build`.
4. Inclure les sources et le fichier `app.js` reconstruit dans le commit.
5. Envoyer le commit sur `main` avec GitHub Desktop ou Git. GitHub Pages republie automatiquement.

Ne pas ajouter `node_modules`, des identifiants, ou de nouveaux exports audio privés au dépôt public. L’ancien brouillon `okarar-loop.wav` reste uniquement local. La séquence audio de référence est conservée pour les tests du raccord ; le lecteur utilise `please-lord-seamless.wav`.

## Domaine

Le fichier `CNAME` contient `okarar.com`. Le domaine personnalisé doit aussi être enregistré dans Settings → Pages sur GitHub, puis l’option HTTPS activée lorsque le certificat est disponible.

Pour l’alias `www`, la cible DNS recommandée est `FinalBounce.github.io` (le compte propriétaire du dépôt), et non le nom du dépôt. Le domaine principal utilise les quatre adresses GitHub Pages configurées chez le fournisseur DNS.

Documentation : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
