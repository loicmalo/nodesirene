const Sequelize = require('sequelize');
const sequelize = require('../db/dbConnection').sequelize_datacompile;
const queryInterface = sequelize.getQueryInterface();

const Sirene = sequelize.define('sirene', {
  siret: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  siren: {
    type: Sequelize.STRING
  },
  nic: {
    type: Sequelize.STRING
  },

  //Adresse
  l1_normalisee: {
    type: Sequelize.STRING
  },
  l2_normalisee: {
    type: Sequelize.STRING
  },
  l3_normalisee: {
    type: Sequelize.STRING
  },
  l4_normalisee: {
    type: Sequelize.STRING
  },
  l5_normalisee: {
    type: Sequelize.STRING
  },
  l6_normalisee: {
    type: Sequelize.STRING
  },
  l7_normalisee: {
    type: Sequelize.STRING
  },

  //Adresse
  l1_declaree: {
    type: Sequelize.STRING
  },
  l2_declaree: {
    type: Sequelize.STRING
  },
  l3_declaree: {
    type: Sequelize.STRING
  },
  l4_declaree: {
    type: Sequelize.STRING
  },
  l5_declaree: {
    type: Sequelize.STRING
  },
  l6_declaree: {
    type: Sequelize.STRING
  },
  l7_declaree: {
    type: Sequelize.STRING
  },

  //Autres adresses.
  numvoie: {
    type: Sequelize.STRING
  },
  indrep: {
    type: Sequelize.STRING
  },
  typevoie: {
    type: Sequelize.STRING
  },
  libvoie: {
    type: Sequelize.STRING
  },
  codpos: {
    type: Sequelize.STRING
  },
  cedex: {
    type: Sequelize.STRING
  },
  rpet: {
    type: Sequelize.STRING
  },
  libreg: {
    type: Sequelize.STRING
  },
  depet: {
    type: Sequelize.STRING
  },
  arronet: {
    type: Sequelize.STRING
  },
  ctonet: {
    type: Sequelize.STRING
  },
  comet: {
    type: Sequelize.STRING
  },
  libcom: {
    type: Sequelize.STRING
  },

  //Departement
  du: {
    type: Sequelize.STRING
  },
  tu: {
    type: Sequelize.STRING
  },
  uu: {
    type: Sequelize.STRING
  },
  epci: {
    type: Sequelize.STRING
  },
  tcd: {
    type: Sequelize.STRING
  },
  zemet: {
    type: Sequelize.STRING
  },

  //Global
  siege: {
    type: Sequelize.STRING
  },
  enseigne: {
    type: Sequelize.STRING
  },
  ind_publipo: {
    type: Sequelize.STRING
  },
  diffcom: {
    type: Sequelize.STRING
  },
  amintret: {
    type: Sequelize.STRING
  },

  //Compl�ments
  natetab: {
    type: Sequelize.STRING
  },
  libnatetab: {
    type: Sequelize.STRING
  },
  apet1: {
    type: Sequelize.STRING
  },
  libapet1: {
    type: Sequelize.STRING
  },
  apet2: {
    type: Sequelize.STRING
  },
  libapet2: {
    type: Sequelize.STRING
  },
  apet3: {
    type: Sequelize.STRING
  },
  libapet3: {
    type: Sequelize.STRING
  },
  apet4: {
    type: Sequelize.STRING
  },
  libapet4: {
    type: Sequelize.STRING
  },
  apet5: {
    type: Sequelize.STRING
  },
  libapet5: {
    type: Sequelize.STRING
  },

  //Autres
  dapet: {
    type: Sequelize.STRING
  },
  tefet: {
    type: Sequelize.STRING
  },
  libtefet: {
    type: Sequelize.STRING
  },
  efetcent: {
    type: Sequelize.STRING
  },
  defet: {
    type: Sequelize.STRING
  },
  origine: {
    type: Sequelize.STRING
  },
  dcret: {
    type: Sequelize.STRING
  },
  ddebact: {
    type: Sequelize.STRING
  },
  activnat: {
    type: Sequelize.STRING
  },
  lieuact: {
    type: Sequelize.STRING
  },

  //Production - type d'entreprise
  actisurf: {
    type: Sequelize.STRING
  },
  saisonat: {
    type: Sequelize.STRING
  },
  modet: {
    type: Sequelize.STRING
  },
  prodet: {
    type: Sequelize.STRING
  },
  prodpart: {
    type: Sequelize.STRING
  },
  auxilt: {
    type: Sequelize.STRING
  },
  nomen_long: {
    type: Sequelize.STRING
  },
  sigle: {
    type: Sequelize.STRING
  },

  //G�rant
  nom: {
    type: Sequelize.STRING
  },
  prenom: {
    type: Sequelize.STRING
  },
  civilite: {
    type: Sequelize.STRING
  },

  //Autre
  rna: {
    type: Sequelize.STRING
  },
  nicsiege: {
    type: Sequelize.STRING
  },
  rpen: {
    type: Sequelize.STRING
  },
  depen: {
    type: Sequelize.STRING
  },
  comen: {
    type: Sequelize.STRING
  },
  adr_mail: {
    type: Sequelize.STRING
  },
  nj: {
    type: Sequelize.STRING
  },
  libnj: {
    type: Sequelize.STRING
  },

  //Apen
  apen1: {
    type: Sequelize.STRING
  },
  libapen1: {
    type: Sequelize.STRING
  },
  apen2: {
    type: Sequelize.STRING
  },
  libapen2: {
    type: Sequelize.STRING
  },
  apen3: {
    type: Sequelize.STRING
  },
  libapen3: {
    type: Sequelize.STRING
  },
  apen4: {
    type: Sequelize.STRING
  },
  libapen4: {
    type: Sequelize.STRING
  },
  apen5: {
    type: Sequelize.STRING
  },
  libapen5: {
    type: Sequelize.STRING
  },

  //Autre
  dapen: {
    type: Sequelize.STRING
  },
  aprm: {
    type: Sequelize.STRING
  },
  ess: {
    type: Sequelize.STRING
  },
  dateess: {
    type: Sequelize.STRING
  },
  tefen: {
    type: Sequelize.STRING
  },
  libtefen: {
    type: Sequelize.STRING
  },
  efencent: {
    type: Sequelize.STRING
  },
  defen: {
    type: Sequelize.STRING
  },

  //Autres cat�gorie
  categorie: {
    type: Sequelize.STRING
  },
  dcren: {
    type: Sequelize.STRING
  },
  amintren: {
    type: Sequelize.STRING
  },
  monoact: {
    type: Sequelize.STRING
  },
  moden: {
    type: Sequelize.STRING
  },
  proden: {
    type: Sequelize.STRING
  },

  //ESA
  esaann: {
    type: Sequelize.STRING
  },
  tca: {
    type: Sequelize.STRING
  },
  esaapen: {
    type: Sequelize.STRING
  },
  esasec1n: {
    type: Sequelize.STRING
  },
  esasec2n: {
    type: Sequelize.STRING
  },
  esasec3n: {
    type: Sequelize.STRING
  },
  esasec4n: {
    type: Sequelize.STRING
  },

  //MAJ
  vmaj: {
    type: Sequelize.STRING
  },
  vmaj1: {
    type: Sequelize.STRING
  },
  vmaj2: {
    type: Sequelize.STRING
  },
  vmaj3: {
    type: Sequelize.STRING
  },
  datemaj: {
    type: Sequelize.STRING
  },

  //G�om
  latitude: {
    type: Sequelize.FLOAT
  },
  longitude: {
    type: Sequelize.FLOAT
  },
  precision: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.FLOAT
  },

  //Position
  /*
  pos: {
    type: Sequelize.GEOMETRY('POINT', 4326)
  }*/

},
  {
    freezeTableName: true,
    timestamps: false
  }
);


module.exports = Sirene;
