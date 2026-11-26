---
tipo: meta
tags: [meta, mappa]
corso: Programmazione e calcolo scientifico
livello: triennale
cartella: triennale/ANNO 3/Programmazione e calcolo scientifico
---

# Mappa delle competenze: Programmazione e calcolo scientifico

Mappa concettuale del corso `triennale/ANNO 3/Programmazione e calcolo scientifico` (03NMVMQ, a.a. 2023/24: M. Cicuttin per C++ e architettura, S. Berrone e collaboratori per geometria computazionale). **61 competenze nuove e 33 note esistenti estese**, un'unica componente connessa insieme alle note esistenti, grado minimo 2. I nomi sono in testo semplice, così la mappa non entra nel grafo.

Fonti usate: slide `lezione1.pdf`-`lezione7.pdf` (Cicuttin, in inglese: architettura del calcolatore, prestazioni, floating point, C++), lucidi `Introduzione.pdf`, `Capitolo01.pdf`-`Capitolo05.pdf`, `Capitolo07.pdf` (tratti da Crescenzi, Gambosi, Grossi, Rossi, *Strutture di dati e algoritmi*, Addison-Wesley 2012), dispense `correttezza_bubblesort.pdf` e `correttezza_mergesort.pdf` (dimostrazioni di correttezza con invarianti), `git.pdf` e `Git_Parte2.pdf`, appunti manoscritti `COMPUTATIONAL_GEOMETRY_1.pdf`-`COMPUTATIONAL_GEOMETRY_3.pdf` (scansioni OneNote, lette visivamente). `scheda_2024.pdf` solo per il programma. Il linguaggio del corso è il **C++** (con STL; Eigen citata solo nella scheda).

Convenzione per le pagine: "p. N" è la pagina del PDF. Nelle slide di Cicuttin le pagine del PDF non coincidono con il numero di slide stampato (le animazioni beamer occupano più pagine); nei lucidi Crescenzi coincidono. **Scartati** (regola dell'utente "niente esami"): la cartella `Progetto-PCS-2024/` (consegna del progetto d'esame, codice, dati DFN, test, Paraview), `ProgettoPCS2024_Report_*.pdf`, `ProgettoPCS2024_GitHub_*.txt`, `presentazione.pptx`, `Relazione_Progetto_PCS.docx`. I `Riassunto capitolo N.odt` sono riassunti dell'utente: non usati. I PDF con annotazioni video (Movie annotations) sono stati letti solo come testo.

"Porta a" è l'inverso di "Prerequisiti", "Collegati" è simmetrico.

## Architettura e prestazioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **BLAS** | numerica | Basic Linear Algebra Subprograms; AXPY; XNPY; FLOP; FLOPS | `lezione1.pdf` (p. 6-14); `lezione2.pdf` (p. 28) | Costo computazionale di un algoritmo (conteggio dei FLOP) | Codice cache-aware (perché AXPY è lenta) | Algoritmo di Strassen (prodotto di matrici, livello 3) |
| **Codice cache-aware** | informatica | cache-friendly; principio di località; località spaziale e temporale; cache a mappatura diretta; ordine dei cicli; memory-bound | `lezione2.pdf` (p. 24-28); `lezione1.pdf` (p. 10-14) | Gerarchia di memoria (esistente); BLAS | — | Array in C++ (elementi contigui in memoria) |
| **Unità centrale di elaborazione** (esistente) | informatica | data path dell'8088: registri, ALU, unità di controllo, flag | `lezione2.pdf` (p. 2-8) | — | — | Ciclo fetch-decode-execute |
| **Ciclo fetch-decode-execute** (esistente) | informatica | fetch, decode, execute con il registro IP/PC | `lezione2.pdf` (p. 6) | — | — | — |
| **Bus di sistema** (esistente) | informatica | bus dell'8088, bus dati a 64 bit dei PC, memoria indirizzabile al byte | `lezione2.pdf` (p. 16-23) | — | — | Array in C++ |
| **Gerarchia di memoria** (esistente) | informatica | cache L1/L2/L3 e banda, principio di località | `lezione2.pdf` (p. 24-27) | — | Codice cache-aware | — |

## Floating point e correttezza numerica

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Rappresentazione floating-point** (esistente) | numerica | float e double in C++, "The odometer that stopped", "The missing block" | `lezione1.pdf` (p. 15-22); `lezione7.pdf` (p. 2) | — | — | Tipi fondamentali del C++ |
| **Numeri di macchina** (esistente) | numerica | insieme F e precisione di macchina per gli algoritmi geometrici | `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | — | — |
| **Precisione di macchina** (esistente) | numerica | eps_m = 1/2 N^(1-t) | `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | — | — |
| **Cancellazione numerica** (esistente) | numerica | esempio L1-L2 e prodotto vettoriale | `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | — | Posizione di un punto rispetto a una retta; Area di un poligono |
| **Confronto tra numeri floating point** (esistente) | informatica | tolleranza tau relativa, tau^2 per le aree | `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | — | Posizione di un punto rispetto a una retta; Area di un poligono |

## Linguaggio C++

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Compilazione e interpretazione** (esistente) | informatica | preprocessore, compilatore, linker | `lezione2.pdf` (p. 29) | — | Tipi fondamentali del C++ | Git; Notazione postfissa |
| **Tipi fondamentali del C++** | informatica | tipizzazione statica; statically typed; sizeof; letterali; const; dichiarazione; tipo, oggetto, valore, variabile | `lezione2.pdf` (p. 30-35); `lezione3.pdf` (p. 2-8); `lezione5.pdf` (p. 2); `lezione7.pdf` (p. 2) | Compilazione e interpretazione (il compilatore controlla i tipi) | Stream di input-output in C++; Array in C++; Struct e classi in C++ | Rappresentazione floating-point (float e double IEEE 754); Ambito di visibilità delle variabili (blocchi e shadowing); Operatori aritmetici (divisione intera) |
| **Ambito di visibilità delle variabili** (esistente) | informatica | lifetime, blocchi, shadowing in C++ | `lezione3.pdf` (p. 5-6) | — | — | Tipi fondamentali del C++ |
| **Istruzione if** (esistente) | informatica | if/else, switch; while, do/while, break, continue; for in C++ e range-based for | `lezione4.pdf` (p. 24-29); `lezione7.pdf` (p. 4-6) | — | — | Standard Template Library (Ciclo for) |
| **Ciclo while** (esistente) | informatica | if/else, switch; while, do/while, break, continue; for in C++ e range-based for | `lezione4.pdf` (p. 24-29); `lezione7.pdf` (p. 4-6) | — | — | Standard Template Library (Ciclo for) |
| **Ciclo for** (esistente) | informatica | if/else, switch; while, do/while, break, continue; for in C++ e range-based for | `lezione4.pdf` (p. 24-29); `lezione7.pdf` (p. 4-6) | — | — | Standard Template Library (Ciclo for) |
| **Stream di input-output in C++** | informatica | stream; iostream; cout; cerr; cin; ofstream; ifstream; stringstream; operatore <<; operatore >> | `lezione3.pdf` (p. 9-18) | Tipi fondamentali del C++ | RAII (ofstream chiude il file) | Lettura di file di testo; Scrittura su file di testo |
| **Array in C++** | informatica | array statico; T arr[N]; stringa C; null-terminated string; layout in memoria | `lezione4.pdf` (p. 9-16); `Capitolo01.pdf` (p. 2-4) | Tipi fondamentali del C++ | Puntatore; Array dinamico | Bus di sistema; Codice cache-aware |
| **Puntatore** | informatica | pointer; operatore &; dereferenziazione; operatore ->; riferimento; reference; aritmetica dei puntatori | `lezione4.pdf` (p. 17-23); `lezione5.pdf` (p. 7-14); `lezione7.pdf` (p. 3) | Array in C++ | Allocazione dinamica della memoria; Albero binario; Lista concatenata | Passaggio di parametri; Standard Template Library (iteratori simili ai puntatori) |
| **Passaggio di parametri** (esistente) | informatica | per valore, per riferimento, per riferimento costante, per puntatore | `lezione5.pdf` (p. 4-14) | — | Struct e classi in C++ | Puntatore |
| **Struct e classi in C++** | informatica | struct; class; attributo; metodo; operatore ::; public; private; incapsulamento | `lezione4.pdf` (p. 30); `lezione5.pdf` (p. 3, 15-21) | Tipi fondamentali del C++; Passaggio di parametri | Costruttore e distruttore; Template in C++; Pila (struttura dati) | — |
| **Costruttore e distruttore** | informatica | constructor; destructor; costruttore di default; costruttore di copia; copy constructor | `lezione5.pdf` (p. 17-19); `lezione6.pdf` (p. 2-6) | Struct e classi in C++ | RAII | Allocazione dinamica della memoria (copia byte a byte e doppio delete) |
| **RAII** | informatica | Resource Acquisition Is Initialization | `lezione3.pdf` (p. 12); `lezione7.pdf` (p. 8) | Costruttore e distruttore; Stream di input-output in C++ | Smart pointer unique_ptr | Allocazione dinamica della memoria |
| **Template in C++** | informatica | programmazione generica; generic programming; template typename T | `lezione5.pdf` (p. 21) | Struct e classi in C++ | Standard Template Library | — |
| **Allocazione dinamica della memoria** | informatica | new; delete; new[]; delete[]; memoria dinamica; memory leak; undefined behaviour | `lezione6.pdf` (p. 13-18) | Puntatore | Array dinamico; Smart pointer unique_ptr; Lista concatenata | Costruttore e distruttore; RAII |
| **Array dinamico** | informatica | dynamic array; std::vector; size e capacity; resize; reserve; push_back; raddoppio e dimezzamento | `lezione6.pdf` (p. 8-12); `Capitolo01.pdf` (p. 5-8) | Array in C++; Allocazione dinamica della memoria | Analisi ammortizzata; Pila (struttura dati); Coda (struttura dati); Tabella hash | Standard Template Library; Lista concatenata |
| **Standard Template Library** | informatica | STL; container; iteratore; iterator; auto; range-based for; begin; end | `lezione6.pdf` (p. 7); `lezione7.pdf` (p. 4-6) | Template in C++ | — | Array dinamico; Puntatore; Lista concatenata; Ciclo for |
| **Smart pointer unique_ptr** | informatica | std::unique_ptr; make_unique; ownership; proprietà del puntatore | `lezione7.pdf` (p. 8-9) | RAII; Allocazione dinamica della memoria | — | Lista concatenata |
| **Git** | informatica | version control; controllo di versione; clone; commit; push; pull; branch; pull request; conflitti | `git.pdf` (p. 1-2); `Git_Parte2.pdf` (p. 1-2) | — | — | Compilazione e interpretazione; Raffinamenti successivi |

## Calcolabilità e complessità

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Algoritmo** (esistente) | informatica | "essenza computazionale di un programma" (Crescenzi) | `Introduzione.pdf` (p. 2) | — | Problema della fermata; Costo computazionale di un algoritmo | Invariante di ciclo |
| **Problema della fermata** | informatica | halting problem; indecidibilità; problema indecidibile; Turing | `Introduzione.pdf` (p. 3-7) | Algoritmo | Classi P e NP | — |
| **Costo computazionale di un algoritmo** | informatica | complessità computazionale; modello RAM; caso pessimo; caso medio; costo uniforme | `Introduzione.pdf` (p. 15-16, 31-34) | Algoritmo; Simboli di Landau | Classi P e NP; BLAS; Divide et impera; Ordinamento per selezione; Ordinamento per inserimento; Analisi ammortizzata; Limite inferiore per l'ordinamento per confronti; Backtracking (algoritmi) | Torre di Hanoi |
| **Simboli di Landau** (esistente) | analisi | O, Omega, Theta della complessità | `Introduzione.pdf` (p. 32) | — | Costo computazionale di un algoritmo; Teorema fondamentale delle ricorrenze | — |
| **Classi P e NP** | informatica | P; NP; NPC; EXP; NP-completo; certificato polinomiale; problema trattabile; P = NP | `Introduzione.pdf` (p. 8-17, 22-30) | Problema della fermata; Costo computazionale di un algoritmo | — | Torre di Hanoi; Backtracking (algoritmi) |
| **Torre di Hanoi** (esistente) | algebra-geometria | 2^n - 1 mosse, versione generalizzata a k pioli | `Introduzione.pdf` (p. 8-14) | — | — | Costo computazionale di un algoritmo; Classi P e NP; Divide et impera |
| **Backtracking (algoritmi)** | informatica | backtrack; Sudoku; generazione di sequenze binarie; generazione di permutazioni | `Introduzione.pdf` (p. 18-28) | Costo computazionale di un algoritmo | — | Classi P e NP; Calcolo combinatorio |

## Strutture di dati

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Lista concatenata** | informatica | linked list; lista semplice; lista doppia; doubly linked list; nodo; successore; predecessore | `Capitolo01.pdf` (p. 2-3, 16-19); `Capitolo04.pdf` (p. 4-6); `lezione7.pdf` (p. 7, 9) | Puntatore; Allocazione dinamica della memoria | Pila (struttura dati); Coda (struttura dati); Albero binario; Tabella hash; Skip list; Union-find; Move-to-front; Lista di adiacenza | Standard Template Library; Smart pointer unique_ptr; Array dinamico |
| **Pila (struttura dati)** | informatica | stack; LIFO; push; pop; top | `Capitolo02.pdf` (p. 2-8); `lezione5.pdf` (p. 16-21) | Lista concatenata; Array dinamico; Struct e classi in C++ | Notazione postfissa; Visita in profondità | Coda (struttura dati) |
| **Notazione postfissa** | informatica | notazione polacca inversa; reverse Polish notation; RPN; conversione infissa-postfissa; PostScript | `Capitolo02.pdf` (p. 9-13) | Pila (struttura dati) | — | Compilazione e interpretazione |
| **Coda (struttura dati)** | informatica | queue; FIFO; enqueue; dequeue; coda circolare | `Capitolo02.pdf` (p. 14-18) | Lista concatenata; Array dinamico | Heap binario; Visita in ampiezza | Pila (struttura dati) |
| **Heap binario** | informatica | heap; coda di priorità; priority queue; heaptree; heap implicito; max-heap | `Capitolo02.pdf` (p. 19-31) | Coda (struttura dati); Albero binario | Heapsort; Algoritmo di Dijkstra; Algoritmo di Kruskal; Algoritmo di Prim | — |
| **Albero binario** | informatica | binary tree; radice; foglia; altezza; profondità; alberi cardinali e ordinali; memorizzazione binarizzata | `Capitolo01.pdf` (p. 20-25); `Capitolo03.pdf` (p. 43-46) | Lista concatenata; Puntatore | Visite di alberi binari; Heap binario; Albero binario di ricerca | Albero (teoria dei grafi) |
| **Visite di alberi binari** | informatica | preorder; inorder; postorder; visita anticipata; simmetrica; posticipata; problema decomponibile | `Capitolo03.pdf` (p. 47-55) | Albero binario; Divide et impera | Albero binario di ricerca | Visita in profondità |
| **Tabella hash** | informatica | hash table; funzione hash; liste di trabocco; chaining; indirizzamento aperto; fattore di caricamento; dizionario | `Capitolo04.pdf` (p. 2-3, 7-16) | Lista concatenata; Array dinamico | — | Albero binario di ricerca; Indice hash; Dizionario in Python |
| **Albero binario di ricerca** | informatica | BST; binary search tree; dizionario ordinato; successore; MSA | `Capitolo04.pdf` (p. 17-22) | Albero binario; Visite di alberi binari; Ricerca binaria | Albero AVL | Tabella hash; B+-tree |
| **Albero AVL** | informatica | AVL tree; albero 1-bilanciato; nodo critico; rotazioni; alberi di Fibonacci | `Capitolo04.pdf` (p. 23-35) | Albero binario di ricerca; Numeri di Fibonacci | — | Skip list; Analisi ammortizzata |
| **Skip list** | informatica | lista a salti; lista randomizzata | `Capitolo05.pdf` (p. 10-19) | Lista concatenata; Ricerca binaria | — | Albero AVL; Quicksort; Numeri pseudo-casuali |
| **Union-find** | informatica | liste disgiunte; insiemi disgiunti; disjoint sets; Unisci; Appartieni | `Capitolo05.pdf` (p. 20-27) | Lista concatenata | Algoritmo di Kruskal | Analisi ammortizzata; Partizioni di un insieme finito |
| **Move-to-front** | informatica | MTF; liste ad auto-organizzazione; algoritmo on-line; analisi competitiva | `Capitolo05.pdf` (p. 28-37) | Lista concatenata; Ricerca lineare | — | Analisi ammortizzata |
| **Analisi ammortizzata** | informatica | amortized analysis; costo ammortizzato; aggregazione; crediti; funzione potenziale | `Capitolo05.pdf` (p. 38-40); `Capitolo01.pdf` (p. 8) | Costo computazionale di un algoritmo; Array dinamico | — | Union-find; Move-to-front; Albero AVL |

## Ordinamento, ricerca e divide et impera

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Ordinamento per selezione** | informatica | selection sort; SelectionSort | `Capitolo01.pdf` (p. 9-13) | Costo computazionale di un algoritmo; Scambio di elementi | — | Ordinamento per inserimento; Ordinamento di liste; Bubble sort; Ricerca del massimo e del minimo |
| **Ordinamento per inserimento** | informatica | insertion sort; InsertionSort | `Capitolo01.pdf` (p. 14-15) | Costo computazionale di un algoritmo | — | Ordinamento per selezione; Quicksort |
| **Invariante di ciclo** | informatica | loop invariant; inizializzazione, mantenimento, terminazione; correttezza di un algoritmo | `correttezza_bubblesort.pdf` (p. 1-3); `correttezza_mergesort.pdf` (p. 1) | Principio di induzione | Bubble sort; Merge sort | Algoritmo |
| **Bubble sort** | informatica | ordinamento a bolle; BubbleSort | `correttezza_bubblesort.pdf` (p. 1-3) | Invariante di ciclo; Scambio di elementi | — | Ordinamento per selezione |
| **Divide et impera** | informatica | divide and conquer; decomposizione, ricorsione, ricombinazione; coppia di punti più vicina | `Capitolo03.pdf` (p. 2, 40-42) | Costo computazionale di un algoritmo | Merge sort; Quicksort; Ricerca binaria; Teorema fondamentale delle ricorrenze; Moltiplicazione veloce di interi; Visite di alberi binari | Torre di Hanoi |
| **Teorema fondamentale delle ricorrenze** | informatica | master theorem; relazione di ricorrenza | `Capitolo03.pdf` (p. 8-9) | Divide et impera; Simboli di Landau | Merge sort; Moltiplicazione veloce di interi; Algoritmo di Strassen | Successione definita per ricorrenza; Quicksort |
| **Merge sort** | informatica | mergesort; ordinamento per fusione; Fusione; merge | `Capitolo03.pdf` (p. 3-10); `correttezza_mergesort.pdf` (p. 1-3) | Divide et impera; Invariante di ciclo; Teorema fondamentale delle ricorrenze; Principio di induzione | — | Quicksort; Heapsort; Limite inferiore per l'ordinamento per confronti |
| **Quicksort** | informatica | ordinamento per distribuzione; Distribuzione; pivot; quicksort randomizzato; QuickSelect; selezione per distribuzione | `Capitolo03.pdf` (p. 19-24); `Capitolo05.pdf` (p. 2-9) | Divide et impera | — | Merge sort; Ordinamento per inserimento; Skip list; Teorema fondamentale delle ricorrenze |
| **Heapsort** | informatica | ordinamento con coda di priorità; ordinamento in loco | `Capitolo02.pdf` (p. 32) | Heap binario | — | Merge sort; Limite inferiore per l'ordinamento per confronti |
| **Limite inferiore per l'ordinamento per confronti** | informatica | lower bound Omega(n log n); albero di decisione dei confronti; lower bound sulla ricerca | `Capitolo02.pdf` (p. 33); `Capitolo03.pdf` (p. 10, 18) | Costo computazionale di un algoritmo; Calcolo combinatorio | — | Merge sort; Heapsort; Ricerca binaria |
| **Ricerca binaria** | informatica | binary search; ricerca dicotomica; ricerca in array ordinato | `Capitolo03.pdf` (p. 11-18) | Divide et impera; Ricerca lineare | Albero binario di ricerca; Skip list | Limite inferiore per l'ordinamento per confronti |
| **Moltiplicazione veloce di interi** | informatica | algoritmo di Karatsuba; Karatsuba; MoltiplicazioneVeloce | `Capitolo03.pdf` (p. 25-30) | Divide et impera; Teorema fondamentale delle ricorrenze | Algoritmo di Strassen | — |
| **Algoritmo di Strassen** | numerica | Strassen; moltiplicazione veloce tra matrici; prodotto di matrici O(n^2.807) | `Capitolo03.pdf` (p. 31-39) | Moltiplicazione veloce di interi; Teorema fondamentale delle ricorrenze | — | BLAS; Chiusura transitiva di un grafo; Trasformazione affine |
| **Ricerca lineare** (esistente) | informatica | RicercaSequenziale O(n) | `Capitolo03.pdf` (p. 11) | — | Ricerca binaria; Move-to-front | — |
| **Principio di induzione** (esistente) | algebra-geometria | correttezza di MergeSort per induzione forte | `correttezza_mergesort.pdf` (p. 1-2) | — | Invariante di ciclo; Merge sort | — |

## Grafi

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Grafo** (esistente) | network | G = (V, E, W), cammini, cicli, sottografo indotto | `Capitolo07.pdf` (p. 2-14) | — | Lista di adiacenza; Problema dei cammini minimi; Ordinamento topologico; Minimo albero ricoprente | — |
| **Matrice di adiacenza** (esistente) | network | spazio Theta(n^2), test di adiacenza O(1) | `Capitolo07.pdf` (p. 15-16) | — | Chiusura transitiva di un grafo | Lista di adiacenza |
| **Potenze della matrice di adiacenza** (esistente) | network | A^r con diagonale a 1 per la chiusura transitiva | `Capitolo07.pdf` (p. 20-24) | — | Chiusura transitiva di un grafo | — |
| **Percorso euleriano** (esistente) | network | ciclo euleriano, ponti di Königsberg | `Capitolo07.pdf` (p. 13-14) | — | — | — |
| **Albero generatore** (esistente) | network | albero BFS come spanning tree, albero di ricoprimento | `Capitolo07.pdf` (p. 27, 44) | — | Minimo albero ricoprente | Visita in ampiezza |
| **Lista di adiacenza** | network | adjacency list; liste di adiacenza; spazio Theta(n+m) | `Capitolo07.pdf` (p. 17-18) | Grafo; Lista concatenata | Visita in ampiezza; Visita in profondità; Algoritmo di Dijkstra | Matrice di adiacenza |
| **Chiusura transitiva di un grafo** | network | transitive closure; matrice A* | `Capitolo07.pdf` (p. 20-24) | Matrice di adiacenza; Potenze della matrice di adiacenza | — | Algoritmo di Strassen; Componenti connesse di un grafo |
| **Visita in ampiezza** | network | BFS; breadth-first search; albero BFS | `Capitolo07.pdf` (p. 25-27, 33) | Coda (struttura dati); Lista di adiacenza | Problema dei cammini minimi | Visita in profondità; Albero generatore |
| **Visita in profondità** | network | DFS; depth-first search; albero DFS; archi all'indietro, in avanti, trasversali | `Capitolo07.pdf` (p. 28-34) | Pila (struttura dati); Lista di adiacenza | Ordinamento topologico | Visita in ampiezza; Visite di alberi binari |
| **Ordinamento topologico** | network | topological sort; DAG; grafo orientato aciclico | `Capitolo07.pdf` (p. 34-36) | Visita in profondità; Grafo | — | — |
| **Problema dei cammini minimi** | network | shortest path; distanza pesata; single source; all pairs; algoritmo di Bellman-Ford | `Capitolo07.pdf` (p. 6-7, 37, 43) | Grafo; Visita in ampiezza | Algoritmo di Dijkstra | — |
| **Algoritmo di Dijkstra** | network | Dijkstra; DecreaseKey; cammini minimi con pesi positivi | `Capitolo07.pdf` (p. 38-42) | Problema dei cammini minimi; Heap binario; Lista di adiacenza | — | Algoritmo di Prim |
| **Minimo albero ricoprente** | network | minimum spanning tree; MST; condizione di taglio; condizione di ciclo; cut property | `Capitolo07.pdf` (p. 44-46) | Albero generatore; Grafo | Algoritmo di Kruskal; Algoritmo di Prim | — |
| **Algoritmo di Kruskal** | network | Kruskal | `Capitolo07.pdf` (p. 47-49) | Minimo albero ricoprente; Union-find; Heap binario | — | Algoritmo di Prim |
| **Algoritmo di Prim** | network | algoritmo di Jarník-Prim; Jarník; Prim | `Capitolo07.pdf` (p. 50-52) | Minimo albero ricoprente; Heap binario | — | Algoritmo di Kruskal; Algoritmo di Dijkstra |

## Geometria computazionale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Prodotto scalare** (esistente) | algebra-geometria | strumenti degli algoritmi geometrici; triplo prodotto per la complanarità | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2-3, 6) | — | Posizione di un punto rispetto a una retta; Area di un poligono; Rotazione di un piano sul piano xy | — |
| **Prodotto vettoriale** (esistente) | algebra-geometria | strumenti degli algoritmi geometrici; triplo prodotto per la complanarità | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2-3, 6) | — | Posizione di un punto rispetto a una retta; Area di un poligono; Rotazione di un piano sul piano xy | — |
| **Prodotto misto** (esistente) | algebra-geometria | strumenti degli algoritmi geometrici; triplo prodotto per la complanarità | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2-3, 6) | — | Posizione di un punto rispetto a una retta; Area di un poligono; Rotazione di un piano sul piano xy | — |
| **Equazioni della retta** (esistente) | algebra-geometria | retta e segmento parametrici, varietà (k-1)-dimensionale, forma implicita del piano | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 1-2); `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | Posizione di un punto rispetto a una retta; Coordinate baricentriche | — |
| **Equazione del piano** (esistente) | algebra-geometria | retta e segmento parametrici, varietà (k-1)-dimensionale, forma implicita del piano | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 1-2); `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | Posizione di un punto rispetto a una retta; Coordinate baricentriche | — |
| **Posizioni relative di rette e piani** (esistente) | algebra-geometria | intersezione di due rette (sistema 2x2) e di due piani (tangente n1 x n2) | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 5-6); `COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) | — | — | Rotazione di un piano sul piano xy |
| **Matrice ortogonale** (esistente) | algebra-geometria | moti rigidi A^T A = I | `COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1) | — | Rotazione di un piano sul piano xy | Trasformazione affine |
| **Posizione di un punto rispetto a una retta** | algebra-geometria | punto a sinistra o a destra; orientation test; proiezione di un punto su una retta | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 3-4) | Prodotto vettoriale; Prodotto scalare; Equazioni della retta | — | Proiezione ortogonale di un vettore; Confronto tra numeri floating point; Cancellazione numerica; Distanze tra punti, rette e piani |
| **Area di un poligono** | algebra-geometria | formula di Gauss dell'area; shoelace formula; area con il prodotto vettoriale | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 4-5) | Prodotto vettoriale | — | Coordinate baricentriche; Cancellazione numerica; Confronto tra numeri floating point |
| **Coordinate baricentriche** | algebra-geometria | barycentric coordinates; baricentro del triangolo; triangolo come varietà 2-dimensionale | `COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2) | Equazione del piano; Combinazioni coniche, affini e convesse | Trasformazione affine | Area di un poligono |
| **Trasformazione affine** | algebra-geometria | affine transformation; similitudine; trasformazione equiaffine; moto rigido; coordinate omogenee | `COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1); `Capitolo03.pdf` (p. 31-36) | Coordinate baricentriche; Determinante | Rotazione di un piano sul piano xy | Matrice ortogonale; Algoritmo di Strassen |
| **Rotazione di un piano sul piano xy** | algebra-geometria | matrice di rotazione; rotation matrix; mappare un piano sul piano xy | `COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1) | Trasformazione affine; Matrice ortogonale; Prodotto vettoriale | — | Posizioni relative di rette e piani; Equazione del piano |

## Concetti esterni (da collegare)

- **Quadratura numerica 2D/3D** (scheda: "Quadratura numerica 2D/3D"): nessuna slide nella cartella. Seguito naturale di Coordinate baricentriche e Trasformazione affine (mappa sul triangolo di riferimento); le formule di quadratura 1D esistono già (Metodi numerici).
- **Libreria Eigen** (scheda: "C++ - Eigen"): nessun materiale nella cartella oltre alle CMake del progetto, scartato.
- **Mesh poligonali e taglio di poligoni**: argomento del progetto (DFN), escluso per la regola "niente esami".
- **Heap di Fibonacci**: citato solo per il costo di Dijkstra e Prim, senza trattazione.
- **Condizionamento e stabilità** (scheda: "Ripasso"): nessuna slide dedicata; le note esistenti (Metodi numerici) restano non estese.

## Dubbi

- Refusi nelle slide, non riportati nelle note: `lezione6.pdf` p. 3 usa `s1.pop(42)` dove serve `push`; `lezione3.pdf` p. 11 dice che `std::ostringstream` è "for output on files" (è per le stringhe); `lezione6.pdf` p. 17 definisce il distruttore `int_vector::~int_vector(int sz)` con un parametro; `Capitolo03.pdf` p. 7 conclude "T(n) = O(log n)" per il mergesort, mentre p. 9 dà correttamente $O(n\log n)$; `Introduzione.pdf` p. 14 titola "Tempo esponenziale $n^2$" una tabella polinomiale; `Capitolo03.pdf` p. 21 scrive `A[j] => A[dx]`; `Introduzione.pdf` p. 34 scrive "max{costo(blocco1 + costo(blocco2)}"; `Capitolo05.pdf` p. 36 scrive "$= i - f + g$" per $c_j-f+g$, e a p. 40 stampa la condizione finale del metodo del potenziale con il verso invertito ($\Phi_{n-1}\le\Phi_{-1}$ invece di $\ge$; segnalato nella nota).
- `lezione7.pdf` p. 2 dà al double "53 mantissa bits": coerente con il "52+1" delle note esistenti (Metodi numerici), contando il bit implicito.
- `Capitolo02.pdf` porta in copertina "Capitolo 3" e i lucidi Crescenzi sono numerati in modo diverso dai file (Capitolo07 = Grafi): si citano i nomi dei file.
- `COMPUTATIONAL_GEOMETRY_3.pdf`: nella matrice finale $Q$ la prima colonna è scritta senza il fattore $1/\sqrt{n_x^2+n_y^2}$ che compare nel calcolo di $u$ poche righe sopra; nella nota è segnalato "(da verificare sul PDF)".
- `lezione7.pdf` cita `linked_list_example.cpp`, `linked_list.hpp`, `linked_list_up.hpp`, assenti dalla cartella: il codice della lista non è trascritto.
- Git è un'isola concettuale nel corso: collegata solo a Compilazione e interpretazione e a Raffinamenti successivi (sviluppo incrementale su branch), senza inventare altre dipendenze.
- Algoritmo di Bellman-Ford: le slide danno solo il codice (n passate di rilassamento su tutti gli archi), senza analisi: è dentro Problema dei cammini minimi. QuickSelect è dentro Quicksort; la coppia di punti più vicina dentro Divide et impera; scheduling FCFS/SJF (opus libri) dentro Ordinamento per selezione; std::vector dentro Array dinamico; iteratori e auto dentro Standard Template Library.
- Notazione asintotica: esisteva già Simboli di Landau (Analisi 1), estesa con $\Omega$ e $\Theta$ invece di creare un doppione. Intersezioni di rette e piani: estesa Posizioni relative di rette e piani.
- Le slide di Cicuttin (lezione 1) mostrano esperimenti di tempo (AXPY, XNPY, prodotto di matrici) senza riportare i numeri misurati: nelle note non ci sono tempi.
