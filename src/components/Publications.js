import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Publications = () => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center pt-8 text-black/75">
        Publications
      </h2>
      <div className="flex gap-4 m-4 justify-end flex-row flex-col">
        <PubList
          title="Anti-C1q autoantibodies from systemic lupus erythematosus patients
            enhance CD40-CD154-mediated inflammation in peripheral blood
            mononuclear cells in vitro"
          authors="Rabatscher PA, Trendelenburg M."
          year="2022"
          journal="Clin Transl Immunology"
          url="https://onlinelibrary.wiley.com/doi/full/10.1002/cti2.1408"
          abstract="
            <strong>Objectives:</strong> Systemic lupus erythematosus (SLE) is a clinically heterogeneous autoimmune disease with complex pathogenic mechanisms. Complement C1q has been shown to play a major role in SLE, and autoantibodies against C1q (anti-C1q) are strongly associated with SLE disease activity and severe lupus nephritis suggesting a pathogenic role for anti-C1q. Whereas C1q alone has anti-inflammatory effects on human monocytes and macrophages, C1q/anti-C1q complexes favor a pro-inflammatory phenotype. This study aimed to elucidate the inflammatory effects of anti-C1q on peripheral blood mononuclear cells (PBMCs).
            <br/>
            <strong>Methods:</strong> Isolated monocytes, isolated T cells and bulk PBMCs of healthy donors with or without concomitant T cell activation were exposed to C1q or complexes of C1q and SLE patient-derived anti-C1q (C1q/anti-C1q). Functional consequences of C1q/anti-C1q on cells were assessed by determining cytokine secretion, monocyte surface marker expression, T cell activation and proliferation.
            <br/>
            <strong>Results:</strong> Exposure of isolated T cells to C1q or C1q/anti-C1q did not affect their activation and proliferation. However, unspecific T cell activation in PBMCs in the presence of C1q/anti-C1q resulted in increased TNF, IFN-γ and IL-10 secretion compared with C1q alone. Co-culture and inhibition experiments showed that the inflammatory effect of C1q/anti-C1q on PBMCs was due to a direct CD40-CD154 interaction between activated T cells and C1q/anti-C1q-primed monocytes. The CD40-mediated inflammatory reaction of monocytes involves TRAF6 and JAK3-STAT5 signalling.
            <br/>
            <strong>Conclusion:</strong> In conclusion, C1q/anti-C1q have a pro-inflammatory effect on monocytes that depends on T cell activation and CD40-CD154 signalling. This signalling pathway could serve as a therapeutic target for anti-C1q-mediated inflammation."
        />

        <PubList
          title="Epitope-Specific Anti-C1q Autoantibodies in Systemic Lupus
            Erythematosus"
          authors="Kleer JS, Rabatscher PA, Weiss
            J, Leonardi J, Vogt SB, Kieninger-Gräfitsch A, Chizzolini C,
            Huynh-Do U, Ribi C, Trendelenburg M."
          year="2022"
          journal="Front Immunol"
          url="https://www.frontiersin.org/articles/10.3389/fimmu.2021.761395/full"
          abstract="
            <strong>Objective:</strong> In patients with systemic lupus erythematosus (SLE) complement C1q is frequently targeted by autoantibodies (anti-C1q), that correlate best with active renal disease. Anti-C1q bind to largely unknown epitopes on the collagen-like region (CLR) of this highly functional molecule. Here we aimed at exploring the role of epitope-specific anti-C1q in SLE patients.
            <br />
            <strong>Methods:</strong> First, 22 sera of SLE patients, healthy controls and anti-C1q positive patients without SLE were screened for anti-C1q epitopes by a PEPperMAP® microarray, expressing CLR of C1q derived peptides with one amino acid (AA) shift in different lengths and conformations. Afterwards, samples of 378 SLE patients and 100 healthy blood donors were analyzed for antibodies against the identified epitopes by peptide-based ELISA. Relationships between peptide-specific autoantibodies and SLE disease manifestations were explored by logistic regression models.
            <br/>
            <strong>Results:</strong> The epitope mapping showed increased IgG binding to three peptides of the C1q A- and three of the C1q B-chain. In subsequent peptide-based ELISAs, SLE sera showed significantly higher binding to two N-terminally located C1q A-chain peptides than controls (p < 0.0001), but not to the other peptides. While anti-C1q were associated with a broad spectrum of disease manifestations, some of the peptide-antibodies were associated with selected disease manifestations, and antibodies against the N-terminal C1q A-chain showed a stronger discrimination between SLE and controls than conventional anti-C1q.
            <br/>
            <strong>Conclusion:</strong> In this large explorative study anti-C1q correlate with SLE overall disease activity. In contrast, peptide-antibodies are associated with specific aspects of the disease suggesting epitope-specific effects of anti-C1q in patients with SLE."
        />
      </div>
    </div>
  );
};

export default Publications;

function PubList({ title, authors, year, journal, url, abstract }) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto", dispaly: "block" },
    closed: { opacity: 0, height: "1px", display: "none" },
  };
  return (
    <motion.div className="border-2 border-black/50 items-center p-4 hover:bg-[#DADADA]/50 grow-1 ">
      <h3 className="text-xl font-semibold  font-sans">{title}</h3>
      <h4 className="text-sm font-thin text-left font-body items-center">
        {authors}
      </h4>
      <p className="font-body text-sm align-bottom h-auto italic">
        {journal} {year} .
      </p>
      <div>
        <span
          className="my-4 inline-block p-2 px-4 border-2 border-[#DADADA] hover:underline w-auto cursor-pointer hover:bg-[#DADADA]"
          onClick={() => setIsOpen(!isOpen)}
        >
          View {!isOpen ? "more" : "less"}
        </span>
      </div>
      <motion.div
        className="whitespace-normal block text-sm text-justify"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div dangerouslySetInnerHTML={{ __html: abstract }}></div>
        <Link
          href={url}
          target="_blank"
          className="my-4 inline-block p-2 px-4 border-2 border-[#DADADA] hover:underline w-auto cursor-pointer hover:bg-[#DADADA]"
        >
          <span>Open Article</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "#000000" }}
            className="pl-2 text-black/50"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}
