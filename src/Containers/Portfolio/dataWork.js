import { v4 as uuidv4 } from 'uuid'
import dvidoe from '../../Assets/3d_video.mp4'
import dvidoe1 from '../../Assets/3d_video_1.mp4'
import kingvideo from '../../Assets/the_return_of_the_king.mp4'
import toulonjoy from '../../Assets/video_presentation1.mp4'
import mameteo from '../../Assets/mameteo.mp4'
import Portfolio_vidoe from '../../Assets/Portfolio_vidoe.mp4'
import motionlogo from '../../Assets/motionlogo.mp4'
import daraigne from '../../Assets/3d_araigne.mp4'
import jeux1 from '../../Assets/jeux1.mp4'
import ticemed from '../../Assets/ticemed.mp4'

import eat_sushi_pdf from '../../Assets/pdf/eat_sushi.pdf'

import thereturnofkingpdf from '../../Assets/pdf/thereturnofking.pdf'

import ticemedpdf from '../../Assets/pdf/ticemed.pdf'

import toulonjoypdf from '../../Assets/pdf/toulonjoy.pdf'

import trekpdf from '../../Assets/pdf/trek.pdf'

import foretAmbulante from '../../Assets/pdf/foret_ambulante.pdf'

const datadWork = [
    {
        id: uuidv4(),
        type: 'Design',
        title: "Application de TREK",
        subTitle: "Adobe XD",
        imgPortfolio:'https://i.imgur.com/ZP5qBJs.png',
        img: 'https://i.imgur.com/ZP5qBJs.png',
        img2: 'https://i.imgur.com/DPJoTvM.png',
        img3:'https://i.imgur.com/LZZ6dXW.png',
        img4:'https://i.imgur.com/aWT2G0E.png',
        img5:'https://i.imgur.com/W1Bzpd0.png',
        img6:'https://i.imgur.com/00Oxy5x.png',
        description:'Le  but  du  projet  est  de  concevoir  graphiquement  un  site  web ainsi qu\'une application  de Trekking.Le Trek sélectionner est GR®406 Randonnée itinérante appelé La Voie Impériale, qui suit les traces de Napoléon qui est unique en France. Cette randonnée peut s’effectuer à pied ou à cheval.En  3  jours,  elle  vous  permettra  de  traverser  des    paysages encore  vierges  et  authentiques  de  la  Haute-Provence,  et  de découvrir un patrimoine remarquable au file des étapes.La Voie Impériale, reprend le cheminement de Napoléon Bonaparte  en  mars  1815.  Le  parcours  raverse  plusieurs  ville :  Barrême,    Blieux,  Castellane,  Chaudon-Norante,Digne-les-Bains, Entrages,SaintJacques,  Senez, et d’autres.',
        pdf: trekpdf,
        video:'',
    },
    {
        id: uuidv4(),
        type: 'Jeux',
        title: "The Return of the king",
        subTitle: "Unity 3D",
        imgPortfolio:'https://i.imgur.com/MccJw9i.png',
        img: 'https://i.imgur.com/MccJw9i.png',
        img2: 'https://i.imgur.com/YoRz91i.png',
        img3:'https://i.imgur.com/UsVQc26.png' ,
        img4:'https://i.imgur.com/7HT86KZ.png' ,
        description:'J’ai commencé le projet, il y a 2 semaines. J’ai mis longtemps à démarer car je ne savais pas quoi faire. J’ai donc imaginer “The  RETURN  OF  THE  KING”  un  jeu  en  2D  de  type  Pixel  ART médival , inspiré des jeux Dead Cells, Yes Your Grace, Katana zero, Celeste...Le speech de départ du jeu est : Le roi du royaume est parti enquêter sur une île, car des phénomènes étranges si y passent.Le joueur incarne le Roi , et peut donc le déplacer. Il peut aussi tuer des monstres grâce à des attaques.Il possède une barre de vie, et il peut utilisé des items u’il aura ramassés.Et le butest d’arrivée à la fin du niveau',
        pdf: thereturnofkingpdf,
        video: kingvideo,
    },
    {
        id: uuidv4(),
        type: 'Dev',
        title: "Application de météo",
        subTitle: "React Native",
        imgPortfolio:'https://i.imgur.com/E3N6Xh6.png',
        img: 'https://i.imgur.com/LqiBuji.png',
        img2: 'https://i.imgur.com/Tiwn2oT.png',
        description:'Simple Application mobile sous react native avec Weather API',
        pdf: '',
        video:mameteo,
    },
    {
        id: uuidv4(),
        type: '3D',
        title: " Low poly Sanctuaires shintos 3d",
        subTitle: "Blender",
        imgPortfolio:'https://i.imgur.com/sZAjsKn.gif',
        img: 'https://i.imgur.com/sZAjsKn.gif',
        img2: 'https://i.imgur.com/e9rWStE.png',
        img3:'https://i.imgur.com/6JOkw9F.png' ,
        img4:'https://i.imgur.com/ftLTeNr.png' ,
        img5:'https://i.imgur.com/ExBWjK3.png' ,
        img6:'https://i.imgur.com/bC6c4vK.png' ,
        description:'C\'est ma première réalisation 3D, et je suis partie sur le logiciel blender pour son côté communautaire et gratuit.J\'ai décidé de partir sur le thème du Japon et plus précisément sur les sanctuaires shintos. Au niveau de la 3D, j\'ai tout modélisé moi-même, quatre bâtiments, dont un grand temple qui m\'a pris beaucoup de temps, car j\'ai mis beaucoup de détail. Ensuite, j\'ai décidé de partir sur un style plus Low poly avec moins de détail, avec une porte TORII, un pont et un petit sanctuaire shinto. Et pour finir, j\'ai fait le décor avec des arbres, rochers, lanternes, feuilles d automne au sol, etc. ',
        pdf:'',
        video:dvidoe,
    },
    {
        id: uuidv4(),
        type: 'Dev',
        title: " Création du site Ticemed",
        subTitle: "WordPress",
        imgPortfolio:'https://i.imgur.com/yffTM5m.png',
        img: 'https://i.imgur.com/yffTM5m.png',
        img2: 'https://i.imgur.com/GLvanJk.png',
        img3:'https://i.imgur.com/k3MWsbq.png' ,
        img4:'https://i.imgur.com/A6uHRsn.png' ,
        img5:'https://i.imgur.com/BrlsKoB.png' ,
        img6:'https://i.imgur.com/qaTV7Hs.png' ,
        description:'C\'est ma première réalisation 3D, et je suis partie sur le logiciel blender pour son côté communautaire et gratuit.J\'ai décidé de partir sur le thème du Japon et plus précisément sur les sanctuaires shintos. Au niveau de la 3D, j\'ai tout modélisé moi-même, quatre bâtiments, dont un grand temple qui m\'a pris beaucoup de temps, car j\'ai mis beaucoup de détail. Ensuite, j\'ai décidé de partir sur un style plus Low poly avec moins de détail, avec une porte TORII, un pont et un petit sanctuaire shinto. Et pour finir, j\'ai fait le décor avec des arbres, rochers, lanternes, feuilles d automne au sol, etc. ',
        pdf:ticemedpdf,
        video:ticemed,
    },
    {
        id: uuidv4(),
        type: 'Jeux',
        title: "Premier jeux sur Unity",
        subTitle: "Unity 3D",
        imgPortfolio:'https://i.imgur.com/mHg6GlG.png',
        img: 'https://i.imgur.com/mHg6GlG.png',
        img2: 'https://i.imgur.com/8VXecjT.png',
        img3:'https://i.imgur.com/OmHng7r.png' ,
        img4:'https://i.imgur.com/7ix0BFv.png' ,
        img5: 'https://i.imgur.com/1MSGzC6.png',
        description:'La Forêt ambulante est un jeu de plateforme en 3D de type « die and retry » reprenant les codes classiques de ce type de jeux. En effet, disposant d’un nombre de vies illimitées, le but est de réussir à finir les différents niveaux proposés tout en faisant le meilleur score possible. ',
        pdf: foretAmbulante,
        video:jeux1,
    },
    {
        id: uuidv4(),
        type: 'Video',
        title: "Motion Logo",
        subTitle: "After effect",
        imgPortfolio:'https://i.imgur.com/ymQ1rJ6.gif',
        img: 'https://i.imgur.com/ymQ1rJ6.gif',
        img2: 'https://i.imgur.com/q41xBOo.png',
        img3:'https://i.imgur.com/AMlcIdB.png' ,
        img4:'https://i.imgur.com/3qZGvEA.png' ,
        img5: 'https://i.imgur.com/eB8mhB0.png',
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio reiciendis officiis in sed iste ipsa quae odit quidem voluptatem, non laborum expedita odio doloremque ullam voluptas blanditiis laudantium ipsam. Velit, facilis labore voluptas quas, voluptatum corrupti magni quam doloribus illum rerum doloremque praesentium error ipsa quasi id quisquam maiores enim!',
        pdf: '',
        video:motionlogo,
    },
    {
        id: uuidv4(),
        type: '3D',
        title: "Araignées-loup 3D",
        subTitle: "Blender",
        imgPortfolio:'https://i.imgur.com/JWt4G5b.png',
        img: 'https://i.imgur.com/JWt4G5b.png',
        img2: 'https://i.imgur.com/gLHT4kD.png',
        img3:'https://i.imgur.com/eLBHkNJ.png',
        img4:'https://i.imgur.com/W19uqMl.png',
        img5: 'https://i.imgur.com/JF0MKaG.png',
        img6:'https://i.imgur.com/iRHeE2f.jpg',
        description:'Deuxième réalisation 3D, et je l\'ai réalisée avec le logiciel blender.À l\'origine, j\'ai décidé de réaliser une Araignée mécanique, mais finalement j\'ai modélisé une araignée réaliste et précisément une araignée-loup.Ce projet m\'a pris beaucoup de temps entre 100 h et 110 h. Car j\'ai appris beaucoup de choses notamment avec le texturing, le shading, le compositing ,le rigging....Que je n\'avais jamais touché jusqu\'à maintenant. Concernant les rendus je les faisais moi-même au début, mais étant donné que j\'avais plus de 1000 frames à réaliser et que c\'était très long, j\'ai décidé d\'utiliser des fermes de rendu notamment https://garagefarm.net/.',
        pdf: '',
        video:daraigne,
    },
    {
        id: uuidv4(),
        type: 'Video',
        title: "Portfolio  avec du tracking",
        subTitle: "After effect",
        imgPortfolio:'https://i.imgur.com/k3Myzqw.png',
        img: 'https://i.imgur.com/k3Myzqw.png',
        img2: 'https://i.imgur.com/4SvQsif.png',
        img3:'https://i.imgur.com/v4bjPMC.png' ,
        img4:'https://i.imgur.com/lpAHHH4.png' ,
        description:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio reiciendis officiis in sed iste ipsa quae odit quidem voluptatem, non laborum expedita odio doloremque ullam voluptas blanditiis laudantium ipsam. Velit, facilis labore voluptas quas, voluptatum corrupti magni quam doloribus illum rerum doloremque praesentium error ipsa quasi id quisquam maiores enim!',
        pdf: '',
        video:Portfolio_vidoe,
    },
    {
        id: uuidv4(),
        type: 'Dev',
        title: "Toul’onJoy",
        subTitle: "Laravel",
        imgPortfolio:'https://i.imgur.com/HH0Ubh9.png',
        img: 'https://i.imgur.com/HH0Ubh9.png',
        img2: 'https://i.imgur.com/Fr7SNeI.png',
        img3:'https://i.imgur.com/8ipPi3W.png' ,
        img4:'https://i.imgur.com/EGenuw3.png' ,
        img5:'https://i.imgur.com/Kzsgriw.png' ,
        img6:'https://i.imgur.com/2zoHXDW.png' ,
        description:'J’ai dû réaliser une application web pour une réalisation collective. Donc pour développer l’application Toul’onJoy, j’ai travaillé en local avec un vagrant comme environnements de développement virtuel et Homestead comme machine virtuelle. Pour l’administration de base de données, j’ai utilisé MySQL Workbench et git pour le versionning du site avec bitbucket comme forge.J’ai construit l’application sur Laravel 6 un framework web open-source écrit en PHP respectant le principe MVC (modèle-vue-contrôleur).J’ai choisi pour ses nombreux avantages comme la capacité à fournir une sécurité de haut niveau (par exemple aucun risque d’injections SQL). De plus, le framework propose une excellente performance pour les applications web et donne accès à de nombreux outils pour les développeurs. Laravel dispose aussi d’une grande communauté et de nombreuses documentations.n parallèle, j’ai utilisé Bootstrap un framework HTML , CSS et Javascript Créé par Twitter.        Pour un gain de temps essentiel, j’ai décidé de travailler sur un template. ',
        pdf: toulonjoypdf,
        video:toulonjoy,
    },
    {
        id: uuidv4(),
        type: 'Design',
        title: "Eat Sushi",
        subTitle: "Adobe xd",
        imgPortfolio:'https://i.imgur.com/lTpoHBa.png',
        img: 'https://i.imgur.com/vlVucXw.png',
        img2: 'https://i.imgur.com/l075RIs.png',
        img3:'' ,
        img4:'' ,
        img5:'' ,
        img6:'' ,
        description:'Refonte graphique du site Eat Sushi, qui est une enseigne de restauration japonaise à emporter et en livraison. Ils mettent leurs produits en avant via un site web et une application mobile, que nous avons décidé de retravailler pour les raisons suivantes ',
        pdf: eat_sushi_pdf,
        video:'',
    }
];

export default datadWork;