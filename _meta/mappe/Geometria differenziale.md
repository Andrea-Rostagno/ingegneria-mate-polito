---
tipo: meta
tags: [meta, mappa]
corso: Geometria differenziale
livello: triennale
cartella: triennale/ANNO 2/geometria differenziale
---

# Mappa delle competenze: Geometria differenziale

Mappa concettuale del corso `triennale/ANNO 2/geometria differenziale` (lezioni manoscritte del docente, 27 lezioni in 26 PDF). Il programma dichiarato a lezione 1 (L01 p. 7) è: curve parametrizzate, triedro e formule di Frenet, eliche; richiami di algebra (spazio duale, endomorfismi simmetrici); superfici parametrizzate, prima e seconda forma fondamentale, operatore forma, curvature. A questo il corso aggiunge il calcolo su aperti di $\mathbb R^n$ (spazi tangenti, campi, forme differenziali, pull-back), le $k$-forme e gli integrali con Gauss-Bonnet.

**40 competenze: 33 nuove e 7 note esistenti estese** (segnate "(esistente)"). Tutte le note nuove sono in area `algebra-geometria`. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. "Porta a" è l'inverso di "Prerequisiti" e "Collegati" è simmetrico; "(esterno)" indica una nota di un altro corso.

## Inventario del materiale (2026-11-25)

- **Fonti: tutte lezioni manoscritte, nessun testo estraibile.** Sono 26 PDF e 509 pagine, da `Lezione01_GD.pdf` a `Lezione27_GD.pdf`; `Lezione02_03_GD.pdf` contiene due lezioni. Le pagine sono state lette come immagini (pymupdf, fogli da 6 pagine a 70-80 dpi) e trascritte. Gli enunciati chiave sono stati ricontrollati a 85-90 dpi, su fogli da 4-6 pagine: L05 p. 11, L06 pp. 16 e 21, L08 p. 10, L10 p. 30, L19 pp. 3-4, L21 pp. 10, 11 e 21, L22 pp. 9-10, L25 p. 13, L27 p. 3. Nessuna pagina è risultata illeggibile.
- **Numeri di pagina.** Sono sempre quelli del PDF. Il docente usa una numerazione sua (pagine "2b", "11c", "18a"…) che spesso differisce di 1-3 pagine; nei suoi rimandi interni ("vedi pag. 26") vale la sua.
- **Nessun tema d'esame nella cartella.** Due blocchi di lezione hanno però la struttura di un esercizio da compito:
  - L08 pp. 26-30: la curva $Q=P+\frac1KN$;
  - L23 pp. 18-25: la superficie $\alpha+\frac1KN+vB$, con "Domanda 1/2".
  Sono usati al più come esempio svolto, senza ricavarne competenze autonome.
- **Convenzioni del docente da rispettare:**
  - $\frac{dB}{ds}=+\tau N$, quindi $\frac{dN}{ds}=-KT-\tau B$ e $\tau=-\frac{(P'\times P'')\cdot P'''}{\|P'\times P''\|^2}$. L'elica destrorsa ha torsione negativa. Il docente segnala che molti testi usano $-\tau$ (L05 p. 11).
  - L'operatore forma è $-N_*$, la seconda forma è $b_s(v,w)=-N_*(v)\cdot w$; il docente scrive "$N^P$" per la mappa di Gauss sui parametri.
  - La curvatura di una curva è $K$ maiuscola, come quella gaussiana.
- **Sviste del manoscritto, segnalate nelle note:**
  - L06 p. 21 scrive $\frac{dN}{ds}=-KT+\tau B$ citando la "2ª formula": è irrilevante lì, perché $\tau=0$.
  - L19 pp. 3-4 chiama "metrica" due forme non definite positive ovunque: $x\,dx^2+(y+x)dy^2$ e $r\,dr^2+2r\varphi\,dr\,d\varphi$. Non sono state usate come esempi.

## Grafo

Ci sono **87 collegamenti interni al corso** e 86 verso note di altri corsi. Il sottografo del corso è un'unica componente e ogni nota ha almeno 2 collegamenti interni.

Nodi con grado più alto, collegamenti esterni inclusi (in parentesi quelli interni al corso):
- Forma quadratica: 14 (3)
- Endomorfismo simmetrico: 13 (3)
- Matrice jacobiana: 11 (3)
- Forma differenziale: 11 (8)
- Integrale di linea: 10 (3)
- Superficie parametrica: 10 (5)
- Curvatura gaussiana: 9 (9)
- Applicazione tangente: 8 (6)

## Curve nello spazio

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Curve parametriche** (esistente) | analisi | curva regolare; curva semplice; curva piana; curve equivalenti | L01 pp. 8-16; L02_03 pp. 1-19 | — | Piano osculatore<br>Riferimento di Frenet<br>Curvatura di una curva<br>Spazio tangente | — |
| **Piano osculatore** | algebra-geometria | osculating plane; punto biregolare | L02_03 pp. 19-23; L04 pp. 1-8 | Curve parametriche<br>Prodotto vettoriale (esterno) | Riferimento di Frenet | Torsione di una curva<br>Equazione del piano (esterno) |
| **Riferimento di Frenet** | algebra-geometria | Frenet frame; triedro di Frenet; versore normale; versore binormale | L04 pp. 9-22 | Curve parametriche<br>Piano osculatore<br>Prodotto vettoriale (esterno) | Curvatura di una curva<br>Formule di Frenet | Coordinate intrinseche (esterno) |
| **Curvatura di una curva** | algebra-geometria | curvature of a curve; curvatura flessionale | L05 pp. 4-6, 12-16; L06 pp. 10-14, 17-21 | Curve parametriche<br>Riferimento di Frenet | Torsione di una curva<br>Formule di Frenet<br>Elica circolare | Coordinate intrinseche (esterno)<br>Seconda forma fondamentale<br>Curvature principali |
| **Torsione di una curva** | algebra-geometria | torsion; curva piana e torsione nulla | L05 pp. 7-9; L06 pp. 1-5, 15-16 | Curvatura di una curva<br>Riferimento di Frenet | Formule di Frenet<br>Elica cilindrica | Piano osculatore<br>Prodotto misto (esterno) |
| **Formule di Frenet** | algebra-geometria | Frenet-Serret formulas; equazioni intrinseche | L05 pp. 4-11; L06 pp. 6-8; L08 p. 11 | Riferimento di Frenet<br>Curvatura di una curva<br>Torsione di una curva | Elica circolare<br>Elica cilindrica<br>Teorema fondamentale delle curve | Formule di Poisson (esterno) |
| **Elica circolare** | algebra-geometria | circular helix; elica | L06 pp. 22-27; L07 pp. 1-4; L08 pp. 7-9 | Formule di Frenet<br>Curvatura di una curva | — | Elica cilindrica<br>Coni, cilindri e superfici di rotazione (esterno) |
| **Elica cilindrica** | algebra-geometria | generalized helix; teorema di Lancret; asse dell'elica; pendenza | L07 pp. 5-15; L08 pp. 1-6, 12-25 | Formule di Frenet<br>Torsione di una curva | — | Elica circolare |
| **Teorema fondamentale delle curve** | algebra-geometria | fundamental theorem of space curves | L08 pp. 10-11 | Formule di Frenet | — | Problema di Cauchy (esterno)<br>Elica circolare |

## Richiami di algebra multilineare

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Spazio duale** | algebra-geometria | dual space; base duale; covettore; applicazione duale | L09 pp. 1-6; L11 pp. 1-2 | Base e dimensione (esterno)<br>Applicazione lineare (esterno) | Tensore<br>Forma differenziale<br>Pull-back | Matrice associata a un'applicazione lineare (esterno) |
| **Tensore** | algebra-geometria | tensor; Bil(V); prodotto tensoriale; prodotto simmetrico; convenzione di Einstein | L09 pp. 14-17; L10 pp. 1-14 | Spazio duale<br>Forma quadratica | Metrica riemanniana<br>Prodotto wedge | — |
| **Forma quadratica** (esistente) | algebra-geometria | prodotto scalare come forma bilineare; cono luce | L09 pp. 7-13; L10 pp. 2-4 | — | Tensore<br>Metrica riemanniana | — |
| **Endomorfismo simmetrico** (esistente) | algebra-geometria | endomorfismo simmetrico rispetto a una metrica | L10 pp. 15-24 | — | Operatore forma<br>Invarianti di un endomorfismo | — |
| **Invarianti di un endomorfismo** | algebra-geometria | traccia; determinante di un endomorfismo; invarianti per similitudine | L10 pp. 25-30 | Endomorfismo simmetrico<br>Matrici simili (esterno)<br>Autovalori e autovettori (esterno) | Curvatura gaussiana<br>Curvatura media | Determinante (esterno) |

## Calcolo differenziale su aperti e superfici

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Superficie parametrica** (esistente) | analisi | superfici equivalenti | L11 pp. 9-17 | — | Spazio tangente<br>Mappa di Gauss<br>Prima forma fondamentale | Teorema della funzione inversa |
| **Spazio tangente** | algebra-geometria | tangent space; T_pS; derivazione direzionale | L12 pp. 1-3; L13 pp. 1-6 | Curve parametriche<br>Superficie parametrica<br>Derivata direzionale (esterno) | Campo vettoriale<br>Applicazione tangente<br>Forma differenziale | — |
| **Campo vettoriale** | algebra-geometria | vector field; campo lungo un'applicazione | L12 pp. 4-15; L15 pp. 6-16 | Spazio tangente | Curve integrali di un campo vettoriale | Forma differenziale<br>Campo conservativo (esterno)<br>Applicazione tangente |
| **Applicazione tangente** | algebra-geometria | differential; pushforward; f_*; dP | L12 pp. 16-36; L13 pp. 7-20; L14 pp. 1-12; L15 pp. 1-5; L18 pp. 1-3; L20 p. 1 | Spazio tangente<br>Matrice jacobiana<br>Regola della catena in più variabili (esterno) | Teorema della funzione inversa<br>Pull-back<br>Mappa di Gauss | Campo vettoriale<br>Coordinate polari e cilindriche (esterno) |
| **Matrice jacobiana** (esistente) | analisi | matrice dell'applicazione tangente | L12 pp. 18-22 | — | Applicazione tangente<br>Teorema della funzione inversa | — |
| **Teorema della funzione inversa** | algebra-geometria | inverse function theorem; invertibilità locale; cambio di coordinate | L13 pp. 14-18; L18 pp. 4-6 | Applicazione tangente<br>Matrice jacobiana | — | Superficie parametrica<br>Coordinate polari e cilindriche (esterno) |
| **Curve integrali di un campo vettoriale** | algebra-geometria | integral curves; linee di flusso; raddrizzamento di un campo | L14 pp. 13-21; L15 pp. 10-16 | Campo vettoriale<br>Problema di Cauchy (esterno) | Linee di curvatura | Teorema di esistenza e unicità locale (esterno) |
| **Forma differenziale** | algebra-geometria | differential 1-form; campo covettoriale; differenziale di una funzione; dx_i | L16 pp. 1-12 | Spazio duale<br>Spazio tangente<br>Differenziabilità in più variabili (esterno)<br>Gradiente (esterno) | Pull-back<br>Prodotto wedge<br>Differenziale esterno<br>Integrale di linea | Campo vettoriale<br>Forme chiuse ed esatte<br>Campo conservativo (esterno) |
| **Pull-back** | algebra-geometria | pullback; applicazione co-tangente; f^*; co-differenziale | L16 pp. 13-18; L17 pp. 1-14; L19 pp. 5-13 | Applicazione tangente<br>Forma differenziale<br>Spazio duale | Metrica riemanniana<br>Prima forma fondamentale<br>Teorema Egregio<br>Integrale di linea | Coordinate polari e cilindriche (esterno) |
| **Metrica riemanniana** | algebra-geometria | metric; metrica su un aperto; coefficienti metrici; metriche isometriche | L18 pp. 7-12; L19 pp. 1-12; L21 p. 21 | Tensore<br>Forma quadratica<br>Pull-back | Prima forma fondamentale<br>Teorema Egregio | Spazio vettoriale euclideo (esterno) |
| **Prima forma fondamentale** | algebra-geometria | first fundamental form; E F G; g_S | L19 pp. 14-26 | Metrica riemanniana<br>Pull-back<br>Superficie parametrica<br>Prodotto scalare (esterno) | Seconda forma fondamentale<br>Curvatura gaussiana<br>Teorema Egregio<br>Integrale di superficie | — |

## Curvatura delle superfici

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Mappa di Gauss** | algebra-geometria | Gauss map; N^P; versore normale a una superficie | L20 pp. 2-11 | Superficie parametrica<br>Applicazione tangente<br>Prodotto vettoriale (esterno)<br>Teorema di Schwarz (esterno) | Operatore forma | Orientazione di una superficie (esterno) |
| **Operatore forma** | algebra-geometria | shape operator; operatore di Weingarten; -N_* | L21 pp. 1-2, 10-14; L22 p. 8; L23 pp. 4, 9 | Mappa di Gauss<br>Endomorfismo simmetrico | Seconda forma fondamentale<br>Curvature principali<br>Curvatura gaussiana<br>Curvatura media | — |
| **Seconda forma fondamentale** | algebra-geometria | second fundamental form; L M N; b_s | L21 pp. 3-7; L22 pp. 1-7 | Operatore forma<br>Prima forma fondamentale | Curvatura gaussiana<br>Curvatura media | Curvatura di una curva |
| **Curvature principali** | algebra-geometria | principal curvatures; direzioni principali; punto ombelicale | L21 p. 8; L22 p. 4; L23 pp. 4-6, 11-14 | Operatore forma<br>Autovalori e autovettori (esterno) | Linee di curvatura | Curvatura gaussiana<br>Curvatura media<br>Curvatura di una curva |
| **Curvatura gaussiana** | algebra-geometria | Gaussian curvature; curvatura totale; punto ellittico; punto iperbolico; punto parabolico | L21 pp. 8-10; L22 p. 9; L23 p. 9 | Operatore forma<br>Invarianti di un endomorfismo<br>Prima forma fondamentale<br>Seconda forma fondamentale | Teorema Egregio<br>Teorema di Gauss-Bonnet | Curvatura media<br>Curvature principali<br>Caratteristica di Eulero |
| **Curvatura media** | algebra-geometria | mean curvature; H | L21 pp. 8, 11; L22 p. 9; L23 p. 9 | Operatore forma<br>Invarianti di un endomorfismo<br>Seconda forma fondamentale | — | Curvatura gaussiana<br>Curvature principali |
| **Linee di curvatura** | algebra-geometria | lines of curvature; linea di curvatura | L21 pp. 8, 17-20; L23 pp. 15-17 | Curvature principali<br>Curve integrali di un campo vettoriale | — | — |
| **Teorema Egregio** | algebra-geometria | Theorema Egregium; teorema egregio di Gauss; invariante isometrico | L21 pp. 21-23 | Curvatura gaussiana<br>Prima forma fondamentale<br>Metrica riemanniana<br>Pull-back | — | Teorema di Gauss-Bonnet |

## Forme differenziali e integrazione

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Prodotto wedge** | algebra-geometria | wedge product; prodotto esterno; k-forma differenziale; elemento di volume | L24 pp. 1-12 | Forma differenziale<br>Tensore | Differenziale esterno<br>Integrale di superficie | Determinante (esterno)<br>Prodotto misto (esterno) |
| **Differenziale esterno** | algebra-geometria | exterior derivative; d^2 = 0 | L25 pp. 1-7 | Prodotto wedge<br>Forma differenziale | Forme chiuse ed esatte | Teorema di Schwarz (esterno) |
| **Forme chiuse ed esatte** | algebra-geometria | closed and exact forms; lemma di Poincaré; potenziale di una forma; condizioni di integrabilità | L25 pp. 8-17 | Differenziale esterno | — | Forma differenziale<br>Campo conservativo (esterno)<br>Campo irrotazionale (esterno)<br>Insieme semplicemente connesso (esterno) |
| **Integrale di linea** (esistente) | analisi | integrale curvilineo di prima specie; integrale curvilineo di seconda specie; elemento di lunghezza | L26 pp. 1-12 | Forma differenziale<br>Pull-back | — | — |
| **Integrale di superficie** (esistente) | analisi | elemento d'area come 2-forma | L25 pp. 18-23; L27 pp. 1-2, 14 | Prodotto wedge<br>Prima forma fondamentale | Teorema di Gauss-Bonnet | — |
| **Teorema di Gauss-Bonnet** | algebra-geometria | Gauss-Bonnet theorem | L27 pp. 3, 10-13 | Curvatura gaussiana<br>Integrale di superficie<br>Caratteristica di Eulero | — | Teorema Egregio |
| **Caratteristica di Eulero** | algebra-geometria | Euler characteristic; V + F - S; invariante topologico | L27 pp. 4-9 | — | Teorema di Gauss-Bonnet | Curvatura gaussiana<br>Sfera (esterno) |

## Concetti esterni (da collegare)

- Teorema della funzione implicita: la nota "Moltiplicatori di Lagrange" la cita come "(da collegare)". Questo corso enuncia solo l'invertibilità locale (Teorema della funzione inversa), quindi il collegamento non è stato fatto.
- Omeomorfismo e invariante topologico (L27 pp. 6-7): citati solo di passaggio, senza definizione; restano in testo semplice nella nota "Caratteristica di Eulero".

## Dubbi

- Esempi di L19 pp. 3-4: il docente li chiama "metrica" ma non sono definiti positivi ovunque. Non sono usati.
- Ellissoide (L27 p. 11) e $K$ del toro (L27 p. 12): i conti sono omessi dal docente ("dopo un po' di conti"); è riportato solo il risultato scritto.
- L22 p. 12-13: la matrice di $-N_*$ per $P=(u+v,u-v,u^2-v^2)$ è trascritta così come appare. Non è stata ricalcolata.
