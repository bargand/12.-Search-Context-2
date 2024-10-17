import React, { useState } from "react";
import "./CategorySearch.css";

const CategorySearch = ({ category }) => {
  const [searchInput, setSearchInput] = useState("");
  const visibleItemsCount = 5; // Number of items to show initially

  // Example data for each category (You can replace this with actual data)
  const data =
    category === "Genetics"
      ? [
          { main: "Debargha Nandi", sub: "Sub content for Debargha" },
          { main: "Riya Nandi", sub: "Sub content for Riya" },
          { main: "Mukta Das", sub: "Sub content for Mukta" },
        ]
      : category === "Plant Breeding"
      ? [
          { main: "IFFCO", sub: "Indian Farmers Fertiliser Cooperative" },
          { main: "KRIBHCO", sub: "Krishak Bharati Cooperative Limited" },
        ]
      : [
          { main: "Cytogenetics: An Overview", sub: "(Page-3-23)" },
          { main: "History Of Cytogenetics", sub: "(Page-4)" },
          { main: "Chromosomes And Their Structure", sub: "(Page-4)" },
          {
            main: "Chromosome Numbers: Symbols And Terminology",
            sub: "(Page-4)",
          },
          { main: "Karyotype Symmetry", sub: "(Page-6)" },
          { main: "Euchromatin And Heterochromatin", sub: "(Page-7)" },
          {
            main: "Banding Patterns For Identification Of Chromosomes",
            sub: "(Page-8)",
          },
          {
            main: "In Situ Hybridization (Ish) With Dna Probes",
            sub: "(Page-12)",
          },
          {
            main: "Fluorescence In Situ Hybridization (Fish)",
            sub: "(Page-14)",
          },
          {
            main: 'Genomic In Situ Hybridization Using "Genome Blocking"',
            sub: "(Page-15)",
          },
          { main: "Computer Assisted Chromosome Analysis", sub: "(Page-15)" },
          { main: "Flow Cytometry For Study Of Chromosomes", sub: "(Page-15)" },
          {
            main: "Special Types Of Chromosomes For Cytogenetic Studies",
            sub: "(Page-17)",
          },
          { main: "Lampbrush Chromosomes", sub: "(Page-17)" },
          { main: "Salivary Gland Chromosomes", sub: "(Page-17)" },
          { main: "B Chromosomes", sub: "(Page-18)" },
          { main: "Genetic, Cytogenetic And Physical Maps", sub: "(Page-20)" },
          {
            main: "Relation Between Chromosome Morphology And Genetic Maps",
            sub: "(Page-21)",
          },
          { main: "Chromosomes In Sex Determination", sub: "(Page-21)" },
          {
            main: "Chromosomes And Agamospermy (Apomictic Seed)",
            sub: "(Page-22)",
          },
          { main: "Molecular Cytogenetics/Cytogenomics", sub: "(Page-22)" },
          { main: "Cytogenomics", sub: "(Page-22)" },
          { main: "Structural Variations (SVs) In Genomes", sub: "(Page-23)" },
          {
            main: "Ancient Duplications And Palaeopolyploidy",
            sub: "(Page-23)",
          },
          { main: "Duplications And Deficiencies", sub: "(Page-24-47)" },
          { main: "Duplications", sub: "(Page-24)" },
          {
            main: "Origin, Occurrence And Production Of Duplications",
            sub: "(Page-24)",
          },
          {
            main: "Chromosome Pairing At Meiosis In Duplication Heterozygotes",
            sub: "(Page-26)",
          },
          {
            main: "Crossing Over In Duplication Heterozygotes",
            sub: "(Page-27)",
          },
          { main: "Phenotypic Effects Of Duplications", sub: "(Page-28)" },
          {
            main: "Bridge-Breakage-Fusion Cycle Due To Duplications In Corn",
            sub: "(Page-30)",
          },
          { main: "Duplications In Plant Breeding", sub: "(Page-30)" },
          { main: "Duplications In Evolution", sub: "(Page-30)" },
          { main: "Deficiencies", sub: "(Page-33)" },
          { main: "Types Of Deficiencies", sub: "(Page-34)" },
          { main: "Origin And Occurrence Of Deficiencies", sub: "(Page-34)" },
          {
            main: "Production Of Deficiencies Through Irradiation (X-Rays And Neutrons)",
            sub: "(Page-34)",
          },
          {
            main: "Production Of Deficiencies In Wheat Due To A Gametocidal Chromosome",
            sub: "(Page-35)",
          },
          {
            main: "Meiosis And Breeding Behaviour Of Deficiency Heterozygotes",
            sub: "(Page-35)",
          },
          {
            main: "Use Of Deficiencies For Chromosome Mapping",
            sub: "(Page-36)",
          },
          { main: "Genetics Of Deficiencies", sub: "(Page-40)" },
          {
            main: "Effects Of Duplications And Deficiencies On Crossing Over",
            sub: "(Page-45)",
          },
          {
            main: "Duplications And Deficiencies At The Molecular Level",
            sub: "(Page-46)",
          },

          { main: "Inversions", sub: "(Page-48-65)" },
          { main: "Types Of Inversions", sub: "(Page-49)" },
          {
            main: "Origin, Occurrence And Production Of Inversions",
            sub: "(Page-49)",
          },
          {
            main: "Meiotic Pairing In Inversion Heterozygotes",
            sub: "(Page-49)",
          },
          {
            main: "Cytological Crossing Over And Its Consequences In Inversion Heterozygotes",
            sub: "(Page-50)",
          },
          { main: "Pericentric Inversions", sub: "(Page-50)" },
          { main: "Paracentric Inversions", sub: "(Page-51)" },
          {
            main: "Sterility And Recombination In Inversion Heterozygotes",
            sub: "(Page-51)",
          },
          {
            main: "Identification Of Paracentric Inversions",
            sub: "(Page-54)",
          },
          {
            main: "Behaviour Of Bridge And Fragment In Paracentric Inversion Heterozygotes",
            sub: "(Page-55)",
          },
          {
            main: "Prediction Of Pollen Abortion From Meiosis And Breeding Behaviour Of Inversion Heterozygotes",
            sub: "(Page-56)",
          },
          {
            main: "Location Of Chromosome Breakpoints In Inversions",
            sub: "(Page-57)",
          },
          { main: "Cytological Methods", sub: "(Page-57)" },
          { main: "Genetic Methods", sub: "(Page-57)" },
          { main: "Genetics Of Inversions", sub: "(Page-58)" },
          { main: "Included And Overlapping Inversions", sub: "(Page-58)" },
          { main: "Included Inversions", sub: "(Page-58)" },
          { main: "Overlapping Inversions", sub: "(Page-59)" },
          { main: "Inter-Chromosomal Effects Of Inversions", sub: "(Page-59)" },
          {
            main: "Role Of Inversions In Evolution And Karyotype Reconstruction",
            sub: "(Page-61)",
          },
          { main: "Inversions In Drosophila", sub: "(Page-61)" },
          { main: "Inversions In Plants", sub: "(Page-63)" },
          { main: "Inversions At The Molecular Level", sub: "(Page-64)" },

          { main: "Interchanges", sub: "(Page-66-92)" },
          {
            main: "Occurrence Of Interchanges In Nature: Early History",
            sub: "(Page-66)",
          },
          {
            main: "Natural Origin And Artificial Induction Of Interchanges",
            sub: "(Page-67)",
          },
          { main: "Cytological Behaviour Of Interchanges", sub: "(Page-67)" },
          { main: "Chromosome Association At Meiosis", sub: "(Page-67)" },
          { main: "Orientation Of Interchange Quadrivalent", sub: "(Page-69)" },
          {
            main: "Crossing Over In Interchange Heterozygotes",
            sub: "(Page-70)",
          },
          {
            main: "Interchange Heterozygotes With Low Sterility",
            sub: "(Page-72)",
          },
          {
            main: "Breeding Behaviour Of Interchange Heterozygotes",
            sub: "(Page-73)",
          },
          { main: "Detection Of Interchanges", sub: "(Page-74)" },
          {
            main: "Identification Of Chromosomes Involved In Interchanges",
            sub: "(Page-74)",
          },
          {
            main: "Linkage Of Semisterility With Two Linkage Groups",
            sub: "(Page-74)",
          },
          {
            main: "Linkage Relations In Interchange Stocks Vs. Normal Stocks",
            sub: "(Page-76)",
          },
          {
            main: "Pachytene Analysis In Interchange Heterozygotes",
            sub: "(Page-77)",
          },
          { main: "Karyotypes In Interchange Stocks", sub: "(Page-77)" },
          { main: "Use Of Trisomic Sets", sub: "(Page-77)" },
          { main: "Intercross Method", sub: "(Page-78)" },
          {
            main: "Use Of Monosomics And Double Monotelodisomics In Wheat And Cotton",
            sub: "(Page-78)",
          },
          { main: "Induced Interchanges", sub: "(Page-78)" },
          { main: "Translocation Tester Sets", sub: "(Page-79)" },
          {
            main: "Oenothera Method Of Gamete Selection And Synthesis Of Complex Translocation Rings",
            sub: "(Page-80)",
          },
          {
            main: "Localization Of Genes Using Interchanges",
            sub: "(Page-81)",
          },
          {
            main: "Linkage Between Marker Genes And Semi-Sterility (Interchange Breakpoints)",
            sub: "(Page-81)",
          },
          { main: "Use Of Simple B-A Translocations", sub: "(Page-82)" },
          {
            main: "Origin And Occurrence Of Interchanges In Nature",
            sub: "(Page-84)",
          },
          {
            main: "Interchange Homozygosity In Datura Races And Wheat Varieties",
            sub: "(Page-84)",
          },
          {
            main: "Permanent Hybrids In Oenothera And Other Genera",
            sub: "(Page-85)",
          },
          {
            main: "Interchange Heterozygosity And Permanent Hybrids In Oenothera",
            sub: "(Page-85)",
          },
          {
            main: "Large Rings In Other Genera Of Onagraceae",
            sub: "(Page-89)",
          },
          { main: "Large Rings In Other Families", sub: "(Page-90)" },
          { main: "Robertsonian Translocations", sub: "(Page-90)" },
          { main: "Interchanges At The Molecular Level", sub: "(Page-90)" },
          { main: "Haploidy In Higher Plants", sub: "(Page-93-112)" },
          {
            main: "Terminology And Classification Of Haploids",
            sub: "(Page-93)",
          },
          {
            main: "Origin, Occurrence And Production Of Haploids",
            sub: "(Page-94)",
          },
          {
            main: "Production Of Haploids Through Parthenogenesis And Apogamy",
            sub: "(Page-94)",
          },
          {
            main: "Production Of Haploids Through Chromosome Elimination",
            sub: "(Page-97)",
          },
          {
            main: "Production Of Haploids Through Anther And Microspore Culture",
            sub: "(Page-101)",
          },
          {
            main: "Production Of Haploids Through Ovule Culture",
            sub: "(Page-101)",
          },
          { main: "Haploid Inducing/Doubling Genes", sub: "(Page-102)" },
          {
            main: "Haploid Inducing Genes With Genome Doubling Activity",
            sub: "(Page-103)",
          },
          {
            main: "Haploid Inducer (Hi) Line (Stock6) In Maize",
            sub: "(Page-103)",
          },
          {
            main: "Haploid-Inducer Mediated Genome Editing (Imge)",
            sub: "(Page-104)",
          },
          { main: "Detection Of Haploids", sub: "(Page-104)" },
          { main: "Morphology", sub: "(Page-104)" },
          { main: "Genetic Markers", sub: "(Page-104)" },
          { main: "Phenotypic Effects Of Haploidy", sub: "(Page-105)" },
          {
            main: "Meiosis And Breeding Behaviour Of Haploids",
            sub: "(Page-105)",
          },
          {
            main: "Meiosis In Haploids (Monoploids And Polyhaploids)",
            sub: "(Page-105)",
          },
          {
            main: "Breeding Behaviour: Progenies From Crosses Involving Monoploids Or Polyhaploids",
            sub: "(Page-106)",
          },
          { main: "Uses Of Haploids In Plant Breeding", sub: "(Page-106)" },
          {
            main: "Use Of Haploids In Species With Disomic Inheritance",
            sub: "(Page-106)",
          },
          {
            main: "Use Of Haploids In Species With Polysomic Inheritance",
            sub: "(Page-108)",
          },
          { main: "Limitations Of Haploid Breeding", sub: "(Page-110)" },
          { main: "Use Of Haploids In Mutation Research", sub: "(Page-110)" },
          {
            main: "Use Of Haploids In Cytogenetics",
            sub: "(Page-Research 110)",
          },
          { main: "Use Of Haploids In Genetic Studies", sub: "(Page-111)" },
          {
            main: "Use Of Haploids In Evolutionary Studies",
            sub: "(Page-111)",
          },
          { main: "Problems", sub: "(Page-112)" },
          {
            main: "Polyploidy In Higher Plants: 1. Autopolyploidy",
            sub: "(Page-113-135)",
          },
          {
            main: "Origin And Occurrence Of Autopolyploids In Nature",
            sub: "(Page-114)",
          },
          { main: "Induced Autopolyploidy", sub: "(Page-114)" },
          { main: "Colchicine Treatment", sub: "(Page-114)" },
          {
            main: "Other Methods Including Use Of Physical Agents",
            sub: "(Page-116)",
          },
          {
            main: "Phenotypic Effects Of Autopolyploidy (Morphological And Physiological)",
            sub: "(Page-117)",
          },
          { main: "Meiotic Behaviour In Autopolyploids", sub: "(Page-118)" },
          {
            main: "Multivalent Formation And Anaphase Disjunction",
            sub: "(Page-118)",
          },
          {
            main: "Improvement Of Meiotic Stability And Fertility By Selection",
            sub: "(Page-119)",
          },
          { main: "Breeding Behaviour Of Autopolyploids", sub: "(Page-120)" },
          {
            main: "Aneuploids In The Progeny Of Autopolyploids",
            sub: "(Page-120)",
          },
          {
            main: "Maternal Diploids In The Progeny Of Autotetraploids",
            sub: "(Page-121)",
          },
          { main: "Genetics Of Autopolyploids", sub: "(Page-121)" },
          {
            main: "Double Reduction In Autopolyploids Monohybrid (Single Gene) Ratios In Autopolyploids (Polysomic Ratios) Dihybrid And Trihybrid Ratios (Involving 2 Or 3 Genes) In Autopolyploids",
            sub: "(Page-122-129)",
          },
          {
            main: "Segregation Ratios In Terms Of Double Reduction Frequency",
            sub: "(Page-129)",
          },
          {
            main: "Analysis Of Genetic Data In Autotetraploids",
            sub: "(Page-133)",
          },
          {
            main: "Rate Of Achieving Homozygosity In Autotetraploids",
            sub: "(Page-134)",
          },
          {
            main: "Polyploidy In Higher Plants: 2. Allopolyploidy And Genome Analysis",
            sub: "(Page-136-156)",
          },
          {
            main: "Criteria For Distinction Between Autopolyploids And Allopolyploids",
            sub: "(Page-137)",
          },
          { main: "External Morphology", sub: "(Page-137)" },
          { main: "Biochemical Studies", sub: "(Page-137)" },
          {
            main: "Cytological Studies (Mitosis And Meiosis)",
            sub: "(Page-138)",
          },
          { main: "Genetic Studies", sub: "(Page-139)" },
          { main: "Allopolyploidization Of Autopolyploids", sub: "(Page-139)" },
          { main: "Subgenome Analysis In Allopolyploids", sub: "(Page-140)" },
          { main: "Evolution Of Allotetraploid Gossypium", sub: "(Page-140)" },
          { main: "Evolution Of Allotetraploid Nicotiana", sub: "(Page-142)" },
          { main: "Evolution Of Allopolyploid Triticum", sub: "(Page-144)" },
          {
            main: "Evolution Of Potato And Other Related Solanum Species",
            sub: "(Page-148)",
          },
          { main: "Evolution Within The Genus Brassica", sub: "(Page-150)" },
          {
            main: "Evolution Of Allotetraploid Arachis Hypogea (Groundnut)",
            sub: "(Page-151)",
          },
          {
            main: "Synthesis Of New Genera And Species Using Allopolyploidy",
            sub: "(Page-152)",
          },
          { main: "Raphanobrassica And X Brassicoraphanus", sub: "(Page-153)" },
          { main: "Galeopsis Tetrahit", sub: "(Page-153)" },
          { main: "Primula Kewensis", sub: "(Page-154)" },
          { main: "Aegilotricus", sub: "(Page-154)" },
          { main: "Agrotricum", sub: "(Page-154)" },
          {
            main: "Triticale (Xtriticosecale): A New Man Made Cereal",
            sub: "(Page-154)",
          },
          {
            main: "Polyploidy In Higher Plants: 3. Triploidy For Seedless Fruits (Including Triploidy In Animals)",
            sub: "(Page-204-226)",
          },
          {
            main: "Meiosis, Fertility And Breeding Behaviour Of Triploids",
            sub: "(Page-157)",
          },
          {
            main: "Occurrence And Artificial Production Of Triploids",
            sub: "(Page-158)",
          },
          { main: "Triploid Fruits And Ornamentals", sub: "(Page-158)" },
          { main: "Triploid Poplar, Oak And Aspen Trees", sub: "(Page-163)" },
          {
            main: "Triploid Ornamentals And Forage Grasses",
            sub: "(Page-163)",
          },
          {
            main: "Triploidy In Animals (Newts, Salmon, And Grass Carp)",
            sub: "(Page-165)",
          },
          { main: "Triploid Syndromes In Humans", sub: "(Page-165)" },
          {
            main: "Aneuploidy: 1. Trisomics And Tetrasomics (Hyperploids)",
            sub: "(Page-167-203)",
          },
          { main: "Classification Of Aneuploids", sub: "(Page-167)" },
          {
            main: "Aneuploids In Diploids Vs. Aneuploids In Polyploids",
            sub: "(Page-167)",
          },
          { main: "Trisomics In Diploids", sub: "(Page-168)" },
          { main: "History Of Trisomics", sub: "(Page-168)" },
          {
            main: "Terminology And Classification Of Trisomics",
            sub: "(Page-168)",
          },
          { main: "Origin And Sources Of Trisomics", sub: "(Page-170)" },
          {
            main: "Characterization And Identification Of Trisomics",
            sub: "(Page-180)",
          },
          { main: "Meiotic Behaviour In Trisomics", sub: "(Page-184)" },
          {
            main: "Transmission Of Extra Chromosome And Breeding Behaviour Of Trisomics",
            sub: "(Page-188)",
          },
          { main: "Use Of Trisomics In Chromosome Mapping", sub: "(Page-189)" },
          {
            main: "Balanced Tertiary Trisomics For Hybrid Seed Production",
            sub: "(Page-194)",
          },
          {
            main: "Haplo-Viable Mutants (A Substitute For Btts) For Hybrid Seed Production",
            sub: "(Page-199)",
          },
          { main: "Trisomics In Polyploid Crops", sub: "(Page-201)" },
          { main: "Trisomics In Humans", sub: "(Page-201)" },
          {
            main: "Triplo-21 Or G Trisomy Or Down's Syndrome",
            sub: "(Page-201)",
          },
          { main: "Triplo-18 Or E Trisomy", sub: "(Page-202)" },
          { main: "Triple-13 Or D Trisomy", sub: "(Page-202)" },
          { main: "Triple-22", sub: "(Page-202)" },
          { main: "Trisomics For Sex Chromosomes", sub: "(Page-202)" },
          { main: "Tertiary Trisomics", sub: "(Page-202)" },
          { main: "Tetrasomics In Plants", sub: "(Page-203)" },
          {
            main: "Aneuploidy: 2. Monosomics And Nullisomics (Hypoploids)",
            sub: "(Page-204-226)",
          },
          { main: "Monosomics In Polyploids", sub: "(Page-205)" },
          { main: "Methods Of Production Of Monosomics", sub: "(Page-205)" },
          {
            main: "Description And Identification Of Monosomics",
            sub: "(Page-207)",
          },
          { main: "Meiotic Behaviour Of Monosomics", sub: "(Page-211)" },
          {
            main: "Breeding Behaviour Of Monosomics (Transmission Of Monosomic Condition)",
            sub: "(Page-211)",
          },
          {
            main: "Production Of A Monosomic Series In A New Variety",
            sub: "(Page-211)",
          },
          { main: "Checking The Identity Of Monosomics", sub: "(Page-212)" },
          {
            main: "Locating Genes On Chromosomes In Polyploid Crops",
            sub: "(Page-212)",
          },
          { main: "Locating Genes On Chromosome Arms", sub: "(Page-216)" },
          { main: "Chromosome Mapping", sub: "(Page-219)" },
          { main: "Physical Map Of Individual Chromosomes", sub: "(Page-220)" },
          { main: "Nullisomics In Polyploids", sub: "(Page-221)" },
          {
            main: "Methods And Sources Of Production Of Nullisomics",
            sub: "(Page-221)",
          },
          { main: "Identification Of Nullisomics", sub: "(Page-223)" },
          { main: "Meiotic Behaviour In Nullisomics", sub: "(Page-223)" },
          { main: "Breeding Behaviour Of Nullisomics", sub: "(Page-224)" },
          {
            main: "Use Of Nullisomics In Locating Genes On Chromosomes",
            sub: "(Page-224)",
          },
          { main: "Monosomics In Diploids", sub: "(Page-224)" },
          { main: "Monosomics In Tomato", sub: "(Page-225)" },
          { main: "Monosomics In Maize", sub: "(Page-225)" },
          {
            main: "Alien Gene Transfer Through Chromosome Manipulations",
            sub: "(Page-227-247)",
          },
          { main: "Transfer Of Whole Genome", sub: "(Page-227)" },
          { main: "Transfer Of Genome To 4x And 6x Wheats", sub: "(Page-227)" },
          {
            main: "Transfer Of Genome In The Genus Arachis",
            sub: "(Page-228)",
          },
          {
            main: "Transfer Of Genome In Brassica-Raphanus Group",
            sub: "(Page-229)",
          },
          {
            main: "Transfer Of Genome In Festuca-Loliutn Complex",
            sub: "(Page-230)",
          },
          {
            main: "Genome Reconstruction Within The Triticinae",
            sub: "(Page-230)",
          },
          {
            main: "Transfer Of Individual Whole Chromosomes",
            sub: "(Page-230)",
          },
          { main: "Alien Addition Lines", sub: "(Page-231)" },
          { main: "Alien Substitution Lines", sub: "(Page-237)" },
          {
            main: "Substitution Of Alien Chromosome Arms (Robertsonian Translocations)",
            sub: "(Page-239)",
          },
          {
            main: "Interchanges For Transfer Of Alien Segments",
            sub: "(Page-240)",
          },
          { main: "Interchanges Using Irradiation", sub: "(Page-240)" },
          { main: "Interchanges Through Recombination", sub: "(Page-241)" },
          { main: "Markers For Alien Chromatin", sub: "(Page-246)" },
          {
            main: "Cytogenetics Of Sex Determination And Sex Differentiation",
            sub: "(Page-248-274)",
          },
          {
            main: "Chromosomal/Genotypic Sex Determination (Csd/Gsd)",
            sub: "(Page-249)",
          },
          { main: "Chromosome Theory Of Sex Determination", sub: "(Page-249)" },
          {
            main: "Genic Balance Theory Of Sex Determination",
            sub: "(Page-249)",
          },
          { main: "Environmental Sex Determination (Esd)", sub: "(Page-257)" },
          { main: "Temperature Control Of Sex", sub: "(Page-257)" },
          { main: "Hormonal Control Of Sex", sub: "(Page-258)" },
          {
            main: "Sex Chromosomes In Mammals Including Humans (Homo Sapiens)",
            sub: "(Page-260)",
          },
          { main: "Cytogenetic Basis Of Apomixis", sub: "(Page-275-288)" },
          { main: "Occurrence Of Apomixis", sub: "(Page-276)" },
          { main: "Classification And Terminology", sub: "(Page-276)" },
          { main: "Detection Of Apomixis", sub: "(Page-277)" },
          { main: "Cytology And Embryology Of Apomicts", sub: "(Page-279)" },
          {
            main: "Association Of Apomixis With Aberrant Meiosis And Polyploidy",
            sub: "(Page-279)",
          },
          {
            main: "4-Nucleate Aposporic Embryo Sacs In Grasses",
            sub: "(Page-280)",
          },
          {
            main: "8-Nucleate Aposporic Embryo Sacs In Some Grasses",
            sub: "(Page-280)",
          },
          { main: "Genetic Basis Of Apomixis", sub: "(Page-281)" },
          { main: "Known Genes For Apomixis", sub: "(Page-282)" },
          {
            main: "Work Done On Genetics Of Apomixis In India",
            sub: "(Page-283)",
          },
          { main: "Sex Reversal In Mammals (Xxxy 오)", sub: "(Page-260)" },
          { main: "Sex Determination In Plants", sub: "(Page-262)" },
          {
            main: "Mechanism Of Sex Determination In Plants",
            sub: "(Page-263)",
          },
          {
            main: "Methods For Determining Heterogametic Sex In Plants",
            sub: "(Page-268)",
          },
          { main: "Dosage Compensation", sub: "(Page-270)" },
          { main: "Organisms With Heterogametic Sex", sub: "(Page-270)" },
          { main: "Organisms With Heterogametic Females", sub: "(Page-272)" },
          { main: "Dosage Compensation In Plants", sub: "(Page-272)" },
          { main: "Genetic Imprinting", sub: "(Page-272)" },
          {
            main: "Apomixis In Some Specific Agamic Complexes",
            sub: "(Page-283)",
          },
          {
            main: "Apomixis In Dichanthium-Bothriochloa- Capillipedium Complex And Related Grasses",
            sub: "(Page-283)",
          },
          { main: "Apomixis In Poa Agamic Complex", sub: "(Page-284)" },
          { main: "Apomixis In Potentilla", sub: "(Page-284)" },
          { main: "Apomixis In Blumea", sub: "(Page-284)" },
          { main: "Apomixis In Crepis Agamic Complex", sub: "(Page-285)" },
          { main: "Apomixis In Taraxacum", sub: "(Page-285)" },
          { main: "Apomixis, Hybridization And Polyploidy", sub: "(Page-285)" },
          { main: "Apomixis, Environment And Adaptation", sub: "(Page-286)" },
          { main: "Apomixis In Plant Breeding", sub: "(Page-287)" },
        ];

  const handleSearch = (event) => {
    setSearchInput(
      event.target.value.toLowerCase().replace(/\s+/g, " ").trim()
    );
  };

  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(
      regex,
      (match) => `<span class="highlight-green">${match}</span>`
    );
  };

  const filteredData = data.filter(
    (item) =>
      item.main.toLowerCase().includes(searchInput) ||
      item.sub.toLowerCase().includes(searchInput)
  );

  const displayData = searchInput
    ? filteredData
    : data.slice(0, visibleItemsCount);

  return (
    <div className="search-container">
      <h2>{`Search in ${category}`}</h2>
      <input
        type="text"
        id="searchInput"
        onChange={handleSearch}
        placeholder="Search..."
      />

      <ul id="contentList">
        {displayData.length > 0 ? (
          displayData.map((item, index) => (
            <li key={index}>
              <div
                className="main-content"
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.main, searchInput),
                }}
              ></div>
              <div
                className="sub-content"
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.sub, searchInput),
                }}
              ></div>
            </li>
          ))
        ) : (
          <p id="noResult">Nothing to show</p>
        )}
      </ul>
    </div>
  );
};

export default CategorySearch;
