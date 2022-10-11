# Vidéo Youtube

Cette composante permet d'instancier un video player dans votre page web.

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Video"** sur une structure html ainsi que l'attribut **data-video-id="11qnwm2pNZU"**.
Attention, cet attribut dépendra du vidéo que vous voulez jouer. Sur un lien Youtube comme celui-ci:

https://www.youtube.com/watch?v=dQw4w9WgXcQ

Prenez tout ce qui est aprѐs le v=

```
 <div class="video" data-component="Video" data-video-id="dQw4w9WgXcQ">
```

<br><br>
Dans cette structure, ajoutez un div avec ces classes **video\_\_media js-video**, dans laquelle vous ajouterez une image poster comme thumbnail par défaut, puis une image play de votre choix.

<details>
<summary>Exemple complet</summary>

```
<section class="section section--full">
                <div class="video" data-component="Video" data-video-id="11qnwm2pNZU">
                    <div class="video__media js-video">
                        <img class="js-poster" src="assets/images/thumbnailVideo.jpg" alt="Spectacle d'improvisation" />

                        <img class="play" src="assets/images/play.svg" alt="" />
                    </div>
                </div>
            </section>
```

</details>

<br><br>

# Variantes

Il y a un attribut que vous pouvez modifiez afin de personnaliser votre lecteur de vidéo

### **data-controls**

Cet attribut, situé sur votre data-component Vidéo permet d'ajouter l’option afin de permettre ou non que les controles du lecteur Youtube soient visibles. Si le data-control est à 1, les controles seront présents. Si le data-control est à 0, les controles ne seront pas visibles.

# Js

Tout ce qu'il faut retenir, c'est de rajouter la ligne _import Video from './components/Video';_ dans notre ComponentFactory.

# Crédit

Cette librairie est une création de Maxime Picard pour le département TIM de Varennes.
