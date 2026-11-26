---
tipo: meta
tags: [meta, mappa]
corso: Metodi matematici e probabilità
livello: triennale
cartella: triennale/ANNO 2/metodi matematici & probabilità
---

# Mappa delle competenze: Metodi matematici e probabilità

Mappa concettuale del corso `triennale/ANNO 2/metodi matematici & probabilità` (Metodi Matematici per l'Ingegneria, Politecnico di Torino, A.A. 2022/23). Il corso ha due metà: **metodi matematici** (analisi complessa, distribuzioni, trasformate di Fourier e Laplace) e **probabilità** costruita sulla teoria della misura. **76 competenze (71 nuove, 5 esistenti estese), 138 collegamenti interni** più 35 verso note di altri corsi; un'unica componente connessa. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo.

Fonti, in ordine di priorità:
- Metodi matematici: dispense `Capitolo 1.pdf` ... `Capitolo 6 (1).pdf` (testo, §§ e numeri di teoremi citati), `formulario_analisi.pdf`. Delle esercitazioni `1 - Numeri Complessi (2).pdf` ... `13 - Trasformata di Laplace.pdf` (di M. Alutto) sono usati solo i riquadri "Richiami di teoria"; gli esercizi svolti e quelli per casa non sono fonti.
- Probabilità e misura: appunti manoscritti `2023Lezione01(08-03-23) (2).pdf` ... `2023Lezione14(08-06-23).pdf` (scansioni con OCR inutilizzabile, lette come immagini), `formularioprobabilita (1).pdf`. `tavole normale (1).pdf` è una tavola senza testo.
- Scartati (regola dell'utente): sezioni Esercizi/Soluzioni dei capitoli e degli esercizi per casa; gli esercizi dei "Fogli" svolti a lezione sono usati al massimo come esempio.

"Porta a" è ricavato come l'inverso di "Prerequisiti", e "Collegati" è simmetrico. "(esistente)" = nota già presente nel wiki, estesa con una sezione per questo corso.



## Nodi con grado più alto

- Distribuzione (funzione generalizzata): 8
- Delta di Dirac: 8
- Variabile aleatoria: 7
- Spazio di misura: 7
- Integrale di Lebesgue: 7
- Variabile aleatoria assolutamente continua: 6
- Trasformata di Fourier di distribuzioni temperate: 6
- Trasformata di Fourier: 6
- Formula integrale di Cauchy: 6
- Variabile aleatoria discreta: 5


## Numeri complessi e funzioni elementari

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Numeri complessi** | analisi | (esistente) | `Capitolo 1.pdf` §1.1.1-1.1.2 | — | Forma trigonometrica ed esponenziale dei numeri complessi (modulo e argomento)<br>Topologia del piano complesso (modulo come distanza) | — |
| **Forma trigonometrica ed esponenziale dei numeri complessi** | analisi | (esistente) | `Capitolo 1.pdf` §1.1.3 | Numeri complessi (modulo e argomento) | Radici n-esime dei numeri complessi (formula di De Moivre)<br>Funzioni elementari complesse (formula di Eulero come definizione)<br>Logaritmo complesso (argomento principale)<br>Trasformazioni di Möbius (rotazione e dilatazione) | — |
| **Radici n-esime dei numeri complessi** | analisi | (esistente) | `Capitolo 1.pdf` §1.1.4 | Forma trigonometrica ed esponenziale dei numeri complessi (formula di De Moivre) | — | Logaritmo complesso (altra multifunzione) |
| **Teorema fondamentale dell'algebra** | analisi | (esistente) | `Capitolo 1.pdf` §1.1.5, Teorema 1.4; `Capitolo 2 (1).pdf` §2.8 | Teorema di Liouville (1/P sarebbe intera e limitata) | — | — |
| **Topologia del piano complesso** | analisi | intorno; aperto; chiuso; dominio; regione | `Capitolo 1.pdf` §1.2, §1.4 | Numeri complessi (modulo come distanza) | Trasformazioni di Möbius (immagini di dischi e semipiani)<br>Funzione olomorfa (derivata definita in un intorno)<br>Integrale di linea complesso (cammini in domini)<br>Serie di potenze (disco di convergenza) | Punto di accumulazione (stessa nozione di intorno in R) |
| **Funzioni elementari complesse** | analisi | esponenziale complesso; seno e coseno complessi; sinh; cosh | `Capitolo 1.pdf` §1.3.2-1.3.4 | Forma trigonometrica ed esponenziale dei numeri complessi (formula di Eulero come definizione) | Logaritmo complesso (inversa multivoca dell'esponenziale) | Teorema di Liouville (seno e coseno intere ma illimitate)<br>Formule trigonometriche (identità valide anche in C)<br>Trasformazioni di Möbius (funzioni elementari del §1.3)<br>Funzione olomorfa (esempi di funzioni intere) |
| **Logaritmo complesso** | analisi | log z; Log z; valore principale | `Capitolo 1.pdf` §1.3.6 | Funzioni elementari complesse (inversa multivoca dell'esponenziale)<br>Forma trigonometrica ed esponenziale dei numeri complessi (argomento principale) | — | Proprietà di potenze e logaritmi (valgono solo come uguaglianze fra insiemi)<br>Radici n-esime dei numeri complessi (altra multifunzione) |
| **Trasformazioni di Möbius** | analisi | funzioni conformi; funzioni affini; roto-omotetia | `Capitolo 1.pdf` §1.3.1, Es. 1.23 | Topologia del piano complesso (immagini di dischi e semipiani)<br>Forma trigonometrica ed esponenziale dei numeri complessi (rotazione e dilatazione) | — | Funzioni elementari complesse (funzioni elementari del §1.3) |

## Funzioni analitiche e teoria di Cauchy

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzione olomorfa** | analisi | funzione analitica; derivata complessa; funzione intera | `Capitolo 2 (1).pdf` §2.1 | Topologia del piano complesso (derivata definita in un intorno)<br>Derivata (stessa definizione come limite) | Condizioni di Cauchy-Riemann (caratterizzazione della derivabilità)<br>Teorema di Cauchy-Goursat (ipotesi di analiticità)<br>Serie di Taylor (ogni olomorfa è sviluppabile) | Funzioni elementari complesse (esempi di funzioni intere)<br>Regole di derivazione (identiche in campo complesso) |
| **Condizioni di Cauchy-Riemann** | analisi | CR; u_x=v_y, u_y=-v_x | `Capitolo 2 (1).pdf` §2.2, Teor. 2.6, 2.9 | Funzione olomorfa (caratterizzazione della derivabilità) | Funzione armonica (derivate due volte danno Laplace)<br>Teorema di Cauchy-Goursat (annullano gli integrandi di Green) | — |
| **Funzione armonica** | analisi | equazione di Laplace; armonica coniugata | `Capitolo 2 (1).pdf` §2.3 | Condizioni di Cauchy-Riemann (derivate due volte danno Laplace) | — | Problema di Dirichlet e moto browniano (soluzioni armoniche del problema di Dirichlet)<br>Formula integrale di Cauchy (media e massimo anche per le armoniche)<br>Generatore infinitesimale (per il moto browniano è il laplaciano/2) |
| **Integrale di linea complesso** | analisi | cammino; arco di Jordan; stima ML | `Capitolo 2 (1).pdf` §2.4-2.5 | Topologia del piano complesso (cammini in domini)<br>Integrale di Riemann (si riduce a integrali in dt) | Teorema di Cauchy-Goursat (integrale su cammini chiusi)<br>Formula integrale di Cauchy (integrale di 1/(z-z0)) | — |
| **Teorema di Cauchy-Goursat** | analisi | teorema di Morera; dominio semplicemente connesso | `Capitolo 2 (1).pdf` §2.6 | Integrale di linea complesso (integrale su cammini chiusi)<br>Condizioni di Cauchy-Riemann (annullano gli integrandi di Green)<br>Funzione olomorfa (ipotesi di analiticità) | Formula integrale di Cauchy (deformazione del cammino)<br>Teorema dei residui (dominio con bordo) | — |
| **Formula integrale di Cauchy** | analisi | formula per le derivate; proprietà della media; principio del massimo | `Capitolo 2 (1).pdf` §2.7-2.8 | Teorema di Cauchy-Goursat (deformazione del cammino)<br>Integrale di linea complesso (integrale di 1/(z-z0)) | Teorema di Liouville (stima di f' dalla formula per le derivate)<br>Serie di Taylor (coefficienti come integrali)<br>Serie di Laurent (coefficienti come integrali) | Funzione armonica (media e massimo anche per le armoniche) |
| **Teorema di Liouville** | analisi | funzione intera e limitata | `Capitolo 2 (1).pdf` §2.8, Teor. 2.37 | Formula integrale di Cauchy (stima di f' dalla formula per le derivate) | Teorema fondamentale dell'algebra (1/P sarebbe intera e limitata) | Funzioni elementari complesse (seno e coseno intere ma illimitate) |

## Serie e residui

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Serie di potenze** | analisi | raggio di convergenza; disco di convergenza | `Capitolo 3 (1).pdf` §3.1 | Topologia del piano complesso (disco di convergenza)<br>Criteri del rapporto e della radice per successioni (calcolo del raggio) | Serie di Taylor (somma di una serie di potenze)<br>Serie di Laurent (potenze positive e negative) | — |
| **Serie di Taylor** | analisi | sviluppo in serie di Taylor; analiticità | `Capitolo 3 (1).pdf` §3.2, Teor. 3.14 | Serie di potenze (somma di una serie di potenze)<br>Formula integrale di Cauchy (coefficienti come integrali)<br>Funzione olomorfa (ogni olomorfa è sviluppabile) | Singolarità isolate (ordine degli zeri) | Sviluppi di Maclaurin (caso reale con resto) |
| **Serie di Laurent** | analisi | parte principale; sviluppo in un anello | `Capitolo 3 (1).pdf` §3.3, Teor. 3.16 | Serie di potenze (potenze positive e negative)<br>Formula integrale di Cauchy (coefficienti come integrali) | Singolarità isolate (classificazione con la parte principale)<br>Residuo (coefficiente c_{-1}) | — |
| **Singolarità isolate** | analisi | zero di ordine m; polo; singolarità essenziale; eliminabile | `Capitolo 3 (1).pdf` §3.4 | Serie di Laurent (classificazione con la parte principale)<br>Serie di Taylor (ordine degli zeri) | Residuo (definito in una singolarità isolata) | — |
| **Residuo** | analisi | calcolo dei residui; polo semplice; polo multiplo | `Capitolo 3 (1).pdf` §3.5 | Singolarità isolate (definito in una singolarità isolata)<br>Serie di Laurent (coefficiente c_{-1}) | Teorema dei residui (somma dei residui interni) | — |
| **Teorema dei residui** | analisi | integrali con i residui | `Capitolo 3 (1).pdf` §3.5, Teor. 3.24 | Residuo (somma dei residui interni)<br>Teorema di Cauchy-Goursat (dominio con bordo) | Antitrasformata di Laplace (antitrasformata di funzioni razionali) | — |

## Distribuzioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzioni test** | analisi | spazio D; convergenza in D; funzione bump | `Capitolo 4 (1).pdf` §4.3 | Derivata (funzioni di classe C infinito) | Distribuzione (funzione generalizzata) (funzionale lineare continuo su D)<br>Spazio di Schwartz (D contenuto in S) | — |
| **Distribuzione (funzione generalizzata)** | analisi | distribuzione; D'; distribuzione regolare | `Capitolo 4 (1).pdf` §4.4 | Funzioni test (funzionale lineare continuo su D)<br>Integrale di Riemann (distribuzioni regolari) | Delta di Dirac (esempio non regolare)<br>Valore principale di 1 su x (distribuzione non regolare)<br>Derivata distribuzionale (derivata per dualità)<br>Operazioni sulle distribuzioni (definite per dualità)<br>Convergenza di distribuzioni (convergenza debole)<br>Supporto di una distribuzione (dove T non è nulla)<br>Distribuzioni temperate (sottoclasse di D') | — |
| **Delta di Dirac** | analisi | delta; impulso; treno di impulsi | `Capitolo 4 (1).pdf` Es. 4.10 | Distribuzione (funzione generalizzata) (esempio non regolare) | — | Spazio di misura (misura di Dirac della lezione 2)<br>Derivata distribuzionale (H' = delta)<br>Convergenza di distribuzioni (limite di nuclei che si concentrano)<br>Supporto di una distribuzione (soluzione di xT=0)<br>Trasformata di Fourier di distribuzioni temperate (F(delta)=1)<br>Formula di sommazione di Poisson (treno di impulsi)<br>Trasformata di Laplace di distribuzioni (L(delta)=1)<br>Spazio di misura (misura di Dirac) |
| **Valore principale di 1 su x** | analisi | v.p. 1/x; principal value | `Capitolo 4 (1).pdf` §4.5; `Capitolo 5 (3).pdf` §5.6 | Distribuzione (funzione generalizzata) (distribuzione non regolare) | — | Integrale improprio (limite simmetrico attorno a 0)<br>Trasformata di Fourier di distribuzioni temperate (F(v.p. 1/t) = -i pi sign) |
| **Derivata distribuzionale** | analisi | derivata di Heaviside; formula dei salti | `Capitolo 4 (1).pdf` §4.5.4, Prop. 4.20 | Distribuzione (funzione generalizzata) (derivata per dualità) | — | Delta di Dirac (H' = delta)<br>Punti di discontinuità (i salti generano delta) |
| **Operazioni sulle distribuzioni** | analisi | traslazione; riscalamento; moltiplicazione per C infinito | `Capitolo 4 (1).pdf` §4.5.1-4.5.3 | Distribuzione (funzione generalizzata) (definite per dualità) | Convoluzione (traslazioni) | Trasformazioni del grafico (analogo per funzioni) |
| **Convergenza di distribuzioni** | analisi | convergenza in D'; successioni approssimanti la delta | `Capitolo 4 (1).pdf` §4.6 | Distribuzione (funzione generalizzata) (convergenza debole) | — | Delta di Dirac (limite di nuclei che si concentrano) |
| **Supporto di una distribuzione** | analisi | distribuzioni a supporto compatto; xT=0 | `Capitolo 4 (1).pdf` §4.7 | Distribuzione (funzione generalizzata) (dove T non è nulla) | Convoluzione (una delle due a supporto compatto)<br>Trasformata di Laplace di distribuzioni (supporto in [0,+inf)) | Delta di Dirac (soluzione di xT=0) |
| **Convoluzione** | analisi | prodotto di convoluzione; convoluzione di distribuzioni | `Capitolo 4 (1).pdf` §4.8 | Supporto di una distribuzione (una delle due a supporto compatto)<br>Operazioni sulle distribuzioni (traslazioni) | Equazione del calore (soluzione come convoluzione) | Trasformata di Fourier (trasforma la convoluzione in prodotto) |

## Trasformata di Fourier

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Trasformata di Fourier** | analisi | trasformata di funzioni sommabili; lemma di Riemann-Lebesgue | `Capitolo 5 (3).pdf` §5.2 | Teorema di convergenza dominata (continuità della trasformata)<br>Integrale improprio (funzioni sommabili su R) | Spazio di Schwartz (S è stabile per F)<br>Formula di inversione di Fourier (antitrasformata) | Distribuzione normale (trasformata della gaussiana)<br>Convoluzione (trasforma la convoluzione in prodotto)<br>Trasformata di Laplace (legame tramite la formula di Riemann-Fourier) |
| **Spazio di Schwartz** | analisi | funzioni rapidamente decrescenti; S(R) | `Capitolo 5 (3).pdf` §5.3 | Funzioni test (D contenuto in S)<br>Trasformata di Fourier (S è stabile per F) | Formula di inversione di Fourier (inversione in S)<br>Distribuzioni temperate (funzionali lineari continui su S) | — |
| **Formula di inversione di Fourier** | analisi | antitrasformata; uguaglianza di Parseval | `Capitolo 5 (3).pdf` §5.3, Teor. 5.14; §5.5, Teor. 5.29 | Spazio di Schwartz (inversione in S)<br>Trasformata di Fourier (antitrasformata) | Trasformata di Fourier di distribuzioni temperate (inversione in S')<br>Antitrasformata di Laplace (formula di Riemann-Fourier) | — |
| **Distribuzioni temperate** | analisi | S'; treno di impulsi temperato | `Capitolo 5 (3).pdf` §5.4 | Spazio di Schwartz (funzionali lineari continui su S)<br>Distribuzione (funzione generalizzata) (sottoclasse di D') | Trasformata di Fourier di distribuzioni temperate (definita per dualità) | — |
| **Trasformata di Fourier di distribuzioni temperate** | analisi | trasformata di delta, di 1, di H, di sign | `Capitolo 5 (3).pdf` §5.5-5.6 | Distribuzioni temperate (definita per dualità)<br>Formula di inversione di Fourier (inversione in S') | Formula di sommazione di Poisson (trasformata del treno di impulsi)<br>Equazione del calore (trasformata in x) | Delta di Dirac (F(delta)=1)<br>Valore principale di 1 su x (F(v.p. 1/t) = -i pi sign) |
| **Formula di sommazione di Poisson** | analisi | trasformata del treno di impulsi | `Capitolo 5 (3).pdf` §5.6, Teor. 5.44 | Trasformata di Fourier di distribuzioni temperate (trasformata del treno di impulsi) | — | Delta di Dirac (treno di impulsi) |
| **Equazione del calore** | analisi | heat equation; nucleo del calore | `Capitolo 5 (3).pdf` §5.7 | Trasformata di Fourier di distribuzioni temperate (trasformata in x)<br>Convoluzione (soluzione come convoluzione) | — | Distribuzione normale (nucleo gaussiano)<br>Problema di Cauchy (EDO nella variabile t) |

## Trasformata di Laplace

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Trasformata di Laplace** | analisi | ascissa di convergenza; valore iniziale e finale | `Capitolo 6 (1).pdf` §6.2 | Integrale improprio (integrale su [0,+inf)) | Antitrasformata di Laplace (iniettività)<br>Trasformata di Laplace di distribuzioni (estensione alle distribuzioni) | Trasformata di Fourier (legame tramite la formula di Riemann-Fourier) |
| **Antitrasformata di Laplace** | analisi | formula di Riemann-Fourier; formula di Heaviside | `Capitolo 6 (1).pdf` §6.3 | Trasformata di Laplace (iniettività)<br>Teorema dei residui (antitrasformata di funzioni razionali)<br>Formula di inversione di Fourier (formula di Riemann-Fourier) | — | Integrazione delle funzioni razionali (fratti semplici) |
| **Trasformata di Laplace di distribuzioni** | analisi | L-trasformata di distribuzioni | `Capitolo 6 (1).pdf` §6.4 | Trasformata di Laplace (estensione alle distribuzioni)<br>Supporto di una distribuzione (supporto in [0,+inf)) | — | Delta di Dirac (L(delta)=1) |

## Teoria della misura

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Sigma-algebra** | analisi | algebra di insiemi; spazio misurabile; sigma-algebra generata | `2023Lezione01`, `2023Lezione02` | Operazioni sugli insiemi (chiusura per complementare e unioni) | Sigma-algebra di Borel (generata dagli aperti)<br>Spazio di misura (dominio della misura)<br>Funzione misurabile (controimmagini misurabili) | Filtrazione (famiglia crescente di sigma-algebre) |
| **Sigma-algebra di Borel** | analisi | boreliani; B(R) | `2023Lezione02` | Sigma-algebra (generata dagli aperti) | Misura di Lebesgue (definita sui boreliani)<br>Funzione misurabile (funzioni boreliane)<br>Funzione di ripartizione (le semirette generano B(R)) | — |
| **Spazio di misura** | analisi | misura; sigma-additività; misura finita; sigma-finita; misura di Dirac; misura discreta | `2023Lezione02` | Sigma-algebra (dominio della misura) | Continuità della misura (conseguenza della sigma-additività)<br>Misura di Lebesgue (estensione da un'algebra)<br>Integrale di Lebesgue (integrale rispetto a mu)<br>Misura immagine (trasporto della misura)<br>Spazio di probabilità (misura finita di massa 1) | Delta di Dirac (misura di Dirac)<br>Delta di Dirac (misura di Dirac della lezione 2) |
| **Continuità della misura** | analisi | continuità dal basso; continuità dall'alto; liminf e limsup di insiemi | `2023Lezione03` | Spazio di misura (conseguenza della sigma-additività) | Lemma di Borel-Cantelli (limsup di insiemi)<br>Teorema di convergenza monotona (usata nella dimostrazione)<br>Funzione di ripartizione (continuità a destra e limiti) | — |
| **Lemma di Borel-Cantelli** | probabilita | Borel-Cantelli; legge 0-1 | `2023Lezione03`, `2023Lezione06` | Continuità della misura (limsup di insiemi)<br>Indipendenza di eventi (seconda parte) | — | — |
| **Misura di Lebesgue** | analisi | teorema di prolungamento; misura di Borel-Lebesgue; completamento; insieme di Cantor | `2023Lezione03`, `2023Lezione04` | Spazio di misura (estensione da un'algebra)<br>Sigma-algebra di Borel (definita sui boreliani) | Variabile aleatoria assolutamente continua (P_X << m) | Integrale di Lebesgue (integrale su R)<br>Distribuzione uniforme continua (probabilità proporzionale alla lunghezza) |
| **Funzione misurabile** | analisi | funzione boreliana; sigma(f); quasi ovunque; convergenza q.o. | `2023Lezione07` | Sigma-algebra (controimmagini misurabili)<br>Sigma-algebra di Borel (funzioni boreliane) | Funzione semplice (misurabile con immagine finita)<br>Misura immagine (tramite una funzione misurabile)<br>Variabile aleatoria (funzione misurabile su Omega) | — |
| **Funzione semplice** | analisi | funzione indicatrice; approssimazione con funzioni semplici | `2023Lezione07` | Funzione misurabile (misurabile con immagine finita) | Integrale di Lebesgue (prima definizione e approssimazione) | — |
| **Integrale di Lebesgue** | analisi | integrale rispetto a una misura; Riemann vs Lebesgue | `2023Lezione10`, `2023Lezione11`, `2023Lezione12` | Funzione semplice (prima definizione e approssimazione)<br>Spazio di misura (integrale rispetto a mu) | Teorema di convergenza monotona (passaggio al limite sotto integrale)<br>Spazi Lp (integrabilità di |f|^p)<br>Teorema di Radon-Nikodym (misura definita da una densità)<br>Valore atteso (integrale rispetto a P) | Integrale di Riemann (Riemann-integrabile implica Lebesgue-integrabile)<br>Integrale improprio (assoluta integrabilità)<br>Misura di Lebesgue (integrale su R) |
| **Teorema di convergenza monotona** | analisi | teorema di Beppo Levi; monotone convergence | `2023Lezione10`, `2023Lezione11` | Integrale di Lebesgue (passaggio al limite sotto integrale)<br>Continuità della misura (usata nella dimostrazione) | Lemma di Fatou (applicato agli inf delle code) | — |
| **Lemma di Fatou** | analisi | Fatou's lemma | `2023Lezione11` | Teorema di convergenza monotona (applicato agli inf delle code) | Teorema di convergenza dominata (applicato a g+f_n e g-f_n) | — |
| **Teorema di convergenza dominata** | analisi | teorema di Lebesgue; dominated convergence | `2023Lezione11` | Lemma di Fatou (applicato a g+f_n e g-f_n) | Trasformata di Fourier (continuità della trasformata) | Secondo teorema di convergenza di Doob (l'uniforme integrabilità generalizza la dominazione) |
| **Spazi Lp** | analisi | L^p; L^infinito; estremo superiore essenziale | `2023Lezione11` | Integrale di Lebesgue (integrabilità di |f|^p) | Varianza (X in L^2) | Spazio vettoriale (quoziente normato) |
| **Misura immagine** | analisi | pushforward; integrazione rispetto alla misura immagine | `2023Lezione08`, `2023Lezione12` | Spazio di misura (trasporto della misura)<br>Funzione misurabile (tramite una funzione misurabile) | Teorema di Radon-Nikodym (corollario per le leggi)<br>Variabile aleatoria (la legge è una misura immagine)<br>Valore atteso (E[g(X)] come integrale su R) | — |
| **Teorema di Radon-Nikodym** | analisi | misura assolutamente continua; derivata di Radon-Nikodym | `2023Lezione13` | Integrale di Lebesgue (misura definita da una densità)<br>Misura immagine (corollario per le leggi) | Variabile aleatoria assolutamente continua (densità come derivata RN) | — |

## Probabilità elementare

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Spazio di probabilità** | probabilita | evento; spazio campionario; regola di Laplace; spazio uniforme | `2023Lezione04` | Spazio di misura (misura finita di massa 1) | Probabilità condizionata (nuova misura di probabilità)<br>Variabile aleatoria (dominio della v.a.) | Calcolo combinatorio (conteggi nello spazio uniforme) |
| **Calcolo combinatorio** | probabilita | disposizioni; permutazioni; combinazioni; coefficiente multinomiale | `formularioprobabilita (1).pdf`; `2023Lezione04` | — | Distribuzione binomiale (coefficiente binomiale)<br>Distribuzione ipergeometrica (conteggio delle estrazioni)<br>Distribuzione di Pascal (coefficiente binomiale) | Spazio di probabilità (conteggi nello spazio uniforme) |
| **Probabilità condizionata** | probabilita | formula moltiplicativa; probabilità composte | `2023Lezione05` | Spazio di probabilità (nuova misura di probabilità) | Formula delle probabilità totali (decomposizione su una partizione)<br>Formula di Bayes (inversione)<br>Indipendenza di eventi (P(A|B)=P(A)) | Speranza condizionata (generalizzazione) |
| **Formula delle probabilità totali** | probabilita | partizione dell'evento certo | `2023Lezione05` | Probabilità condizionata (decomposizione su una partizione) | Formula di Bayes (denominatore) | — |
| **Formula di Bayes** | probabilita | inversione del condizionamento | `2023Lezione05` | Formula delle probabilità totali (denominatore)<br>Probabilità condizionata (inversione) | — | — |
| **Indipendenza di eventi** | probabilita | eventi indipendenti; sigma-algebre indipendenti; indipendenza condizionata; affidabilità | `2023Lezione06` | Probabilità condizionata (P(A|B)=P(A)) | Lemma di Borel-Cantelli (seconda parte)<br>Distribuzione binomiale (prove indipendenti)<br>Distribuzione geometrica (schema di Bernoulli infinito) | — |

## Variabili aleatorie e leggi notevoli

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Variabile aleatoria** | probabilita | legge; distribuzione di X; v.a. equidistribuite | `2023Lezione08` | Funzione misurabile (funzione misurabile su Omega)<br>Misura immagine (la legge è una misura immagine)<br>Spazio di probabilità (dominio della v.a.) | Funzione di ripartizione (F(x)=P(X<=x))<br>Variabile aleatoria discreta (legge discreta)<br>Valore atteso (media di una v.a.)<br>Variabile aleatoria assolutamente continua (legge assolutamente continua) | — |
| **Funzione di ripartizione** | probabilita | funzione di distribuzione cumulata; funzione di sopravvivenza | `2023Lezione08`, `2023Lezione10` | Variabile aleatoria (F(x)=P(X<=x))<br>Continuità della misura (continuità a destra e limiti)<br>Sigma-algebra di Borel (le semirette generano B(R)) | Variabile aleatoria discreta (costante a tratti) | Funzioni monotone (non decrescente)<br>Punti di discontinuità (salti = P(X=x)) |
| **Variabile aleatoria discreta** | probabilita | densità discreta | `2023Lezione08` | Variabile aleatoria (legge discreta)<br>Funzione di ripartizione (costante a tratti) | Distribuzione binomiale (numero di successi)<br>Distribuzione ipergeometrica (numero di palline bianche)<br>Distribuzione geometrica (istante del primo successo) | — |
| **Distribuzione binomiale** | probabilita | Bernoulli; schema di Bernoulli; B(n,p) | `2023Lezione08`, `2023Lezione09`, `2023Lezione12` | Variabile aleatoria discreta (numero di successi)<br>Indipendenza di eventi (prove indipendenti)<br>Calcolo combinatorio (coefficiente binomiale) | Distribuzione di Poisson (limite con np=lambda) | Distribuzione ipergeometrica (approssimazione per n << N) |
| **Distribuzione ipergeometrica** | probabilita | estrazioni senza reimmissione | `2023Lezione09`, `2023Lezione12` | Variabile aleatoria discreta (numero di palline bianche)<br>Calcolo combinatorio (conteggio delle estrazioni) | — | Distribuzione binomiale (approssimazione per n << N) |
| **Distribuzione di Poisson** | probabilita | eventi rari; P(lambda) | `2023Lezione09`, `2023Lezione12` | Distribuzione binomiale (limite con np=lambda) | — | Processo di Poisson (conteggi poissoniani)<br>Limiti notevoli ((1-lambda/n)^n -> e^{-lambda}) |
| **Distribuzione geometrica** | probabilita | istante del primo successo; G(p) | `2023Lezione09`, `2023Lezione10`, `2023Lezione13` | Variabile aleatoria discreta (istante del primo successo)<br>Indipendenza di eventi (schema di Bernoulli infinito) | Distribuzione di Pascal (caso r=1) | Proprietà di assenza di memoria (mancanza di memoria discreta)<br>Distribuzione esponenziale (analogo discreto) |
| **Distribuzione di Pascal** | probabilita | binomiale negativa; r-esimo successo | `2023Lezione10`, `2023Lezione13` | Distribuzione geometrica (caso r=1)<br>Calcolo combinatorio (coefficiente binomiale) | — | — |
| **Valore atteso** | probabilita | media; speranza; E[g(X)] | `2023Lezione12`, `2023Lezione13` | Integrale di Lebesgue (integrale rispetto a P)<br>Misura immagine (E[g(X)] come integrale su R)<br>Variabile aleatoria (media di una v.a.) | Varianza (momento centrato di ordine 2) | Media e deviazione standard delle misure (media campionaria delle misure) |
| **Varianza** | probabilita | momenti; deviazione standard; standardizzazione | `2023Lezione12`, `2023Lezione13` | Valore atteso (momento centrato di ordine 2)<br>Spazi Lp (X in L^2) | Distribuzione normale (standardizzazione) | Media e deviazione standard delle misure (deviazione standard delle misure) |
| **Variabile aleatoria assolutamente continua** | probabilita | densità di probabilità; v.a. continua | `2023Lezione13` | Teorema di Radon-Nikodym (densità come derivata RN)<br>Misura di Lebesgue (P_X << m)<br>Variabile aleatoria (legge assolutamente continua) | Distribuzione normale (densità gaussiana)<br>Distribuzione esponenziale (densità esponenziale)<br>Distribuzione uniforme continua (densità costante) | Teorema fondamentale del calcolo integrale (F'=f) |
| **Distribuzione normale** | probabilita | gaussiana; N(mu,sigma^2); Phi | `2023Lezione13`, `2023Lezione14` | Variabile aleatoria assolutamente continua (densità gaussiana)<br>Varianza (standardizzazione) | — | Distribuzione normale degli errori (applicazione agli errori di misura)<br>Trasformata di Fourier (trasformata della gaussiana)<br>Equazione del calore (nucleo gaussiano) |
| **Proprietà di assenza di memoria** | probabilita | (esistente) | `2023Lezione10`, `2023Lezione14` | — | — | Distribuzione geometrica (mancanza di memoria discreta)<br>Distribuzione esponenziale (mancanza di memoria) |
| **Distribuzione esponenziale** | probabilita | Exp(lambda); tempi di vita | `2023Lezione14` | Variabile aleatoria assolutamente continua (densità esponenziale) | — | Proprietà di assenza di memoria (mancanza di memoria)<br>Distribuzione geometrica (analogo discreto)<br>Corsa di esponenziali (minimo di esponenziali) |
| **Distribuzione uniforme continua** | probabilita | U([a,b]); numeri casuali | `2023Lezione14` | Variabile aleatoria assolutamente continua (densità costante) | — | Misura di Lebesgue (probabilità proporzionale alla lunghezza) |

## Concetti esterni (da collegare)

- **Teorema di Green e integrali di linea di forme differenziali**: corso Analisi 2. Strumento della dimostrazione di Teorema di Cauchy-Goursat; la (2.16) scrive Integrale di linea complesso come integrale di linea reale.
- **Differenziabilità in più variabili e teorema di Schwarz**: corso Analisi 2. Ipotesi di Condizioni di Cauchy-Riemann e dimostrazione di Funzione armonica.
- **Convergenza uniforme di successioni e serie di funzioni**: corso Analisi 2. Usata per la convergenza in D (Funzioni test) e per Serie di potenze.
- **Serie di Fourier**: corso Analisi 2. Motivazione della Trasformata di Fourier (§5.1).
- **Teorema di Fubini e derivazione sotto il segno di integrale**: appendice §5.10 del `Capitolo 5 (3).pdf`; corso Analisi 2 / teoria della misura. Usati in Formula di inversione di Fourier.
- **Legge dei grandi numeri, teorema del limite centrale, vettori aleatori e gaussiani, uniforme integrabilità**: NON trattati in questo corso (le lezioni si fermano alla legge uniforme, lezione 14). Restano "(da collegare)" nelle note di Processi stocastici e di Fisica 1; vanno cercati nel corso Probabilità e statistica.
- **Equazione del calore con altri metodi (separazione di variabili)**: corsi Equazioni della fisica matematica / Equazioni alle derivate parziali; stesso nodo Equazione del calore, da estendere.

## Dubbi

- Le dispense di metodi matematici sono una bozza: §1.3.5 "Multifunzioni? Radici?" è vuota, §3.5.1 finisce con "Da completare", alcune figure hanno didascalia "?????", nella dimostrazione del Teorema 2.6 ci sono refusi negli indici e la formula dell'inversa delle trasformazioni di Möbius (Es. 1.23) ha un segno sospetto. Le note usano gli enunciati e segnalano i punti dubbi con "(da verificare sul PDF)".
- Il calcolo di integrali reali con i residui non ha teoria nelle dispense (solo esercizi nelle esercitazioni 6 e 8: `8 - Teorema dei Residui.pdf`, `11 - Trasformata di Fourier di Funzioni (2).pdf`): non è un nodo, è citato come uso di Teorema dei residui.
- La probabilità è solo manoscritta. Le formule sono state lette dalle immagini delle pagine; punti incerti: indice del binomiale nella Binomiale negativa (lezione 10 p. 4, le due scritture danno lo stesso valore), cifra decimale dell'Es. 4a della lezione 4.
- Nomi: "Distribuzione (funzione generalizzata)" evita l'ambiguità con le leggi di probabilità; "Funzione armonica" (singolare) perché "funzioni armoniche" è già alias di Problema di Dirichlet e moto browniano; "Valore principale di 1 su x" evita la barra.
- "Distribuzione normale" è un nodo nuovo, separato da "Distribuzione normale degli errori" (Fisica 1), che ha alias "gaussiana": lì la gaussiana è il limite degli istogrammi di misure, qui è una legge di probabilità con densità, Φ e standardizzazione. Collegate fra loro.
- "Distribuzione esponenziale" compare come alias di Proprietà di assenza di memoria (Processi stocastici), che però la segnava anche come "(da collegare)": ora è un nodo a sé e l'alias andrebbe tolto dal registro.
- Fusioni: Bernoulli è alias di Distribuzione binomiale; binomiale negativa di Distribuzione di Pascal; quasi ovunque e convergenza q.o. di Funzione misurabile; affidabilità di sistemi e indipendenza condizionata di Indipendenza di eventi; misura di Dirac e misura discreta di Spazio di misura; teorema di prolungamento e completamento di Misura di Lebesgue; Morera di Teorema di Cauchy-Goursat; proprietà della media e principio del massimo di Formula integrale di Cauchy; funzione di sopravvivenza di Funzione di ripartizione.
- "Serie di potenze" e "Serie di Taylor" hanno nomi generici perché Analisi 2 tratta lo stesso concetto nel caso reale: l'agente di Analisi 2 dovrebbe aggiungere la sua sezione invece di creare varianti.
- La trasformata di Laplace nelle fonti non è applicata alle equazioni differenziali: nessun nodo su questo.
