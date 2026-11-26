---
tipo: meta
tags: [meta, mappa]
corso: Equazioni di fisica matematica
livello: triennale
cartella: triennale/ANNO 3/eq fisica matematica
---

# Mappa delle competenze: Equazioni di fisica matematica

Mappa concettuale del corso `triennale/ANNO 3/eq fisica matematica`: 31 lezioni manoscritte (03/10/2023 - 09/01/2024). Il corso ha due metà:
- **ODE (L01-L10):** modelli, teorema di Cauchy, prolungabilità, Grönwall, sistemi lineari ed esponenziale di matrice, stabilità e teoria di Lyapunov;
- **PDE (L11-L31):** classificazione; trasporto e leggi di conservazione scalari 1D (caratteristiche, soluzioni deboli, urti, rarefazioni, entropia); equazione delle onde (d'Alembert, semiretta, serie di autofunzioni, energia); equazione del calore (derivazione da una passeggiata aleatoria, soluzione fondamentale, dominio limitato con Neumann, unicità).

**46 competenze: 28 nuove e 18 note esistenti estese** (segnate "(esistente)"). I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. "Porta a" è l'inverso di "Prerequisiti" e "Collegati" è simmetrico; "(esterno)" indica una nota di un altro corso.

## Inventario del materiale (2026-11-25)

- **Fonti: 31 PDF di lezione, 203 pagine, nessuna con testo estraibile.** Vanno da `01 - Lezione 03_10_23 (2).pdf` a `31 - Lezione 09_01_24 (1).pdf`. Sono lezioni manoscritte in bella copia, molto leggibili.
- **Lettura.** Tutte le pagine sono state lette come immagini (pymupdf, fogli da 4 pagine a 62 dpi per pagina) e trascritte. Gli enunciati chiave sono stati ricontrollati a 100 dpi, due pagine per volta:
  - L02 pp. 2-3; L03 pp. 1, 4; L06 pp. 4-5, 7-8; L08 pp. 1, 4; L10 pp. 3, 6;
  - L16 pp. 4-5; L17 pp. 4-5; L19 pp. 3-6; L20 pp. 1, 4;
  - L22 pp. 5-6; L24 pp. 4-5; L25 pp. 1-2; L27 pp. 1, 3-5.
  Nessuna pagina è risultata illeggibile.
- **Scartata: la sottocartella `esercitazioni/`.** Contiene 11 PDF di esercitazioni (01-09 e `Esercitazione10.pdf`, `Esercitazione11.pdf`); dall'inventario risultano esercizi, e non sono state lette oltre. Sono raccolte di esercizi svolti, quindi non sono fonti (regola "niente esami"). Questo vale anche per il "richiamo teorico" dell'Esercitazione 01. Nessuna nota le cita.
- **Numeri di pagina.** Sono quelli del PDF di ciascuna lezione; "L07 p. 3" significa lezione 7 (file `07 - Lezione 17_10_23.pdf`), pagina 3.
- **Convenzioni del docente da rispettare:**
  - Trasformata di Fourier $\hat u(\xi)=\int u(x)e^{-i\xi x}dx$, con coefficiente di diffusione $D$. La nota esistente "Equazione del calore" usa invece la convenzione in $\nu$ ($e^{-2\pi i\nu x}$) con $D=1$: la differenza è segnalata nella sezione del corso, e le formule altrui non sono state toccate.
  - Norma di matrice $\|A\|_2=\sqrt{\sum_{i,j}a_{ij}^2}$, che il docente chiama "norma di Hilbert-Schmidt" (è la norma di Frobenius, non la norma spettrale).
  - Lemma di Grönwall nella forma $u\le c_1+c_2\int_0^tu\Rightarrow u\le c_1(1+c_2te^{c_2t})$, non nella forma $c_1e^{c_2t}$.
  - "Autovalore semplice" significa molteplicità algebrica uguale a quella geometrica (L07 p. 1), non molteplicità algebrica 1.
  - Disuguaglianza entropica scritta come $\iint(\eta(u)\partial_t\varphi+q(u)\partial_x\varphi)\ge0$ per $\varphi\ge0$ (L19 p. 6).
  - Equazione delle onde scritta con $c^2$; nel caso semiretta e intervallo il docente suppone $c>0$.

## Grafo

Ci sono **97 collegamenti interni al corso** e circa 150 verso note di altri corsi (conteggio con uno script sulle note del corso, 2026-11-25; i collegamenti esterni includono quelli che le note estese avevano già). Il sottografo del corso è un'unica componente e ogni nota nuova ha almeno 2 collegamenti interni. Due note esistenti ne hanno uno solo, perché il corso le usa soltanto come strumento: "Teorema del punto fisso di Banach" (verso il teorema di Cauchy) e "Norme matriciali" (verso l'esponenziale di una matrice). Altre tre note esistenti, segnate "(esterno)" nelle tabelle, hanno ricevuto un punto "Nei corsi" perché il corso ne dà una versione propria: "Trasformata di Fourier di distribuzioni temperate" (convenzione con la variabile ξ, L26-L27), "Teorema della divergenza" (L15, L25, L27, L30) e "Funzioni test" (L14, L19).

## Modelli e teoria generale delle ODE

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Problema di Cauchy** (esistente) | analisi | sistema autonomo | L02 pp. 1-3 | — | Modello di Verhulst<br>Modello SIR | — |
| **Modello di Verhulst** | analisi | crescita logistica; modello di Malthus; crescita malthusiana; capacità del sistema | L01 pp. 1-3; L07 p. 3 | Problema di Cauchy | — | Modello SIR<br>Stabilità secondo Lyapunov<br>Equazione logistica discreta (esterno) |
| **Modello SIR** | analisi | modello di Kermack-McKendrick; suscettibili infetti rimossi | L01 pp. 3-4; L02 p. 1 | Problema di Cauchy | — | Modello di Verhulst<br>Teorema di esistenza e unicità locale |
| **Teorema di esistenza e unicità locale** (esistente) | analisi | teorema di Cauchy su I×J | L02 pp. 2-7 | Teorema del punto fisso di Banach | Prolungabilità delle soluzioni<br>Condizionamento dei problemi di Cauchy | Modello SIR<br>Lemma di Gronwall |
| **Teorema del punto fisso di Banach** (esistente) | algebra-geometria | — | L02 p. 4 | Spazio metrico completo (esterno) | Teorema di esistenza e unicità locale | — |
| **Prolungabilità delle soluzioni** | analisi | funzione sublineare; soluzione globale | L03 pp. 1-2 | Teorema di esistenza e unicità locale | Sistemi lineari di ODE a coefficienti costanti | — |
| **Lemma di Gronwall** | analisi | disuguaglianza di Grönwall | L03 pp. 4-6 | Teorema fondamentale del calcolo integrale (esterno) | Condizionamento dei problemi di Cauchy | Teorema di esistenza e unicità locale |
| **Condizionamento dei problemi di Cauchy** (esistente) | numerica | stima di dipendenza continua dai dati; problema mal posto | L03 pp. 2-6 | Lemma di Gronwall<br>Teorema di esistenza e unicità locale | — | Stabilità dei sistemi lineari di ODE<br>Stabilità in prima approssimazione<br>Buona positura secondo Hadamard |
| **Buona positura secondo Hadamard** (esistente, creata da Equazioni alle derivate parziali) | analisi | — | L03 p. 6 | — | — | Condizionamento dei problemi di Cauchy |

## Sistemi lineari di ODE

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Norme matriciali** (esistente) | algebra-geometria | norma di Hilbert-Schmidt; norma di Frobenius | L04 pp. 4-5 | — | Esponenziale di una matrice | — |
| **Esponenziale di una matrice** | algebra-geometria | matrix exponential; e^{tA}; matrice esponenziale | L04 pp. 2-7; L05 pp. 1-6 | Norme matriciali<br>Matrici simili (esterno) | Sistemi lineari di ODE a coefficienti costanti<br>Equazione matriciale di Lyapunov | Forma canonica di Jordan<br>Matrice diagonalizzabile<br>Equazioni di Kolmogorov (esterno) |
| **Matrice diagonalizzabile** (esistente) | algebra-geometria | calcolo di e^{tA} per similitudine | L05 pp. 7-9; L06 pp. 1-3 | — | Sistemi lineari di ODE a coefficienti costanti | Esponenziale di una matrice<br>Forma canonica di Jordan |
| **Forma canonica di Jordan** | algebra-geometria | Jordan normal form; blocco di Jordan; matrice nilpotente | L06 pp. 3-7 | Autovalori e autovettori (esterno)<br>Matrici simili (esterno) | Sistemi lineari di ODE a coefficienti costanti<br>Stabilità dei sistemi lineari di ODE | Esponenziale di una matrice<br>Matrice diagonalizzabile |
| **Sistemi lineari di ODE a coefficienti costanti** | analisi | x' = Ax; formula di rappresentazione x(t) = e^{tA}x_0 | L04 pp. 1-2; L05 pp. 6-9; L06 pp. 1-3 | Esponenziale di una matrice<br>Prolungabilità delle soluzioni<br>Matrice diagonalizzabile<br>Forma canonica di Jordan | Stabilità dei sistemi lineari di ODE | — |
| **Stabilità dei sistemi lineari di ODE** | analisi | stima asintotica ‖x(t)‖ ≤ C‖x_0‖e^{αt}; criterio degli autovalori | L06 pp. 8-12; L07 pp. 1-2, 5-7; L08 pp. 1-4 | Sistemi lineari di ODE a coefficienti costanti<br>Forma canonica di Jordan<br>Stabilità secondo Lyapunov | Equazione matriciale di Lyapunov<br>Stabilità in prima approssimazione | Condizionamento dei problemi di Cauchy |

## Stabilità e teoria di Lyapunov

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Stabilità secondo Lyapunov** (esistente) | fisica | punto di equilibrio di un sistema di ODE; equilibrio attrattivo; asintoticamente stabile | L07 pp. 2-5 | — | Stabilità dei sistemi lineari di ODE<br>Teoremi di Lyapunov | Modello di Verhulst |
| **Teoremi di Lyapunov** | analisi | funzione di Lyapunov per ODE; primo e secondo teorema di Lyapunov; metodo diretto di Lyapunov | L08 pp. 4-6; L09 pp. 1-6; L10 pp. 1-2 | Stabilità secondo Lyapunov<br>Teorema di Weierstrass (esterno)<br>Spazio topologico compatto (esterno) | Equazione matriciale di Lyapunov<br>Stabilità in prima approssimazione | Criterio di Foster-Lyapunov per la ricorrenza (esterno) |
| **Equazione matriciale di Lyapunov** | analisi | PA + AᵀP = −I; funzione di Lyapunov quadratica | L10 pp. 3-7 | Teoremi di Lyapunov<br>Stabilità dei sistemi lineari di ODE<br>Esponenziale di una matrice | Stabilità in prima approssimazione | — |
| **Stabilità in prima approssimazione** | analisi | linearizzazione; teorema di stabilità in prima approssimazione | L10 pp. 7-12 | Equazione matriciale di Lyapunov<br>Teoremi di Lyapunov<br>Stabilità dei sistemi lineari di ODE<br>Matrice jacobiana (esterno) | — | Condizionamento dei problemi di Cauchy |

## PDE del primo ordine: trasporto e leggi di conservazione

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Equazione alle derivate parziali** (esistente, creata da Equazioni alle derivate parziali) | analisi | multi-indice; ordine di una PDE; PDE quasi-lineare; PDE semi-lineare; equazione dei mezzi porosi | L11 pp. 1-6; L12 p. 1 | — | Equazione del trasporto<br>Legge di conservazione<br>Equazione delle onde<br>Equazione del calore | Funzione armonica<br>Equazione di Poisson |
| **Funzione armonica** (esistente) | analisi | — | L11 p. 3 | — | — | Equazione alle derivate parziali |
| **Equazione di Poisson** (esistente) | fisica | — | L11 p. 4 | — | — | Equazione alle derivate parziali |
| **Equazione del trasporto** | analisi | transport equation; trasporto lineare; bordo di afflusso; bordo di deflusso | L12 pp. 2-5; L13 pp. 1-5; L21 pp. 4-5 | Equazione alle derivate parziali | Metodo delle caratteristiche<br>Soluzione debole di una legge di conservazione<br>Formula di d'Alembert<br>Equazione delle onde sulla semiretta | — |
| **Metodo delle caratteristiche** | analisi | method of characteristics; curve caratteristiche; tempo di rottura | L12 pp. 3-5; L15 pp. 3-5; L16 pp. 1-4 | Equazione del trasporto<br>Problema di Cauchy | Problema di Riemann<br>Onda d'urto<br>Onda di rarefazione | Legge di conservazione |
| **Soluzione debole di una legge di conservazione** | analisi | soluzione debole del trasporto; formulazione debole; soluzione classica | L14 pp. 1-7; L16 pp. 5-6 | Equazione del trasporto<br>Funzioni test (esterno)<br>Integrazione per parti (esterno)<br>Spazi Lp (esterno) | Onda d'urto<br>Onda di rarefazione<br>Soluzione entropica | Legge di conservazione<br>Derivata distribuzionale (esterno) |
| **Legge di conservazione** | analisi | conservation law; relazione costitutiva; equazione di Burgers; equazione del traffico | L15 pp. 1-3; L16 pp. 3-4; L27 p. 4 | Equazione alle derivate parziali<br>Teorema della divergenza (esterno) | Problema di Riemann<br>Equazione del calore<br>Equazione del calore su un dominio limitato | Metodo delle caratteristiche<br>Soluzione debole di una legge di conservazione<br>Equazione di continuità (esterno)<br>Equazione di continuità della carica (esterno) |
| **Problema di Riemann** | analisi | Riemann problem; dato a gradino | L17 pp. 1-2 | Legge di conservazione<br>Metodo delle caratteristiche | Onda d'urto<br>Onda di rarefazione | — |
| **Onda d'urto** | analisi | shock wave; condizione di Rankine-Hugoniot | L17 pp. 2-6; L18 p. 1 | Problema di Riemann<br>Soluzione debole di una legge di conservazione<br>Metodo delle caratteristiche | Soluzione entropica<br>Equazione di Buckley-Leverett | Onda di rarefazione |
| **Onda di rarefazione** | analisi | rarefaction wave; ventaglio di rarefazione | L18 pp. 1-4 | Problema di Riemann<br>Metodo delle caratteristiche<br>Soluzione debole di una legge di conservazione | Soluzione entropica<br>Equazione di Buckley-Leverett | Onda d'urto |
| **Soluzione entropica** | analisi | entropy solution; coppia entropia-flusso di entropia; teorema di Kruzhkov; principio del massimo | L18 pp. 5-6; L19 pp. 1-6; L20 pp. 4-5 | Soluzione debole di una legge di conservazione<br>Onda d'urto<br>Onda di rarefazione<br>Formula di Taylor con resto di Lagrange (esterno) | Equazione di Buckley-Leverett | — |
| **Equazione di Buckley-Leverett** | analisi | flusso a concavità variabile; acqua e petrolio | L20 pp. 1-4 | Onda d'urto<br>Onda di rarefazione<br>Soluzione entropica | — | — |

## Equazione delle onde

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Equazione delle onde** (esistente) | fisica | fattorizzazione dell'operatore delle onde | L21 pp. 1-2; L31 pp. 1-6 | Equazione alle derivate parziali | Formula di d'Alembert<br>Equazione delle onde sulla semiretta<br>Soluzione per serie di autofunzioni<br>Metodo dell'energia | Corda vibrante |
| **Formula di d'Alembert** | analisi | d'Alembert's formula | L21 pp. 2-9 | Equazione delle onde<br>Equazione del trasporto | Equazione delle onde sulla semiretta | — |
| **Problema ai limiti** (esistente) | numerica | condizioni al bordo di Dirichlet e di Neumann per le PDE | L23 p. 4; L27 p. 4 | — | Equazione delle onde sulla semiretta<br>Autovalori e autofunzioni del laplaciano | — |
| **Equazione delle onde sulla semiretta** | analisi | problema ai valori iniziali e al bordo per le onde; onde sull'intervallo | L22 pp. 1-6; L23 pp. 1-6 | Formula di d'Alembert<br>Equazione del trasporto<br>Equazione delle onde<br>Problema ai limiti | — | — |
| **Autovalori e autofunzioni del laplaciano** | analisi | coppie autovalore-autofunzione di −Δ; Dirichlet omogeneo; Neumann omogeneo | L24 pp. 3-7; L28 pp. 3-4; L29 pp. 1-2 | Problema ai limiti<br>Spazio di Hilbert (esterno)<br>Autovalori e autovettori (esterno) | Soluzione per serie di autofunzioni | Serie di Fourier (esterno) |
| **Soluzione per serie di autofunzioni** | analisi | separazione delle variabili; sviluppo in serie di autofunzioni; soluzione per serie | L24 pp. 1-4; L25 pp. 1-4; L28 pp. 3-6; L29 pp. 2-5 | Autovalori e autofunzioni del laplaciano<br>Equazione delle onde<br>Equazione del calore<br>Spazio di Hilbert (esterno) | Corda vibrante<br>Equazione del calore su un dominio limitato | Serie di Fourier (esterno) |
| **Corda vibrante** | fisica | vibrating string; equazione della corda vibrante; c² = T/ρ | L31 pp. 1-6; L25 pp. 2-4 | Soluzione per serie di autofunzioni | — | Equazione delle onde |
| **Metodo dell'energia** | analisi | energy method; unicità per l'equazione delle onde; unicità per l'equazione del calore | L25 pp. 4-8; L30 pp. 1-3 | Equazione delle onde<br>Equazione del calore<br>Teorema della divergenza (esterno) | — | Equazione del calore su un dominio limitato |

## Equazione del calore

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Limite diffusivo della passeggiata aleatoria** | probabilita | derivazione microscopica dell'equazione del calore; passeggiata aleatoria con pausa | L26 pp. 1-5 | Distribuzione binomiale (esterno)<br>Formula di Taylor con resto di Lagrange (esterno)<br>Funzioni test (esterno) | Equazione del calore | Moto browniano (esterno)<br>Limite gaussiano della passeggiata aleatoria (esterno)<br>Soluzione fondamentale dell'equazione del calore |
| **Equazione del calore** (esistente) | analisi | trasporto a velocità infinita | L26 pp. 1-6; L27 pp. 1-3 | Equazione alle derivate parziali<br>Legge di conservazione<br>Limite diffusivo della passeggiata aleatoria | Equazione del calore su un dominio limitato<br>Soluzione per serie di autofunzioni<br>Metodo dell'energia | — |
| **Soluzione fondamentale dell'equazione del calore** (esistente, creata da Equazioni alle derivate parziali) | analisi | — | L26 pp. 5-6; L27 pp. 1-3 | — | — | Limite diffusivo della passeggiata aleatoria |
| **Equazione del calore su un dominio limitato** | analisi | conservazione della massa; positività della soluzione; Neumann omogeneo; convergenza alla distribuzione uniforme | L27 pp. 3-6; L28 pp. 1-6; L29 pp. 1-5 | Equazione del calore<br>Legge di conservazione<br>Soluzione per serie di autofunzioni<br>Teorema della divergenza (esterno) | — | Metodo dell'energia |

## Concetti esterni (da collegare)

- Nessun concetto lasciato "(da collegare)". La compattezza usata con Weierstrass nelle dimostrazioni di Lyapunov (L09 pp. 1, 5) è collegata a "Spazio topologico compatto". Nella nota "Equazioni di Kolmogorov" la menzione "Esponenziale di matrice (da collegare)" è stata trasformata in link.
- Note del corso parallelo Equazioni alle derivate parziali estese qui: "Equazione alle derivate parziali", "Buona positura secondo Hadamard", "Soluzione fondamentale dell'equazione del calore". La buona positura compare anche in "Condizionamento dei problemi di Cauchy", che ne aveva già l'alias "problema ben posto".
- Funzione di Heaviside: è un alias della nota "Trasformata di Fourier di distribuzioni temperate", non una nota a sé. Nell'equazione del trasporto è citata solo come dato iniziale e resta in testo semplice.

## Dubbi

- L02 p. 2 e L03 p. 1: il teorema di Cauchy è enunciato su $I\times J$ con $|t-t_0|\le a$, $\|x-x_0\|\le b$, e $\delta<\min\{a,\frac1L,\frac bM\}$. Con questa scelta la costante di contrazione è $L\delta<1$; il docente non introduce pesi.
- L09 p. 3: il secondo teorema di Lyapunov è enunciato con "sse", ma è dimostrata solo l'implicazione "esiste $V$ in senso stretto ⇒ asintoticamente stabile". Il viceversa, per i sistemi lineari, è il teorema di L10 p. 3. Nelle note è riportato così.
- L24 pp. 4-5: per gli autovalori di Dirichlet su $(0,1)$ il docente scrive $\lambda_k=k^2\pi^2$, $k=0,1,2,\dots$; con $k=0$ l'autofunzione sarebbe nulla. In L25 p. 2 l'indice parte correttamente da $k=1$. Nelle note si usa $k\ge1$ per Dirichlet e $k\ge0$ per Neumann.
- L24 p. 4: il teorema sugli autovalori di Dirichlet afferma molteplicità algebrica e geometrica unitaria per ogni autovalore. Vale nell'esempio 1D ma non per un dominio qualsiasi; nella nota è riportato "così enunciato".
- Corso parallelo: anche "Metodo dell'energia" è stata poi estesa dall'agente di Equazioni alle derivate parziali.
- Il materiale non contiene le equazioni di Maxwell: nessun collegamento forzato.
- L27 p. 4: il teorema su positività e massa chiede "$u_0\in L^1(\mathbb R)$" pur essendo su $\Omega$ limitato: va letto come $L^1(\Omega)$.
- L28 p. 6: nel calcolo di $\hat u_{0,0}=1/|\Omega|$ si usa $\int_\Omega\varphi_k=-\frac1{\lambda_k}\int_\Omega\Delta\varphi_k$ e il teorema della divergenza; il passaggio è trascritto com'è.
- L26 p. 1: la probabilità di salto è scritta $2D\frac{\Delta t^\beta}{\Delta x^\alpha}$; poi si sceglie $\alpha=2$, $\beta=1$. Che sia una probabilità (cioè $\le1$) è implicito.
