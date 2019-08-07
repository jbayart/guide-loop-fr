# Guide Loop fr

Ceci est le dépôt qui contient les fichiers sources pour le site [Guide de Loop](https://cyoung1024.github.io/guide-loop-fr/).

## Contribuer

Pour suggérer des changements, faites un fork du dépôt, editez les fichiers et soumettez vos changements avec une pull request.

### Previsualiser les changements
Pour prévisualiser votre travail au fur et à mesure que vous éditez, vous devez installer le paquet python `mkdocs` qui est utilisé pour créer ce site utlisant [MkDocs](http://www.mkdocs.org/).

Regardez [Installer Python correctement](https://python-guide-pt-br.readthedocs.io/fr/latest/starting/installation.html) pour de l'aide concernant l'installation de Python. MkDocs fonctionne avec Python 2.7, 3.3+, et pypy.

* Installation des modules python

```bash
$ cd <endroit du projet guide loop fr>
$ pip install -r requirements.txt
```

* Ou installez les modules individuellement
```bash
$ pip install mkdocs
```

* Lancer le serveur mkdocs localement
```bash
$ cd <endroit du projet guide loop fr>
$ mkdocs serve
```

* Prévisualiser le guide dans votre navigateur. La plupart des changements vont se mettre à jour automatiquement en même temps que vous éditez. Les changements de configuration et de navigation vont nécessiter un redémarrage du serveur mkdocs.
* Si vous le souhaitez, vous pouvez partager la prévisualisation avec les autres en envoyant les changements vers la branche `gh-pages` de votre dépôt.
```bash
$ mkdocs gh-deploy
```

## Conventions

* Utilisez des images pour plus de clarté quand cela est adapté.

