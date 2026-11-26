---
tipo: meta
tags: [meta, mappa]
corso: Analisi 2
livello: triennale
cartella: triennale/ANNO 2/analisi 2
---

# Mappa delle competenze: Analisi 2

Mappa concettuale del corso `triennale/ANNO 2/analisi 2` (Analisi Matematica II, lezioni del settembre-dicembre 2022). **51 competenze**: 46 nuove e 5 note esistenti estese, segnate "(esistente)". Ci sono **92 collegamenti interni al corso**, un'unica componente connessa e grado minimo 2. Le note nuove sono tutte in area `analisi`. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. "Porta a" è l'inverso di "Prerequisiti", "Collegati" è simmetrico; "(esterno)" indica una nota di un altro corso.

## Inventario del materiale (2026-11-24)

La cartella contiene 25 PDF (circa 420 pagine) e la sottocartella `Note/` con le vecchie note, che non sono state usate.

- **Fonti primarie: lezioni manoscritte su tablet, 23 PDF, 367 pagine.** Vanno da `AII 01 2022 funzioni di n variabili.pdf` (28/09/2022) a `AII 24 2022 esercizi e varie.pdf` (21/12/2022). Il file della lezione 3 si chiama `AII 03 2033 differenziabilita.pdf`.
  - Il testo estratto con `pdftotext` è un OCR inutilizzabile per le formule: tutte le pagine sono state lette come immagini (pymupdf, fogli da 6 pagine) e trascritte.
  - Le pagine con enunciati (L04, L06, L12, L22, L24) sono state ricontrollate sull'immagine.
  - Le date sono quelle scritte sulle pagine. L10 non ha data; L11 riporta "7/11/2021" anche se il file è del 2022.
- **Manca la lezione 18**: si passa da `AII 17 2022 serie numeriche.pdf` (28/11) a `AII 19 serie potenze.pdf` (05/12), che comincia con "Riprendiamo il criterio della convergenza assoluta".
- **`AII 24 2022 esercizi e varie.pdf`** è mista.
  - pp. 1-5: quiz d'esame stampati con soluzione, non usati come fonte.
  - pp. 6-15: teoria sulla convergenza uniforme, la completezza di $C^0$ e l'esistenza e unicità locale, usata.
- **Scartati per la regola "niente esami"**: `AII 25 2022 esercizi esame.pdf` e `AII 26 2022 esercizi esame.pdf` (temi d'esame con soluzioni), non letti oltre la prima pagina.
- Gli esempi delle note vengono da esercizi svolti a lezione. I risultati che il docente non scrive e che ho calcolato io sono dichiarati come tali nella nota.

## Nodi con grado più alto (collegamenti esterni inclusi)

- Derivate parziali: 9
- Differenziabilità in più variabili: 9
- Limiti e continuità in più variabili: 8
- Integrale doppio: 8
- Serie di Fourier: 8
- Regola della catena in più variabili: 7
- Campo conservativo: 7
- Punti critici in più variabili: 7
- Gradiente: 7
- Teorema della divergenza: 7

## Funzioni di più variabili, limiti e continuità

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzioni di più variabili** | analisi | functions of several variables; funzioni di n variabili; dominio naturale; dominio massimale | AII 01 pp. 1-9 | Prodotto scalare (esterno) | Limiti e continuità in più variabili<br>Superficie parametrica | Coni, cilindri e superfici di rotazione (esterno) |
| **Limiti e continuità in più variabili** | analisi | limits of functions of several variables; limite in più variabili; continuità in più variabili; intorno sferico | AII 02 pp. 1-10 | Funzioni di più variabili<br>Limite di funzione (esterno)<br>Funzione continua (esterno) | Derivate parziali<br>Derivata direzionale<br>Differenziabilità in più variabili<br>Teorema di Weierstrass | Coordinate polari e cilindriche |

## Calcolo differenziale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Derivate parziali** | analisi | partial derivatives; derivata parziale; derivate parziali seconde; derivate di ordine superiore | AII 02 pp. 10-11; AII 03 pp. 1-3; AII 04 pp. 11-13 | Limiti e continuità in più variabili<br>Derivata (esterno) | Differenziabilità in più variabili<br>Teorema di Schwarz<br>Matrice jacobiana<br>Rotore<br>Superficie parametrica | Derivata direzionale<br>Propagazione degli errori (esterno) |
| **Derivata direzionale** | analisi | directional derivative; derivate direzionali; pendenza lungo una direzione; ∂f/∂v | AII 03 pp. 4-6 | Limiti e continuità in più variabili | Gradiente | Derivate parziali |
| **Differenziabilità in più variabili** | analisi | differentiability; funzione differenziabile; piano tangente; tangent plane | AII 03 pp. 6-13; AII 04 pp. 1-3 | Limiti e continuità in più variabili<br>Derivate parziali<br>Simboli di Landau (esterno) | Gradiente<br>Regola della catena in più variabili<br>Punti critici in più variabili<br>Formula di Taylor in più variabili | Derivata (esterno)<br>Condizioni di Cauchy-Riemann (esterno) |
| **Gradiente** | analisi | gradient; nabla f; ∇f; direzione di massima crescita | AII 04 pp. 1-10 | Derivata direzionale<br>Differenziabilità in più variabili<br>Prodotto scalare (esterno) | Punti critici in più variabili<br>Campo conservativo | Forza conservativa (esterno)<br>Orientazione di una superficie |
| **Teorema di Schwarz** | analisi | Schwarz's theorem; Clairaut's theorem; simmetria delle derivate seconde; derivate miste | AII 04 pp. 12-16 | Derivate parziali | Formula di Taylor in più variabili<br>Campo irrotazionale | — |
| **Formula di Taylor in più variabili** | analisi | multivariable Taylor formula; sviluppo di Taylor al secondo ordine; matrice hessiana; Hessian matrix | AII 05 pp. 1-4, 10-12 | Differenziabilità in più variabili<br>Teorema di Schwarz<br>Sviluppi di Maclaurin (esterno)<br>Forma quadratica (esterno) | Classificazione dei punti critici | — |
| **Punti critici in più variabili** | analisi | critical points of functions of several variables; punti stazionari in più variabili; punto di sella; saddle point | AII 05 pp. 5-8 | Differenziabilità in più variabili<br>Gradiente<br>Teorema di Fermat (esterno) | Classificazione dei punti critici | Punti di estremo locale (esterno)<br>Teorema di Weierstrass<br>Serie di Fourier |
| **Classificazione dei punti critici** | analisi | second derivative test; test dell'hessiana; criterio dell'hessiana; criterio di Sylvester | AII 05 pp. 8-9; AII 06 pp. 1-8 | Formula di Taylor in più variabili<br>Punti critici in più variabili<br>Matrice simmetrica definita positiva (esterno)<br>Autovalori e autovettori (esterno) | — | — |
| **Teorema di Weierstrass** (esistente) | analisi | extreme value theorem; Weierstrass theorem; massimo e minimo assoluto | AII 06 p. 9 | Limiti e continuità in più variabili | — | Punti critici in più variabili |
| **Curve parametriche** | analisi | parametric curves; curva in R^n; lunghezza di una curva; arc length | AII 06 pp. 9-13; AII 11 pp. 1-4 | Derivata (esterno) | Regola della catena in più variabili<br>Integrale di linea | Velocità e accelerazione (esterno) |
| **Regola della catena in più variabili** | analisi | multivariable chain rule; derivata della funzione composta in più variabili; derivata lungo una curva; derivata di f lungo una curva | AII 06 pp. 13-16; AII 07 pp. 1-8 | Differenziabilità in più variabili<br>Curve parametriche<br>Regole di derivazione (esterno)<br>Matrice jacobiana<br>Prodotto di matrici (esterno) | Campo conservativo | Coordinate polari e cilindriche |
| **Matrice jacobiana** | analisi | Jacobian matrix; jacobiana; J_g; determinante jacobiano | AII 07 pp. 6-8; AII 08 pp. 12-15 | Derivate parziali | Regola della catena in più variabili<br>Cambiamento di variabili negli integrali multipli | Teorema della divergenza<br>Integrale di superficie |
| **Coordinate polari e cilindriche** (esistente) | fisica | polar coordinates; cylindrical coordinates; velocità radiale; velocità trasversa | AII 02 pp. 7-8; AII 07 pp. 2-5; AII 08 pp. 9-13 | — | — | Limiti e continuità in più variabili<br>Regola della catena in più variabili<br>Cambiamento di variabili negli integrali multipli |

## Integrali multipli

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Integrale doppio** | analisi | double integral; integrali doppi; integrale in due variabili; media integrale in due variabili | AII 07 pp. 8-14; AII 08 pp. 1-11 | Integrale di Riemann (esterno) | Teorema di Fubini<br>Integrale triplo<br>Cambiamento di variabili negli integrali multipli<br>Integrale di superficie<br>Teorema di Green | Centro di massa (esterno)<br>Momento d'inerzia (esterno) |
| **Teorema di Fubini** | analisi | Fubini's theorem; integrali iterati; domini normali; dominio semplice per fili verticali | AII 07 pp. 12-14; AII 08 pp. 1-7; AII 09 pp. 3-7 | Integrale doppio<br>Teorema fondamentale del calcolo integrale (esterno) | — | Integrale triplo<br>Integrazione per strati |
| **Integrale triplo** | analisi | triple integral; integrali tripli; integrale di volume; massa di un solido | AII 09 pp. 1-14 | Integrale doppio | Integrazione per strati<br>Teorema della divergenza | Teorema di Fubini |
| **Integrazione per strati** | analisi | integration by slices; integrazione per sezioni; principio di Cavalieri; Cavalieri's principle | AII 09 pp. 8-11 | Integrale triplo | — | Teorema di Fubini |
| **Cambiamento di variabili negli integrali multipli** | analisi | change of variables in multiple integrals; cambio di variabili negli integrali doppi; coordinate polari negli integrali doppi; coordinate ellittiche | AII 08 pp. 9-15; AII 10 pp. 1-3 | Matrice jacobiana<br>Determinante (esterno)<br>Integrale doppio<br>Integrazione per sostituzione (esterno) | Coordinate sferiche | Coordinate polari e cilindriche |
| **Coordinate sferiche** | analisi | spherical coordinates; coordinate sferiche in R^3; r^2 sin phi; elemento di volume in coordinate sferiche | AII 10 pp. 3-5; AII 14 pp. 6-8 | Cambiamento di variabili negli integrali multipli | — | Superficie parametrica<br>Sfera (esterno) |

## Integrali di linea e campi vettoriali

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Integrale di linea** | analisi | line integral; integrale curvilineo; integrale di linea di una funzione; integrale di linea di un campo vettoriale | AII 10 pp. 6-11; AII 11 pp. 1-4 | Curve parametriche | Campo conservativo<br>Teorema di Green<br>Teorema di Stokes | Lavoro di una forza (esterno)<br>Integrale di linea complesso (esterno) |
| **Campo conservativo** | analisi | conservative vector field; campo vettoriale conservativo; potenziale di un campo; campo gradiente | AII 10 pp. 11-12; AII 11 pp. 5-9 | Gradiente<br>Regola della catena in più variabili<br>Integrale di linea | Campo irrotazionale<br>Calcolo del potenziale<br>Campo centrale | Forza conservativa (esterno) |
| **Campo irrotazionale** | analisi | irrotational vector field; campo irrotazionale; condizione necessaria di conservatività; condizione sufficiente di conservatività | AII 10 pp. 12-14; AII 11 pp. 13-18 | Teorema di Schwarz<br>Campo conservativo<br>Insieme semplicemente connesso | Calcolo del potenziale | Rotore |
| **Insieme semplicemente connesso** | analisi | simply connected set; aperto semplicemente connesso; semplice connessione; s.c. | AII 11 pp. 10-14 | — | Campo irrotazionale | Teorema di Cauchy-Goursat (esterno)<br>Campo centrale |
| **Calcolo del potenziale** | analisi | finding a potential; costruzione del potenziale; ricostruire il potenziale; metodo delle integrazioni successive | AII 12 pp. 1-8 | Campo conservativo<br>Primitive delle funzioni elementari (esterno)<br>Campo irrotazionale | — | — |
| **Campo centrale** | analisi | central field; campi centrali; campo radiale; radial field | AII 12 pp. 8-11 | Campo conservativo | — | Forza centrale (esterno)<br>Campo elettrostatico (esterno)<br>Insieme semplicemente connesso |
| **Teorema di Green** | analisi | Green's theorem; formula di Green; Stokes nel piano; circuitazione lungo la frontiera | AII 12 pp. 11-14; AII 13 pp. 1-10 | Integrale doppio<br>Integrale di linea | Teorema di Stokes<br>Teorema della divergenza | Rotore<br>Teorema di Cauchy-Goursat (esterno) |
| **Rotore** | analisi | curl; rot F; ∇×F; rotore di un campo piano | AII 12 pp. 12-14; AII 15 p. 14 | Derivate parziali | Teorema di Stokes | Teorema di Green<br>Campo irrotazionale<br>Teorema della divergenza |

## Superfici, flussi, Stokes e Gauss

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Superficie parametrica** | analisi | parametric surface; superficie regolare; vettori fondamentali; P_u e P_v | AII 13 pp. 11-18; AII 14 pp. 1-10 | Funzioni di più variabili<br>Derivate parziali<br>Prodotto vettoriale (esterno) | Orientazione di una superficie<br>Integrale di superficie | Coordinate sferiche |
| **Orientazione di una superficie** | analisi | surface orientation; superficie orientata; versore normale; unit normal vector | AII 14 pp. 2-12 | Superficie parametrica | Flusso di un campo vettoriale | Gradiente |
| **Integrale di superficie** | analisi | surface integral; integrali su superfici; elemento d'area; dσ | AII 14 pp. 13-15; AII 15 pp. 1-5 | Integrale doppio<br>Superficie parametrica | Flusso di un campo vettoriale | Matrice jacobiana<br>Centro di massa (esterno) |
| **Flusso di un campo vettoriale** | analisi | flux of a vector field; flusso attraverso una superficie; flusso uscente; F · N dσ | AII 15 pp. 5-13 | Orientazione di una superficie<br>Integrale di superficie | Teorema di Stokes<br>Teorema della divergenza | Equazione di continuità (esterno) |
| **Teorema di Stokes** | analisi | Stokes' theorem; teorema del rotore; flusso del rotore; Kelvin-Stokes theorem | AII 15 pp. 14-16; AII 16 pp. 1-9 | Integrale di linea<br>Teorema di Green<br>Rotore<br>Flusso di un campo vettoriale | — | Teorema della divergenza |
| **Teorema della divergenza** | analisi | divergence theorem; teorema di Gauss; teorema di Gauss-Green; divergenza | AII 16 pp. 10-17 | Integrale triplo<br>Teorema di Green<br>Flusso di un campo vettoriale | — | Matrice jacobiana<br>Rotore<br>Teorema di Stokes<br>Teorema di Gauss del flusso (esterno) |

## Serie numeriche

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Serie numerica** | analisi | numerical series; serie; somma parziale; partial sum | AII 17 pp. 1-10 | Limite di successione (esterno) | Serie geometrica<br>Criterio del confronto integrale<br>Criterio del confronto per serie<br>Convergenza assoluta di una serie<br>Serie di Fourier | — |
| **Serie geometrica** | analisi | geometric series; serie geometrica di ragione alpha; somma della serie geometrica; numeri periodici come serie | AII 17 pp. 6-12 | Serie numerica | Serie di potenze | — |
| **Serie armonica generalizzata** | analisi | generalized harmonic series; p-series; serie armonica; harmonic series | AII 17 pp. 12-17 | Criterio del confronto integrale | Criterio del confronto per serie | Teorema di Riemann sul riordinamento<br>Identità di Parseval |
| **Criterio del confronto integrale** | analisi | integral test; confronto serie-integrale; criterio dell'integrale; integral comparison test | AII 17 pp. 13-16 | Serie numerica<br>Integrale improprio (esterno) | Serie armonica generalizzata | — |
| **Criterio del confronto per serie** | analisi | comparison test for series; confronto tra serie; confronto asintotico tra serie; limit comparison test for series | AII 17 pp. 18-19 | Serie numerica<br>Serie armonica generalizzata | Convergenza assoluta di una serie | Criteri di convergenza per integrali impropri (esterno) |
| **Convergenza assoluta di una serie** | analisi | absolute convergence of series; serie assolutamente convergente; criterio della convergenza assoluta; serie dei moduli | AII 19 pp. 1-6 | Serie numerica<br>Criterio del confronto per serie | Teorema di Riemann sul riordinamento<br>Serie di potenze | Convergenza assoluta degli integrali impropri (esterno) |
| **Teorema di Riemann sul riordinamento** | analisi | Riemann rearrangement theorem; riordinamento di una serie; serie semplicemente convergente; teorema di Riemann-Dini | AII 19 pp. 7-11 | Convergenza assoluta di una serie | — | Serie armonica generalizzata |

## Serie di potenze

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Serie di potenze** (esistente) | analisi | power series; raggio di convergenza; radius of convergence; disco di convergenza | AII 19 pp. 12-21; AII 20 pp. 1-19 | Serie geometrica<br>Convergenza assoluta di una serie | Derivazione e integrazione termine a termine | Convergenza uniforme di successioni di funzioni |
| **Derivazione e integrazione termine a termine** | analisi | term-by-term differentiation; term-by-term integration; derivazione per serie; integrazione per serie | AII 20 pp. 19-22; AII 21 pp. 1-4 | Serie di potenze | Serie di Taylor | Teorema fondamentale del calcolo integrale (esterno) |
| **Serie di Taylor** (esistente) | analisi | Taylor series; sviluppo in serie di Taylor; serie di Maclaurin; Maclaurin series | AII 21 pp. 1-23 | Derivazione e integrazione termine a termine | — | Formula di Taylor con resto di Lagrange (esterno)<br>Teorema di esistenza e unicità locale<br>Funzioni pari, dispari e periodiche |

## Serie di Fourier e convergenza uniforme

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzioni pari, dispari e periodiche** (esistente) | analisi | even function; odd function; periodic function; periodo minimo | AII 22 pp. 1-3 | — | Serie di Fourier | Serie di Taylor |
| **Serie di Fourier** | analisi | Fourier series; polinomio trigonometrico; trigonometric polynomial; relazioni di ortogonalità | AII 22 pp. 1-10; AII 23 pp. 8-18 | Funzioni pari, dispari e periodiche<br>Serie numerica<br>Integrazione per parti (esterno) | Teorema di convergenza delle serie di Fourier<br>Identità di Parseval | Proiezione ortogonale di un vettore (esterno)<br>Trasformata di Fourier (esterno)<br>Punti critici in più variabili |
| **Teorema di convergenza delle serie di Fourier** | analisi | Fourier convergence theorem; convergenza in media quadratica; convergenza in norma L2; convergenza puntuale della serie di Fourier | AII 22 pp. 11-15; AII 23 pp. 2-3 | Serie di Fourier<br>Punti di discontinuità (esterno) | — | Convergenza uniforme di successioni di funzioni |
| **Identità di Parseval** | analisi | Parseval's identity for Fourier series; identità di Parseval per le serie di Fourier; energia media di un segnale periodico | AII 23 pp. 7, 13-14 | Serie di Fourier | — | Serie armonica generalizzata<br>Formula di inversione di Fourier (esterno) |
| **Convergenza uniforme di successioni di funzioni** | analisi | uniform convergence of sequences of functions; convergenza puntuale; pointwise convergence; metrica uniforme | AII 23 pp. 3-7; AII 24 pp. 6-8 | Funzione continua (esterno) | Teorema di esistenza e unicità locale | Serie di potenze<br>Teorema di convergenza delle serie di Fourier<br>Funzioni test (esterno)<br>Convergenza del polinomio interpolante (esterno) |
| **Teorema di esistenza e unicità locale** | analisi | local existence and uniqueness theorem; teorema di Cauchy-Lipschitz; Cauchy-Lipschitz theorem; teorema di Picard | AII 24 pp. 9-15 | Convergenza uniforme di successioni di funzioni<br>Problema di Cauchy (esterno)<br>Teorema fondamentale del calcolo integrale (esterno) | — | Serie di Taylor |

## Concetti esterni (da collegare)

**Collegamenti creati verso note di altri corsi, con le conversioni dei "(da collegare)"**

- Fisica 1:
  - Lavoro di una forza → Integrale di linea (convertito);
  - Forza conservativa ↔ Gradiente e Campo conservativo;
  - Propagazione degli errori ↔ Derivate parziali;
  - Teorema di Gauss del flusso ↔ Teorema della divergenza;
  - Coordinate polari e cilindriche (estesa);
  - collegamenti dalle note nuove verso Centro di massa, Momento d'inerzia, Forza centrale, Campo elettrostatico, Equazione di continuità, Velocità e accelerazione.
- Metodi matematici e probabilità (note create in parallelo):
  - conversioni: Condizioni di Cauchy-Riemann → Differenziabilità in più variabili; Integrale di linea complesso → Integrale di linea; Teorema di Cauchy-Goursat → Teorema di Green; Funzioni test → Convergenza uniforme di successioni di funzioni; Serie di potenze → Convergenza uniforme di successioni di funzioni; Trasformata di Fourier → Serie di Fourier; Formula di sommazione di Poisson → Serie di Fourier; Formula di inversione di Fourier → Teorema di Fubini;
  - estese con una sezione Analisi 2: Serie di potenze, Serie di Taylor.
- Analisi 1:
  - Teorema di Weierstrass e Funzioni pari, dispari e periodiche (estese);
  - collegamenti da Derivata, Limite di funzione, Funzione continua, Simboli di Landau, Teorema di Fermat, Punti di estremo locale, Sviluppi di Maclaurin, Formula di Taylor con resto di Lagrange, Regole di derivazione, Integrale di Riemann, Teorema fondamentale del calcolo integrale, Integrazione per sostituzione, Integrazione per parti, Primitive delle funzioni elementari, Integrale improprio, Criteri di convergenza per integrali impropri, Convergenza assoluta degli integrali impropri, Limite di successione, Punti di discontinuità, Problema di Cauchy.
- Algebra lineare: Prodotto scalare, Prodotto vettoriale, Prodotto di matrici, Determinante, Forma quadratica, Matrice simmetrica definita positiva, Autovalori e autovettori, Proiezione ortogonale di un vettore, Sfera, Coni, cilindri e superfici di rotazione, Convergenza del polinomio interpolante.

**Già convertito da un altro agente**: "Teoria della misura e integrale di Lebesgue" in Integrale di Riemann ora punta a Integrale di Lebesgue (Metodi matematici e probabilità). Analisi 2 non tratta Lebesgue.

**Lasciati in testo semplice**, nominati nelle note ma non enunciati nel materiale:
- criterio di Leibniz, criteri del rapporto e della radice per serie numeriche (probabilmente nella lezione 18 mancante);
- teorema delle contrazioni.

## Dubbi

- **Lezione 18 assente.** Leibniz e i criteri del rapporto e della radice per serie numeriche sono usati nelle lezioni 19-21 (convergenza agli estremi, stima $|S_N-\frac1e|\le\frac1{N!}$) ma mai enunciati: nessuna nota.
- **Enunciati richiamati ma non presenti**: teorema delle contrazioni (punto fisso) in L24; completezza di $(C^0(I),d)$ enunciata senza dimostrazione; arctan sviluppabile anche in $t=\pm1$ ("si può dimostrare").
- **Sviste del docente** (riportate con avviso o omesse):
  - L06 p. 4: per $-x^2-y^4$ scrive "minimo" e lascia in bianco $\det H_f(0,0)$, omesso;
  - L06 p. 7: $H_f(0,0)=\mathrm{diag}(12,12)$ invece di $\mathrm{diag}(4,4)$, segnalato in Classificazione dei punti critici;
  - L12 pp. 3-4: chiama "sempl. conn." $S^+\cup S^-$. Non è una svista: con la definizione di L11 p. 10 (ogni curva chiusa nell'insieme si contrae a un punto) l'unione dei due semipiani lo è, e la nota riporta la conclusione del docente;
  - L06 p. 16 e L07 p. 1: nella chain rule l'estremo superiore della sommatoria è scritto con una lettera che a mano non si distingue tra $m$ e $n$; nella nota è $n$, coerente con $g:\mathbb R^m\to\mathbb R^n$ e con $k=1,\dots,m$;
  - L12 p. 9: campo della carica con costante $\varepsilon_0q$, riportato com'è con avviso in Campo centrale;
  - L16 p. 13: $\|\gamma(t)\|$ invece di $\|\gamma'(t)\|$, segnalato in Teorema della divergenza;
  - L21 p. 6: stima del resto di $\sin x$ senza $|x|^{N+1}$, segnalato in Serie di Taylor;
  - L17 p. 3: $\dim C=\log_89$ per il frattale, non usato;
  - L20 p. 4: "intervallo aperto" mentre poi elenca i quattro tipi di intervallo, non usato.
- **Risultati non scritti sulla pagina** (calcolati da me e dichiarati, oppure omessi):
  - flusso di $(x,y,0)$ sulla semisfera di raggio 2: $\frac{32}3\pi$, calcolo mio;
  - L08 pp. 4-5 ("volendo si calcola") e L10 p. 3 (cilindro sotto il paraboloide): omessi;
  - L20 p. 11, insieme di convergenza della serie con $n^2+\sqrt n$: omesso.
- **Accorpamenti**:
  - divergenza dentro Teorema della divergenza;
  - criterio di differenziabilità e piano tangente dentro Differenziabilità in più variabili;
  - matrice hessiana dentro Formula di Taylor in più variabili;
  - riparametrizzazione e lunghezza dentro Curve parametriche;
  - integrali di linea dei due tipi in un'unica nota;
  - raggio di convergenza e lemma fondamentale nella sezione Analisi 2 di Serie di potenze, perché "raggio di convergenza" è già un suo alias;
  - coordinate polari e cilindriche nella nota esistente di Fisica 1.
- **Nomi scelti per evitare alias già occupati**:
  - Differenziabilità in più variabili ("differenziabilità" è alias di Derivata);
  - Punti critici in più variabili ("punto critico" è alias di Teorema di Fermat);
  - Regola della catena in più variabili ("regola della catena" è alias di Regole di derivazione);
  - Criterio del confronto per serie ("criterio del confronto" è alias dei criteri per integrali impropri);
  - Convergenza uniforme di successioni di funzioni ("convergenza uniforme" è alias di Convergenza del polinomio interpolante);
  - Teorema della divergenza (con alias "teorema di Gauss"; Fisica 1 usa Teorema di Gauss del flusso).
- **Esercizi senza soluzione sulla pagina**: pallina che rimbalza (L17), pioggia sul parabrezza e grondaia (L15). Sono citati solo come esercizi.
