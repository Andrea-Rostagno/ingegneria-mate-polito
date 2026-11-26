---
tipo: meta
tags: [meta, mappa]
corso: Matematica discreta
livello: triennale
cartella: triennale/ANNO 1/Matematica discreta
---

# Mappa delle competenze: Matematica discreta

Mappa concettuale del corso `triennale/ANNO 1/Matematica discreta` (Politecnico di Torino, corso con dispense del prof. P. Tilli). Il corso ha quattro parti: **fondamenti** (induzione, cardinalità), **contare** con insiemi finiti, **successioni ricorsive** lineari e non lineari, **grafi** con teoria spettrale. **49 competenze: 38 nuove e 11 esistenti estese con una sezione per questo corso.** Altre 2 note esistenti (Misura stazionaria, Caratteristica di Eulero) ricevono solo un link. Le 49 competenze formano un'unica componente connessa, e ognuna ha almeno 2 collegamenti interni al corso. I nomi sono in testo semplice, non wikilink, così la mappa non entra nel grafo.

Fonti, in ordine di priorità:
- `teoria/Lectures Notes prof. Tilli.pdf` (Discrete Mathematics, preliminary version 2012, 167 pp., in inglese, con layer di testo). È la fonte degli enunciati e delle formule. Nel layer di testo mancano alcuni simboli (≤, ∈, →, α). Gli enunciati con disuguaglianze presenti anche nelle slide (planarità, alberi, Perron-Frobenius) sono stati confrontati con le slide. La stima di Fibonacci (3.1), che compare solo in Tilli, è stata ricostruita dal contesto della dimostrazione.
- `teoria/01 - Esercizi introduttivi.pdf` ... `teoria/07 - Grafi .pdf`: appunti manoscritti delle lezioni, con un OCR inutilizzabile. Sono stati letti come immagini (pymupdf, 70 dpi). Danno l'ordine del corso e gli argomenti assenti da Tilli: assiomi di Peano, confronto di cardinalità, successioni non lineari, stabilità, percorsi euleriani, Perron-Frobenius applicato ai grafi.
- Scartati per la regola dell'utente: `esercizi/` e `esercitazione/` (raccolte di esercizi, non lette). La copia nidificata `Matematica discreta/Matematica discreta/` è identica e viene ignorata.

"Porta a" è in gran parte l'inverso di "Prerequisiti", e "Collegati" è in gran parte simmetrico. Alcune note esistenti ricevono il link solo in una direzione. "(esistente)" indica una nota già presente nel wiki, a cui si aggiunge una sezione per questo corso.

## Nodi con grado più alto (nel corso)

- Spettro di un grafo: 10
- Grafo: 9
- Principio di induzione: 8
- Calcolo combinatorio: 8
- Componenti connesse di un grafo: 7
- Matrice di adiacenza: 6
- Potenze della matrice di adiacenza: 6

## Fondamenti: induzione e cardinalità

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Principio di induzione** | algebra-geometria | (esistente) | `02 - Principio di induzione.pdf`; Tilli §4.1-4.3 | — | Successione definita per ricorrenza (ben definita per induzione)<br>Torre di Hanoi (ottimalità per induzione)<br>Albero (teoria dei grafi) (\|E\|=\|V\|-1 per induzione)<br>Potenze della matrice di adiacenza (induzione su k)<br>Monotonia delle successioni ricorsive (disuguaglianze propagate) | — |
| **Cardinalità di un insieme finito** | algebra-geometria | cardinality; \|A\|=n; insieme finito; insieme infinito | `03 -Insiemi equipotenti e cardinalitá.pdf` pp. 4-6; Tilli §1.1 | Funzioni iniettive e suriettive (biiezione con N_n)<br>Relazione di equivalenza (l'equipotenza lo è) | Regola della somma (contare = trovare \|A\|)<br>Insieme delle parti (\|P(A)\|=2^n) | Insieme numerabile (caso infinito)<br>Teorema di Cantor-Schröder-Bernstein (confronto di cardinalità) |
| **Successione definita per ricorrenza** | algebra-geometria | definizione ricorsiva; relazione di ricorrenza; condizioni iniziali; recurrence relation | `03 -...pdf` p. 3; `05 - Successioni ricorsive lineari.pdf` pp. 1-3 | Principio di induzione (ben definita per induzione) | Torre di Hanoi (M_{n+1}=2M_n+1)<br>Relazioni ricorsive lineari del primo ordine<br>Relazioni ricorsive lineari omogenee<br>Punto di equilibrio di una successione ricorsiva | Problema di Cauchy (analogo continuo) |
| **Torre di Hanoi** | algebra-geometria | Tower of Hanoi; 2^n-1 mosse | `03 -...pdf` p. 9; Tilli §4.4.1 | Principio di induzione (ottimalità)<br>Successione definita per ricorrenza (M_{n+1}=2M_n+1) | — | Relazioni ricorsive lineari del primo ordine (stessa ricorrenza non omogenea) |
| **Insieme numerabile** | algebra-geometria | (esistente) | `03 -...pdf` pp. 6-8 | — | — | Cardinalità di un insieme finito (caso infinito)<br>Insieme delle parti (Cantor: X non equipotente a P(X)) |
| **Teorema di Cantor-Schröder-Bernstein** | algebra-geometria | (esistente) | `03 -...pdf` pp. 7-8 | — | — | Cardinalità di un insieme finito (confronto \|A\|≤\|B\|) |

## Contare con insiemi finiti

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Regola della somma** | algebra-geometria | splitting rule; regola della partizione | `04 - Contare con insiemi finiti.pdf` p. 1; Tilli §1.2 | Cardinalità di un insieme finito<br>Operazioni sugli insiemi (unione disgiunta) | Regola del prodotto (dimostra \|A×B\|)<br>Principio di inclusione-esclusione (caso non disgiunto)<br>Potenze della matrice di adiacenza (split sull'ultimo arco)<br>Conteggio con relazioni ricorsive (split sul primo pezzo) | Relazione di equivalenza (le classi formano una partizione) |
| **Regola del prodotto** | algebra-geometria | product rule; prodotto cartesiano; \|A×B\|=\|A\|\|B\|; numero di funzioni | `04 -...pdf` pp. 2-6; Tilli §1.2-1.3 | Regola della somma (dimostra \|A×B\|) | Calcolo combinatorio (n!, disposizioni)<br>Insieme delle parti<br>Permutazioni con ripetizione | Funzioni iniettive e suriettive (numero di iniezioni) |
| **Calcolo combinatorio** | probabilita | (esistente) | `04 -...pdf` pp. 4-11; Tilli §1.3-1.4 | Regola del prodotto | Teorema binomiale<br>Combinazioni con ripetizione<br>Permutazioni con ripetizione<br>Dismutazioni | Lemma delle strette di mano (\|E(K_n)\|=C(n,2)) |
| **Insieme delle parti** | algebra-geometria | power set; P(A); 2^n sottoinsiemi; stringhe binarie | `04 -...pdf` pp. 10-11; Tilli Teor. 1.2.10 | Cardinalità di un insieme finito<br>Regola del prodotto | — | Teorema binomiale (somma dei binomiali = 2^n)<br>Insieme numerabile (Cantor) |
| **Teorema binomiale** | algebra-geometria | binomio di Newton; triangolo di Tartaglia; formula di Stifel; binomial theorem | `04 -...pdf` p. 11; Tilli §1.4 | Calcolo combinatorio | — | Insieme delle parti<br>Permutazioni con ripetizione (teorema multinomiale)<br>Principio di induzione (dimostrazione alternativa) |
| **Combinazioni con ripetizione** | algebra-geometria | stars and bars; distribuire monete; cestino della frutta | `04 -...pdf` pp. 12-15, 21; `06 -...pdf` p. 9; Tilli §2.1 | Calcolo combinatorio | — | Permutazioni con ripetizione (cestino come anagramma)<br>Partizioni di un insieme finito (oggetti identici vs distinti) |
| **Permutazioni con ripetizione** | algebra-geometria | anagrammi; distribuire regali; teorema multinomiale | `04 -...pdf` pp. 16-20; Tilli §2.2-2.3 | Regola del prodotto<br>Calcolo combinatorio | Partizioni di un insieme finito | Teorema binomiale<br>Combinazioni con ripetizione |
| **Partizioni di un insieme finito** | algebra-geometria | scatole non numerate; oggetti distinti in scatole indistinguibili | `04 -...pdf` pp. 27-28 | Permutazioni con ripetizione | — | Combinazioni con ripetizione<br>Relazione di equivalenza (partizione = classi) |
| **Principio di inclusione-esclusione** | algebra-geometria | inclusion-exclusion principle; PIE | `04 -...pdf` pp. 23-26; Tilli §2.6 | Regola della somma<br>Operazioni sugli insiemi | Dismutazioni | Spazio di probabilità (probabilità di un'unione) |
| **Dismutazioni** | algebra-geometria | derangements; permutazioni senza punti fissi; problema dei cappelli | `04 -...pdf` pp. 26-27; Tilli §2.7 | Principio di inclusione-esclusione<br>Calcolo combinatorio | — | Gruppo simmetrico (permutazioni senza punti fissi)<br>Spazio di probabilità (p_n tende a 1/e) |
| **Principio dei cassetti** | algebra-geometria | pigeonhole principle; floor e ceiling; parte intera | `04 -...pdf` pp. 29-32 | Dimostrazione per contrapposizione e per assurdo | Numeri di Ramsey | Grafo (esempio degli amici: due nodi con lo stesso grado) |
| **Numeri di Ramsey** | network | Ramsey numbers; R(3,3)=6; R(m,n) | `04 -...pdf` pp. 33-34 | Principio dei cassetti | — | Grafo (amicizia simmetrica = grafo indiretto) |
| **Spazio di probabilità** | probabilita | (esistente) | `04 -...pdf` pp. 22-23 | — | — | Dismutazioni |

## Successioni ricorsive lineari

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Relazioni ricorsive lineari del primo ordine** | algebra-geometria | equazione alle differenze del primo ordine; a_n = α a_{n-1} + β | `05 -...pdf` pp. 4-7 | Successione definita per ricorrenza | Relazioni ricorsive lineari non omogenee (stessa struttura) | Torre di Hanoi<br>Equazioni differenziali lineari del primo ordine (analogo continuo)<br>Equazione logistica discreta (modello lineare di popolazione)<br>Stabilità dei punti di equilibrio (a_{n+1}=-a_n+3) |
| **Relazioni ricorsive lineari omogenee** | algebra-geometria | equazione caratteristica di una ricorrenza; sistema fondamentale di soluzioni; ricorrenza di ordine k; sistemi di ricorrenze | `05 -...pdf` pp. 8-18, 23-26; Tilli §3.2 | Successione definita per ricorrenza<br>Dipendenza e indipendenza lineare (sistema fondamentale)<br>Forma trigonometrica ed esponenziale dei numeri complessi (caso Δ<0) | Relazioni ricorsive lineari non omogenee<br>Numeri di Fibonacci<br>Conteggio con relazioni ricorsive | Equazioni lineari del secondo ordine a coefficienti costanti (controparte continua)<br>Spazio vettoriale (soluzioni = sottospazio di dimensione k) |
| **Relazioni ricorsive lineari non omogenee** | algebra-geometria | soluzione particolare; metodo di somiglianza | `05 -...pdf` pp. 5-6, 20-22; Tilli §3.3 | Relazioni ricorsive lineari omogenee<br>Relazioni ricorsive lineari del primo ordine | Conteggio con relazioni ricorsive (stringhe con cc) | Equazioni lineari del secondo ordine a coefficienti costanti (stesso metodo di somiglianza) |
| **Numeri di Fibonacci** | algebra-geometria | Fibonacci sequence; F_n | Tilli §3.1; `01 -...pdf` p. 4 | Relazioni ricorsive lineari omogenee | — | Conteggio con relazioni ricorsive (trenini, stessa ricorrenza) |
| **Conteggio con relazioni ricorsive** | algebra-geometria | tassellazione; stringhe con sottostringa; counting with recurrences | `05 -...pdf` pp. 14-15, 19-20; Tilli §3.4 | Relazioni ricorsive lineari omogenee<br>Relazioni ricorsive lineari non omogenee<br>Regola della somma | — | Numeri di Fibonacci |

## Successioni ricorsive non lineari

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Punto di equilibrio di una successione ricorsiva** | analisi | punto fisso di f; diagramma a tela di ragno; cobweb; esistenza del punto fisso | `06 - Successioni ricorsive non lineari.pdf` pp. 2-4, 14-15 | Successione definita per ricorrenza<br>Limite di successione (il limite è un punto fisso)<br>Teorema degli zeri (esistenza in [a,b]) | Monotonia delle successioni ricorsive<br>Equazione logistica discreta<br>Stabilità dei punti di equilibrio | Metodo del punto fisso (stessa iterazione) |
| **Monotonia delle successioni ricorsive** | analisi | insieme invariante; f crescente; f decrescente; f∘f | `06 -...pdf` pp. 5-8, 10-11 | Punto di equilibrio di una successione ricorsiva<br>Principio di induzione<br>Teorema sulle successioni monotone | Equazione logistica discreta (caso α=2) | Sottosuccessione (pari e dispari) |
| **Equazione logistica discreta** | analisi | logistic map; modello logistico; x_{n+1}=αx_n(1-x_n) | `06 -...pdf` pp. 1, 4-6 | Punto di equilibrio di una successione ricorsiva<br>Monotonia delle successioni ricorsive | — | Relazioni ricorsive lineari del primo ordine |
| **Stabilità dei punti di equilibrio** | analisi | equilibrio stabile; attrattivo; asintoticamente stabile; teorema delle contrazioni; funzione lipschitziana | `06 -...pdf` pp. 13-17 | Punto di equilibrio di una successione ricorsiva | — | Metodo del punto fisso (contrazioni)<br>Relazioni ricorsive lineari del primo ordine |

## Grafi

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Grafo** | network | (esistente) | `07 - Grafi .pdf` pp. 1-3; Tilli §5.1 | — | Lemma delle strette di mano<br>Componenti connesse di un grafo<br>Isomorfismo di grafi<br>Matrice di adiacenza<br>Numeri di Ramsey | Principio dei cassetti<br>Percorso euleriano |
| **Lemma delle strette di mano** | network | handshaking lemma; somma dei gradi; grado di un nodo | `07 -...pdf` pp. 5-6; Tilli Teor. 5.1.5 | Grafo | Percorso euleriano (parità dei gradi) | Calcolo combinatorio<br>Spettro di un grafo (somma dei λ² = 2\|E\|) |
| **Componenti connesse di un grafo** | network | grafo connesso; percorso; cammino; ciclo; connected component | `07 -...pdf` pp. 2-4; Tilli §5.1 | Grafo | Albero (teoria dei grafi)<br>Albero generatore<br>Percorso euleriano<br>Grafo planare<br>Grafo regolare<br>Teorema di Perron-Frobenius | Classi di comunicazione (irriducibilità come connessione) |
| **Albero (teoria dei grafi)** | network | tree; foglia; grafo aciclico; \|E\|=\|V\|-1 | `07 -...pdf` pp. 7-12; Tilli §5.2 | Componenti connesse di un grafo<br>Principio di induzione | Albero generatore<br>Grafo planare (caso base di Eulero) | Spettro dei grafi bipartiti (gli alberi sono bipartiti) |
| **Albero generatore** | network | spanning tree; albero ricoprente | `07 -...pdf` p. 12 | Albero (teoria dei grafi)<br>Componenti connesse di un grafo | — | Isomorfismo di grafi (alberi generatori non isomorfi) |
| **Percorso euleriano** | network | cammino euleriano; ciclo euleriano; Eulerian path | `07 -...pdf` pp. 29-32 | Lemma delle strette di mano<br>Componenti connesse di un grafo | — | Grafo (cicli hamiltoniani a confronto)<br>Problema del commesso viaggiatore (ciclo hamiltoniano minimo) |
| **Grafo planare** | network | planarità; formula di Eulero per grafi; facce; K5 e K3,3 | `07 -...pdf` pp. 19-28, 33; Tilli §5.4 | Albero (teoria dei grafi)<br>Componenti connesse di un grafo | — | Caratteristica di Eulero (v-e+f=2)<br>Spettro dei grafi bipartiti (K_{m,n} senza triangoli) |
| **Isomorfismo di grafi** | network | grafi isomorfi; graph isomorphism; grafi isospettrali | `07 -...pdf` pp. 5, 36, 51 | Grafo | Matrice di adiacenza (rietichettatura)<br>Spettro di un grafo (invariante) | Albero generatore<br>Gruppo simmetrico (rietichettature = permutazioni) |

## Teoria spettrale dei grafi

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Matrice di adiacenza** | network | adjacency matrix; A(G) | `07 -...pdf` pp. 35-37; Tilli §6.2 | Grafo<br>Isomorfismo di grafi<br>Matrice di permutazione (A'=PᵀAP) | Potenze della matrice di adiacenza<br>Spettro di un grafo | Matrici simili |
| **Potenze della matrice di adiacenza** | network | numero di percorsi di lunghezza k; walks; tr A^3 e triangoli | `07 -...pdf` pp. 40-42; Tilli Teor. 6.2.8 | Matrice di adiacenza<br>Principio di induzione<br>Regola della somma | Spettro di un grafo (momenti spettrali)<br>Spettro dei grafi bipartiti (cicli dispari) | Invarianti di un endomorfismo (traccia) |
| **Spettro di un grafo** | network | graph spectrum; autovalori di un grafo; momenti spettrali | `07 -...pdf` pp. 38-39, 42, 46-49; Tilli §6.3 | Matrice di adiacenza<br>Potenze della matrice di adiacenza<br>Endomorfismo simmetrico (autovalori reali)<br>Invarianti di un endomorfismo (traccia)<br>Isomorfismo di grafi | Spettro del grafo completo<br>Spettro del grafo ciclo<br>Spettro dei grafi bipartiti<br>Grafo regolare<br>Teorema di Perron-Frobenius | Lemma delle strette di mano |
| **Spettro del grafo completo** | network | spettro di K_n; spettro di K_{m,n} | `07 -...pdf` pp. 43-45; Tilli Es. 6.3.4-6.3.5 | Spettro di un grafo<br>Rango di una matrice (J ha rango 1) | — | Grafo regolare (K_n è (n-1)-regolare) |
| **Spettro del grafo ciclo** | network | spettro di C_n; spettro di P_n; grafo ciclico; grafo cammino | `07 -...pdf` pp. 49-50, 58-59; Tilli Es. 6.3.6 | Spettro di un grafo<br>Radici n-esime dei numeri complessi | — | Grafo regolare (C_n è 2-regolare) |
| **Spettro dei grafi bipartiti** | network | bipartito sse spettro simmetrico; cicli dispari | `07 -...pdf` pp. 16-18, 52-53; Tilli Teor. 5.3.7, 6.3.10 | Spettro di un grafo<br>Potenze della matrice di adiacenza | — | Albero (teoria dei grafi)<br>Grafo planare |
| **Grafo regolare** | network | k-regular graph; grafo k-regolare | `07 -...pdf` pp. 54-55; Tilli §6.4 | Spettro di un grafo<br>Componenti connesse di un grafo | — | Spettro del grafo completo<br>Spettro del grafo ciclo<br>Teorema di Perron-Frobenius |
| **Teorema di Perron-Frobenius** | algebra-geometria | Perron-Frobenius theorem; matrice irriducibile; autovalore dominante; λ_max | `07 -...pdf` pp. 56-58; Tilli Teor. 6.4.12, 6.4.14 | Spettro di un grafo<br>Componenti connesse di un grafo | — | Grafo regolare<br>Misura stazionaria (esistenza per catene finite)<br>Classi di comunicazione (irriducibilità)<br>Metodo delle potenze (autovalore dominante) |

Altre note esistenti estese con una sezione "Nei corsi", senza righe proprie sopra:
- Problema del commesso viaggiatore: lezione 1, forza bruta e greedy.
- Matrice di permutazione e Matrici simili: rietichettatura dei nodi.
- Invarianti di un endomorfismo: proprietà della traccia.
- Metodo del punto fisso: teorema delle contrazioni in forma di successione.

Due note ricevono solo un link: Misura stazionaria (i due "(da collegare)" su Perron-Frobenius sono ora link) e Caratteristica di Eulero (link a Grafo planare).

## Concetti esterni (da collegare)

- **Random walk su grafi e PageRank**: la lezione 1 (`01 -...pdf` pp. 4-5) usa il ranking delle pagine web solo come motivazione della teoria spettrale. Né le slide né Tilli ne danno la teoria, quindi il "(da collegare)" in Distribuzione stazionaria di una DTMC e Metodo delle potenze resta com'è.
- **Algoritmo greedy**: compare solo come strategia 2 del commesso viaggiatore (lezione 1). È descritto nella nota esistente, senza un nodo proprio.
- **Spettro degli alberi** (Tilli Teor. 6.4.17) e **interpretazione degli autovettori** (Tilli §6.4): sono nelle dispense ma non nelle lezioni. Sono citati in Spettro dei grafi bipartiti e in Teorema di Perron-Frobenius.

## Dubbi

- Le slide sono manoscritte. Formule e numeri sono stati letti dalle immagini. Il layer OCR serve solo come indice.
- Tilli (1.13) scrive $\sum_k\binom nk^2=\binom{2n}{2}$, ma la dimostrazione che segue (1.14) conta $\binom{2n}{n}$. Nella nota è segnato "(da verificare sul PDF)".
- Tilli Es. 6.3.5 chiude con "N = mn", mentre il grafo ha $m+n$ nodi: è un refuso. Si usa $N=m+n$, come nel resto dell'esempio.
- Convenzioni: Tilli parte da $F_0=F_1=1$ per Fibonacci. Nella nota di Istituzioni algebra su Principio di induzione $\mathbb N$ parte da 1, mentre la lezione 2 di Matematica discreta parte da 0.
- Nomi: "Albero (teoria dei grafi)" evita l'ambiguità con Albero di decisione. "Cardinalità di un insieme finito" non usa l'alias "insiemi equipotenti", che appartiene a Insieme numerabile. La traccia resta in Invarianti di un endomorfismo e non ha un nodo proprio. Grafo completo e grafo bipartito sono alias di Grafo: per questo i nodi nuovi riguardano i loro spettri e la caratterizzazione con i cicli dispari.
- Fusioni: buon ordinamento, induzione forte e assiomi di Peano sono in Principio di induzione (alias già presenti). Il teorema multinomiale è in Permutazioni con ripetizione. Floor e ceiling sono in Principio dei cassetti. I sistemi di ricorrenze e l'ordine k sono in Relazioni ricorsive lineari omogenee. Il teorema delle contrazioni e la condizione su $|f'(x_0)|$ sono in Stabilità dei punti di equilibrio. Il percorso hamiltoniano è citato in Percorso euleriano (l'alias "ciclo hamiltoniano" appartiene a Grafo).
