# Le compte de développeur Apple
Le [programme de développement d'Apple](https://developer.apple.com/programs/how-it-works/) est le système d'Apple qui fournit les [outils et ressources](https://developer.apple.com/programs/whats-included/) requis pour monter, partager, et utiliser les applications pour les produits Apple. Les membres du programme de développeur Apple peuvent essayer des applications sur leurs propres appareils avant de les soumettre à l'App Store pour distribution et vente. Les développeurs reçoivent aussi l'accès des versions beta des "*OS*" (d'anglais "operating systems, ou *logiciels*). Cependant, veuillez ne pas utiliser les versions beta si vous utilisez Loop. Elles ne seront pas compatibles avec Loop.

L'application Loop n'est pas disponible pour téléchargement sur l'App Store. Il faut le monter et installer soi-même, individuellement. Cela veut dire que les utilisateurs de Loop doivent s'inscrire comme un individu, *et non pas comme une organisation*, dans le programme de développeur d'Apple, afin de pouvoir installer Loop sur l'iPhone. Il existe deux types d'inscription : gratuit et payant. Il vous faut un Apple ID pour vous inscrire.

## Adhésion gratuite
L'adhésion gratuite a une restriction assez importante. Vous pouvez monter l'application Loop sur votre iPhone, mais l'application expirera *tous les 7 jours* et doit être remonter tout les 7 jours. Cela signifie que, après 7 jours, vous devez avoir accès à l'ordinateur, à Xcode, et à votre iPhone pour le remonter.

Vous ne pouvez pas le remonter après 6 jours et vous attendre à ce que ce soit fait et fini. La même application ne peut pas être remontée plus tôt que 7 jours... elle expirera toujours. Vous saurez quand l'application a expiré quand vous ne pouvez pas l'ouvrir. Quand vous tapez sur l'icône, vous allez voir momentanément un écran blanc, puis l'application va se refermer immédiatement, et vous retournerez à l'écran d'accueil.

Une autre distinction importante est que les applications construites avec un compte gratuit ne peuvent pas être montées avec la capacité Siri. Loop a cette capacité, donc pour les utilisateurs avec un compte gratuit, vous devez faire des démarches en plus pour pouvoir retirer Siri de Loop, avant de le monter. Ces démarches peuvent être retrouvés sous la section intitulée "Personnalisation du code".

Pour l'adhésion gratuite, vous êtes également limité(e) à 10 applications hebdomadairement.

## L'adhésion payante
Le coût est de 99€ par an. L'adhésion payante vous permet de monter Loop seulement une fois par an, l'application expirant une fois dans l'année. Vous devez remonter l'application si vous décidez de mettre à jour Loop pour les fonctions nouvelles. Si vous avez plusieurs DID dans votre foyer et construisez plusieurs applications Loop, il vous faut seulement une adhésion unique.

## Changer de gratuit à payant
Plusieurs utilisateurs commencent avec l'adhésion gratuite pour se familiariser avec Loop et être sûr de vouloir continuer. Quand vous montez l'application, Xcode identifie l'application Loop spécifiquement avec ce que l'on appelle un *bundle identifier*, basé sur votre compte développeur. Ce qui est génial avec cette organisation du système c'est que quand / si vous décidez de mettre à jour votre application Loop dans l'avenir, tous vos réglages anciens sont sauvegardés dans Loop. Fonctionnellement, c'est ce que vous connaissez déjà dans toutes vos applications : toute information dans l'application demeure inchangée après une mise à jour dans l'App Store. C'est pareil avec Loop.

Cette magie vient du *bundle identifier*. Le *bundle identifier* est automatiquement généré pour Loop depuis le compte développeur que vous utilisez pour signer Loop dans Xcode. Cela veut dire que le *bundle identifier* changera quand vous passez d'un compte gratuit à un compte payant. Pourquoi fallait-il mentionner ceci ? Parce qu'il influence la transition entre les deux comptes.

Si vous commencez avec un compte gratuit et monter Loop, vous allez avoir une application Loop (que l'on dénommera Loop1). Quand vous passez au compte payant et monte Loop, vous allez monter toute une nouvelle application Loop sur l'iPhone (que l'on dénommera Loop2). Loop2 ne saura rien sur les réglages et les informations de Loop1, donc vous allez devoir entrer à nouveau tout réglage de Loop1 (taux de basale, ratio glucides, facteurs de sensibilité, etc) et configurer tout cela dans Loop2 après l'avoir monté. Vous devez ensuite supprimer Loop1 de votre iPhone - celui qui a été monté avec le compte gratuit - pour éviter tout conflit.

### [Cliquez ici pour voir la page d'origine](https://loopkit.github.io/loopdocs/setup/requirements/appledev/)

