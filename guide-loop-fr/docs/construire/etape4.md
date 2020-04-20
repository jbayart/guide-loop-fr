# Moniteur de glycémie en continu
!!! note "Temps estimé"

!!! warning "Résumé"

!!! danger "FAQ"

Un moniteur de glycémie en continu (ou CGM, d’anglais “continuous glucose monitor”) fournit à Loop les données du taux de glucose. Ces données permet Loop de calculer la tendance des taux et donc prévoir la glycémie future à base de celle-ci ainsi que les glucides mangés et vos réglages de Loop. Vous trouverez ci-dessous les marques de CGM compatibles avec Loop. Les données du CGM sont obligatoires pour utiliser Loop. Si Loop est incapable de trouver ces données, il peut pas fonctionner en tant que boucle ni ouverte, ni fermée.

## Dexcom G5 et G6
Le Dexcom G5 et G6 (ce dernier n’étant pas disponible en France, mais restant tout de même compatible) reçoivent directement les données de glycémie via Bluetooth dans l’application Dexcom sur votre iPhone. Aucun de ces deux systèmes requièrent le récepteur Dexcom. Pour faire fonctionner Loop, votre application Dexcom doit être active.

## Dexcom G4 avec Share Receiver
Le système de “Share” (partage) G4 transmet les données de glycémie depuis le transmetteur au Dexcom G4 Share Receiver. Le récepteur se connecte ensuite à l’application Dexcom Share2 sur votre iPhone via Bluetooth. L’application Share2 envoie les données aux serveurs Dexcom. Pour faire fonctionner Loop, votre application Dexcom doit être active.

## CGM de Medtronic
Le CGM Medtronic, surnommé Enlite, est disponible avec des modèles 522 / 722, 523 / 723, et 554 / 754 de Medtronic. Il envoie les données via une connexion sans fil à la pompe insuline. Loop peut ensuite lire les données directement depuis la pompe en utilisant le RileyLink.

## Looper hors connexion
“Hors connexion” signifie ici d’utiliser Loop sans Internet et sans données cellulaires. Loop ne requiert pas un système spécifique / en plus pour fonctionner hors connexion. Vous n’avez aucun manipulation à faire si vous allez faire du camping ou vous retrouvez dans les montagnes, par exemple. Pour looper hors connexion le Bluetooth sur l’iPhone doit toujours être activé, et pour le Dexcom l’application Dexcom / Share2 doit toujours être active, mais pas nécessairement en train d’envoyer des données en ligne. Si vous mettez votre iPhone en mode avion, pensez à réactiver Bluetooth pour continuer à faire fonctionner Loop. Si la connexion hors ligne échoue, vérifiez que vous avez bien mis l’ID du transmetteur Dexcom dans les réglages de Loop.

## Les serveurs Dexcom
Dans les cas rares, il se peut que Loop n’arrive pas à “entendre” les transmissions Bluetooth de Dexcom. Quand ceci arrive, Loop peut lire directement les données depuis les serveurs de Dexcom (pourvu que vous avez mis vos identifiants Dexcom Share dans Loop et à activé Dexcom Share). Quand Loop utilise Dexcom Share comme source des données, vous verrez un petit nuage à côté de votre taux de glycémie dans Loop. Ceci requiert une connexion à l’Internet ou des données cellulaires.

## Autres CGM non compatible nativement avec Loop
Freestyle Libre (BluCon et Miaomiao), Eversense, Medtronic Guardian... voici quelques exemples de CGM qui ne fonctionnent pas nativement avec Loop. Si vous souhaitez utiliser l’un de ces CGM comme source des données, vous devez aller chercher les parties tierces qui font l’intégration entre le CGM et Loop. Ces guides ne montrent pas les méthodes alternatives des systèmes CGM non compatibles ou des applications comme Spike.

### [Cliquez ici pour voir la page d'origine](https://loopkit.github.io/loopdocs/build/step4/)
