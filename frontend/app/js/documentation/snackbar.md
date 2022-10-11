# Snackbar

Ce composant permet d'instancier un snackbar responsive, animé et qui se modifie au scroll. Vous pourrez, grace a plusieurs paramѐtres simples, ajustez ce snackbar a votre guise.

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, créer une zone div, qui possѐde une classe snackbar et l'attribut **data-component="Snackbar"**. Dans cette zone, vous pourrez y ajouter tout le contenu que vous désirez qui y apparaisse.

<details>
<summary>Exemple complet</summary>

```
            <div
                class="snackbar snacknonvisible"
                data-component="Snackbar"
                data-delay="0"
                data-scrolllalimit="0"
                data-id="1"
                id="snackbar"
            >
                <div class="wrappersnack">
                    <div class="snackbar-content">
                        <p>Message générique.. Pour plus d'informations <a href="#">cliquez ici!</a></p>

                        <button class="boutonSnack">X</button>
                    </div>
                </div>
            </div>
```

</details>

# Scss

Dans notre scss, nous aurons plusieurs styles et animations que vous pourrez personnaliser à votre gout. L'important est surtout de comprendre le role des différentes classes que j'ai utilisé.

### **.snacknonvisible et .snackvisible**

C'est dans ces classe que vous pourrez incorporer les styles de votre snackbar. Non-visible est avant l'animation, visible est apres l'animation d'entrée, donc celui qui sera affiché sur votre site.

### ** .snackhidden **

C'est la classe qui fait disparaitre le menu apres le clic sur le bouton de fermeture. Vous pouvez y faire disparaitre votre snackbar comme bon vous semble.

# Js

Tout ce qu'il faut retenir, c'est de rajouter la ligne _import Header from './components/Header';_ dans notre ComponentFactory.js. Il n'y a pas de dépences externes dans cette composantes.

# Variantes

Il y a 3 attributs que vous pouvez modifiez afin de personnaliser votre snackbar.

### **data-auto-hide**

Cet attribut permet d'ajouter l’option afin de permettre ou non que le snackbar se cache automatiquement au scroll.

Par défaut, _data-auto-hide="true"_ , le snackbar va donc se cacher, mais si vous enlever true et le remplacez par false, le snackbar ne va plus se cacher au défilement. A vous de le changer si vous ne voudriez pas que votre snackbar se cache au scroll. De plus, si vous enlevez complѐtement cet attribut, le menu va se cacher par défaut.

### **data-delay**

Cet attributr permet de déterminer aprѐs combien de temps votre snackbar va apparitre. Par défaut, le temps est à 1000, ce qui équivaut a une seconde environ. A l'ouverture du site, le snack va donc seulement apopraitre apres 1 secondes.

### **data-scrolllalimit**

Cet attribut permet d'ajouter l’option de pouvoir changer quand le snackbar se cache. Pour ainsi dire, le chiffre que vous mettrez indique a quel pourcentage de la page votre snackbar va se cacher.

Par défaut, _data-scrolllimit="0.1"_ , le snackbar va donc se cacher apres que 10% de la page web est été défilée. A vous de le modifier si vous voulez qu'il se cache plus tot ou plus tard.

# Crédit

Cette librairie est une création de Maxime Picard, pour le département TIM de Varennes.
