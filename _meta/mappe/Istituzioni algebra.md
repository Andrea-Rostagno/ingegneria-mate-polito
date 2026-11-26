---
tipo: meta
tags: [meta, mappa]
corso: Istituzioni algebra
livello: triennale
cartella: triennale/ANNO 2/istituzioni
---

# Mappa delle competenze: Istituzioni algebra

Mappa concettuale del corso `triennale/ANNO 2/istituzioni`: **Istituzioni di Algebra e Geometria, parte di ALGEBRA**, lezioni dal 28/09/2022 al 14/12/2022. Il programma va da insiemi e relazioni ai gruppi, agli anelli e ideali, all'aritmetica di $\mathbb Z$ e $\mathbb Z_n$, ai polinomi e alle estensioni di campi.

- **49 competenze nuove**, tutte in area `algebra-geometria`, più 10 note esistenti estese, segnate "(esistente)".
- Le note del corso formano un'unica componente connessa, con grado interno minimo 2.
- I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo.
- "Porta a" è l'inverso di "Prerequisiti", "Collegati" è simmetrico; "(esterno)" indica una nota di un altro corso.
- Istituzioni è un esame del secondo anno diviso in due parti: **Istituzioni algebra** (questa mappa) e **Istituzioni topologia** (mappa a parte, materiale di `triennale/ANNO 3/istituzioni/topologia`). Gli appunti 2023/24 in `triennale/ANNO 3/istituzioni/algebra` ripetono lo stesso programma.

## Inventario del materiale (2026-11-25)

La cartella contiene 22 PDF, 313 pagine, senza testo estraibile: sono scansioni CamScanner di dispense stampate in LaTeX più appunti a mano del docente o dello studente.
- Ogni pagina è stata renderizzata con pymupdf e letta come immagine.
- La trascrizione è stata fatta lezione per lezione e controllata a campione sull'immagine: Bézout, Eisenstein, Lagrange, Cor. 13 e Prop. 20 di `Alg-14-12-22`.
- Il numero di lezione e la data sono quelli scritti sulla copertina. **Tre nomi di file hanno il mese sbagliato.**

| File | Lezione (copertina) | Data (copertina) | Uso |
|---|---|---|---|
| `Alg-28-09-22.pdf` | 1-2 | 28/09/22 | fonte: insiemi, funzioni, relazioni, scelta, Zorn |
| `Alg-03-10-22.pdf` | 3 | 03/10/22 (sbiadita) | fonte: induzione, divisione, numerabilità |
| `Alg-05-10-22.pdf` | 4-5 | 05/10/22 | fonte: gruppi |
| `Alg-10-10-22.pdf` | 6 | 10/10/22 (poco leggibile) | fonte: omomorfismi, sottogruppi, ciclici |
| `Alg-11-10-22.pdf` | 7 | 11/10/22 | fonte: sottogruppo generato, nucleo |
| `Alg-12-10-22.pdf` | 8-9 | 12/10/22 | pp. 7-13 fonte ($S_n$); pp. 2-6 esercizi, non usate |
| `Alg-17-10-22.pdf` | 10 | 17/10/22 | fonte: segno, Cayley, ciclici |
| `Alg-19-10-22.pdf` | 11/12 | 19/10/22 | pp. 2-12 fonte; pp. 13-16 "Esercizi foglio 3", non usate |
| `Alg-24-10-22.pdf` | 13 | 24/10/22 | fonte: classi laterali, Lagrange, normali |
| `Alg-25-10-22.pdf` | 14 | 25/10/22 | fonte: I teorema di isomorfismo (+ esercizi svolti in lezione) |
| `Alg-26-10-22.pdf` | 15-16 | 26/10/22 | **esercitazione** (fogli 4-5), scartata |
| `Alg-02-10-22-1.pdf` | 17-18 | **02/11/22** | fonte: anelli |
| `Alg-07-10-22.pdf` | 19 | **07/11/22** | fonte: omomorfismi di anelli, sottoanelli |
| `Alg-09-11-22.pdf` | 20-21 | 09/11/22 | fonte: ideali, anello quoziente |
| `Alg-28-12-22.pdf` | 24 | **28/11/22** | fonte: ideali primi e massimali |
| `Alg-30-11-22.pdf` | 25-26 | 30/11/22 | fonte: MCD, Bézout, cinese, Fermat |
| `Alg-05-12-22 (1).pdf` | 27 | 05/12/22 | **esercitazione** (foglio 7), scartata |
| `Alg-07-12-22.pdf` | 28-29 | 07/12/22 | fonte: polinomi |
| `Alg-12-12-22.pdf` | 30 | 12/12/22 | pp. 2-6 fonte; pp. 7-11 esercizi foglio 8, non usate |
| `Alg-13-12-22.pdf` | 31/32 | 13/12/22 | fonte: polinomi su C, R, Z, Q |
| `Alg-14-12-22.pdf` | 33/34 | 14/12/22 | fonte: estensioni, campi finiti |
| `Alg-19-12-22.pdf` | 35 | 19/12/22 | **esercitazione** (fogli 8-9), scartata |

- **Mancano le lezioni 22-23**, tra il 09/11 e il 28/11.
- In `Alg-14-12-22.pdf` mancano le pagine stampate 18-19 (enunciato n. 16).
- Gli esempi delle note vengono da esempi stampati nelle dispense o svolti a lezione nelle pagine di teoria. I fogli di esercizi non sono stati usati, per la regola "niente esami".

## Nodi con grado più alto (collegamenti esterni inclusi)

- Classi di resto modulo n: 12
- Omomorfismo di gruppi: 10
- Polinomio irriducibile: 10
- Campo (struttura algebrica): 9
- Gruppo: 9
- Ideale: 9
- Anello: 8
- Estensione di campi: 8

## Insiemi, relazioni e cardinalità (lezioni 1-3)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Inversa destra e inversa sinistra** | algebra-geometria | right inverse; left inverse; inversa destra; inversa sinistra | Alg-28-09-22 pp. 5-10 | Funzioni iniettive e suriettive (esterno)<br>Funzione composta e funzione inversa (esterno)<br>Assioma della scelta | Gruppo | — |
| **Assioma della scelta** | algebra-geometria | axiom of choice; funzione di scelta; choice function; AC | Alg-28-09-22 pp. 9-10 | — | Inversa destra e inversa sinistra<br>Insieme numerabile | Lemma di Zorn |
| **Relazione di equivalenza** | algebra-geometria | equivalence relation; classe di equivalenza; insieme quoziente; partizione; relazione riflessiva simmetrica transitiva | Alg-28-09-22 pp. 11-14 | Operazioni sugli insiemi (esterno) | Classi di resto modulo n<br>Teorema di Lagrange sui gruppi | Insieme parzialmente ordinato<br>Teorema di Cantor-Schröder-Bernstein |
| **Insieme parzialmente ordinato** | algebra-geometria | partially ordered set; poset; ordine parziale; ordine totale; elemento massimale; insieme induttivo | Alg-28-09-22 pp. 11-15 | — | Lemma di Zorn | Relazione di equivalenza<br>Estremo superiore e inferiore (esterno)<br>Teorema di Cantor-Schröder-Bernstein |
| **Lemma di Zorn** | algebra-geometria | Zorn's lemma; esistenza di basi | Alg-28-09-22 pp. 16-18 | Insieme parzialmente ordinato | Base e dimensione (esterno) | Assioma della scelta |
| **Principio di induzione** | algebra-geometria | mathematical induction; induzione forte; principio del buon ordinamento; well-ordering principle | Alg-03-10-22 pp. 2-10 | — | Divisione euclidea<br>Teorema fondamentale dell'aritmetica<br>Insieme numerabile | Calcolo combinatorio (esterno) |
| **Divisione euclidea** | algebra-geometria | Euclidean division; division with remainder; algoritmo euclideo di divisione; quoziente e resto | Alg-03-10-22 pp. 11-12 | Principio di induzione | Classi di resto modulo n<br>Ordine di un elemento<br>Gruppo ciclico<br>Identità di Bézout<br>Algoritmo di Euclide<br>Divisione tra polinomi | — |
| **Insieme numerabile** | algebra-geometria | countable set; numerabilità; al più numerabile; più che numerabile; argomento diagonale di Cantor; teorema di Cantor; criterio di Dedekind | Alg-03-10-22 pp. 14-21 | Principio di induzione<br>Assioma della scelta<br>Teorema di Cantor-Schröder-Bernstein | — | Sigma-algebra (esterno) |
| **Teorema di Cantor-Schröder-Bernstein** | algebra-geometria | Cantor-Schröder-Bernstein theorem; Schröder-Bernstein; equipotenza | Alg-03-10-22 p. 17 | Funzioni iniettive e suriettive (esterno) | Insieme numerabile | Relazione di equivalenza<br>Insieme parzialmente ordinato |

## Gruppi (lezioni 4-14)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Gruppo** | algebra-geometria | group; gruppo abeliano; abelian group; elemento neutro; potenza di un elemento; leggi di semplificazione | Alg-05-10-22 pp. 2-13 | Funzione composta e funzione inversa (esterno)<br>Inversa destra e inversa sinistra | Sottogruppo<br>Omomorfismo di gruppi<br>Gruppo simmetrico<br>Gruppo diedrale<br>Classi di resto modulo n<br>Anello | Spazio vettoriale (esterno) |
| **Sottogruppo** | algebra-geometria | subgroup; criterio per i sottogruppi; sottogruppo generato; sottogruppo unione; H ∨ K | Alg-10-10-22 pp. 6-16; Alg-11-10-22 pp. 2-4 | Gruppo | Omomorfismo di gruppi<br>Ordine di un elemento<br>Gruppo ciclico<br>Teorema di Lagrange sui gruppi<br>Sottoanello | Sottospazio vettoriale (esterno) |
| **Omomorfismo di gruppi** | algebra-geometria | group homomorphism; morfismo di gruppi; isomorfismo di gruppi; automorfismo di gruppi; nucleo di un omomorfismo di gruppi | Alg-10-10-22 pp. 2-5; Alg-11-10-22 pp. 5-7 | Gruppo<br>Sottogruppo | Segno di una permutazione<br>Teorema di Cayley<br>Sottogruppo normale e gruppo quoziente<br>Primo teorema di isomorfismo<br>Omomorfismo di anelli | Applicazione lineare (esterno)<br>Nucleo e immagine (esterno)<br>Determinante (esterno) |
| **Ordine di un elemento** | algebra-geometria | order of an element; periodo; sottogruppo ciclico generato | Alg-10-10-22 pp. 10, 13; Alg-17-10-22 pp. 8-9 | Sottogruppo<br>Divisione euclidea | Gruppo ciclico<br>Teorema di Lagrange sui gruppi | Gruppo simmetrico |
| **Gruppo ciclico** | algebra-geometria | cyclic group; generatore; sottogruppi di Z; classificazione dei gruppi ciclici | Alg-10-10-22 pp. 11-12; Alg-17-10-22 pp. 8-10; Alg-19-10-22 pp. 2-4 | Sottogruppo<br>Ordine di un elemento<br>Divisione euclidea | Campo finito | Classi di resto modulo n<br>Teorema di Lagrange sui gruppi<br>Gruppo diedrale<br>Dominio a ideali principali |
| **Gruppo simmetrico** | algebra-geometria | symmetric group; S_n; permutazione di I_n; ciclo; trasposizione; cicli disgiunti | Alg-05-10-22 pp. 6-8; Alg-12-10-22 pp. 7-12 | Gruppo | Segno di una permutazione<br>Teorema di Cayley | Ordine di un elemento<br>Gruppo diedrale<br>Matrice di permutazione (esterno)<br>Calcolo combinatorio (esterno) |
| **Segno di una permutazione** | algebra-geometria | sign of a permutation; parità di una permutazione; permutazione pari; permutazione dispari; gruppo alterno; A_n; sgn | Alg-12-10-22 p. 13; Alg-17-10-22 pp. 3-5 | Gruppo simmetrico<br>Omomorfismo di gruppi | Sottogruppo normale e gruppo quoziente | — |
| **Gruppo diedrale** | algebra-geometria | dihedral group; D_n; Δ_n; gruppo delle isometrie; gruppo di Klein; Klein four-group | Alg-05-10-22 pp. 9-10; Alg-19-10-22 pp. 5-12 | Gruppo | — | Gruppo simmetrico<br>Gruppo ciclico<br>Teorema di Lagrange sui gruppi |
| **Teorema di Cayley** | algebra-geometria | Cayley's theorem; rappresentazione regolare sinistra | Alg-17-10-22 pp. 6-7 | Gruppo simmetrico<br>Omomorfismo di gruppi | — | — |
| **Teorema di Lagrange sui gruppi** | algebra-geometria | Lagrange's theorem (group theory); classi laterali; cosets; indice di un sottogruppo; [G:H]; gruppi di ordine primo | Alg-24-10-22 pp. 2-10 | Relazione di equivalenza<br>Sottogruppo<br>Ordine di un elemento | Sottogruppo normale e gruppo quoziente<br>Piccolo teorema di Fermat<br>Campo finito | Gruppo ciclico<br>Gruppo diedrale |
| **Sottogruppo normale e gruppo quoziente** | algebra-geometria | normal subgroup; quotient group; criterio di normalità; gruppo semplice; G/N | Alg-24-10-22 pp. 10-13; Alg-25-10-22 pp. 2-4 | Teorema di Lagrange sui gruppi<br>Omomorfismo di gruppi<br>Segno di una permutazione | Primo teorema di isomorfismo<br>Anello quoziente | Classi di resto modulo n |
| **Primo teorema di isomorfismo** | algebra-geometria | first isomorphism theorem; teorema fondamentale degli omomorfismi di gruppi; G/Ker ≅ Im | Alg-25-10-22 pp. 4-11 | Sottogruppo normale e gruppo quoziente<br>Omomorfismo di gruppi | Teorema fondamentale degli omomorfismi di anelli | — |
| **Classi di resto modulo n** | algebra-geometria | integers modulo n; Z_n; congruenza modulo n; congruence; aritmetica modulare; Z_n^*; elementi invertibili di Z_n | Alg-28-09-22 pp. 12-14; Alg-05-10-22 pp. 5, 11; Alg-30-11-22 pp. 2, 15, 18-21 | Relazione di equivalenza<br>Divisione euclidea<br>Gruppo | Teorema cinese dei resti<br>Piccolo teorema di Fermat<br>Lemma di Gauss sui polinomi<br>Criterio di Eisenstein | Gruppo ciclico<br>Sottogruppo normale e gruppo quoziente<br>Campo (struttura algebrica)<br>Dominio di integrità<br>Anello quoziente |

## Anelli e ideali (lezioni 17-24)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Anello** | algebra-geometria | ring; anello con unità; anello commutativo; corpo; quaternioni; regola dei segni; anello di Boole | Alg-02-10-22-1 pp. 2-14 | Gruppo | Campo (struttura algebrica)<br>Dominio di integrità<br>Omomorfismo di anelli<br>Sottoanello<br>Ideale<br>Anello dei polinomi | Prodotto di matrici (esterno) |
| **Campo (struttura algebrica)** | algebra-geometria | field (algebra); corpo commutativo; sottocampo; elementi invertibili di un anello | Alg-02-10-22-1 pp. 2-3, 12-13; Alg-09-11-22 p. 3 | Anello | Estensione di campi<br>Campo finito | Dominio di integrità<br>Classi di resto modulo n<br>Ideale<br>Ideali primi e massimali<br>Spazio vettoriale (esterno)<br>Assiomi dei numeri reali (esterno) |
| **Dominio di integrità** | algebra-geometria | integral domain; divisori dello zero; zero divisors; legge di semplificazione per il prodotto | Alg-02-10-22-1 pp. 9-12 | Anello | Caratteristica di un anello<br>Ideali primi e massimali<br>Dominio a ideali principali<br>Anello dei polinomi | Campo (struttura algebrica)<br>Classi di resto modulo n |
| **Caratteristica di un anello** | algebra-geometria | characteristic of a ring; char(A); morfismo unitario; campo primo; prime field | Alg-02-10-22-1 p. 13; Alg-07-10-22 pp. 4-6 | Dominio di integrità<br>Omomorfismo di anelli | Estensione di campi<br>Campo finito | — |
| **Omomorfismo di anelli** | algebra-geometria | ring homomorphism; morfismo di anelli; omomorfismo unitario; nucleo di un omomorfismo di anelli | Alg-07-10-22 pp. 2-6; Alg-09-11-22 pp. 3-4 | Anello<br>Omomorfismo di gruppi | Caratteristica di un anello<br>Ideale<br>Teorema fondamentale degli omomorfismi di anelli | Sottoanello |
| **Sottoanello** | algebra-geometria | subring; criterio per sottoanelli; interi di Gauss; Z[i]; Q[√2] | Alg-07-10-22 pp. 7-9 | Anello<br>Sottogruppo | — | Omomorfismo di anelli<br>Ideale |
| **Ideale** | algebra-geometria | ideal; ideale bilatero; ideale principale; principal ideal; ideale generato; ideale somma | Alg-07-10-22 pp. 10-11; Alg-09-11-22 pp. 2-7 | Anello<br>Omomorfismo di anelli | Anello quoziente<br>Dominio a ideali principali<br>Ideali primi e massimali<br>Identità di Bézout<br>Equazione diofantea lineare | Sottoanello<br>Campo (struttura algebrica) |
| **Anello quoziente** | algebra-geometria | quotient ring; A/I; anello delle classi laterali | Alg-09-11-22 pp. 8-11 | Ideale<br>Sottogruppo normale e gruppo quoziente | Teorema fondamentale degli omomorfismi di anelli<br>Ideali primi e massimali | Classi di resto modulo n |
| **Teorema fondamentale degli omomorfismi di anelli** | algebra-geometria | first isomorphism theorem for rings; A/Ker ≅ Im | Alg-09-11-22 pp. 11-13 | Anello quoziente<br>Omomorfismo di anelli<br>Primo teorema di isomorfismo | Estensione semplice | Numeri complessi (esterno) |
| **Dominio a ideali principali** | algebra-geometria | principal ideal domain; PID; anello a ideali principali; dominio euclideo; Euclidean domain | Alg-09-11-22 p. 6; Alg-07-12-22 pp. 9-11, 18 | Ideale<br>Dominio di integrità<br>Divisione tra polinomi | Ideali primi e massimali<br>Polinomio irriducibile<br>Polinomio minimo | Gruppo ciclico |
| **Ideali primi e massimali** | algebra-geometria | prime ideal; maximal ideal; ideale primo; ideale massimale | Alg-28-12-22 pp. 2-9; Alg-07-12-22 p. 18 | Ideale<br>Anello quoziente<br>Dominio di integrità<br>Dominio a ideali principali | Polinomio irriducibile<br>Estensione semplice | Campo (struttura algebrica)<br>Teorema fondamentale dell'aritmetica |

## Aritmetica degli interi (lezioni 25-26)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Identità di Bézout** | algebra-geometria | Bézout's identity; formula di Bezout; massimo comun divisore; MCD; greatest common divisor; gcd; numeri coprimi | Alg-30-11-22 pp. 3-6 | Divisione euclidea<br>Ideale | Algoritmo di Euclide<br>Teorema fondamentale dell'aritmetica<br>Equazione diofantea lineare<br>Teorema cinese dei resti<br>Piccolo teorema di Fermat<br>Polinomio irriducibile | — |
| **Algoritmo di Euclide** | algebra-geometria | Euclidean algorithm; algoritmo euclideo per il MCD | Alg-30-11-22 pp. 6-8; Alg-07-12-22 pp. 12-13 | Divisione euclidea<br>Identità di Bézout | Teorema cinese dei resti | Divisione tra polinomi |
| **Teorema fondamentale dell'aritmetica** | algebra-geometria | fundamental theorem of arithmetic; fattorizzazione in primi; lemma di Euclide; Euclid's lemma; infinità dei numeri primi; numero primo | Alg-03-10-22 pp. 7-8, 13; Alg-30-11-22 pp. 3, 9-11 | Principio di induzione<br>Identità di Bézout | Lemma di Gauss sui polinomi | Ideali primi e massimali<br>Polinomio irriducibile |
| **Equazione diofantea lineare** | algebra-geometria | linear Diophantine equation; ax+by=n; equazione diofantea | Alg-30-11-22 p. 12 | Identità di Bézout<br>Ideale | — | — |
| **Teorema cinese dei resti** | algebra-geometria | Chinese remainder theorem; sistema di congruenze; teorema cinese dei resti per polinomi | Alg-30-11-22 pp. 13-17; Alg-12-12-22 pp. 2-6 | Classi di resto modulo n<br>Identità di Bézout<br>Algoritmo di Euclide<br>Divisione tra polinomi | — | Interpolazione polinomiale (esterno)<br>Teorema di Ruffini |
| **Piccolo teorema di Fermat** | algebra-geometria | Fermat's little theorem; a^(p-1) ≡ 1 mod p; congruenza di potenze | Alg-30-11-22 pp. 18-23 | Classi di resto modulo n<br>Teorema di Lagrange sui gruppi<br>Identità di Bézout | Campo finito | Calcolo combinatorio (esterno) |

## Polinomi (lezioni 28-32)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Anello dei polinomi** | algebra-geometria | polynomial ring; A[x]; K[x]; grado di un polinomio; coefficiente direttivo; polinomio monico | Alg-07-12-22 pp. 2-5 | Anello<br>Dominio di integrità | Divisione tra polinomi | — |
| **Divisione tra polinomi** | algebra-geometria | polynomial long division; divisione con resto tra polinomi; K[x] dominio euclideo | Alg-07-12-22 pp. 6-11 | Anello dei polinomi<br>Divisione euclidea | Teorema di Ruffini<br>Dominio a ideali principali<br>Polinomio irriducibile<br>Teorema cinese dei resti | Algoritmo di Euclide |
| **Teorema di Ruffini** | algebra-geometria | factor theorem; radice di un polinomio; zero di un polinomio; radice semplice; al più n radici; principio di identità dei polinomi | Alg-07-12-22 pp. 16-17; Alg-12-12-22 p. 3 | Divisione tra polinomi | Polinomio irriducibile | Teorema cinese dei resti<br>Teorema fondamentale dell'algebra (esterno)<br>Interpolazione polinomiale (esterno) |
| **Polinomio irriducibile** | algebra-geometria | irreducible polynomial; polinomi associati; fattorizzazione unica in K[x]; irriducibili di R[x]; irriducibili di C[x]; K[x]/(p) campo | Alg-07-12-22 pp. 12-20; Alg-13-12-22 pp. 2-8 | Divisione tra polinomi<br>Dominio a ideali principali<br>Ideali primi e massimali<br>Teorema di Ruffini<br>Identità di Bézout | Lemma di Gauss sui polinomi<br>Criterio di Eisenstein<br>Polinomio minimo | Teorema fondamentale dell'aritmetica<br>Teorema fondamentale dell'algebra (esterno) |
| **Lemma di Gauss sui polinomi** | algebra-geometria | Gauss's lemma (polynomials); polinomio primitivo; primitive polynomial; contenuto; test delle radici razionali; rational root test | Alg-13-12-22 pp. 9-16 | Polinomio irriducibile<br>Teorema fondamentale dell'aritmetica<br>Classi di resto modulo n | Criterio di Eisenstein | — |
| **Criterio di Eisenstein** | algebra-geometria | Eisenstein's criterion; criterio di riduzione modulo p; polinomio ciclotomico; cyclotomic polynomial | Alg-13-12-22 pp. 17-23 | Lemma di Gauss sui polinomi<br>Classi di resto modulo n<br>Polinomio irriducibile | — | — |

## Estensioni di campi e campi finiti (lezioni 33-34)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Estensione di campi** | algebra-geometria | field extension; E|F; grado di un'estensione; degree of an extension; [E:F]; immersione | Alg-14-12-22 pp. 2-4 | Campo (struttura algebrica)<br>Caratteristica di un anello<br>Spazio vettoriale (esterno)<br>Base e dimensione (esterno) | Polinomio minimo<br>Estensione semplice<br>Campo finito | Numeri complessi (esterno) |
| **Polinomio minimo** | algebra-geometria | minimal polynomial; elemento algebrico; algebraic element; elemento trascendente; transcendental element | Alg-14-12-22 pp. 9-13 | Estensione di campi<br>Dominio a ideali principali<br>Polinomio irriducibile | Estensione semplice | — |
| **Estensione semplice** | algebra-geometria | simple extension; K(s); K[s]; estensione algebrica semplice; campo di spezzamento; chiusura algebrica | Alg-14-12-22 pp. 5-8, 14-20 | Polinomio minimo<br>Estensione di campi<br>Teorema fondamentale degli omomorfismi di anelli<br>Ideali primi e massimali | Campo finito | Teorema fondamentale dell'algebra (esterno) |
| **Campo finito** | algebra-geometria | finite field; campo di Galois; Galois field; GF(p^n); automorfismo di Frobenius; Frobenius automorphism | Alg-14-12-22 pp. 21-26 | Caratteristica di un anello<br>Estensione di campi<br>Estensione semplice<br>Piccolo teorema di Fermat<br>Gruppo ciclico<br>Teorema di Lagrange sui gruppi | — | Campo (struttura algebrica) |

## Note esistenti estese (esistente)

| Nome | area | cosa aggiunge Istituzioni algebra | fonte |
|---|---|---|---|
| Funzioni iniettive e suriettive (esistente) | analisi | funzioni come corrispondenze; inversa sinistra/destra | Alg-28-09-22 pp. 3-10 |
| Funzione composta e funzione inversa (esistente) | analisi | gruppo delle biiezioni con la composizione | Alg-28-09-22 p. 5; Alg-05-10-22 p. 6 |
| Operazioni sugli insiemi (esistente) | analisi | prodotto cartesiano, insieme delle parti, ZF | Alg-28-09-22 pp. 2-3 |
| Base e dimensione (esistente) | algebra-geometria | esistenza di basi via Lemma di Zorn | Alg-28-09-22 pp. 16-18 |
| Calcolo combinatorio (esistente) | probabilita | binomio per induzione, $|S_n|=n!$, $|\mathcal P(I_n)|=2^n$ | Alg-03-10-22 pp. 4-5; Alg-05-10-22 p. 7 |
| Determinante (esistente) | algebra-geometria | det come omomorfismo $GL_n\to\mathbb R^*$, $SL_n$ normale | Alg-10-10-22 p. 3; Alg-25-10-22 p. 7 |
| Spazio vettoriale (esistente) | algebra-geometria | un'estensione di campi è uno spazio vettoriale sul campo base | Alg-14-12-22 p. 3 |
| Numeri complessi (esistente) | analisi | $\mathbb R[x]/(x^2+1)\simeq\mathbb C$, $[\mathbb C:\mathbb R]=2$, coniugio come automorfismo | Alg-13-12-22 pp. 3, 7-8; Alg-14-12-22 p. 4 |
| Teorema fondamentale dell'algebra (esistente) | analisi | campo algebricamente chiuso, irriducibili di $\mathbb C[x]$ e $\mathbb R[x]$ | Alg-13-12-22 pp. 2-6 |
| Interpolazione polinomiale (esistente) | numerica | esistenza e unicità come corollario del teorema cinese per polinomi | Alg-12-12-22 p. 6 |

## Concetti esterni (da collegare)

- Nessuno. Tutti i collegamenti verso altri corsi puntano a note esistenti.
- Il "Principio di identità dei polinomi (da collegare)" di Interpolazione polinomiale è stato collegato a Teorema di Ruffini, che contiene il risultato "al più $n$ radici".
- Istituzioni A3 (algebra, anno 3) estenderà queste note.

## Dubbi

- **Date nei nomi dei file**: `Alg-02-10-22-1` è del 02/11/22 (lezioni 17-18), `Alg-07-10-22` del 07/11/22 (lezione 19), `Alg-28-12-22` del 28/11/22 (lezione 24). Le copertine sono state preferite ai nomi dei file.
- **Lezioni 22-23 assenti**: non ci sono note su contenuti eventualmente svolti lì.
- **Pagine degradate** (letture incerte, segnate "(da verificare sul PDF)" nelle note):
  - `Alg-14-12-22` p. 16: Cor. 13, $[K(s):K]=n$, confermato dalla dimostrazione a mano;
  - p. 19: Prop. 15, grado $n$ di $K[x]/(p)$;
  - p. 23: Prop. 20, gruppo moltiplicativo ciclico, senza dimostrazione leggibile;
  - `Alg-12-12-22` p. 3: proposizione $f\equiv\alpha \pmod{x-a}\iff f(a)=\alpha$;
  - `Alg-03-10-22` pp. 6, 18-19: esercizio con esponente illeggibile, biezione $\mathbb N_0\to\mathbb Z$;
  - `Alg-05-10-22` p. 8.
- **Refusi del testo stampato** (riportati con avviso):
  - divisione euclidea stampata con $0\le r\le b$, mentre la dimostrazione a mano usa $0\le r<b$;
  - Prop. 9 (binomio) in un anello qualsiasi senza ipotesi di commutatività visibile;
  - "$(\mathbb Z_n,\cdot)$ è un gruppo sse $n$ è primo" (`Alg-30-11-22` p. 2): il gruppo corretto è $\mathbb Z_n\setminus\{\bar0\}$, come in `Alg-05-10-22` p. 11;
  - definizione di funzione di scelta con $f(i)$ invece di $s(i)$;
  - nell'esercizio finale di `Alg-30-11-22` p. 23, "$p$ divide $a^{p-1}$" invece di $a^{p-1}-1$.
- **Valori dubbi negli esempi a mano**: $b(\bar4)$ in $\mathbb Z_7$ per $x^2+1$ (`Alg-07-12-22` p. 20) e il fattore $x^2+4$/$x^2+9$ (p. 19). Non sono riportati nelle note.
- **Accorpamenti**:
  - sottogruppo generato e sottogruppo unione dentro Sottogruppo;
  - classi laterali e indice dentro Teorema di Lagrange sui gruppi;
  - gruppo di Klein dentro Gruppo diedrale;
  - MCD dentro Identità di Bézout;
  - lemma di Euclide e infinità dei primi dentro Teorema fondamentale dell'aritmetica;
  - dominio euclideo dentro Dominio a ideali principali e Divisione tra polinomi;
  - campo algebricamente chiuso nella nota esistente Teorema fondamentale dell'algebra;
  - teorema di Cantor ($X\not\approx\mathcal P(X)$) e criterio di Dedekind dentro Insieme numerabile.
- **Nomi scelti per evitare alias già occupati**:
  - Teorema di Lagrange sui gruppi (Teorema di Lagrange è il valor medio);
  - Campo (struttura algebrica) ("campo; field" è alias di Spazio vettoriale);
  - Omomorfismo di gruppi e Omomorfismo di anelli ("omomorfismo" è alias di Applicazione lineare);
  - Insieme parzialmente ordinato ("relazione d'ordine" è alias di Assiomi dei numeri reali, "maggiorante" di Estremo superiore e inferiore);
  - Piccolo teorema di Fermat (Teorema di Fermat è quello dei punti stazionari);
  - Teorema di Ruffini, senza "radici di un polinomio" e "molteplicità di una radice", già alias di Teorema fondamentale dell'algebra.

---

# Estensione (2026-11-25): materiale della cartella `triennale/ANNO 3/istituzioni`

**Aggiornamento.** Questa sezione sostituisce quanto detto alla riga "La cartella `triennale/ANNO 3/istituzioni` è un altro corso..." e in "Istituzioni A3 ... estenderà queste note".
- Non esiste un corso "Istituzioni A3".
