# Please Lord — Intro puis boucle / 25 septembre 2026

## Exports originaux conservés

- `Please Lord intro loop.wav` : 864 000 frames stéréo à 48 kHz / 24 bits, soit 18 secondes. Joue une fois.
- `Please Lord loop.wav` : 1 843 200 frames au même format, soit 38,4 secondes. Se répète ensuite intégralement.

Le silence initial de l’intro est volontaire et conservé. Les fichiers du Bureau ne sont pas modifiés. À la demande d’OKARAR, le raccord de la version web est désormais réparé : le début du second export contient 2 589 frames de zéros (53,9375 ms), puis un signal quasi silencieux jusqu’à la snare à 100 ms. Ce creux était présent dans le PCM original, pas ajouté par le lecteur.

## Fichier web

`assets/please-lord-sequence.wav` reste la concaténation originale exacte des deux exports. Le site lit maintenant `assets/please-lord-seamless.wav` : mêmes 2 707 200 frames, 56,4 secondes, PCM 24 bits stéréo à 48 kHz.

La seconde phrase du fichier de boucle, à 19,2 s, contient la continuité musicale manquante au démarrage. Ses 100 premières millisecondes remplacent le creux ; un mélange complémentaire de 25 ms rejoint ensuite la première phrase originale sur la snare (corrélation supérieure à 0,98). Une correction de continuité de 4 ms aligne la pente de l’onde au bouclage. Les 8 dernières millisecondes de l’intro rejoignent la queue de boucle, afin que le premier raccord et les suivants aient la même continuité.

L’intro avant ses 8 dernières millisecondes et la boucle après ses 125 premières millisecondes sont identiques échantillon pour échantillon aux originaux. Aucun échantillon retiré ni ajouté, aucun décalage de snare/kick, changement de tempo ou normalisation. Crête conservée : −0,10047 dBFS. Le niveau RMS des 100 premières millisecondes de la boucle passe de −62,07 à −22,91 dBFS. Les originaux et l’ancienne concaténation sont conservés pour revenir en arrière.

SHA-256 de la version corrigée : `add583bf047e458e54f0c3bb35031426470c3f0d2f8999210212dddfeafe9a8a`.

## Lecture

Après « Enter with sound », le fichier est entièrement chargé et décodé. Un seul `AudioBufferSourceNode` commence à zéro. Sa zone de répétition est `[18 s, 56,4 s)` : le moteur audio lit l’intro une fois, puis revient uniquement au début du second export. La transition ne dépend ni d’une minuterie JavaScript ni du chargement d’un deuxième fichier.

Le lecteur n’ajoute aucune pause ni aucune rampe de volume aux transitions : la réparation est dans le nouveau fichier. Le niveau d’ambiance reste à 50 % ; les rampes de 150 ms à l’activation et 40 ms à l’arrêt concernent uniquement les commandes de son. Elles ne sont pas répétées aux raccords.

Aucun contexte audio ni téléchargement avant consentement. Couper puis réactiver le son reprend la position sauvegardée, sans rejouer une intro déjà terminée. Masquer l’onglet suspend l’horloge audio. Un rechargement complet de la page réinitialise la séquence.

## Contrôles

`tests/audio-loop.html` utilise le vrai moteur de lecture pour rendre l’intro suivie de trois cycles, soit 133,2 secondes simulées. Chaque région est comparée au signal décodé attendu au niveau de lecture du site. Résultats dans le navigateur intégré :

| Fréquence | Frames intro | Frames par boucle | Erreur intro¹ | Erreur des boucles | Différence cycles 2 et 3 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 48 000 Hz | 864 000 | 1 843 200 | 0 | 0 | 0 |
| 44 100 Hz | 793 800 | 1 693 440 | 0 | 0 | 0 |

¹ Après la rampe d’activation de 150 ms. Le test vérifie aussi chaque bloc de 10 ms des 100 premières millisecondes à chacun des trois raccords. Minimum mesuré au niveau de lecture du site : −40,377 dBFS à 48 kHz et −40,375 dBFS à 44,1 kHz, sans trou numérique. Il s’agit du rendu Web Audio hors ligne, pas d’une mesure sur les haut-parleurs.

`npm test` : 110 tests passent dans le projet, dont les états audio et trois nouveaux tests sur les WAV : préservation des sources et durées, suppression du creux, continuité des deux raccords. Contrôle de syntaxe et compilation réussis.

La lecture a également été activée sur la page réelle via « Enter with sound », puis coupée via la commande sonore. Aucune erreur ou alerte JavaScript observée. Un essai sur Safari/iOS physique et la validation artistique finale par OKARAR restent distincts de ces tests.
