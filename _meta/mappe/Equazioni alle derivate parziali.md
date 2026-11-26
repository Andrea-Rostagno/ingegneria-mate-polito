---
tipo: meta
tags: [meta, mappa]
corso: Equazioni alle derivate parziali
livello: triennale
cartella: triennale/ANNO 3/eq derivate parziali
---

# Mappa delle competenze: Equazioni alle derivate parziali

Mappa concettuale del corso `triennale/ANNO 3/eq derivate parziali` (Equazioni alle Derivate Parziali, prof. M. Morandotti, Politecnico di Torino, A.A. 2022/23, appunti versione 1.5 del 18/03/2024). Il corso parte dalle definizioni e dalla buona positura, studia le funzioni armoniche (media, principio del massimo, soluzione fondamentale, funzione di Green, Harnack, principio di Dirichlet), poi convoluzione, mollificatori e distribuzioni, l'equazione del calore, e chiude con gli spazi di Sobolev (Evans cap. 5) e la formulazione debole dei problemi ellittici (Evans §6.1-6.3). **57 competenze (39 nuove, 18 esistenti estese), 130 collegamenti interni al sottografo del corso**, più un "(da collegare)" convertito in link in Problema di Dirichlet e moto browniano. Un'unica componente connessa, grado minimo 2 nel sottografo del corso. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo.

Fonti, in ordine di priorità:
- `EDP.pdf`: appunti delle lezioni di M. Morandotti (69 pagine, testo; pagina PDF = pagina stampata + 1). Capitoli 1-6 (risultati preliminari, introduzione, funzioni armoniche, convoluzione, distribuzioni, equazione del calore). Il testo estratto perde barre di media integrale e chiusure: le formule chiave sono state controllate sulle pagine renderizzate (pp. stampate 16-17, 24, 27-28, 32, 36, 66-67).
- `partial-differential-equations-by-evans.pdf`: L. C. Evans, *Partial Differential Equations* (1ª ed., scansione senza testo; pagina PDF = pagina stampata + 6). Per dichiarazione esplicita degli appunti (p. 68) il resto del corso segue Evans cap. 5 (spazi di Sobolev, tranne alcune dimostrazioni delle immersioni, alcune sottosezioni di §5.8 e §5.9.2) e §6.1-6.3 (formulazione debole dei problemi ellittici); §2.3.2-2.3.3 sono citati per media e principio del massimo del calore. Letto come immagini: pp. stampate 239-286 e 293-310, 314-319 (non lette: 287-292, cioè fine di §5.9.2, problemi e riferimenti, e 311-313, cioè parte delle dimostrazioni di §6.3.1).
- `09_convergenza_ese.pdf`: "Nota su convergenza (forte e debole) in H¹(Ω)", manoscritta, solo pp. 1-4 (teoria, lette a bassa risoluzione); pp. 5-11 non lette, l'esercizio da p. 12 non è usato.
- Scartati (regola dell'utente): `2017-2022_EDP.pdf` (temi d'esame con soluzioni manoscritte); `01_armoniche_ese.pdf`, `03_distribuzioni_ese.pdf`, `05_calore_ese.pdf`, `08_Sobolev_ese.pdf`, `11_formulazione_debole_ese.pdf`, `12_riepilogo_ese.pdf` (fogli di esercizi); `07_Sobolev_aula.pdf` (esercizi svolti a lezione, manoscritti); `08_commenti_derivate_deboli.pdf` (commento a un esercizio). Le sezioni "Alcuni esercizi" degli appunti (§3.7, §6.3) non sono usate come fonte di contenuti; l'unica eccezione è l'enunciato dell'Es. 3.7.4 (unicità per Neumann), citato in Principio del massimo di Hopf con svolgimento dichiarato "ragionamento nostro".

## Nodi con grado più alto (sottografo del corso)

- Formulazione debole di un problema ellittico: 10
- Mollificatori: 9
- Spazi di Sobolev: 8
- Equazione del calore: 8
- Derivata distribuzionale: 8
- Soluzione fondamentale di un operatore differenziale: 7
- Proprietà di media delle funzioni armoniche: 7
- Problema di Dirichlet per l'equazione di Poisson: 7
- Principio del massimo per le funzioni armoniche: 7

"Porta a" è ricavato come l'inverso di "Prerequisiti", e "Collegati" è simmetrico. "(esistente)" = nota già presente nel wiki, estesa con una sezione per questo corso.

## Introduzione alle EDP

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Equazione alle derivate parziali** | analisi | EDP; PDE; lineare, semilineare, quasilineare, completamente non lineare; ellittica, parabolica, iperbolica | `EDP.pdf` §2.1, §2.4; Evans §6.1.1 | Derivate parziali (esistente, Analisi 2) | Buona positura secondo Hadamard; Operatore uniformemente ellittico; Soluzione fondamentale di un operatore differenziale | Equazione delle onde (prototipo iperbolico); Equazione del calore (prototipo parabolico); Funzione armonica (prototipo ellittico) |
| **Problema ai limiti** | numerica | (esistente) | `EDP.pdf` §2.3 | — | Buona positura secondo Hadamard; Problema di Dirichlet per l'equazione di Poisson | — |
| **Buona positura secondo Hadamard** | analisi | well-posedness; problema ben posto; esempio di Hadamard | `EDP.pdf` §2.3, Def. 2.3.3, Es. 2.3.4 | Equazione alle derivate parziali; Problema ai limiti | Principio del massimo per le funzioni armoniche | Condizionamento dei problemi di Cauchy (dipendenza continua per le ODE); Problema di Dirichlet per l'equazione di Poisson |
| **Lemma fondamentale del calcolo delle variazioni** | analisi | du Bois-Reymond; fundamental lemma | `EDP.pdf` Lemma 2.2.1, Cor. 4.2.5 | Teorema della permanenza del segno (esistente); Mollificatori; Sottospazi densi di Lp | Principio variazionale di Dirichlet; Formulazione debole di un problema ellittico | Derivata distribuzionale; Funzioni test |

## Funzioni armoniche

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzione armonica** | analisi | (esistente) | `EDP.pdf` Def. 3.0.1, §3.1.1 | — | Proprietà di media delle funzioni armoniche; Principio del massimo per le funzioni armoniche | Equazione alle derivate parziali; Operatore uniformemente ellittico |
| **Proprietà di media delle funzioni armoniche** | analisi | mean value property; media sferica e di volume | `EDP.pdf` Lemmi 3.1.1-3.1.7 | Funzione armonica; Teorema della divergenza (esistente) | Stime sulle derivate delle funzioni armoniche; Convergenza di successioni di funzioni armoniche; Disuguaglianza di Harnack | Proprietà di media per l'equazione del calore; Formula integrale di Cauchy (esistente); Mollificatori |
| **Stime sulle derivate delle funzioni armoniche** | analisi | stime a priori; analiticità delle armoniche | `EDP.pdf` Lemmi 3.1.8-3.1.9 | Proprietà di media delle funzioni armoniche; Formula di Taylor in più variabili (esistente) | Convergenza di successioni di funzioni armoniche; Teorema di Liouville | Serie di potenze (analiticità) |
| **Convergenza di successioni di funzioni armoniche** | analisi | limiti di armoniche | `EDP.pdf` Lemmi 3.1.10-3.1.13 | Proprietà di media delle funzioni armoniche; Stime sulle derivate delle funzioni armoniche; Teorema di Ascoli-Arzelà | Lemma di Weyl; Nucleo di Poisson per la palla; Disuguaglianza di Harnack | Convergenza uniforme di successioni di funzioni |
| **Lemma di Weyl** | analisi | Weyl's lemma; ipoellitticità del laplaciano | `EDP.pdf` Lemma 3.1.15 | Convergenza di successioni di funzioni armoniche; Mollificatori; Derivata distribuzionale | — | Regolarità delle soluzioni deboli |
| **Teorema di Liouville** | analisi | (esistente) | `EDP.pdf` Teor. 3.1.16, Oss. 3.1.17, Teor. 3.5.3 | Stime sulle derivate delle funzioni armoniche; Disuguaglianza di Harnack | — | — |
| **Principio del massimo per le funzioni armoniche** | analisi | principio del massimo debole e forte; principio del minimo | `EDP.pdf` §3.2 | Funzione armonica; Classificazione dei punti critici (esistente); Buona positura secondo Hadamard | Principio del massimo di Hopf; Problema di Dirichlet per l'equazione di Poisson; Funzione di Green per il laplaciano | Principio del massimo per l'equazione del calore; Formula integrale di Cauchy |
| **Principio del massimo di Hopf** | analisi | lemma di Hopf; condizione della palla interna | `EDP.pdf` Teor. 3.5.14-3.5.15 | Principio del massimo per le funzioni armoniche; Soluzione fondamentale del laplaciano | — | Derivata direzionale; Problema ai limiti |
| **Soluzione fondamentale del laplaciano** | analisi | fundamental solution; G(x) | `EDP.pdf` §3.3 | Soluzione fondamentale di un operatore differenziale; Delta di Dirac | Formula di rappresentazione di Green; Principio del massimo di Hopf | Equazione di Poisson (potenziale coulombiano); Soluzione fondamentale dell'equazione del calore |
| **Formula di rappresentazione di Green** | analisi | terza identità di Green | `EDP.pdf` Teor. 3.4.1 | Soluzione fondamentale del laplaciano; Teorema della divergenza | Funzione di Green per il laplaciano | Formula integrale di Cauchy |
| **Funzione di Green per il laplaciano** | analisi | Green's function; funzione di Green per la palla; punto inverso | `EDP.pdf` §3.4, §3.4.1 | Formula di rappresentazione di Green; Principio del massimo per le funzioni armoniche | Nucleo di Poisson per la palla | Criterio delle visite attese (funzione di Green delle catene) |
| **Nucleo di Poisson per la palla** | analisi | Poisson kernel; formula di Poisson | `EDP.pdf` (3.24)-(3.29), Prop. 3.4.3, Teor. 3.4.4 | Funzione di Green per il laplaciano; Convergenza di successioni di funzioni armoniche | Disuguaglianza di Harnack; Problema di Dirichlet per l'equazione di Poisson | Problema di Dirichlet e moto browniano |
| **Disuguaglianza di Harnack** | analisi | Harnack inequality; teorema di Harnack | `EDP.pdf` §3.5 | Nucleo di Poisson per la palla; Proprietà di media delle funzioni armoniche; Convergenza di successioni di funzioni armoniche | Teorema di Liouville | Compattezza in spazi metrici |
| **Principio variazionale di Dirichlet** | analisi | principio di Dirichlet; Dirichlet principle; funzionale dell'energia | `EDP.pdf` §3.6 | Lemma fondamentale del calcolo delle variazioni; Teorema della divergenza | Formulazione debole di un problema ellittico | Problema di Dirichlet per l'equazione di Poisson; Derivata funzionale |
| **Problema di Dirichlet per l'equazione di Poisson** | analisi | problema di Poisson; problema di Dirichlet (EDP); problema di Neumann | `EDP.pdf` (2.10)-(2.13), Cor. 3.2.5, Oss. 3.2.6, Teor. 3.4.4, Teor. 3.6.1 | Problema ai limiti; Equazione di Poisson; Principio del massimo per le funzioni armoniche; Nucleo di Poisson per la palla | — | Buona positura secondo Hadamard; Principio variazionale di Dirichlet; Formulazione debole di un problema ellittico; Problema di Dirichlet e moto browniano |
| **Equazione di Poisson** | fisica | (esistente) | `EDP.pdf` Es. 2.2.2, (2.13), §3.4 | — | Problema di Dirichlet per l'equazione di Poisson | Soluzione fondamentale del laplaciano |
| **Problema di Dirichlet e moto browniano** | probabilita | (esistente: solo conversione del "(da collegare)") | — | — | — | Problema di Dirichlet per l'equazione di Poisson; Nucleo di Poisson per la palla |

## Convoluzione e mollificatori

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Teorema di Ascoli-Arzelà** | analisi | (esistente) | `EDP.pdf` §1.2, Lemma 1.2.5, Teor. 1.2.6 | — | Convergenza di successioni di funzioni armoniche; Teorema di Rellich-Kondrachov | — |
| **Convoluzione** | analisi | (esistente) | `EDP.pdf` cap. 4, §5.3 | — | Disuguaglianza di Young per la convoluzione; Mollificatori; Soluzione fondamentale di un operatore differenziale; Formule di rappresentazione per l'equazione del calore | — |
| **Disuguaglianza di Young per la convoluzione** | analisi | Young's convolution inequality; ‖f*g‖_p ≤ ‖f‖_1‖g‖_p | `EDP.pdf` Teor. 4.1.4 | Convoluzione; Disuguaglianza di Hölder (esistente); Teorema di Fubini (esistente) | Mollificatori; Formule di rappresentazione per l'equazione del calore | Spazi Lp |
| **Mollificatori** | analisi | mollifier; mollificatore di Friedrichs; regolarizzazione per convoluzione | `EDP.pdf` §4.2, Def. 4.2.1, Prop. 4.2.2, Teor. 4.2.3, Cor. 4.2.4; Evans §5.3 | Convoluzione; Disuguaglianza di Young per la convoluzione; Funzioni test | Lemma fondamentale del calcolo delle variazioni; Lemma di Weyl; Approssimazione con funzioni lisce negli spazi di Sobolev; Teorema di Rellich-Kondrachov | Sottospazi densi di Lp; Proprietà di media delle funzioni armoniche |
| **Sottospazi densi di Lp** | analisi | (esistente) | `EDP.pdf` Teor. 4.2.3, Cor. 4.2.4 | — | — | Mollificatori |

## Distribuzioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Funzioni test** | analisi | (esistente) | `EDP.pdf` (2.5), Def. 5.1.1, Es. 5.1.2 | — | — | Lemma fondamentale del calcolo delle variazioni |
| **Distribuzione (funzione generalizzata)** | analisi | (esistente) | `EDP.pdf` Def. 5.1.3, (5.1)-(5.3), Prop. 5.1.4 | — | — | — |
| **Delta di Dirac** | analisi | (esistente) | `EDP.pdf` Es. 5.1.5, (5.16), (5.18) | — | Soluzione fondamentale di un operatore differenziale; Soluzione fondamentale del laplaciano | — |
| **Convergenza di distribuzioni** | analisi | (esistente) | `EDP.pdf` Def. 5.1.6, Es. 5.1.7 | — | Soluzione fondamentale dell'equazione del calore | — |
| **Supporto di una distribuzione** | analisi | (esistente) | `EDP.pdf` Def. 5.2.1 | — | — | — |
| **Derivata distribuzionale** | analisi | (esistente; ospita anche la derivata debole di Evans §5.2.1, perché "derivata debole" è già suo alias) | `EDP.pdf` Def. 5.2.2, Es. 5.2.3; Evans §5.2.1 | — | Lemma di Weyl; Soluzione fondamentale di un operatore differenziale; Spazi di Sobolev | Lemma fondamentale del calcolo delle variazioni |
| **Funzioni a derivata nulla** | analisi | (esistente) | `EDP.pdf` Teor. 5.2.4, Cor. 5.2.5 | — | — | Soluzione fondamentale di un operatore differenziale |
| **Soluzione fondamentale di un operatore differenziale** | analisi | fundamental solution; operatore aggiunto formale; LU = δ | `EDP.pdf` §5.4, Def. 5.4.2, Prop. 5.4.3, Es. 5.4.4 | Convoluzione; Delta di Dirac; Derivata distribuzionale; Equazione alle derivate parziali | Soluzione fondamentale del laplaciano; Soluzione fondamentale dell'equazione del calore | Funzioni a derivata nulla |

## Equazione del calore

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Equazione del calore** | analisi | (esistente) | `EDP.pdf` cap. 6 | — | — | Equazione alle derivate parziali; Soluzione fondamentale dell'equazione del calore; Formule di rappresentazione per l'equazione del calore; Principio del massimo per l'equazione del calore |
| **Soluzione fondamentale dell'equazione del calore** | analisi | nucleo gaussiano; riscalamento parabolico; U(x,t) | `EDP.pdf` §6.1, (6.9), Lemma 6.1.1, Prop. 6.1.2 | Soluzione fondamentale di un operatore differenziale; Equazioni a variabili separabili (esistente); Convergenza di distribuzioni | Formule di rappresentazione per l'equazione del calore; Proprietà di media per l'equazione del calore | Equazione del calore; Distribuzione normale; Soluzione fondamentale del laplaciano |
| **Formule di rappresentazione per l'equazione del calore** | analisi | problema di Cauchy per il calore; principio di Duhamel (nome non usato negli appunti); velocità di propagazione infinita | `EDP.pdf` §6.2, Teor. 6.2.1, 6.2.2, 6.2.4, Oss. 6.2.3 | Soluzione fondamentale dell'equazione del calore; Convoluzione; Disuguaglianza di Young per la convoluzione; Teorema di convergenza dominata (esistente) | — | Equazione del calore; Principio del massimo per l'equazione del calore |
| **Proprietà di media per l'equazione del calore** | analisi | palla di calore; heat ball | `EDP.pdf` §6.4.1, Teor. 6.4.1; Evans §2.3.2 | Soluzione fondamentale dell'equazione del calore | Principio del massimo per l'equazione del calore | Proprietà di media delle funzioni armoniche |
| **Principio del massimo per l'equazione del calore** | analisi | cilindro parabolico; frontiera parabolica | `EDP.pdf` §6.4.2, Teor. 6.4.2, Prop. 6.4.3; Evans §2.3.3 | Equazione del calore; Proprietà di media per l'equazione del calore | — | Principio del massimo per le funzioni armoniche; Formule di rappresentazione per l'equazione del calore; Metodo dell'energia |
| **Metodo dell'energia** | analisi | (esistente, creata in parallelo da Equazioni di fisica matematica) | `EDP.pdf` Prop. 6.4.3 (seconda dimostrazione) | — | — | Principio del massimo per l'equazione del calore |

## Spazi di Sobolev (Evans cap. 5)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Spazi di Hölder** | analisi | C^{k,γ}; seminorma di Hölder; funzioni hölderiane | Evans §5.1 | Spazio di Banach (esistente); Funzione lipschitziana tra spazi metrici (esistente) | Disuguaglianza di Morrey; Immersioni di Sobolev | Hölderianità delle traiettorie browniane |
| **Spazi di Sobolev** | analisi | W^{k,p}; H^k; W_0^{k,p}; H^1_0; Sobolev spaces | Evans §5.2.2-5.2.3; `09_convergenza_ese.pdf` pp. 1-4 | Derivata distribuzionale; Spazi Lp; Spazio di Banach | Approssimazione con funzioni lisce negli spazi di Sobolev; Teorema di estensione per spazi di Sobolev; Teorema di traccia; Disuguaglianza di Gagliardo-Nirenberg-Sobolev; Quozienti di differenze; Spazio H-1 | Spazio di Hilbert; Convergenza debole in spazi normati |
| **Approssimazione con funzioni lisce negli spazi di Sobolev** | analisi | Meyers-Serrin (nome non usato da Evans); approssimazione interna e globale | Evans §5.3 | Mollificatori; Spazi di Sobolev | Teorema di estensione per spazi di Sobolev; Teorema di traccia | — |
| **Teorema di estensione per spazi di Sobolev** | analisi | extension theorem; riflessione di ordine superiore | Evans §5.4 | Spazi di Sobolev; Approssimazione con funzioni lisce negli spazi di Sobolev | Disuguaglianza di Gagliardo-Nirenberg-Sobolev; Disuguaglianza di Morrey; Teorema di Rellich-Kondrachov | — |
| **Teorema di traccia** | analisi | trace theorem; operatore traccia; funzioni a traccia nulla | Evans §5.5 | Spazi di Sobolev; Approssimazione con funzioni lisce negli spazi di Sobolev | Formulazione debole di un problema ellittico | Estensione per continuità |
| **Disuguaglianza di Gagliardo-Nirenberg-Sobolev** | analisi | esponente coniugato di Sobolev p*; GNS | Evans §5.6.1 | Spazi di Sobolev; Teorema di estensione per spazi di Sobolev; Disuguaglianza di Hölder | Immersioni di Sobolev; Teorema di Rellich-Kondrachov; Disuguaglianza di Poincaré | Disuguaglianza di Morrey |
| **Disuguaglianza di Morrey** | analisi | Morrey's inequality; versione continua | Evans §5.6.2 | Spazi di Hölder; Teorema di estensione per spazi di Sobolev | Immersioni di Sobolev | Disuguaglianza di Gagliardo-Nirenberg-Sobolev |
| **Immersioni di Sobolev** | analisi | disuguaglianze di Sobolev generali; Sobolev embedding | Evans §5.6.3 | Disuguaglianza di Gagliardo-Nirenberg-Sobolev; Disuguaglianza di Morrey; Spazi di Hölder | Regolarità delle soluzioni deboli | — |
| **Teorema di Rellich-Kondrachov** | analisi | immersione compatta; compact embedding | Evans §5.7 | Disuguaglianza di Gagliardo-Nirenberg-Sobolev; Mollificatori; Teorema di Ascoli-Arzelà; Teorema di estensione per spazi di Sobolev | Disuguaglianza di Poincaré; Alternativa di Fredholm | Operatore compatto |
| **Disuguaglianza di Poincaré** | analisi | Poincaré's inequality; disuguaglianza di Poincaré per la palla | Evans §5.6.1 Teor. 3, §5.8.1 | Teorema di Rellich-Kondrachov; Disuguaglianza di Gagliardo-Nirenberg-Sobolev | Stime dell'energia per operatori ellittici | Norme equivalenti |
| **Quozienti di differenze** | analisi | difference quotients; caratterizzazione di W^{1,∞}; funzioni lipschitziane | Evans §5.8.2 | Spazi di Sobolev; Convergenza debole in spazi normati | Regolarità delle soluzioni deboli | Funzione lipschitziana tra spazi metrici |
| **Spazio H-1** | analisi | H^{-1}(U); duale di H^1_0 | Evans §5.9.1 | Spazi di Sobolev; Spazio duale (esistente); Teorema di rappresentazione di Riesz-Fréchet (esistente) | Formulazione debole di un problema ellittico | — |

## Problemi ellittici in forma debole (Evans §6.1-6.3)

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Operatore uniformemente ellittico** | analisi | ellitticità uniforme; forma di divergenza; uniformly elliptic | Evans §6.1.1 | Equazione alle derivate parziali; Autovalori e autovettori (esistente) | Formulazione debole di un problema ellittico | Funzione armonica |
| **Formulazione debole di un problema ellittico** | analisi | soluzione debole; forma bilineare associata; soluzione classica, debole e distribuzionale | Evans §6.1.2; `EDP.pdf` §2.2 | Operatore uniformemente ellittico; Spazi di Sobolev; Teorema di traccia; Spazio H-1; Lemma fondamentale del calcolo delle variazioni; Principio variazionale di Dirichlet; Teorema di Lax-Milgram | Stime dell'energia per operatori ellittici; Regolarità delle soluzioni deboli | Problema di Dirichlet per l'equazione di Poisson |
| **Teorema di Lax-Milgram** | analisi | (esistente) | Evans §6.2.1 | — | Formulazione debole di un problema ellittico; Stime dell'energia per operatori ellittici | — |
| **Stime dell'energia per operatori ellittici** | analisi | energy estimates; primo teorema di esistenza | Evans §6.2.2 | Formulazione debole di un problema ellittico; Teorema di Lax-Milgram; Disuguaglianza di Poincaré | Alternativa di Fredholm; Regolarità delle soluzioni deboli | — |
| **Alternativa di Fredholm** | analisi | (esistente) | Evans §6.2.3 | Teorema di Rellich-Kondrachov; Stime dell'energia per operatori ellittici | — | — |
| **Regolarità delle soluzioni deboli** | analisi | regolarità interna H²; regolarità al bordo; interior regularity | Evans §6.3 | Formulazione debole di un problema ellittico; Stime dell'energia per operatori ellittici; Quozienti di differenze; Immersioni di Sobolev | — | Lemma di Weyl |

## Concetti esterni (da collegare)

- **Formule di Green e integrazione per parti in più dimensioni**: §1.1 degli appunti ha solo il titolo. Nel wiki esistono Teorema della divergenza (Analisi 2, alias "teorema di Gauss-Green") e Teorema di Green (piano): usati come prerequisiti, senza estenderli.
- **Teoremi di Lebesgue, Fubini e Tonelli** (§1.3): richiami senza contenuti nuovi; si linkano Teorema di convergenza dominata e Teorema di Fubini senza estenderli.
- **Multi-indici e teorema multinomiale** (§1.4): strumento di notazione, usato in Stime sulle derivate delle funzioni armoniche; non è un nodo.
- **Equazione delle onde, metodo delle caratteristiche, equazione del trasporto**: NON trattati nel corso (il dalambertiano compare solo come esempio di operatore autoaggiunto, Es. 5.4.1). Nessuna nota creata; Equazione delle onde (Fisica 2) è solo collegata.
- **Autovalori del laplaciano e problemi agli autovalori ellittici** (Evans §6.5): fuori dal programma dichiarato (§6.1-6.3); il Terzo teorema di esistenza (spettro Σ) è citato nella sezione di Alternativa di Fredholm.

## Dubbi

- **Perimetro Evans.** Gli appunti dicono che cap. 5 è stato seguito "tutto tranne qualche omissione nelle dimostrazioni delle disuguaglianze di immersione continua, alcune sottosezioni della Sezione 5.8 e la Sezione 5.9.2", senza dire quali sottosezioni di §5.8. Sono stati creati nodi per §5.8.1 (Poincaré) e §5.8.2 (quozienti di differenze, che servono in §6.3). §5.8.3 (differenziabilità q.o., Rademacher) e §5.8.4 (caratterizzazione di H^k con la trasformata di Fourier) non hanno nodo: da verificare sul programma effettivo.
- **Lemma 3.5.4** (`EDP.pdf` p. 32): la fonte scrive sup e inf su $B_R$ con costante $c(r,R)$; dal contesto (|x| = r nella (3.32)) la palla dovrebbe essere $B_r$. Riportato come "(da verificare sul PDF)".
- **Funzione di Green, proprietà 3** (`EDP.pdf` p. 27): la fonte scrive $\Delta G^x_\Omega=\delta_x$, mentre $G$ risolve $-\Delta G=\delta_0$ (3.14). Segno da verificare.
- **(3.23a)** riporta $[|x^2|\cdot|y^2|-2R^2\langle x,y\rangle+R^4]$ (con quadrati dentro il modulo, probabilmente $|x|^2|y|^2$); trascritto come nella fonte con nota.
- **Es. 2.3.2 (Neumann)**: la catena di uguaglianze dà $\int_\Omega f=-\int_{\partial\Omega}g$, ma subito dopo la fonte scrive la condizione come $\int_\Omega f=\int_{\partial\Omega}g$: segno da verificare.
- **Metodo dell'energia** (nota di Equazioni di fisica matematica, creata in parallelo) è collegata da Principio del massimo per l'equazione del calore come seconda prova di unicità.
- **Prop. 6.4.3**: la fonte scrive la condizione "$u(\cdot,0)=g$ su $\Gamma_T$", cioè dato assegnato su tutta la frontiera parabolica.
- **Dimostrazioni rinviate a Evans**: Teor. 6.4.1 e 6.4.2 (media e massimo per il calore) e Teor. 3.5.14 (Hopf, forma forte) non sono dimostrati negli appunti; le note riportano gli enunciati degli appunti.
- **Nomi.** "Principio variazionale di Dirichlet" evita il conflitto con l'alias "principio di Dirichlet" di Principio dei cassetti; "Funzione di Green per il laplaciano" evita l'alias "funzione di Green" di Criterio delle visite attese; "Spazio H-1" evita "^" (riservato in Obsidian). La derivata debole di Evans è confluita in Derivata distribuzionale (che ha già l'alias "derivata debole"), e la convoluzione tra distribuzioni in Convoluzione (alias "convoluzione di distribuzioni"). Teorema di Lax-Milgram ha come alias "soluzione debole" e "formulazione variazionale": ora il concetto ha un nodo proprio, Formulazione debole di un problema ellittico; il coordinatore può valutare se spostare quegli alias.
- **Registro.** Il registro non elenca ancora le note di Analisi funzionale e di altri corsi recenti: i controlli di esistenza sono stati fatti sui file di `Competenze/` e sugli alias nei frontmatter.
