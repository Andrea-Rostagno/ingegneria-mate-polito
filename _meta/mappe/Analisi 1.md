---
tipo: meta
tags: [meta, mappa]
corso: Analisi 1
livello: triennale
cartella: triennale/ANNO 1/analisi 1
---

# Mappa delle competenze: Analisi 1

Mappa concettuale del corso `triennale/ANNO 1/analisi 1` (Analisi Matematica I, Politecnico di Torino). **88 competenze** (63 nuove nella seconda passata, 25 della prima passata segnate "(esistente)"), **196 collegamenti interni**, un'unica componente connessa, grado minimo 2. Tutte in area `analisi`. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. "Porta a" è l'inverso di "Prerequisiti", "Collegati" è simmetrico; "(esterno)" indica una nota di un altro corso.

## Inventario del materiale (seconda passata, 2026-11-24)

Cartella con circa 212 PDF. Ruolo delle sottocartelle:
- **Fonti primarie (lezioni e dispense)**
  - `Dispense/Dispense Morandotti - AM1 (33955823).pdf`: 352 pp. con testo, l'intero programma (insiemi, reali, complessi, successioni, limiti, continuità, derivate, Taylor, integrali, impropri, EDO). Fonte principale per enunciati e numerazione.
  - `Dispense/Dispense Mazzi/`: `Capitolo Preliminari`, `Capitolo Funzioni`, `0.Limiti-totale` (59 pp.), `calcolo differenziale corretto`, `Taylor-corretto`, `Primitive`, con testo. `complessi`, `1_equazioni differenziali`, `Integrali di Riemann` e `Integrali impropri` sono scansioni (testo quasi assente) e non sono state trascritte: gli stessi argomenti vengono da Morandotti e Lussardi. `Convessit_` è un manoscritto con OCR rumoroso, usato solo per l'ordine degli argomenti.
  - `Dispense/Dispensa Lussardi.pdf` (88 pp., testo): enunciati concisi su integrali impropri ed EDO.
  - `Lezioni 2021-22 (manoscritte)/`: 26 lezioni scansionate (27/09/2021-10/01/2022). Sono state guardate come immagini a campione (prima pagina di ciascuna; tutte le pp. 2-3 del 15/12/2021). **Non sono del corso 15 (Ceragioli-Fiandaca) della `presentazione_corso15_2021-22.pdf`**: la prima pagina riporta l'indirizzo del docente Tentarelli, lo stesso delle prove in itinere `TENTARELLI_Corso_11_...`. Servono a datare gli argomenti e a confermare gli enunciati.
  - `Appunti, riassunti e teoremi/`: appunti di studenti. `Analisi Matematica 1 - TEOREMI.pdf` (4 pp., l'elenco dei teoremi con ipotesi e tesi, con asterisco quelli da dimostrare) è servito da lista di controllo per la granularità, non come fonte di formule.
- **Esercizi (per gli esempi)**: `Esercitazioni 2022-23 (con svolti)/` (testi con testo estraibile, svolti scansionati), `Esercitazioni 2021-22 (manoscritte e svolte)/` (scansioni).
- **Verifiche**: `Esami e prove scritte/` (temi 2014-2025), `Quiz e simulazioni/` (36 simulazioni del test): non usati per il contenuto delle note.
- File della prima passata: `2021.09.27 - Fiandaca_Lezione1.pdf`, `2021.09.28 - Fiandaca_Lezione2.pdf`, `Assiomi dei numeri reali.pdf`, `Esercizi di logica.pdf`, `formulario.pdf`, `presentazione_corso15_2021-22.pdf`, `analisi 1.docx`.

L'estrazione `pdftotext` perde alcuni simboli (≠, apici delle derivate, ℓ): le formule dubbie sono state controllate sull'immagine della pagina (Mazzi Limiti pp. 20, 36, 38; Mazzi Calcolo differenziale pp. 13, 29; Mazzi Funzioni p. 9; Mazzi Taylor p. 5; Morandotti PDF pp. 43, 67-68; p. 1 delle esercitazioni 14, 18, 20, 21 del 2022-23) o segnate "(da verificare sul PDF)".

## Nodi con grado più alto

- Limite di funzione: 16
- Valore assoluto: 11
- Derivata: 11
- Funzione continua: 10
- Quantificatori: 9
- Primitive delle funzioni elementari: 8
- Funzione composta e funzione inversa: 8
- Teorema fondamentale del calcolo integrale: 7
- Simboli di Landau: 7
- Operazioni sugli insiemi: 7

## Logica e insiemi

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Connettivi logici** (esistente) | analisi | proposizione logica; tavola di verità; congiunzione; disgiunzione; negazione | `Lezione2.pdf` pp. 1-2; `Esercizi di logica.pdf` es. 1-3 | — | Implicazione logica<br>Equivalenza logica<br>Quantificatori<br>Negazione dei quantificatori<br>Operazioni sugli insiemi | Assiomi dei numeri reali |
| **Implicazione logica** (esistente) | analisi | condizione necessaria; condizione sufficiente; modus ponens | `Lezione2.pdf` pp. 2-3, 5, 7-8; `Esercizi di logica.pdf` es. 4-5 | Connettivi logici | Equivalenza logica<br>Dimostrazione per contrapposizione e per assurdo | — |
| **Equivalenza logica** (esistente) | analisi | doppia implicazione; tautologia; leggi di De Morgan | `Lezione2.pdf` pp. 4, 6, 8; `Esercizi di logica.pdf` es. 1-3 | Connettivi logici<br>Implicazione logica | Dimostrazione per contrapposizione e per assurdo | — |
| **Dimostrazione per contrapposizione e per assurdo** (esistente) | analisi | contronominale; proof by contradiction | `Lezione2.pdf` pp. 5-6; `Esercizi di logica.pdf` es. 6 | Equivalenza logica<br>Implicazione logica | — | Negazione dei quantificatori<br>Teorema di unicità del limite |
| **Quantificatori** (esistente) | analisi | predicato; per ogni; esiste; ordine dei quantificatori | `Lezione2.pdf` pp. 9, 11-14; `Esercizi di logica.pdf` es. 7-8 | Connettivi logici | Negazione dei quantificatori<br>Operazioni sugli insiemi<br>Assiomi dei numeri reali<br>Estremo superiore e inferiore<br>Funzioni iniettive e suriettive<br>Limite di successione<br>Limite di funzione | Assioma di Dedekind |
| **Negazione dei quantificatori** (esistente) | analisi | controesempio | `Lezione2.pdf` pp. 14-17; `Lezione1.pdf` p. 12; `Esercizi di logica.pdf` es. 9 | Quantificatori<br>Connettivi logici | — | Dimostrazione per contrapposizione e per assurdo<br>Limite di funzione<br>Valore assoluto |
| **Operazioni sugli insiemi** (esistente) | analisi | unione; intersezione; complementare | `Lezione2.pdf` pp. 9-10; `Lezione1.pdf` p. 5 | Connettivi logici<br>Quantificatori | Disequazioni con valore assoluto<br>Disequazioni irrazionali<br>Disequazioni logaritmiche<br>Punto di accumulazione<br>Funzioni iniettive e suriettive | — |

## Numeri reali

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Assiomi dei numeri reali** (esistente) | analisi | campo ordinato; assiomi d'ordine | `Assiomi dei numeri reali.pdf` p. 1 | Quantificatori | Assioma di Dedekind<br>Valore assoluto<br>Disequazioni fratte<br>Numeri complessi | Connettivi logici |
| **Assioma di Dedekind** (esistente) | analisi | assioma di continuità; completezza | `Assiomi dei numeri reali.pdf` p. 2 | Assiomi dei numeri reali | Estremo superiore e inferiore | Quantificatori |
| **Estremo superiore e inferiore** | analisi | supremum; infimum; sup; inf | Mazzi Preliminari §1.4; Morandotti §1.5 (def. 1.5.13); lez. 2021-09-30 | Assioma di Dedekind<br>Quantificatori | Funzioni monotone<br>Teorema sulle successioni monotone<br>Integrale di Riemann | — |
| **Punto di accumulazione** | analisi | accumulation point; punto isolato; intorno; intorno bucato | Mazzi Preliminari §1.5 (def. 1.16); Morandotti def. 1.5.20, 3.1.6 | Valore assoluto<br>Operazioni sugli insiemi | Limite di funzione<br>Funzione continua | — |

## Numeri complessi

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Numeri complessi** | analisi | complex numbers; forma algebrica; unità immaginaria; coniugato | Morandotti §1.5.3; Lussardi cap. 1 §7; lez. 2021-12-20 | Assiomi dei numeri reali | Forma trigonometrica ed esponenziale dei numeri complessi<br>Teorema fondamentale dell'algebra | Valore assoluto |
| **Forma trigonometrica ed esponenziale dei numeri complessi** | analisi | forma trigonometrica; forma esponenziale; formula di Eulero; Euler's formula | Morandotti §1.5.3 (1.51)-(1.55) | Numeri complessi<br>Formule trigonometriche | Radici n-esime dei numeri complessi<br>Equazioni lineari del secondo ordine a coefficienti costanti<br>Metodo di somiglianza | — |
| **Radici n-esime dei numeri complessi** | analisi | n-th roots of complex numbers; radici dell'unità; equazione z^n = w | Morandotti §1.5.3 (1.56); lez. 2021-12-22 | Forma trigonometrica ed esponenziale dei numeri complessi | Teorema fondamentale dell'algebra | — |
| **Teorema fondamentale dell'algebra** | analisi | fundamental theorem of algebra; radici di un polinomio; molteplicità di una radice | Morandotti teor. 1.5.43, cor. 1.5.44 | Radici n-esime dei numeri complessi<br>Numeri complessi | Integrazione delle funzioni razionali | — |

## Richiami: funzioni elementari e disequazioni (test di ingresso)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Valore assoluto** (esistente) | analisi | modulo; disuguaglianza triangolare | `Lezione1.pdf` pp. 1, 10, 12 | Assiomi dei numeri reali | Disequazioni con valore assoluto<br>Punto di accumulazione<br>Trasformazioni del grafico<br>Limite di successione<br>Convergenza assoluta degli integrali impropri | Disequazioni irrazionali<br>Negazione dei quantificatori<br>Numeri complessi<br>Proprietà dell'integrale definito<br>Punti di non derivabilità |
| **Proprietà di potenze e logaritmi** (esistente) | analisi | proprietà dei logaritmi | `formulario.pdf` p. 1; `Lezione1.pdf` pp. 9, 11-12 | — | Disequazioni logaritmiche<br>Disequazioni esponenziali<br>Limiti notevoli | — |
| **Formule trigonometriche** (esistente) | analisi | addizione; duplicazione; prostaferesi | `formulario.pdf` p. 1 | — | Disequazioni lineari in seno e coseno<br>Derivate delle funzioni elementari<br>Forma trigonometrica ed esponenziale dei numeri complessi<br>Funzioni trigonometriche inverse | Funzioni pari, dispari e periodiche<br>Limiti notevoli |
| **Disequazioni con valore assoluto** (esistente) | analisi | disequazioni con il modulo | `Lezione1.pdf` pp. 3-5 | Valore assoluto<br>Operazioni sugli insiemi | — | — |
| **Disequazioni irrazionali** (esistente) | analisi | radice n-esima | `Lezione1.pdf` pp. 6-7 | Operazioni sugli insiemi | — | Valore assoluto |
| **Disequazioni fratte** (esistente) | analisi | tabella dei segni | `Lezione1.pdf` pp. 5, 9 | Assiomi dei numeri reali | Disequazioni logaritmiche | — |
| **Disequazioni lineari in seno e coseno** (esistente) | analisi | disequazioni goniometriche | `Lezione1.pdf` pp. 7-8 | Formule trigonometriche | — | Disequazioni esponenziali |
| **Disequazioni logaritmiche** (esistente) | analisi | condizioni di esistenza | `Lezione1.pdf` pp. 8-9 | Proprietà di potenze e logaritmi<br>Disequazioni fratte<br>Operazioni sugli insiemi | — | Disequazioni esponenziali |
| **Disequazioni esponenziali** (esistente) | analisi | variabile ausiliaria; equazioni biquadratiche | `Lezione1.pdf` pp. 1-2, 10-11 | Proprietà di potenze e logaritmi | — | Disequazioni lineari in seno e coseno<br>Disequazioni logaritmiche |

## Funzioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzioni iniettive e suriettive** | analisi | injective function; surjective function; funzione biunivoca; biiettiva | Mazzi Funzioni §1.1 (def. 1.2, 1.4); lez. 2021-10-04 | Operazioni sugli insiemi<br>Quantificatori | Funzione composta e funzione inversa<br>Funzioni monotone | — |
| **Funzione composta e funzione inversa** | analisi | composite function; inverse function; composizione; funzione invertibile | Mazzi Funzioni §1.2 (def. 1.6, 1.7) | Funzioni iniettive e suriettive | Funzioni pari, dispari e periodiche<br>Funzioni trigonometriche inverse<br>Trasformazioni del grafico<br>Sottosuccessione<br>Limite della funzione composta<br>Continuità della funzione inversa<br>Equazioni a variabili separabili | — |
| **Funzioni monotone** | analisi | monotone function; funzione crescente; funzione decrescente; strettamente monotona | Mazzi Funzioni def. 1.11; Mazzi Limiti teor. 1.17 | Funzioni iniettive e suriettive<br>Estremo superiore e inferiore | Continuità della funzione inversa<br>Monotonia e segno della derivata<br>Classi di funzioni integrabili<br>Criteri di convergenza per integrali impropri | Punti di discontinuità |
| **Funzioni pari, dispari e periodiche** | analisi | even function; odd function; periodic function; periodo minimo | Mazzi Funzioni def. 1.9, 1.10 | Funzione composta e funzione inversa | Funzioni trigonometriche inverse | Formule trigonometriche<br>Trasformazioni del grafico |
| **Funzioni trigonometriche inverse** | analisi | inverse trigonometric functions; arcoseno; arcocoseno; arcotangente | Morandotti (1.41)-(1.42); Mazzi Funzioni es. 1.5 | Funzione composta e funzione inversa<br>Funzioni pari, dispari e periodiche<br>Formule trigonometriche | — | Derivata della funzione inversa |
| **Trasformazioni del grafico** | analisi | graph transformations; traslazioni; dilatazioni; grafico del modulo di f | Mazzi Funzioni §1.5; esercitazione 4 (2021-22) | Funzione composta e funzione inversa<br>Valore assoluto | — | Funzioni pari, dispari e periodiche |

## Successioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Limite di successione** | analisi | limit of a sequence; successione convergente; successione divergente; successione regolare | Morandotti def. 2.2.1; Mazzi Limiti §1.7; lez. 2021-10-11 | Quantificatori<br>Valore assoluto | Sottosuccessione<br>Teorema sulle successioni monotone<br>Forme indeterminate<br>Caratterizzazione sequenziale del limite | Limite di funzione |
| **Sottosuccessione** | analisi | subsequence; successione estratta; teorema di Bolzano-Weierstrass; Bolzano-Weierstrass | Mazzi Limiti §1.7.2 (teor. 1.13-1.15); Morandotti def. 2.1.6; lez. 2021-10-13 | Limite di successione<br>Funzione composta e funzione inversa | Teorema di Weierstrass | Caratterizzazione sequenziale del limite |
| **Teorema sulle successioni monotone** | analisi | monotone convergence theorem for sequences; successioni monotone; monotone sequences | Morandotti teor. 2.2.16, def. 2.2.20; Mazzi Limiti §1.10 | Limite di successione<br>Estremo superiore e inferiore | Limiti notevoli<br>Criteri del rapporto e della radice per successioni<br>Teorema degli zeri | — |
| **Criteri del rapporto e della radice per successioni** | analisi | ratio test for sequences; root test for sequences; criterio del rapporto; criterio della radice | Mazzi Limiti prop. 1.6-1.7, es. 1.17 | Teorema sulle successioni monotone<br>Teoremi del confronto | Gerarchia degli infiniti | — |
| **Gerarchia degli infiniti** | analisi | hierarchy of infinities; confronto tra infiniti; n! e n^n; esponenziale contro potenza | Mazzi Limiti es. 1.17, es. 1.26; Morandotti §2.2.1 | Criteri del rapporto e della radice per successioni<br>Ordine di infinitesimo e parte principale | — | Teorema di de l'Hôpital |

## Limiti di funzioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Limite di funzione** | analisi | limit of a function; definizione topologica di limite; limite destro; limite sinistro | Mazzi Limiti §1.1 (def. 1.1-1.4); Morandotti def. 3.1.13-3.1.14, 3.1.25; lez. 2021-10-18 | Punto di accumulazione<br>Quantificatori | Teorema di unicità del limite<br>Teorema della permanenza del segno<br>Teoremi del confronto<br>Forme indeterminate<br>Limite della funzione composta<br>Simboli di Landau<br>Asintoti<br>Funzione continua<br>Punti di discontinuità<br>Derivata<br>Punti di non derivabilità<br>Integrale improprio | Limite di successione<br>Negazione dei quantificatori |
| **Teorema di unicità del limite** | analisi | uniqueness of the limit | Mazzi Limiti teor. 1.1; Morandotti teor. 2.2.6; lez. 2021-10-18 | Limite di funzione | — | Dimostrazione per contrapposizione e per assurdo |
| **Teorema della permanenza del segno** | analisi | sign permanence theorem; limitatezza locale; local boundedness | Mazzi Limiti teor. 1.2-1.3, cor. 1.1; Morandotti teor. 3.1.22 | Limite di funzione | Teoremi del confronto<br>Teorema di Fermat<br>Monotonia e segno della derivata | — |
| **Teoremi del confronto** | analisi | comparison theorems; teorema dei carabinieri; squeeze theorem; teorema dei due carabinieri | Mazzi Limiti §1.5 (teor. 1.8-1.10, cor. 1.10); Morandotti teor. 2.2.8, 3.1.18-3.1.19; lez. 2021-10-25 | Teorema della permanenza del segno<br>Limite di funzione | Criteri del rapporto e della radice per successioni | — |
| **Forme indeterminate** | analisi | indeterminate forms; algebra dei limiti; aritmetica di R esteso; forma 0/0 | Mazzi Limiti §1.4; Morandotti §2.2 (teor. 2.2.10-2.2.13) | Limite di funzione<br>Limite di successione | Limiti notevoli<br>Teorema di de l'Hôpital | — |
| **Caratterizzazione sequenziale del limite** | analisi | sequential characterization of limits; teorema ponte; limite sequenziale; teorema del limite sequenziale | Mazzi Limiti §1.8 (teor. 1.16, cor. 1.13); Morandotti teor. 3.1.15; lez. 2021-10-20 | Limite di successione<br>Limite della funzione composta | — | Sottosuccessione |
| **Limite della funzione composta** | analisi | limit of a composite function; cambio di variabile nei limiti; continuità della funzione composta | Mazzi Limiti §1.6 (teor. 1.11-1.12); Morandotti teor. 3.2.9 | Limite di funzione<br>Funzione composta e funzione inversa | Caratterizzazione sequenziale del limite | Funzione continua |

## Confronto locale e asintoti

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Simboli di Landau** | analisi | Landau symbols; O grande; big O; equivalenza asintotica | Mazzi Limiti §1.11 (def. 1.12-1.14); Morandotti def. 3.4.3; lez. 2021-11-03, 2021-11-04 | Limite di funzione<br>Limiti notevoli | Sviluppi di Maclaurin<br>Ordine di infinitesimo e parte principale<br>Principio di eliminazione dei termini trascurabili<br>Asintoti<br>Derivata | — |
| **Ordine di infinitesimo e parte principale** | analisi | order of infinitesimal; principal part; infinitesimo campione; ordine di infinito | Mazzi Limiti §1.12-1.13 (def. 1.15-1.20); Morandotti def. 3.4.9 | Simboli di Landau | Gerarchia degli infiniti<br>Asintoti<br>Criteri di convergenza per integrali impropri | — |
| **Principio di eliminazione dei termini trascurabili** | analisi | principle of neglecting negligible terms; sostituzione di infinitesimi equivalenti; principio di sostituzione degli infiniti | Mazzi Limiti teor. 1.18, es. 1.21-1.22; Morandotti teor. 3.4.7 | Simboli di Landau | — | Limiti notevoli |
| **Asintoti** | analisi | asymptotes; asintoto orizzontale; asintoto verticale; asintoto obliquo | Mazzi Limiti §1.14 (def. 1.21, prop. 1.15-1.16); lez. 2021-11-08 | Simboli di Landau<br>Ordine di infinitesimo e parte principale<br>Limite di funzione | Studio di funzione | — |

## Funzioni continue

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzione continua** | analisi | continuous function; continuità in un punto; continuità da destra; continuità da sinistra | Mazzi Limiti §1.2 e §1.15 (def. 1.5, 1.23); Morandotti def. 3.2.1 | Limite di funzione<br>Punto di accumulazione | Punti di discontinuità<br>Teorema degli zeri<br>Teorema di Weierstrass<br>Classi di funzioni integrabili<br>Funzione integrale<br>Problema di Cauchy | Derivata<br>Limite della funzione composta |
| **Punti di discontinuità** | analisi | discontinuity points; discontinuità eliminabile; salto; discontinuità di prima specie | Mazzi Limiti §1.15.1 (def. 1.24-1.26, prop. 1.17); Morandotti def. 3.2.3 | Funzione continua<br>Limite di funzione | — | Funzioni monotone |
| **Teorema degli zeri** | analisi | intermediate zero theorem; Bolzano's theorem; teorema di Bolzano; metodo di bisezione | Mazzi Limiti teor. 1.19, cor. 1.16-1.17; Morandotti teor. 3.2.12; lez. 2021-10-27 | Funzione continua<br>Teorema sulle successioni monotone | Teorema dei valori intermedi | — |
| **Teorema dei valori intermedi** | analisi | intermediate value theorem; immagine di un intervallo | Mazzi Limiti teor. 1.20-1.21; Morandotti cor. 3.2.14 | Teorema degli zeri | Teorema di Weierstrass<br>Continuità della funzione inversa<br>Teorema della media integrale | — |
| **Teorema di Weierstrass** | analisi | extreme value theorem; Weierstrass theorem; massimo e minimo assoluto | Mazzi Limiti teor. 1.22; Morandotti teor. 3.2.10, 3.2.15 | Funzione continua<br>Sottosuccessione<br>Teorema dei valori intermedi | Teorema di Rolle | Punti di estremo locale |
| **Continuità della funzione inversa** | analisi | continuity of the inverse function; inversa di una funzione continua | Mazzi Limiti §1.15.3 (teor. 1.23-1.26); Morandotti teor. 3.2.21 | Teorema dei valori intermedi<br>Funzioni monotone<br>Funzione composta e funzione inversa | Derivata della funzione inversa | — |

## Calcolo differenziale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Limiti notevoli** (esistente) | analisi | limiti fondamentali; numero e | `formulario.pdf` p. 2 | Proprietà di potenze e logaritmi<br>Teorema sulle successioni monotone<br>Forme indeterminate | Sviluppi di Maclaurin<br>Simboli di Landau | Formule trigonometriche<br>Principio di eliminazione dei termini trascurabili |
| **Derivate delle funzioni elementari** (esistente) | analisi | tavola delle derivate | `formulario.pdf` p. 3 | Formule trigonometriche<br>Derivata | Sviluppi di Maclaurin<br>Primitive delle funzioni elementari | Regole di derivazione |
| **Regole di derivazione** (esistente) | analisi | prodotto; quoziente; funzione composta | `formulario.pdf` p. 3 | Derivata | Integrazione per parti<br>Integrazione per sostituzione<br>Equazioni differenziali lineari del primo ordine | Derivata della funzione inversa<br>Derivate delle funzioni elementari |
| **Sviluppi di Maclaurin** (esistente) | analisi | formula di Taylor; o piccolo | `formulario.pdf` p. 4 | Derivate delle funzioni elementari<br>Limiti notevoli<br>Simboli di Landau | Formula di Taylor con resto di Lagrange<br>Punti di estremo locale | — |
| **Derivata** | analisi | derivative; funzione derivabile; differenziabilità; rapporto incrementale | Mazzi Calcolo diff. §1.1 (def. 1.1-1.2, prop. 1.1-1.2); Morandotti §4.1 | Simboli di Landau<br>Limite di funzione | Derivate delle funzioni elementari<br>Regole di derivazione<br>Punti di non derivabilità<br>Derivata della funzione inversa<br>Teorema di Fermat<br>Funzione convessa<br>Problema di Cauchy | Funzione continua<br>Velocità e accelerazione (esterno) |
| **Punti di non derivabilità** | analisi | points of non-differentiability; punto angoloso; cuspide; flesso a tangente verticale | Mazzi Calcolo diff. §1.2 (def. 1.4-1.6); lez. 2021-11-10 | Derivata<br>Limite di funzione | Teorema del limite della derivata<br>Studio di funzione | Hölderianità delle traiettorie browniane (esterno)<br>Valore assoluto |
| **Derivata della funzione inversa** | analisi | derivative of the inverse function; inverse function rule | Mazzi Calcolo diff. §1.4 (teor. 1.5-1.6); Morandotti teor. 4.1.15 | Derivata<br>Continuità della funzione inversa | — | Funzioni trigonometriche inverse<br>Regole di derivazione |
| **Teorema di Fermat** | analisi | Fermat's theorem; punto critico; punto stazionario; stationary point | Mazzi Calcolo diff. §1.5 (teor. 1.1); Morandotti teor. 4.3.9; lez. 2021-11-11 | Derivata<br>Teorema della permanenza del segno | Teorema di Rolle<br>Punti di estremo locale | — |
| **Teorema di Rolle** | analisi | Rolle's theorem | Mazzi Calcolo diff. teor. 1.2; Morandotti teor. 4.2.1 | Teorema di Weierstrass<br>Teorema di Fermat | Teorema di Lagrange | — |
| **Teorema di Lagrange** | analisi | mean value theorem; teorema del valor medio; teorema di Cauchy; seconda formula dell'incremento finito | Mazzi Calcolo diff. teor. 1.3-1.4, cor. 1.2; Morandotti teor. 4.2.3-4.2.4 | Teorema di Rolle | Funzioni a derivata nulla<br>Monotonia e segno della derivata<br>Teorema di de l'Hôpital<br>Formula di Taylor con resto di Lagrange | — |
| **Funzioni a derivata nulla** | analisi | functions with zero derivative; caratterizzazione delle funzioni costanti; due primitive differiscono per una costante | Mazzi Calcolo diff. cor. 1.3-1.4; Morandotti prop. 4.2.13 | Teorema di Lagrange | Primitive delle funzioni elementari<br>Teorema fondamentale del calcolo integrale | — |
| **Monotonia e segno della derivata** | analisi | monotonicity test; criterio di monotonia; test della derivata prima | Mazzi Calcolo diff. §1.8 (teor. 1.5-1.6, cor. 1.1-1.3); lez. 2021-11-15 | Teorema di Lagrange<br>Funzioni monotone<br>Teorema della permanenza del segno | Punti di estremo locale<br>Funzione convessa | — |
| **Teorema di de l'Hôpital** | analisi | L'Hôpital's rule; de l'Hospital; regola di de l'Hôpital | Mazzi Calcolo diff. §1.10 (prop. 1.8, teor. 1.8); Morandotti teor. 4.2.18 | Teorema di Lagrange<br>Forme indeterminate | Teorema del limite della derivata | Gerarchia degli infiniti |
| **Teorema del limite della derivata** | analisi | derivative limit theorem; teorema tappabuchi; tappabuchi | Mazzi Calcolo diff. teor. 1.9; Morandotti teor. 4.2.15; esercitazione 14 (2022-23) | Teorema di de l'Hôpital<br>Punti di non derivabilità | — | — |
| **Formula di Taylor con resto di Lagrange** | analisi | Taylor's theorem with Lagrange remainder; resto di Lagrange; resto in forma di Lagrange | Mazzi Taylor teor. 0.3; Morandotti teor. 4.2.22 | Teorema di Lagrange<br>Sviluppi di Maclaurin | — | — |
| **Punti di estremo locale** | analisi | local extrema; massimo locale; minimo locale; massimo relativo | Mazzi Calcolo diff. def. 1.2, cor. 1.3; Mazzi Taylor teor. 0.6; Morandotti §4.3; lez. 2021-11-11 | Teorema di Fermat<br>Monotonia e segno della derivata<br>Sviluppi di Maclaurin | Studio di funzione | Funzione convessa<br>Teorema di Weierstrass |
| **Funzione convessa** | analisi | convex function; funzione concava; punto di flesso; convessità | Morandotti §4.3.1 (def. 4.3.21, 4.3.28, prop. 4.3.30); Mazzi Convessità; lez. 2021-11-18 | Monotonia e segno della derivata<br>Derivata | Studio di funzione | Disuguaglianza di Jensen condizionata (esterno)<br>Punti di estremo locale |
| **Studio di funzione** | analisi | curve sketching; grafico qualitativo; studio del grafico | Morandotti §4.4; esercitazioni 18-19 (2021-22), 15 (2022-23) | Asintoti<br>Punti di estremo locale<br>Funzione convessa<br>Punti di non derivabilità | — | — |

## Calcolo integrale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Primitive delle funzioni elementari** (esistente) | analisi | integrali immediati; integrale indefinito | `formulario.pdf` p. 5 | Derivate delle funzioni elementari<br>Funzioni a derivata nulla | Integrazione per parti<br>Integrazione per sostituzione<br>Teorema fondamentale del calcolo integrale<br>Integrazione delle funzioni razionali<br>Equazioni a variabili separabili<br>Equazioni differenziali lineari del primo ordine | — |
| **Integrazione per parti** (esistente) | analisi | integration by parts | `formulario.pdf` p. 5 | Regole di derivazione<br>Primitive delle funzioni elementari<br>Teorema fondamentale del calcolo integrale | — | — |
| **Integrazione per sostituzione** (esistente) | analisi | cambio di variabile | `formulario.pdf` p. 5 | Regole di derivazione<br>Primitive delle funzioni elementari<br>Teorema fondamentale del calcolo integrale | — | Integrazione delle funzioni razionali |
| **Integrale di Riemann** | analisi | Riemann integral; somme inferiori; somme superiori; partizione | Morandotti §5.1 (def. 5.1.4, 5.1.8); Lussardi cap. 4 §1; lez. 2021-12-06 | Estremo superiore e inferiore | Classi di funzioni integrabili<br>Proprietà dell'integrale definito | Formula dei trapezi (esterno) |
| **Classi di funzioni integrabili** | analisi | integrable functions; integrabilità delle funzioni continue; integrabilità delle funzioni monotone; funzioni continue a tratti | Morandotti teor. 5.1.12-5.1.13, prop. 5.1.11 | Integrale di Riemann<br>Funzione continua<br>Funzioni monotone | — | — |
| **Proprietà dell'integrale definito** | analisi | properties of the definite integral; linearità dell'integrale definito; monotonia dell'integrale; additività | Morandotti teor. 5.2.1-5.2.2, 5.2.11, def. 5.2.12 | Integrale di Riemann | Teorema della media integrale<br>Funzione integrale | Valore assoluto |
| **Teorema della media integrale** | analisi | mean value theorem for integrals; media integrale | Morandotti cor. 5.2.4, def. 5.2.5 | Proprietà dell'integrale definito<br>Teorema dei valori intermedi | Teorema fondamentale del calcolo integrale | — |
| **Funzione integrale** | analisi | integral function; F(x)=∫f; integral function continuity | Morandotti def. 5.2.13; Lussardi cap. 4 §2 | Proprietà dell'integrale definito<br>Funzione continua | Teorema fondamentale del calcolo integrale | — |
| **Teorema fondamentale del calcolo integrale** | analisi | fundamental theorem of calculus; teorema di Torricelli-Barrow; formula fondamentale del calcolo integrale | Morandotti teor. 5.2.14; Lussardi cap. 4 §2 | Funzione integrale<br>Teorema della media integrale<br>Primitive delle funzioni elementari<br>Funzioni a derivata nulla | Integrazione per parti<br>Integrazione per sostituzione<br>Integrale improprio | — |
| **Integrazione delle funzioni razionali** | analisi | integration of rational functions; fratti semplici; partial fractions; funzioni razionali fratte | Morandotti §5.4.1 (teor. 5.4.3, es. 5.4.4); esercitazione 23 (2021-22) | Primitive delle funzioni elementari<br>Teorema fondamentale dell'algebra | — | Integrazione per sostituzione |
| **Integrale improprio** | analisi | improper integral; integrale generalizzato; integrale convergente; integrale divergente | Morandotti §5.5 (def. 5.5.1, 5.5.10); Lussardi cap. 4 §4 (def. 4.4.1, 4.4.7, teor. 4.4.2, 4.4.8) | Teorema fondamentale del calcolo integrale<br>Limite di funzione | Criteri di convergenza per integrali impropri | — |
| **Criteri di convergenza per integrali impropri** | analisi | convergence tests for improper integrals; criterio del confronto; criterio del confronto asintotico; limit comparison test | lez. 2021-12-15 pp. 1-3; Lussardi teor. 4.4.4; Morandotti teor. 5.5.3, 5.5.6, 5.5.15 | Integrale improprio<br>Ordine di infinitesimo e parte principale<br>Funzioni monotone | Convergenza assoluta degli integrali impropri | — |
| **Convergenza assoluta degli integrali impropri** | analisi | absolute convergence; integrabilità assoluta; assolutamente convergente | lez. 2021-12-15 p. 2; Lussardi def. 4.4.5, teor. 4.4.6; Morandotti def. 5.5.5 | Criteri di convergenza per integrali impropri<br>Valore assoluto | — | — |

## Equazioni differenziali

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Problema di Cauchy** | analisi | Cauchy problem; initial value problem; equazione differenziale ordinaria; integrale generale | Lussardi def. 5.1.1, 5.2.1; Morandotti def. 6.0.3-6.0.4 | Derivata<br>Funzione continua | Equazioni a variabili separabili<br>Equazioni differenziali lineari del primo ordine<br>Equazioni lineari del secondo ordine a coefficienti costanti | — |
| **Equazioni a variabili separabili** | analisi | separable differential equations; EDO a variabili separabili | Lussardi teor. 5.1.3-5.1.4; Morandotti §6.1.1; esercitazione 26 (2021-22) | Problema di Cauchy<br>Primitive delle funzioni elementari<br>Funzione composta e funzione inversa | — | Equazioni differenziali lineari del primo ordine |
| **Equazioni differenziali lineari del primo ordine** | analisi | first-order linear differential equations; formula risolutiva; fattore integrante | Lussardi teor. 5.1.2; Morandotti §6.1.3; lez. 2022-01-10 | Problema di Cauchy<br>Primitive delle funzioni elementari<br>Regole di derivazione | — | Equazioni a variabili separabili<br>Equazioni lineari del secondo ordine a coefficienti costanti |
| **Equazioni lineari del secondo ordine a coefficienti costanti** | analisi | second-order linear ODE with constant coefficients; equazione caratteristica di una EDO; equazione omogenea associata; principio di sovrapposizione per EDO lineari | Lussardi teor. 5.2.2-5.2.3; Morandotti teor. 6.1.16; esercitazione 27 (2021-22) | Problema di Cauchy<br>Forma trigonometrica ed esponenziale dei numeri complessi | Metodo di somiglianza | Equazioni differenziali lineari del primo ordine<br>Moto armonico semplice (esterno) |
| **Metodo di somiglianza** | analisi | method of undetermined coefficients; metodo dei coefficienti indeterminati; soluzione particolare; risonanza | Lussardi teor. 5.2.4; Morandotti teor. 6.1.20 | Equazioni lineari del secondo ordine a coefficienti costanti<br>Forma trigonometrica ed esponenziale dei numeri complessi | — | — |

## Concetti esterni (da collegare)

Collegamenti già creati verso note di altri corsi: Integrale di Riemann ↔ Formula dei trapezi (Algebra lineare, che citava "Integrale di Riemann (da collegare)"); Punti di non derivabilità ↔ Hölderianità delle traiettorie browniane (Processi stocastici); Funzione convessa ↔ Disuguaglianza di Jensen condizionata (Processi stocastici). Con Fisica 1 (note create in parallelo): Derivata ↔ Velocità e accelerazione; Equazioni lineari del secondo ordine a coefficienti costanti ↔ Moto armonico semplice.

Candidati non ancora nel registro. Nelle note compare in testo semplice solo "Teoria della misura e integrale di Lebesgue (da collegare)" (in Integrale di Riemann); gli altri sono annotati solo qui:
- **Serie numeriche**: non sono nel programma e il materiale non le tratta (solo menzioni di passaggio in Morandotti); servirà Analisi 2.
- **Formula di Taylor in più variabili, integrali doppi, curve**: Analisi 2, seguito di Formula di Taylor con resto di Lagrange e Integrale di Riemann.
- **Teoria della misura e integrale di Lebesgue**: citato in Integrale di Riemann (la lezione del 06/12/2021 nomina Cauchy, Riemann e Lebesgue).
- **Metodo di bisezione (metodi numerici)**: la dimostrazione del Teorema degli zeri è l'algoritmo di bisezione.
- **Polinomio caratteristico di una matrice / sistemi di EDO lineari**: possibile ponte con Algebra lineare.

## Dubbi

- **Serie**: assenti dal programma (`presentazione_corso15_2021-22.pdf`) e dal materiale; nessuna nota creata.
- **Lezioni di un altro corso**: le lezioni manoscritte sono del corso del docente Tentarelli, non del corso 15; il programma coincide nella sostanza (logica, reali, funzioni, successioni, limiti, Landau, continuità, derivate, integrali, impropri, complessi, EDO).
- **Continuità uniforme, Heine-Cantor, criterio di Cauchy, Picard-Lindelöf, studi qualitativi delle EDO, disuguaglianze di Young/Hölder/Jensen, formula di Stirling**: presenti in Morandotti (anche come approfondimenti) ma non nel programma né nelle lezioni campionate: non sono diventati note.
- **Principio di induzione e calcolo combinatorio**: in Morandotti §1.6 e §7.1.3, assenti dal programma; non sono note.
- **Mazzi, definizioni con simboli persi**: in `Capitolo Funzioni.pdf` def. 1.11(4) la stretta decrescenza è stampata con "<" invece di ">"; nella nota Funzioni monotone è riportata corretta con l'avviso.
- **Sup in Morandotti**: la def. 1.5.13 scrive $s-\varepsilon\le b$; Mazzi (def. 1.4) scrive $s-\varepsilon<x\le s$. Nella nota sono riportate entrambe.
- **Scansioni non trascritte**: Mazzi `complessi.pdf`, `1_equazioni differenziali.pdf`, `Integrali di Riemann.pdf`, `Integrali impropri.pdf`; le esercitazioni 2021-22 e gli svolti 2022-23 (manoscritti) non sono stati letti pagina per pagina. Gli esempi delle note vengono dalle dispense con testo, dalle lezioni campionate e dai testi delle esercitazioni 2022-23.
- **Prima passata**: le note "Limiti notevoli", "Sviluppi di Maclaurin" e "Primitive delle funzioni elementari" dicevano che la cartella non conteneva esercizi o teoria sui limiti: con il nuovo materiale non è più vero, e una riga aggiunta in "Nei corsi" lo segnala.
- Dubbi della prima passata ancora validi: lezione 1, es. 4 (modulo) con l'intervallo $x>1+\sqrt2$ omesso nel testo; Lezione 2, esercizi di negazione con lettere poco leggibili; `Assiomi dei numeri reali.pdf` p. 2 con l'ultimo assioma d'ordine scritto $xz\ge yz$.
