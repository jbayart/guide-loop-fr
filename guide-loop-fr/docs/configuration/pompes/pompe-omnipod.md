# Utilisateurs Omnipod

Votre Loop ne montre pas grand chose initialement jusqu'à ce qu'on lui donne quelques réglages de base. La première étape va consister à ajouter une pompe à Loop. Si vous utilisez la pompe Omnipod, vous pouvez continuer sur cette page. Si, par contre, vous utilisez une pompe Medtronic, veuillez continuer sur [cette page](../pompe-medtronic).

## Sélectionner le type de pompe

Commençons par cliquer sur le bouton de réglages de Loop dans la barre d'outils en bas de votre app Loop. Il ressemble à un petit pignon. Sur l'écran des réglages qui s'ouvre, cliquer sur `Ajouter une pompe` et sélectioner l'option **Omnipod** qui apparaît.

<p align="center">
<img src="../../img/settings_icon.png" width="220">
<img src="../../img/add_pump1.png" width="220">
<img src="../../img/add_pump2.png" width="220">
</p></br>

## Sélectioner le RileyLink

Une liste de tous les RileyLinks aux alentours va s'afficher dans l'écran de configuration du RileyLink. Sélectionez votre RileyLink en faisant glisser le bouton pour qu'il s'affcihe vert puis pressez le bouton bleu `Continuer` en bas de l'écran. Si votre RileyLink n'apparait pas, assurez-vous que l'interrupteur est allumé (interrupteur glissé vers le haut en direction de l'attache porte-clés du boitier) et que la batterie est chargée.

<p align="center">
<img src="../img/riley.png" width="250">
</p></br>

## Limites de débit et basales

L'écran suivant va vous demander deux informations :

* Les limites de débit : les limites de débit concernent à la fois votre taux de basale maximum et votre bolus maximum. Votre taux de basale maximum va limiter l'aggressivité de Loop pour traiter les glycémies élevées avec les basales temporaires. Typiquement, les nouveaux utilisateurs doivent rentrer une valeur d'environ 3 fois leur plus haut débit basal programmé jusqu'à ce que leur confort et leur expérience avec Loop s'améliore.

* Débits basaux : Entrez vos débits basaux programmés, en commençant à minuit. Du au contraintes du POD, les débits basaux programmés ont un maximum de 24 entrées, les entrées à 0 u/h ne sont pas autorisées et le taux augmente par tranche de 0.05 u/h.

<p align="center">
<img src="../img/pod_params.png" width="220">
<img src="../img/pod_limits.png" width="220">
<img src="../img/pod_basal.png" width="220">
</p></br>

Quand vous avez fini d'entrer ces valeurs, pressez le bouton bleu `Continuer` en bas de l'écran des réglages du pod pour continuer sur les prochaines étapes de configuration du POD.

## Appairer le POD

1. Placer le POD à proximité du RileyLink
2. Remplissez le POD avec l'insuline au moins jusqu'à ce qu'il bip (remplissage minimum de 80 unités)
3. Cliquer sur le bouton `Appairer`
4. Attendez pendant que la barre de progression de l'amorçage se termine
5. Pressez le bouton `Continuer` quand la rond bleue confirme que l'amorçage s'est terminé

<p align="center">
<img src="../img/pod_pair.png" width="250">
<img src="../img/pod_pairing1.png" width="250">
<img src="../img/pod_pairing2.png" width="250">
<img src="../img/pod_primed.png" width="250">
</p></br>

## Insérer la canule

1. Préparer votre site d'insertion
2. Enlever la protection de l'aiguille du POD et le support de l'adhésif.
3. Si la canule est bien caché à l'intérieur du pod , appliquez le POD sur le site de perfusion. Si la canule dépasse, pressez `annuler` dans le coin supérieur droit de l'écran et essayez avec un nouveau POD.
4. Pressez le bouton `Inserer la canule`.
5. Écoutez les clics remplissant la canule, attendez que l'insertion et que la barre de progression se termine. Le nombre de clics de l'insertion peut varier. La canule va se déployer avant que la barre de progression se termine.
6. Vérifiez que la canule s'est bien déployée en regardant à travers le judas sur le POD.
7. Pressez le bouton `Continuer`

<p align="center">
<img src="../img/pod_insert.png" width="220">
<img src="../img/pod_inserting.png" width="220">
<img src="../img/pod_inserted.png" width="220">
</p></br>

## Rappel d'expiration

Finissez la configuration en choisissant le rappel d'expiration par défaut (2 heures avant les 3 jours complets d'utilisation) ou choisissez un moment qui vous convient mieux. La notification apparaitra sur votre écran de vérouillage et fera vibrer votre téléphone à ce moment. La configuration est terminée et votre POD est prêt à être utilisé dès lors que vous pressez le bouton final.

<p align="center">
<img src="../img/pod_reminder1.png" width="250">
<img src="../img/pod_reminder2.png" width="250">
</p></br>

## Réglages du POD

Dès que la configuration du POD est terminée, vous allez vous retrouver sur l'écran des réglages du POD. Cet écran va vous fournir diverses informations importantes sur votre POD. Vous pourrez toujours revenir sur cet écran plus tard en tapant sur l'image de l'Omnipod dans vos réglages Loop.

<p align="center">
<img src="../img/pod_settings1.png" width="220">
<img src="../img/pod_settings2.png" width="220">
<img src="../img/pod_settings3.png" width="220">
</p></br>

#### Informations liées à l'appareil

La première section indique depuis quand le POD est actif, la date d'expiration, le temps restant et des informations d'identification du POD (si vous devez appeler le support client pour une panne de POD).

#### Commandes

Il y a deux commandes que vous pouvez envoyer au POD avec Loop.

* Suspendre la distribution : cette commande va susprendre toute distribution d'insuline : basales, basales temporaires et bolus en cours. Quand vous pressez "Suspendre la distribution", toute distribution sera suspendue indéfiniment.

<p align="center">
<img src="../img/pod_resume.jpg" width="250">
</p> 

Une bannière d'avertissement apparait sur l'écran principal de Loop quand la distribution d'insuline est suspendue.

<p align="center">
<img src="../img/pod_suspend_banner.jpg" width="250">
</p> 

Vous devrez presser `Toucher pour reprendre` dans la bannière ou le bouton `Reprendre la distribution` dans les réglages du POD pour reprendre le débit basal programmé et permettre à Loop de reprendre son activité. Les distributions de bolus ne seront pas continuées, si elles avaient été interrompues.

* Remplacer le POD : cette commande doit être utilisée pour désactiver un POD avant de le remplacer.

<p align="center">
<img src="../img/pod_replace.jpg" width="250">
</p> 

#### Configuration

* Rappel d'expiration : vous pouvez changer le rappel d'expiration à un moment qui vous convient mieux pour avoir une notification pour remplacer le POD. En utilisant les réglages par défaut, Loop règle le rappel à 3 jours complets. Vous pouvez régler le rappel à n'importe quel jour et heure jsuqu'à 80 heures. Cela change du PDM qui règle une alerte toujours 2 heures avant les 3 jours complets (72 heures). Cela suppose que vous n'allez pas tomber à cours d'insuline avant ce moment. Dans le cas où cela arrive, vous aurez une notification "POD vide".

<p align="center">
<img src="../img/pod_reminder.jpg" width="250">
</p></br>

* Changer le fuseau horaire : Si vous voyagez pour une courte période, vous n'avez pas à vous occuper de changer l'heure de votre POD. En revanche, si vous allez être loin de chez vous pour une plus longue période, vous allez vouloir mettre à jour la programmation de basale de votre POD pour qu'elle corresponde à l'heure locale en séléctionant la commande `Changer le fuseau horaire` quand cela vous convient. Utiliser cette commande va décaler la programmation de basale sur votre POD à une nouvelle heure. Si vous démarrez un nouveau POD, le nouveau fuseau horaire sera utilisé. S'il vous plait, attendez de voir `Réussi` apparaître sur la page pour être sûr que la commande a bien été reçu par le POD.

<p align="center">
<img src="../img/pod_timezone.jpg" width="250">
</p> 

* Commande de test : Cette commande est utilisée uniquement par les développeurs pour tester les commandes Omnipod dans Loop. Elle exécute actuellement une commande "Récupération du statut" et peut être utilisée pour avoir plus de détails à l'écran si besoin ou pour forcer une erreur pour générer un rapport d'incident après avoir eu un POD qui sonne.

#### Statut

Cette section fournit des informations sur le statut de votre POD.

* Distribution du bolus : cette ligne indique le % de progression en cas de bolus en cours.

<p align="center">
<img src="../img/pod_bolus.jpg" width="250">
</p> 

* Débit basal: Cette ligne indique quel débit est actif : le débit basal normal _programmé_, le débit basal _temporaire_ de 30 minutes ou si le POD est _suspendu_.

<p align="center">
<img src="../img/pod_basal.jpg" width="250">
</p> 

* Alarmes : si votre POD sonne à cause d'une alarme, cette ligne donne des informations sur l'alarme. En cliquant sur cette ligne, vous pouvez effacer ou mettre en "snooze" l'alarme.


<p align="center">
<img src="../img/pod_alarms.png" width="250">
</p> 

* Réservoir : les pods ne fournissent pas le volume d'insuline restant dans le réservoir jusqu'à ce qu'il reste 50 unités restantes. Donc, typiquement vous allez voir "50+ U" à cette ligne pour un moment avec un nouveau POD.

<p align="center">
<img src="../img/pod_reservoir.jpg" width="250">
</p> 

* Insuline délivrée : Cette ligne donne le montant total d'insuline, à la fois basale et bolus, délivrée par le POD depuis qu'il a été activé.

<p align="center">
<img src="../img/pod_insulin_delivered.jpg" width="250">
</p> 

## Prochaine étape : ajouter un CGM

Bravo ! Vous avez ajouté votre POD à l'app Loop. Maintenant, cliquer sur le bouton `Done` dans le coin supérieur droit dans vos réglages de pompe pour retourner sur les réglages de Loop. La prochaine étape est d'[ajouter un CGM](#) à votre app Loop. Après tout, sans données CGM, votre Loop ne loopera pas.