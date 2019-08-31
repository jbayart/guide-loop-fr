#  Configurer le compte de développeur Apple
Afin de construire votre application Loop sur votre iPhone, vous devez avoir un compte de développeur Apple. Vous avez deux options pour votre compte de particulier : gratuit ou payant.

## Adhésion gratuit
Si vous décidez d'utiliser un compte **gratuit**, il faut savoir que :

1) Les applications Loop signées avec un compte gratuit expireront après 7 jours. Le 7e jour, votre application Loop s'affichera avec un écran blanc puis se fermera immédiatement. Pour reconstruire Loop, vous devez avoir un ordinateur Apple. **Vous ne pouvez pas reconstruire l'application le 5e jour (quand cela vous convient, par exemple) en espérant de remettre à zéro le compteur de 7 jours.** L'application expirera le 7e jour de sa création.

2) Si vous décidez de changer votre compte gratuit en compte payant, vous devez remontez l'application Loop afin de la signer avec votre nouveau compte.

3) Vous devez faire une manipulation du code pour enlever les capacités Siri pour pouvoir monter l'application.

## Adhésion payant
Si vous décidez d'utiliser un compte **payant**, il faut savoir que :

1) Les applications Loop signées avec un compte payant expireront après 1 an (365 jours).

2) Le compte payant coûte 99€ et se renouvellera automatiquement annuellement. Vous pouvez changer le renouvellement automatique dans les réglages de votre compte à tout moment.

3) Si votre foyer a plusieurs utilisateurs Loop, il suffit d'avoir un seul compte de développeur. Ce compte unique peut être utilisé pour signer plusieurs applications Loop.

## Inscription
Si vous avez décidez d'utiliser un compte *gratuit*, merci de ne pas suivre les étapes suivantes. Les étapes pour le compte *gratuit* seront indiqué plus tard.

>
> ***Attention***
>
> Si vous avez décidez d'utiliser un compte payant, vous devez vous inscrire. Allez sur [le site de développeur Apple](https://developer.apple.com/programs/enroll/) pour ce faire.
>

L'Apple ID que vous utilisez pour vous inscrire dans le programme de développeur ne doit pas forcément être le même que celui du portable (par exemple, un parent qui installe l'application Loop sur l'iPhone de son enfant). Typiquement, l'inscription se fait avec l'Apple ID de la personne qui construit l'application Loop. Après l'inscription, veuillez vérifiez votre boîte e-mail pour un message de confirmation. Apple signale que ceci peut prendre jusqu'à 24 heures, mais il se peut que l'e-mail arrive après quelques minutes.

## Différencier entre Gratuit et Payant dans Xcode
Plus tard dans ce processus, vous allez sélectionner un "*team*" pour signer l'application et Xcode va générer automatiquement ce que l'on appelle un *Provisioning Profile* pour "signer" l'application. C'est comme ça qu'Apple surveille la validité et sécurité de l'application. Les comptes gratuits seront indiqués par "(Personal Team)" à droite de votre nom. Les comptes payants n'auront pas "(Personal Team)".

![team](img/team.png)

## Changer de gratuit en payant
En résumé : il n'y a pas de soucis si vous voulez utiliser un compte gratuit avant de payer pour un compte. Plusieurs utilisateurs commencent avec l'adhésion gratuite pour se familiariser avec Loop et être sûr de vouloir continuer. Quand vous montez l'application, Xcode identifie l'application Loop spécifiquement avec ce que l'on appelle un *bundle identifier*, basé sur votre compte développeur. Ce qui est génial avec cette organisation du système c'est que quand / si vous décidez de mettre à jour votre application Loop dans l'avenir, tous vos réglages anciens sont sauvegardés dans Loop. Fonctionnellement, c'est ce que vous connaissez déjà dans toutes vos applications : toute information dans l'application demeure inchangée après une mise à jour dans l'App Store. C'est pareil avec Loop.

Cette magie vient du *bundle identifier*. Le *bundle identifier* est automatiquement généré pour Loop depuis le compte développeur que vous utilisez pour signer Loop dans Xcode. Cela veut dire que le *bundle identifier* changera quand vous passez d'un compte gratuit à un compte payant. Pourquoi fallait-il mentionner ceci ? Parce qu'il influence la transition entre les deux comptes.

Si vous commencez avec un compte gratuit et monter Loop, vous allez avoir une application Loop (que l'on dénommera Loop1). Quand vous passez au compte payant et monte Loop, vous allez monter toute une nouvelle application Loop sur l'iPhone (que l'on dénommera Loop2). Loop2 ne saura rien sur les réglages et les informations de Loop1, donc vous allez devoir entrer à nouveau tout réglage de Loop1 (taux de basale, ratio glucides, facteurs de sensibilité, etc) et configurer tout cela dans Loop2 après l'avoir monté. Vous devez ensuite supprimer Loop1 de votre iPhone - celui qui a été monté avec le compte gratuit - pour éviter tout conflit.

### Prochaine étape : [Installer Xcode](https://cyoung1024.github.io/guide-loop-fr/construire/installer-xcode/)

### [Cliquez ici pour voir la page d'origine](https://loopkit.github.io/loopdocs/build/step6/)


