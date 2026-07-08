ServerEvents.recipes((event) => {
  // imbuement_chamber
  event.remove({ id: "ars_nouveau:imbuement_chamber" });
  event.shaped("ars_nouveau:imbuement_chamber", ["PGP", "PAP", "PGP"], {
    P: "#forge:plamks/archwood",
    G: "#forge:ingots/gold",
    A: "#forge:dusts/arsenic"
  });
})
