#  Erreurs
Il existe deux types d'erreurs qui peuvent vous arriver : des avertissements jaunes et des alertes rouges. Vous allez voir ces avertissements et alertes dans la colonne à gauce de votre fenêtre Xcode.

**Des avertissements jaunes** n'entaîne pas l'échec de construction, ce sont simplement des avertissements. Parfois, une version de Loop peut avoir des petites divergences qui entraînent ces avertissements jaunes. Ignorez-les. N'essayez pas de les résoudre. Laissez-les.

**Des alertes rouges** doivent être résolues avant de continuer. Les étapes ci-dessous vont vous expliquer comment les résoudre selon le type d'alerte que vous voyez.

## Commencez par les causes communes
Avant d'essayer de résoudre ces alertes rouges, commençons par les causes les plus communes :

1) **N'utilisez pas de version beta.** Si vous utilisez une version beta de iOS ou de Xcode, votre application Loop ne va pas aboutir. Si vous avez Xcode beta, veuillez le désinstaller et télécharger la version normale. Si vous avez iOS beta sur votre iPhone, vous devez restaurer votre iPhone entièrement. Vous pouvez restaurer votre iPhone à (1) la dernière sauvegarde non-beta que vous avez fait ou (2) restaurer comme un nouvel iPhone (réglages défauts). Oui, supprimer la version beta de iOS est pénible... donc ne l'installez pas.

2) **Avez-vous vérifier vos mis-à-jours ?**

>
> **Versions minimums**
> Si vous utilisez le code pour Omnipod Loop, Loop dev, ou avez iOS 12.2 installé, veuillez vérifier que vous avec macOS 10.14.3 (Mojave) et Xcode 10.2 ou version ultérieure. Vous n'allez pas pouvoir monter votre application Loop sans ces versions.
>

3) **Téléchargez une nouvelle copie du code de Loop, n'utilisez pas un téléchargement ancien que vous avez monté il y a longtemps.** Il se peut que cette verison ne soit pas compatible avec les versions iOS et Xcode que vous avez.

4) Si vous avez u compte de développer gratuit, il faut finir les personnalisations du code pour [enlever la capacité Siri](https://loopkit.github.io/loopdocs/build/code_customization/#disable-siri-capabilities).

## Demandez de l'aide
ARRÊTEZ ! Lisez cette section ! Important !

Avant de publier dans Zulipchat ou Looped demandant de l'aide, *faites votre travail d'abord*. Les erreurs énuméré ci-dessous (et les erreurs communes ci-dessus) ont beaucoup de succès **SI ON UTILISE CETTE PAGE**. Les bénévoles dans le group qui répondent aux questions dans Looped ou Zulipchat aimeraient bien passer plus de temps pour améliorer Loop dans autres secteurs au lieu de répondre aux questions qui ont leurs réponses sur cette page.

Par conséquent, utilisez cette liste d'erreurs en essayant de trouver la solution tout(e) seul(e). Après, si vous devez demander de l'aide car cette page ne contient pas la solution de votre soucis, vous devez aussi inclure l'information pertinante avec votre publication pour que nous (les bénévoles) savons que vous aviez lu cette page et là où vous êtes dans le proccessus.

>
> *Veuillez inclure dans votre publication :*
> * La version de Xcode que vous utilisez
>
> * La version de Loop que vous utilisez
>
> * La version de iOS sur votre iPhone
>
> * Précisez si vous utilisez un compte de développeur gratuit ou payant. Confirmez que vous avez supprimé les capacités Siri.
>
> * Confirmez que vous n'utilisez pas Xcode beta ou iOS beta (pour que l'on évite de vous demander, veuillez dire "je n'utilise pas de version beta"... cela gangera beaucoup de temps)
>
> * Des capteurs d'écrans de TOUTE la fenêtre de Xcode et / ou Terminal montrant votre erreur et tout message que vous avez vus en travaillant sur les erreurs et leur(s) solution(s)
>
> * Une liste d'étapes que vous avez déjà pris
>

Astuce n° 1 : maj + cmd + 4 va vous donner un outil de capture d'écran que vous pouvez manipuler en cliquant et glissant pour sélectionner l'endroit que vous voulez prendre en photo. Quand vous lâchez le souris, la capture d'écran sera sauvegarder automatiquement sur votre bureau. Des photos de votre écran prises par votre téléphone ne suffiront pas, elles sont souvent peu lisibles.

Astuce n° 2 : quand vous prennez des captures d'écran pour une publication, veuillez inclure toute la fenêtre de Xcode. Ne focaliser pas sur un seul endroit. Il y a de l'information dans chaque partie de la fenêtre, ce qui aide les bénévoles énormement.

