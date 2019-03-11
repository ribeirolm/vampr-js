class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let currentVampire = this;
    if (vampire.numberOfVampiresFromOriginal > currentVampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let result = {};
    if (this.name === name) {
      result = this
    } else {
      for(vampire in this.offspring) {
        if (vampire.vampire.name === name){
          result = vampire.vampire;
        }
      }
    }
    return result;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalVampires = 0;
    for (vampire in this.offspring) {
      let vampireCount = vampire.totalDescendents +1
      totalVampires += vampireCount
    }
    return totalVampires;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];
    if(this.yearConverted > 1980) {
      vampires.append(this)
    }
    for (vampire in this.offspring) {
      let millennialVampires = vampire.allMillennialVampires
      vampires ++ millennialVampires
    }
    return vampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

