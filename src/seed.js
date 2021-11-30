import { db } from "./lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function seedDatabaseGroups() {
  const groups = [
    {
      groupId: "A",
      name: "Souslic",
      account: 500,
      salary: 1,
      quartiers: [],
      proprietes: [],
    },
    {
      groupId: "B",
      name: "Airedale",
      account: 500,
      salary: 1,
      quartiers: [],
      proprietes: [],
    },
    {
      groupId: "C",
      name: "Sewell",
      account: 500,
      salary: 1,
      quartiers: [],
      proprietes: [],
    },
    {
      groupId: "D",
      name: "Corsac",
      account: 500,
      salary: 1,
      quartiers: [],
      proprietes: [],
    },
    {
      groupId: "E",
      name: "Unau",
      account: 500,
      salary: 1,
      quartiers: [],
      proprietes: [],
    },
  ];

  groups.forEach((el) => {
    addDoc(collection(db, "groups"), el);
  });

  const regions = [
    {
      region: {
        idRegion: 1,
        nomRegion: "Faubourg",
        bonusComplet: 1.8, // 1296 par heure
        quartiers: [
          {
            quartier: {
              idQuartier: 1,
              nomQuartier: "Nord",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Patrimonia",
                prix: 2000,
                gain: 0, //fonction du temps
              },
            },
          },

          {
            quartier: {
              idQuartier: 2,
              nomQuartier: "Est",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Knokke-Out",
                prix: 1000,
                gain: 0.42, //302.4 par heure
              },
            },
          },

          {
            quartier: {
              idQuartier: 3,
              nomQuartier: "Sud",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Hotel coté-vert",
                prix: 1500,
                gain: 0.55, //396 par heure
              },
            },
          },

          {
            quartier: {
              idQuartier: 4,
              nomQuartier: "West",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Casino",
                prix: 3000,
                gain: 1.25, //900 par heure
              },
            },
          },
        ],
      },
    },

    {
      region: {
        idRegion: 2,
        nomRegion: "Joli_Bois",
        bonusComplet: 1.8, // 1296 par heure
        quartiers: [
          {
            quartier: {
              idQuartier: 1,
              nomQuartier: "Nord",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Banque CBC",
                prix: 2500,
                gain: 0, //fonction du temps
              },
            },
          },

          {
            quartier: {
              idQuartier: 2,
              nomQuartier: "Est",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Terrain de Rugby",
                prix: 1000,
                gain: 0.1, // 72 par heure + vol a une patrouille
              },
            },
          },

          {
            quartier: {
              idQuartier: 3,
              nomQuartier: "Sud",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Cimetièrre",
                prix: 2000,
                gain: 0.2, //144 par heure + vie gratuite
              },
            },
          },

          {
            quartier: {
              idQuartier: 4,
              nomQuartier: "West",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Café de Paris",
                prix: 1000,
                gain: 0.42, //302.4 par heure
              },
            },
          },
        ],
      },
    },

    {
      region: {
        idRegion: 3,
        nomRegion: "Chenois",
        bonusComplet: 1.8, // 1296 par heure
        quartiers: [
          {
            quartier: {
              idQuartier: 1,
              nomQuartier: "Nord",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Ping",
                prix: 1000,
                gain: 0.1, // 72/h +vol de 500$/h et si ping + rugby vol de 2000$/h
              },
            },
          },

          {
            quartier: {
              idQuartier: 2,
              nomQuartier: "Est",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Refuge Politique",
                prix: 1000,
                gain: 0.1, // 72/h + achat vie 50%
              },
            },
          },

          {
            quartier: {
              idQuartier: 3,
              nomQuartier: "Sud",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "Tati-crouton",
                prix: 1500,
                gain: 0.55, //396 par heure
              },
            },
          },

          {
            quartier: {
              idQuartier: 4,
              nomQuartier: "West",
              gain: 0.3, // 216 par heure
              batiment: {
                nomBatiment: "pleine de jeu",
                prix: 500,
                gain: 0.3, // 216 par heure
              },
            },
          },
        ],
      },
    },
  ];

  regions.forEach((el, index) => {
    console.log("el", el.region);
    addDoc(collection(db, "regions"), el.region);
  });
}

export function seedDatabaseRegions() {}
