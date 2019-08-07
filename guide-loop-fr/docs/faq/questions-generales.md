# Questions Générales

Nous avons beaucoup d'utilisateurs nouveaux qui viennent trouver l'information sur Omnipod. Vous auriez probablement maintes questions.

## Qu'est-ce que Loop ?
Cliquez sur l'image ci-dessous pour regardez une courte vidéo sur [l'introduction à Loop](https://youtu.be/qw_u1lqboCs).

[![loop-vid](img/loop-vid.png)](https://youtu.be/qw_u1lqboCs)

## De quoi ai-je besoin ?
Loop a des exigences matérielles et logicielles. En général, pour utiliser Loop vous devez avoir sept composants :

* Une pompe insuline compatible : [Medtronic](https://cyoung1024.github.io/guide-loop-fr/materiel/pompe/medtronic) ou [Omnipod](https://cyoung1024.github.io/guide-loop-fr/materiel/pompe/omnipod)
* [CGM compatible](https://cyoung1024.github.io/guide-loop-fr/materiel/cgm)
* [RileyLink](https://cyoung1024.github.io/guide-loop-fr/materiel/rileylink)
* [iPhone ou iPod Touch compatible](https://cyoung1024.github.io/guide-loop-fr/materiel/iphone)
* [Ordinateur Apple ayant Mojave : macOS 10.14 minimum](https://cyoung1024.github.io/guide-loop-fr/materiel/ordinateur)
* [Xcode (une application Apple gratuite](https://apps.apple.com/fr/app/xcode/id497799835?mt=12)
* [Compte développeur Apple](https://cyoung1024.github.io/guide-loop-fr/materiel/developpeur-apple)

## Puis-je télécharger Loop depuis l'App Store ?
Non. Loop n'est pas disponible pour téléchargement. Vous devez impérativement construire votre propre application Loop.

Mais ne vous inquiétez pas, monter votre application Loop est en réalité facile et c'est la raison de la création de ces guides. La partie plus difficile sera d'avoir la patience de lire tous les documents avant de commencer. Les nouveaux utilisateurs ont si hâte de commencer qu'ils négligent de lire toutes les informations géniales dans ces guides. Donc, au fur et à mesure que vous commencer la construction de votre application... veuillez prendre le temps de lire les documents qui suivent APRÈS avoir monter avec succès votre application Loop, pour bien comprendre les réglages de votre système ainsi que son fonctionnement.

Si vous avez des questions, ces guides ont une fonction de recherche dans le menu en haut à droit qui pourrait vous aider à trouver la réponse dont vous cherchez, et assez rapidement !

## Pourrais-je utiliser un téléphone Androïde pour Loop ?
Non, cette application est uniquement pour iPhone ou iPod Touch.

## Ai-je besoin de connaissances informatiques pour construire Loop ?
Non, vous n'avez pas besoin d'expérience en programmation ou en informatique pour construire Loop. Si vous avez déjà un ordinateur Apple et un iPhone, vous avez déjà le niveau d'expérience requis. Au-delà de ça, simplement lire les instructions lentement et avec diligence : toute l'information qu'il vous faut est dans ces guides.

## Combien de temps faut-il pour construire Loop ?
La réponse varie, mais quelques heures du début à la fin, selon là où vous commencez.

Si vous préférez diviser les tâches en plusieurs jours, la méthode de "calendrier d'advent" peut se faire comme suite :

* **1er jour** - 15 minutes : commander le RileyLink à [GetRileyLink.org](https://getrileylink.org/)
* **2e jour** - 30 minutes ou moins : mettre à jour macOS et installer Homebrew sur votre ordinateur
* **3e jour** - 20 minutes : ouvrir un compte de développeur Apple (et attendre l'e-mail de confirmation)
* **4e jour** - 1 à 2 heures : télécharger et configurer Xcode (vous pouvez laisser l'ordinateur tout faire pendant ce temps-là, pas besoin de rester à côté de)
* **5e jour** - 50 minutes : monter l'application Loop avec Xcode

## Loop coûte-il de l'argent ?
Oui, il y a quelques frais.

Le [RileyLink](https://getrileylink.org/) coûte $150, environ 130€ à l'heure actuelle. Le RileyLink est un coût unique, et plusieurs personnes ont toujours leur RileyLink âgé de 3 ans qui fonctionne parfaitement. Il y a [une batterie lipo](https://getrileylink.org/product/850lionbattery/) que vous devriez remplacer après quelques années, qui coûte approximativement $15, ou 13€ à l'heure actuelle. Il est hautement recommandé d'acheter deux RileyLink si possible financièrement, pour en avoir un en cas de dommage accidentel.

La licence de développeur Apple peut se faire gratuitement, cependant vous allez devoir remonter l'application Loop tous les 7 jours. Ceci peut s'avérer assez fastidieux. Le programme de développeur Apple peut donc se faire annuellement aussi, pour 99€.

Il n'y a que ces investissements ci-dessus.

## Dois-je acheter mon propre ordinateur Apple ?
Vous n'avez pas besoin de posséder votre propre ordinateur Apple à vous seul, mais vous devez au moins en emprunter un. Ce serait mieux d'avoir la possibilité de pouvoir le réemprunter dans le longe terme pour [mettre à jour Loop], quand il le faut.

Si vous emprunter un ordinateur Apple, vous devriez demander au propriétaire de (1) mettre à jour l'ordinateur pour avoir Mojave et (2) [télécharger Xcode gratuitement](https://developer.apple.com/xcode/) avant de l'emprunter. Les mises à jour et le téléchargement de Xcode peuvent prendre quelques heures selon la vitesse de connexion à l'Internet. Donc, il vaudrait mieux demander à l'avance pour éviter tout soucis.

## Combien de fois dois-je utiliser l'ordinateur pour Loop ?
La réponse courte est (1) quand vous monter l'application pour la première fois et (2) une fois par an minimum après. Si vous décidez d'utiliser le compte de développeur gratuit, vous devez vous connecter à l'ordinateur tous les 7 jours.

La réponse longue est que le code de Loop est mis à jour périodiquement pour inclure des nouvelles fonctions et réparation des bogues. Quand ces mises à jour sont publiées, vous devez avoir accès à un ordinateur Apple encore une fois pour mettre à jour l'application Loop. Les mises à jour ne sont pas disponible via l'application déjà installée sur votre téléphone, ni sur l'App Store. Vous mettez à jour l'application vous-même avec [ces instructions ici]. En général, probablement plusieurs fois par an il y aura des mises à jour pour Loop que vous voudriez prendre le temps d'installer.

## Puis-je utiliser une VirtualMachine pour monter Loop ?
Oui, ceci est possible. Cependant, ces guides ne vont pas vous donner les instructions sur comment le faire.

## Aurai-je besoin de monter une nouvelle application Loop si je change régulièrement entre Medtronic et Omnipod ?
Non. Loop a l'option de changer de pompe depuis les réglages de l'application.

## Puis-je utiliser le compte de développeur Apple de quelqu'un d'autre ?
Techniquement oui, par contre il existe des points négatifs. Le compte peut être "lié" à un nombre limité d'ordinateurs. Donc, une personne "empruntant" sa licence de développement à beaucoup de personnes va rapidement franchir la limite d'ordinateurs possibles. Quand elle fait ceci, il se peut que cette personne avait oublié votre application Loop sur votre ordinateur. Quand elle révoque le certificat de votre ordinateur (et elle le peut sans votre insu, à travers leur portail de développer), votre application Loop arrêtera immédiatement de fonctionner et n'ouvrira même plus.

Votre application Loop va aussi "mourir" immédiatement si le compte de développeur n'est pas renouvelé ou s'il expire. Vos mises à jour Loop ne seront pas non plus montées sauf si cette personne maintient les mises à jours des conditions générales de la license de développeur Apple.

Parmi toutes les façons d'épargner de l'argent... emprunter le compte de développer de quelqu'un d'autre n'est pas un bon endroit de commencer.

## Comment trouve-je une pompe insuline compatible ?
Pour Medtronic, voir [cette page] - medtronic pump about -, comment les trouver, comment trouver les matérielles, et évaluer si votre pompe Medtronic est compatible. Allez voir cette page pour plus d'information.

Avec l'ajoute de l'Omnipod, vous pouvez aussi utiliser les pods de la même façon que vous les utilisez actuellement.

## Puis-je payer pour faire faire Loop ?
***NON***. Vous devez *impérativement* savoir faire monter Loop tout(e) seul(e). Ceci est un système de délivrance d'insuline automatique et il est primordial que vous sachez comment monter, utiliser, et faire fonctionner Loop vous-même.

## Que se passe-t-il si je perds mon RileyLink ?
Pour les utilisateurs de Medtronic, vous repassez simplement à l'utilisation normale de votre pompe en attendant un nouveau RileyLink. Vous pouvez soit laisser le débit de basal temporaire finir (30 minutes maximum) soit annuler le débit de basale temporaire via le menu de la pompe. Pour donner un bolus, vous repassez aussi à l'utilisation normale, avec les commandes du bolus d'origine. Quand vous recevez votre RileyLink (soit après avoir retrouvé l'ancien soit après avoir reçu un nouveau) et recommence à utiliser Loop, vous devez entrer tous les glucides dans Loop que vous auriez mangé récemment qui pourront avoir d'effet sur votre état actuel. Loop va lire l'historique de la pompe pour savoir quand et combien d'insuline que vous avez pris pendant qu'aucun RileyLink n'était connecté, cependant il n'a pas de moyen de savoir si, quand, et combien vous avez mangé. Donc, prenez le temps d'entrer toutes ces informations.

Pour les utilisateurs de l'Omnipod, votre pod va finir le débit de basale temporaire et puis repasser au débit de base que vous avez programmé. Sans un RileyLink, vous n'allez pouvoir effectuer aucun commande au pod, que ce soit des changements des débits de basale, un arrêt temporaire, ou des bolus. Si vous avez un RileyLink de secours, vous pouvez simplement connecter le nouveau RileyLink à la même application Loop et elle marchera avec un pod déjà en cours. Si vous n'avez pas de RileyLink de secours, vous allez devoir enlever le pod et commencer un nouveau avec votre PDM en attendant un nouveau RileyLink.

## Et si je perds mon iPhone, ou en acheter un nouveau ?
Quand vous recevez un nouvel iPhone, vous devez remonter Loop à nouveau, afin de l'avoir sur votre nouveau téléphone, utilisant la même méthode que la première fois. Loop n'est ni disponible sur iCloud, ni sur iTunes, donc il est recommandé d'avoir l'ordinateur Apple à votre disposition pour remonter l'application avant de recevoir le nouvel iPhone.

## Et les autres pompes ? Quand pourra-t-on passer en boucle fermée avec elles ?
La possibilité d'utiliser Loop est le résultat de l'effort, temps, et sacrifices des bénévoles. Le fait de pouvoir utiliser une pompe avec Loop est une entreprise importante. Si un jour on ajoute une pompe insuline sur la liste des périphériques compatible, ce sera parce qu'un nouveau groupe de développeurs a pris beaucoup de temps à les configurer. Mais il n'est pas utile de nous communiquer votre envie pour une autre marque de pompe, car nous aussi nous voulons bien en avoir d'autres. Il y a simplement beaucoup de travail exigé pour ce faire, qui n'est ni rapide ni facile.

## Puis-je avoir plusieurs applications Loop sur le même iPhone ?
Bien que ce soit techniquement possible, ayant plusieurs applications Loop sur le même téléphone pourrait entraîner des conflits inattendus qui auront des impacts négatifs sur la capacité de Loop de rester en boucle verte. Il est donc mieux et recommandé d'avoir une seule application Loop sur le téléphone.

## Puis-je rester sous Loop dans un avion ? Ou dans les montagnes ?
Oui. Loop ne requiert pas une connexion Internet, de même pour une connexion cellulaire. Donc à partir du moment où vous (ou l'utilisateur de Loop) avez Bluetooth activé sur l'iPhone ou l'iPod, le Dexcom et le RileyLink vont pouvoir faire leur travail avec Loop et la pompe insuline. 
