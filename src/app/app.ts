import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeProject = signal<number | null>(null);

  projects = [
    {
      id: 0,
      name: 'Fustier',
      context: "Conception et realisation du site internet de l'entreprise afin de developper sa presence en ligne et de valoriser son savoir-faire artisanal local.",
      achievements: [
        "Conception de l'interface et structuration des contenus",
        'Developpement d un site responsive adapte aux differents supports',
        "Optimisation de l'experience utilisateur et de la navigation",
        "Travail sur l'identite visuelle et la mise en valeur de l'activite artisanale",
        'Optimisation du referencement naturel (SEO)',
        'Ajustements techniques et amelioration des performances du site',
        'Echanges avec le client pour comprendre ses besoins',
      ],
      techs: ['Tailwind CSS', 'TypeScript', 'Stitch', 'ClickUp', 'Webstorm'],
      images: ['Page_dAcceuil.png', 'Page_Contact.png'],
      beforeAfter: null as string | null,
      result: null as string | null,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 1,
      name: 'Yanis Coach',
      context: "Refonte complete du site internet afin de moderniser l'image de l'activite de coaching, renforcer sa credibilite en ligne et ameliorer la conversion des visiteurs en prospects.",
      achievements: [
        "Refonte graphique complete de l'interface",
        'Reorganisation et hierarchisation des contenus',
        'Optimisation du parcours utilisateur pour faciliter la prise de contact',
        "Amelioration de l'experience mobile et du responsive design",
        'Optimisation du referencement local (SEO)',
        'Travail sur les appels a l action et la mise en valeur des services',
        'Accompagnement du client dans la definition de ses besoins',
      ],
      techs: ['Tailwind CSS', 'TypeScript', 'Stitch', 'ClickUp', 'Webstorm'],
      images: ['PageAcceuil2.png', 'PageCoaching2.png'],
      beforeAfter: 'Capture.png' as string | null,
      result: 'Un site plus moderne, plus lisible et davantage oriente conversion, offrant une meilleure experience utilisateur sur ordinateur comme sur mobile.' as string | null,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      name: "L'Horchidee",
      context: "Refonte du site internet afin de moderniser l'image de l'etablissement, ameliorer sa visibilite en ligne et mettre davantage en valeur ses prestations.",
      achievements: [
        "Refonte de l'identite visuelle et de l'interface du site",
        "Reorganisation des contenus pour faciliter l'acces a l'information",
        "Amelioration de l'experience utilisateur et de la navigation",
        'Mise en valeur des prestations et informations essentielles',
        "Optimisation de l'affichage sur mobile et tablette",
        'Travail sur la coherence graphique et la lisibilite des contenus',
        'Echanges avec le client pour adapter le site a ses besoins',
      ],
      techs: ['HTML / CSS', 'TypeScript', 'Stitch', 'ClickUp', 'Webstorm'],
      images: ['OrchideAcceuil.png', 'OrchideCarte.png'],
      beforeAfter: 'Capture 1.png' as string | null,
      result: 'Une presentation plus professionnelle et une navigation plus intuitive.' as string | null,
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 3,
      name: 'Addict',
      context: "Participation au developpement et a l'amelioration de la plateforme.",
      achievements: [
        'Integration et mise a jour de contenus',
        'Realisation d ajustements graphiques sur differentes interfaces',
        'Participation aux evolutions fonctionnelles de la plateforme',
        'Optimisation de certains parcours utilisateurs',
        'Maintenance corrective et evolutive',
        'Collaboration autour des besoins et ameliorations a apporter',
      ],
      techs: ['Tailwind CSS', 'TypeScript', 'Stitch', 'ClickUp', 'Webstorm'],
      images: ['service.png', 'map.png'],
      beforeAfter: null as string | null,
      result: null as string | null,
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 4,
      name: "L'Hermine",
      context: "Creation et amelioration de la presence en ligne de l'etablissement afin de renforcer sa visibilite et de valoriser ses services.",
      achievements: [
        'Developpement et integration complete du site',
        "Mise en place de l'identite visuelle et respect de la charte graphique",
        "Creation d'une interface responsive adaptee mobile / tablette / desktop",
        "Optimisation de l'experience utilisateur et de la navigation",
        'Structuration des contenus pour ameliorer la lisibilite',
        "Travail sur la coherence globale de l'interface",
        'Collaboration avec le client pour adapter le site a ses besoins',
      ],
      techs: ['Tailwind CSS', 'TypeScript', 'Stitch', 'ClickUp', 'Webstorm'],
      images: ['LHermineAcceuil.png', 'LHermineContact.png', 'LHermineAcceuilSuite.png', 'LHermineCarte.png'],
      beforeAfter: null as string | null,
      result: null as string | null,
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  skills = [
    {
      category: 'Developpement front-end',
      icon: '💻',
      items: [
        "Integration et developpement d'interfaces web",
        'Layouts responsive (mobile / tablette / desktop)',
        "Frameworks et outils modernes d'integration",
      ],
    },
    {
      category: 'UX / UI',
      icon: '🎨',
      items: [
        "Amelioration de l'experience utilisateur",
        'Structuration et hierarchisation des contenus',
        'Optimisation des parcours et points de conversion',
      ],
    },
    {
      category: 'Performance & SEO',
      icon: '⚡',
      items: [
        'Optimisation des performances de chargement',
        'Bonnes pratiques SEO (structure, balises, contenu)',
        'Amelioration de la visibilite sur les moteurs de recherche',
      ],
    },
    {
      category: 'Organisation & collaboration',
      icon: '🤝',
      items: [
        'Comprehension et analyse des besoins metiers',
        'Echanges clients pour affiner les objectifs',
        'Suivi et organisation des taches sur les projets',
      ],
    },
  ];

  toggleProject(id: number) {
    this.activeProject.set(this.activeProject() === id ? null : id);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
