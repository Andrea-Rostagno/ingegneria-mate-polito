---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Analisi funzionale]
livello: [triennale]
aliases: ["orthogonal complement", "U⊥", "U perp", "sottospazio ortogonale", "decomposizione ortogonale"]
tags: [competenza, area/algebra-geometria]
---

# Complemento ortogonale

> Il sottospazio $U^\perp$ dei vettori ortogonali a tutti quelli di $U$; vale $U\oplus U^\perp=\mathbb R^n$, e si calcola risolvendo un sistema omogeneo.

## Definizione / enunciato
Per $U\subseteq\mathbb R^n$ sottospazio, $U^\perp$ è l'insieme dei vettori ortogonali a ogni vettore di $U$.

- **Prop. 6** (Notari): $U^\perp$ è un sottospazio e $U\oplus U^\perp=\mathbb R^n$.
- **Lemma 7:** $\mathrm{proj}_U(v)$ è l'unico vettore di $U$ tale che $v-\mathrm{proj}_U(v)\in U^\perp$.
- **Prop. 8:** $(U+V)^\perp=U^\perp\cap V^\perp$ e $(U\cap V)^\perp=U^\perp+V^\perp$.

**Calcolo (Teor. 9).** Se $U=\mathcal L\{u_1,\dots,u_t\}$ e $E$ è una base ortonormale, allora $U^\perp=\{v\mid AX=0\}$, dove $X=[v]_E$ e le righe di $A$ sono le componenti $[u_1]_E,\dots,[u_t]_E$. Viceversa, se $U=\{AX=0\}$, $U^\perp$ è generato dai vettori le cui componenti sono le righe di $A$.

## Formule chiave
$$U\oplus U^\perp=\mathbb R^n,\qquad \dim U^\perp=n-\dim U,\qquad \mathrm{Ker}(A)=\mathrm{Row}(A)^\perp$$
(La seconda segue da $U\oplus U^\perp=\mathbb R^n$; la terza è la relazione $\mathrm{Ker}(A)=\{x\mid r\cdot x=0\ \forall r\in\mathrm{Row}(A)\}$ delle slide sui sistemi.)

## Intuizione
Equazioni e generatori sono "ortogonali" gli uni agli altri. Le righe di un sistema omogeneo generano il complemento ortogonale dello spazio delle soluzioni. In $\mathbb R^3$ il complemento di un piano per l'origine è la retta normale, e viceversa: per questo il vettore normale $(a,b,c)$ di un piano si legge dai coefficienti dell'equazione.

## Come si usa
- Trovare $U^\perp$ da generatori: si mettono i generatori come righe di $A$ e si risolve $Ax=0$.
- Trovare equazioni cartesiane di $U$ dato da generatori: si calcola una base di $U^\perp$, i cui vettori danno i coefficienti delle equazioni.
- Decomporre $v=\mathrm{proj}_U(v)+(v-\mathrm{proj}_U(v))$ in componente in $U$ e componente in $U^\perp$.

## Nei corsi
- **Algebra lineare** (triennale): presente nelle slide di R. Notari sugli spazi euclidei e negli esercizi (`simmetrici.pdf`), non come capitolo autonomo nelle slide di S. Mercadante, dove compare solo la relazione $\mathrm{Ker}(A)$-$\mathrm{Row}(A)$. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §5-6); `Appunti, riassunti e formulari/8_Sistemi_lineari.pdf` (p. 21-22); `Appunti, riassunti e formulari/Formulario_Algebra_Lineare_e_Geometria_+_Matlab_Davide_Buczkowsky.pdf`.
- **Analisi funzionale** (triennale): per un qualunque $A\subseteq H$ pre-hilbertiano, $A^\perp=\{y:y\perp A\}=\bigcap_{x\in A}x^\perp$ è un sottospazio **chiuso**, $(\operatorname{span}A)^\perp=(\overline A)^\perp=A^\perp$, $A^{\perp\perp}\supseteq A$ (Prop. 6.26). In uno spazio di Hilbert, per $Y$ chiuso: $H=Y\oplus Y^\perp$, $Y^{\perp\perp}=Y$ e in generale $A^{\perp\perp}=\overline{\operatorname{span}A}$ (Cor. 6.33). Per operatori: $\operatorname{Ker}(A^*)=(\operatorname{Im}A)^\perp$ e $H_2=\operatorname{Ker}(A^*)\oplus\overline{\operatorname{Im}A}$ (Prop. 10.5). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 70, 75, 149); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (p. 4).

## Prerequisiti
- [[Proiezione ortogonale di un vettore]]: v − proj_U(v) sta in U⊥
- [[Spazio vettoriale euclideo]]: sottospazio dei vettori ortogonali a U
- [[Procedimento di Gram-Schmidt]]: proiezione su U tramite una sua base ortonormale

## Porta a
- Nessuno.

## Collegati
- [[Somma e intersezione di sottospazi]]: V = U ⊕ U⊥ è una somma diretta notevole
- [[Problema dei minimi quadrati]]: il residuo ottimo è ortogonale a Col(A) (collegamento concettuale, non nelle slide)
- [[Teorema della proiezione]]: in uno spazio di Hilbert dà H = Y ⊕ Y⊥ per Y chiuso (Analisi funzionale)
- [[Operatore aggiunto]]: Ker(A*) = (Im A)⊥ (Analisi funzionale)
