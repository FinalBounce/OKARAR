# OKARAR — Portfolio d’artiste / Manta → Shark

Version portfolio : musique originale, bio courte, liens d’écoute, Instagram et Final Bounce, le label d’OKARAR. Une raie manta de verre est modélisée et animée en temps réel dans un espace continu. Direction artistique nacre, eau pâle, cuivre et typographie éditoriale. La manta, la scénographie et les interactions sont originales ; le nouveau requin anatomique est un modèle tiers crédité sous CC BY 4.0.

Version 7.0 : nouveau requin anatomique articulé, matériau de cristal fumé, attaque lisible de trois secondes puis retour depuis le fond, de face devant OKARAR. Nage au même tempo que la manta, sans accélération. Les traversées suivantes n’ouvrent plus la gueule pour mordre les titres. L’aspiration des mots de la toute première version V4 est restaurée : translation successive, rotation alternée, réduction, flou et disparition au scroll. La manta conserve sa nage, avec dos teinté, ventre nacré, petite dorsale et lobes céphaliques aplatis. Ambiance charbon, miroirs, liens et audio sont préservés. Interface en anglais.

## Ouvrir

Pour un aperçu local avec Node.js : `npm start`, puis http://127.0.0.1:4174. Le serveur n’écoute que sur la machine locale. Utiliser cet aperçu HTTP pour les tests. Le moteur 3D est inclus dans `app.js`, sans import distant. Les polices Google Fonts utilisent Internet ; sans connexion, des polices système prennent le relais.

## Ce que fait cette version

- Manta en vraie 3D WebGL (Three.js), ailes déformées, queue animée, rayons internes, yeux et lobes céphaliques.
- Queue ancrée dans le pédoncule : base immobile relativement au corps, déformation unique et légère onde uniquement vers la pointe, au même tempo que la nage. Surface effilée et normales recalculées, sans second battement appliqué par le matériau.
- Réaction au volume sonore amortie : une attaque de snare ne provoque plus de saut instantané de taille ni de secousse supplémentaire des ailes. Seul cet accent visuel est filtré ; la phase des battements, les repères snare/kick et la lecture audio ne sont pas retardés.
- Manta retravaillée : lobes céphaliques courts et larges directement prolongés depuis le bord de la tête, dans le même maillage que le corps et les ailes. Plus de pièces rapportées en forme d’antennes. Extrémités incurvées, raccords doux, bouche terminale creusée, yeux encastrés, spiracles, dix fentes branchiales ajustées à la surface ventrale, dorsale et petites pelviennes. Dos de verre bleuté, ventre nacré distinct, grain optique discret et nervures atténuées. Géométrie originale générée localement, sans nouvel asset à télécharger.
- Requin anatomique : environ 27 440 sommets, squelette articulé, tête et gueule intégrées, dents, yeux, branchies, nageoires pectorales, dorsales et caudale. Animation de nage retimée et mélange facial amorti pour la seule attaque de la manta. Le modèle procédural antérieur reste un secours en cas d’échec de chargement. Les petites sphères derrière les yeux de la manta restent retirées.
- Verre avec transmission, réfraction du lettrage derrière la créature, iridescence, éclairage et reflets.
- Six chapitres au scroll : accueil, artiste, écouter, Final Bounce, Instagram et contact. Déplacements de caméra, rotations et changements d’échelle réversibles.
- Accès direct à l’écoute depuis l’en-tête et l’accueil, liens externes dans un nouvel onglet. Le son d’ambiance se coupe quand une plateforme musicale est ouverte.
- Réaction au pointeur et aux clics ; personnalisation nacre / iris / ambre, amplitude et transparence.
- « Let her dance » : vrille complète autour de l’axe tête/queue, petit arc en profondeur puis retour progressif à la pose normale en 3,6 secondes. La nage reste à 50 cycles/minute. Pas de son déclenché, pas de cumul des clics ; pause/reprise et mouvements réduits respectés. Si l’attaque commence pendant la vrille, la raie poursuit son mouvement jusqu’à sa capture, sans revenir artificiellement à sa pose neutre.
- La même vrille accueille les deux choix d’entrée, avec ou sans son. Une seconde figure, en spirale descendante et dans l’autre sens, dure 4,8 secondes à l’arrivée sur Instagram : une seule fois par visite, après au moins 2,4 secondes sans autre figure. Pas de double figure à l’entrée directe sur Instagram, de déclenchement en sautant directement à Contact, ni de figure automatique pendant l’attaque du requin.
- Poses des quatre premiers chapitres conservées aux points d’arrêt. Transitions de rotation continues ; Instagram montre le ventre, Contact un profil descendant. La tête et le centre restent stables pendant le battement, qui se développe depuis les épaules vers les extrémités, toujours sur la même grille musicale.
- Entrée sonore sur choix explicite, arrêt à tout moment, suspension quand l’onglet est caché.
- Analyse des fréquences audio pour faire réagir la créature.
- Mode léger automatique sur mobile, résolution plafonnée, 30 images/s visées en mode léger, réduction adaptative en cas de lenteur. Les performances réelles dépendent de l’appareil.
- Pause manuelle, respect de `prefers-reduced-motion`, navigation clavier et repli illustré si WebGL est indisponible.

## Le deuxième mouvement

Pendant la capture, le requin rattrape la raie : elle reste à sa profondeur pendant son approche, sans bondir vers sa bouche. Ses ailes se resserrent et leur battement s’atténue progressivement. La raie conserve 92 à 100 % de son échelle au moment de la capture : l’ouverture du prédateur est agrandie pour laisser passer son enveloppe complète, queue comprise, au lieu de miniaturiser la proie. L’approche reste plus loin tant que les ailes se replient, puis le requin les dépasse en avançant. Après la capture, la raie continue à s’enfoncer pendant tout le fondu, sans palier à l’entrée de la gueule ni retrait avant le noir complet. L’échelle du requin rejoint sa valeur normale sous l’occultation. Retour, traversées suivantes et audio restent inchangés.

Choisir « Enter with sound ». L’intro dure toujours 18 secondes et le second export démarre sans raccord ajouté. La snare à **18,1 s** déclenche l’attaque et l’assombrissement. Le fond est entièrement sombre sur le kick à **19,3 s**, mais le requin poursuit maintenant son passage jusqu’à **21,1 s**, conformément au dernier ajustement demandé. Il rejoint ensuite en **2,4 s** la position de la section affichée : retour de face à l’accueil, approche latérale pour Écoute, Instagram et Contact, retrait hors champ pour Artiste et Final Bounce. Aucun détour imposé par le centre de l’accueil. Pas de flash blanc ni de gore.

La première attaque est désormais frontale : ouverture amplifiée de la mâchoire, ailes de la manta repliées et entrée progressive dans la gueule. La raie traverse les dents sans y être découpée : le plan de masquage est reculé profondément dans le requin, à 1,5 largeur de bouche. Elle reste présente pendant toute la partie visible de la capture et n’est retirée entièrement que sous l’occultation complète, sans réapparaître au retour. Le requin avance jusqu’à engloutir le cadre, suivi d’une brève occultation sombre, puis rejoint exactement le départ du retour existant. Ce traitement est limité à cette première attaque ; mouvement de capture, retour, nage, traversées ultérieures et aspiration des mots sont conservés.

Le requin commence entièrement hors champ à droite. Son enveloppe complète (nageoires et queue comprises, avec une marge de nage) est positionnée au-delà du bord réel de la caméra, selon le format d’écran et l’inclinaison du pointeur. Il entre ensuite progressivement et rejoint la trajectoire existante en 0,54 s, avant l’aspiration de la manta dans la bouche. Pas d’apparition sur place ni de fondu pour masquer son arrivée.

Le raccord conserve l’orientation de sortie puis rejoint progressivement celle du retour, sans saut angulaire. L’occultation masque entièrement le retrait de la grande gueule et se dissipe au début du retour ; fond et lettrage sont interpolés. La durée de l’attaque, celle du retour et le tempo ne changent pas.

La fin du retour partage exactement la pose d’attente de la section, y compris l’échelle, l’orientation et la légère dérive de nage. Si l’on change de section ou de format pendant ce retour, une nouvelle courbe part de la pose et de la vitesse actuelles ; elle peut prolonger l’arrivée pour laisser le temps de tourner. Les traversées au scroll attendent la fin de cette arrivée. Le calage sonore, l’attaque, le fondu et l’apparition de l’interface ne sont pas décalés.

Sur la première snare, la capture part désormais de la pose réelle de la manta : inclinaison du pointeur, nage, défilement et éventuelle vrille. La raie continue son mouvement jusqu’au repli des ailes, puis rejoint progressivement l’orientation de la bouche. Le requin est dessiné une fois derrière la caméra pendant l’intro pour préparer aussi les textures, le squelette et la variante exacte de rendu, sans image visible ni attente de calcul ajoutée sur la snare.

L’attaque ne se produit qu’une fois par visite. Les tours suivants de la boucle gardent le requin et l’ambiance sombre. Couper le son pendant l’attaque suspend sa progression ; le réactiver la reprend. Après l’attaque, couper le son conserve le requin. Sans consentement sonore, le parcours normal reste avec la manta ; aucun chronomètre silencieux ne déclenche artificiellement le changement.

Un défilement descendant déclenche une traversée de **3,6 s** : approche de face, passage au-dessus de la caméra, passage latéral ou installation sur le côté, selon le chapitre. Elle se termine même si le défilement s’arrête. La gueule reste légèrement entrouverte, sans nouvelle morsure. L’aspiration V4 est indépendante de cette trajectoire : chaque mot se déplace progressivement vers le requin, tourne jusqu’à ±26°, rétrécit jusqu’à 7 % et s’efface. L’effet est directement réversible au scroll. Le chapitre suivant arrive derrière. Une remontée permet une nouvelle traversée ; un grand saut annule le passage en cours.

Un léger dépassement du premier scroll conserve le passage au-dessus de la caméra tant que la destination reste dans la section Artiste : il ne le remplace plus par un déplacement frontal. La fin de l’amortissement seule ne lance pas d’autre traversée ; un nouveau geste volontaire reste nécessaire.

Le requin est de face à l’accueil après son retour ; ailleurs, il peut rester hors champ ou en bordure. Les sections Écoute et Contact lui offrent une position latérale. Il ne revient pas instantanément au centre après un passage. Sa nage partage exactement la phase de la manta : **50 cycles/minute**, soit **1,2 s par cycle**, y compris pendant l’attaque et les traversées. La musique reste à 100 BPM.

À l’arrivée sur Instagram (04), le dernier tiers du passage rejoint aussi l’échelle exacte d’attente sur ordinateur : le requin reste à sa place, sans sortie et retour supplémentaires. Le cadrage mobile et les autres traversées sont conservés.

Lors des remontées, le retrait hors champ est contrôlé sur la véritable enveloppe du modèle articulé, après synchronisation de ses transformations de peau : corps, queue et nageoires doivent tous avoir quitté l’écran avant une remise en scène invisible.

Les remontées et sauts de plusieurs sections utilisent des raccords dédiés, sans modifier les cinq traversées. La destination réelle du scroll annule les passages devenus obsolètes ; aucun défilé d’animations des sections intermédiaires. Le requin continue tête en avant jusqu’à ce que toute sa silhouette soit hors champ, puis une approche courbe depuis le fond ou le côté rejoint directement la pose de la dernière section visée. Un nouveau changement de destination pendant ce retour conserve la pose courante, sans remise en place visible. Les petites oscillations d’attente restent continues ; pause et mouvements réduits sont respectés.

Sur mobile, la section Instagram (04) cadre maintenant la silhouette complète dans l’espace entre le titre et les liens. La taille s’adapte aussi au rapport largeur/hauteur des écrans très étroits. Arrivée après l’attaque, fin de la traversée depuis Final Bounce et attente partagent ce cadrage ; la fin de l’approche reste tête en avant. Le cadrage ordinateur et celui des autres sections ne changent pas.

La vignette sombre reste derrière la créature : le retour du requin à sa position d’attente ne le fait plus passer sous un voile assombrissant, notamment à la fin du passage vers Instagram. Son éclairage et sa trajectoire sont conservés.

Entre Écoute (02) et Final Bounce (03), la sortie conserve sa courbe tête en avant. Une fois entièrement hors champ à gauche, le requin fait une brève réapparition de gauche à droite, un peu plus haut et en profondeur, avec une courbe souple et le nez dans le sens de la trajectoire. Le centre traverse le cadre en environ une seconde ; le tempo de nage reste inchangé. Queue et nageoires doivent ensuite être entièrement sorties avant sa remise en place invisible à droite, y compris après redimensionnement. Ce passage ne se répète pas à l’arrêt, se suspend avec la pause et s’interrompt si l’on change de destination. Les autres traversées restent inchangées.

« KEEP TEXT » restaure et conserve tous les textes. Liens d’écoute, contact, boutons et navigation ne sont jamais consommés. Les textes restent présents pour les lecteurs d’écran. Le fond est conservé dans le rendu de réfraction mais transparent dans la couche finale du requin : pendant l’attaque, il peut ainsi passer devant les mots sans masquer toute la page.

La nouvelle interface attend la fin du premier passage et la dissipation complète du noir (environ 21,916 s depuis le début de la musique). « KEEP TEXT » apparaît alors en fondu de 0,55 s, avec les libellés du requin. Sa place est réservée dès l’entrée, sans affichage ni accès clavier avant ce moment. Les espacements des commandes ne changent pas entre les thèmes, y compris sur mobile ; les libellés SOUND ON/OFF ont aussi une largeur fixe.

En mouvements réduits, ou si l’animation est en pause au déclenchement, la scène passe directement au requin sans poursuite. Un passage mis en pause reprend au même instant. Aucun passage ni aspiration en mouvements réduits. Sans WebGL, une illustration remplace le modèle et tous les textes restent lisibles. Le mode mobile réduit la résolution et les particules, allège la manta et vise 30 images/s ; le requin anatomique conserve son maillage. Le modèle local pèse environ 13,3 Mio et se charge en arrière-plan dès l’entrée. Couleurs, amplitude et fini du verre restent réglables.

## Intro puis boucle — Please Lord

Les deux exports fournis par OKARAR, `Please Lord intro loop.wav` et `Please Lord loop.wav`, restent intacts, ainsi que leur concaténation originale `assets/please-lord-sequence.wav`. Le lecteur utilise maintenant `assets/please-lord-seamless.wav` : une version web corrigeant le creux de démarrage du second export (54 ms de zéros puis signal quasi silencieux jusqu’à la snare à 100 ms). Le passage correspondant de la seconde phrase rétablit la continuité, avec retour au signal original à 125 ms et raccord de 8 ms à la fin de l’intro. Le silence voulu au début de l’intro est conservé exactement.

- Intro : 864 000 frames stéréo, soit 18 secondes ; boucle : 1 843 200 frames, soit 38,4 secondes. Format 48 kHz / 24 bits, sans compression avec perte ni changement de tempo.
- Un seul `AudioBufferSourceNode` lit l’ensemble après décodage complet : départ à zéro, puis répétition native de la région entre 18 et 56,4 secondes. Aucun délai de chargement ni rampe de volume ajoutée par le lecteur à la transition ou à chaque tour ; la réparation est intégrée au fichier web.
- Rampes du lecteur uniquement à l’activation (150 ms) et à l’arrêt (40 ms). Niveau de lecture à 50 % pour l’ambiance du site ; pas de normalisation du fichier, crête originale conservée.
- Aucun téléchargement audio ni contexte audio avant le choix du son. Le chargement peut être annulé sans démarrage tardif. La lecture reprend à sa position après désactivation/réactivation et se suspend lorsque l’onglet est masqué.
- L’intro ne rejoue pas après une désactivation/réactivation du son. Seul un rechargement complet de la page réinitialise la séquence.
- Seule la musique fournie par OKARAR est audible. La manta conserve sa réaction visuelle au clic et aux fréquences de la musique.

Les détails et contrôles figurent dans `AUDIO-LOOP.md`. Pour remplacer la musique, contrôler les raccords des nouveaux exports, puis adapter `AUDIO_URL`, `INTRO_SECONDS` et `LOOP_SECONDS` dans `src/sound.js` avant reconstruction. L’aperçu HTTP est nécessaire au chargement audio.

## Battement de la manta

Le projet est à 100 BPM : un temps dure 0,6 s. Un cycle d’ailes bas → haut → bas dure deux temps, soit 1,2 s (50 cycles/minute). Les pointes des ailes atteignent le haut et le bas sur les temps alternés ; la membrane conserve une onde souple vers l’intérieur. Les nervures, la queue et le léger mouvement du corps utilisent la même phase.

Avec le son, le mouvement suit la position de lecture audio, en privilégiant l’horodatage de sortie du navigateur pour tenir compte du délai des haut-parleurs. Après consentement ou reprise de l’animation, une brève convergence de phase évite un saut de pose. Le scroll et la cadence d’affichage ne changent pas le tempo. Sans son, le battement continue au même rythme. La pause et le mode de mouvements réduits figent la phase ; la reprise retrouve la musique.

La grille part du début de l’export, sans retrancher son silence initial : 15 cycles pendant les 18 s d’intro, puis 32 cycles par boucle de 38,4 s. La réparation du raccord ne déplace aucun repère musical. Le tempo est défini dans `src/rhythm.js`. `?debug-rhythm=1` expose la phase et la position audio dans les attributs du canvas, uniquement pour vérification. Le repli illustré sans WebGL reste statique.

Référence de synchronisation : [horodatage de sortie Web Audio](https://www.w3.org/TR/webaudio/#dom-audiocontext-getoutputtimestamp). La précision physique dépend du navigateur et de la sortie audio ; aucun calibrage matériel n’a été effectué.

## Modifier les sources

`npm install`, puis `npm run build`. `npm run check` vérifie la syntaxe ; `npm test` vérifie les états audio. Les dépendances sont verrouillées dans `package-lock.json`.

- `src/creature.js` : modèle, matériaux, environnement et trajectoire de caméra.
- `src/manta-anatomy.js` : volume continu de la raie, anatomie détaillée et regroupement des géométries.
- `src/manta-tail.js` : queue effilée ancrée au corps et déformation synchronisée unique.
- `src/manta-journey.js` : poses, interpolations et déclenchement unique de la spirale au scroll.
- `src/main.js` : chapitres, interactions, accessibilité et adaptation de performances.
- `src/sound.js` : consentement, lecture et analyse audio.
- `src/rhythm.js` : tempo, phase du battement et déformation des nervures.
- `src/shark.js` : chargement du requin anatomique et secours procédural.
- `src/anatomical-shark.js` : matériau cristal, squelette, nage et expression faciale.
- `src/takeover.js` : déclenchement unique et progression de l’attaque.
- `src/engulf.js` : ouverture, capture et engloutissement de l’écran pendant la seule première attaque.
- `src/shark-arrival.js` : arrivée adaptée à chaque section, pose d’attente partagée et réorientation si le parcours change pendant le retour.
- `src/feast.js` : disparition visuelle et restauration des mots.
- `src/passes.js` : déclenchement unique et pause des traversées sans morsure.
- `src/motion.js` : amortissement de mâchoire et courbes de mouvement.
- `index.html` et `style.css` : textes, mise en page et responsive.
- `app.js` : version compilée prête à servir ; ne pas l’éditer directement.

## Liens et contenus

Les liens sont éditables dans `index.html`. Aucune plateforme non identifiée n’a de bouton vide ou de lien de recherche.

- Spotify : https://open.spotify.com/artist/5NVBY0invtZHN3F9KqmeRo — profil OKARAR, identifiant retrouvé dans les échanges précédents et profil vérifié dans le navigateur.
- Apple Music : https://music.apple.com/artist/6809872521 — profil OKARAR, identifiant retrouvé dans les échanges précédents et page vérifiée dans le navigateur.
- Amazon Music : https://music.amazon.fr/artists/B0GWJVHQFY/okarar — profil crédité avec Baba sur « La Pluie », également présent dans les crédits Spotify. Amazon affiche « Okarar ».
- Instagram artiste : https://www.instagram.com/okarar__/ — compte retrouvé dans les échanges précédents ; titre « OKARAR » vérifié dans le navigateur.
- Label : https://finalbounce.studio/ et https://www.instagram.com/final_bounce/ — lien et adresse professionnelle récupérés sur le site du label.
- Contact : `contact@finalbounce.studio`, présenté explicitement comme contact via Final Bounce. Le lien ouvre la messagerie, sans envoyer de message.

Deezer et YouTube Music sont omis faute de profil identifié avec certitude, conformément à la demande. Aucun titre inédit, projet fictif, date de sortie ou chiffre d’audience n’est inventé. La boucle sélectionnée par OKARAR est désormais intégrée.

## Vérification

Les modes de secours peuvent être ouverts avec `?fallback=1` (illustration sans WebGL) ou `?reduced=1` (mouvements réduits). Le bouton « Mode léger » est aussi disponible dans « Façonner ».

Pour inspection silencieuse : `?preview-takeover=1` montre la scène finale après entrée ; entre 0 et 1, un instant de l’attaque. `?preview-takeover=0` inspecte le départ entièrement hors champ. Ajouter `&preview-return=.5` inspecte le retour, ou `&preview-pass=.5#artiste` une traversée. `?preview-flourish=.5` montre la manta à mi-vrille après entrée ; ajouter `&preview-figure=dive` inspecte la spirale descendante. `&reduced=1` désactive les traversées et fige la nage. Ces paramètres ne sont pas utilisés dans le parcours normal. `?debug-rhythm=1` expose les phases, l’état de la vrille, le modèle chargé, la mâchoire et la projection de la bouche dans les attributs du canvas ; après 19,1 s, `data-cue-trace` contient le relevé borné des images de 17,7 à 19,1 s. `npm test` exécute les contrôles audio, rythme, état, géométrie, anatomie, amortissement, engloutissement, continuité des transitions, centrage, aspiration, vrille, préparation du rendu, apparition de l’interface et entrée hors champ.

Le requin est adapté de [Shark — Babylon.js Meshes Library](https://github.com/BabylonJS/MeshesLibrary/blob/master/shark.glb), par les contributeurs de cette bibliothèque, sous [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribution, source, licence et modifications sont détaillées dans `credits.html`, accessible depuis SHAPE → 3D credits. La manta reste procédurale. Les photos de référence ne sont pas incorporées. Le rendu reste une interprétation anatomique en verre, pas un scan photoréaliste. Le [modèle scientifique DigitalLife3D](https://sketchfab.com/3d-models/model-84b-manta-ray-swimming-73e539c7ac5940e5aad4c58257df9725) repéré est limité aux usages non commerciaux ; il n’a pas été incorporé au portfolio.

Références anatomiques de la manta : [Florida Museum — Mobula birostris](https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/manta-ray/) et [Manta Trust — anatomie des mobulidés](https://www.mantatrust.org/what-are-mobulids). Utilisées comme documentation visuelle et morphologique ; aucune photo ou illustration de ces organismes n’est intégrée. Les modèles trouvés avec restriction non commerciale n’ont pas été utilisés.

Inspirations de mécanismes : https://labs.noomoagency.com/ et l’étude de cas des créateurs https://noomoagency.com/insights/noomo-labs-immersive-3d-website. Aucun modèle, image, code ou texte de Noomo n’est incorporé.

Three.js 0.180.0 est sous licence MIT, reproduite dans `THREE-LICENSE.txt`. La première version du prototype a été conservée hors du livrable dans le dossier de travail.
