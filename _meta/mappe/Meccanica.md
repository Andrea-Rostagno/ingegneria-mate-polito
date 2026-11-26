---
tipo: meta
tags: [meta, mappa]
corso: Meccanica
livello: triennale
cartella: triennale/ANNO 2/Meccanica
---

# Mappa delle competenze: Meccanica

Mappa concettuale del corso `triennale/ANNO 2/Meccanica` (Meccanica razionale, corso 06BPTMQ, a.a. 2022-23, con il manoscritto delle lezioni 2017). **53 competenze**:
- 26 note nuove, tutte in area `fisica`;
- 27 note esistenti estese in append con una sezione "Nei corsi" (Meccanica), segnate "(esistente)". Sono 24 di Fisica 1, 2 di Quantum physics (create in parallelo) e 1 di Analisi 2/Metodi numerici.

Le competenze formano un'unica componente connessa con grado minimo 2. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. "Porta a" è l'inverso di "Prerequisiti", "Collegati" è simmetrico; "(esterno)" indica una nota di un altro corso.

**Convenzione di segno del corso:** $U$ è il *potenziale* ($\vec F=\nabla U$, $Q_k=\partial U/\partial q_k$, energia potenziale $V=-U$). Ne seguono:
- $L=T+U$ ed $E=T-U$;
- equilibrio stabile = **massimo** isolato di $U$;
- piccole oscillazioni $A^0\ddot\eta=B^0\eta$ con $B^0$ hessiana di $U$.

Fisica 1 e Quantum physics usano invece l'energia potenziale ($L=K-U$). La differenza è segnalata in ogni nota estesa.

## Inventario del materiale (2026-11-25)

29 PDF, circa 553 pagine.
- **Fonte primaria, letta per intero:** `Lect1-Kinematics (1).pdf` … `Lect7-Lagrangian (2).pdf`. Sono 7 capitoli di un testo in inglese del docente (cap. 2-8, pp. 13-92 della numerazione stampata, 80 pagine).
  - Il testo è estraibile, ma `pdftotext` perde tutti i simboli matematici: le pagine sono state renderizzate (pymupdf, 85 dpi, due per immagine) e le formule lette sulle immagini.
  - Nelle note le pagine dei `Lect*` sono quelle **stampate** (per esempio Lect7 inizia a p. 79).
  - Lette come immagini: Lect7 tutto; Lect2 pp. 27-34 (non p. 35); Lect5 pp. 56-59 e 62-65 (non pp. 60-61, esempi); Lect1 pp. 17-26; Lect3 pp. 40-43; Lect4 pp. 46-51, 54-55; Lect6 pp. 68-77. Le altre pagine (Lect1 pp. 13-16, Lect3 pp. 36-39 e 44-45, Lect4 pp. 52-53, Lect6 pp. 66-67 e 78) sono state lette solo sul testo estratto, quindi senza formule affidabili.
- **Fonte secondaria:** `MeccRazLezioni.pdf`, 176 pagine manoscritte (scansione senza testo) delle lezioni del 2017, dalla lezione 1 del 06/03/2017.
  - Indice ricostruito dalle intestazioni di tutte le pagine.
  - Lette a campione: pp. 1-6 (vettori), 135-137 (stabilità in senso statico), 168-173 (piccoli moti e pendolo fisico).
  - I numeri di pagina citati per le altre sezioni vengono dall'indice delle intestazioni, non da una lettura completa.
- **Quasi duplicati:** `Lez2-Cinematica.pdf` … `Lez11-PotenzaEqLagrangeLagrangiana.pdf` (151 pagine) sono estratti dello stesso manoscritto 2017 impaginati tre per foglio: verificato su Lez4, Lez5 e Lez11. Lez2, Lez5 e Lez9 aggiungono brevi annotazioni dattiloscritte (per esempio "Equivalente se ha stessa risultante e stesso momento risultante", "A differenza delle r, le q sono indipendenti"), lette con `pdftotext` e senza contenuto nuovo. Citato solo Lez11 p. 1, letto a bassa risoluzione.
- **Scartati per la regola "niente esami":**
  - `raccolta_temi_esame.pdf`: risoluzione dei temi d'esame 2018-19;
  - `Esercitazione-in-aula-1.pdf` … `-10.pdf`: esercitazioni 2022-23, raccolte di esercizi svolti.
  - Non letti. Gli esempi delle note vengono solo dagli esempi svolti nei capitoli `Lect*` e nel manoscritto.

## Nodi con grado più alto nel corso (esterni inclusi)
- Equazioni di Lagrange (esistente): 16
- Leggi di Newton (esistente): 16
- Formula fondamentale della cinematica rigida: 11
- Conservazione dell'energia meccanica (esistente): 10
- Forza conservativa (esistente): 10
- Piccole oscillazioni attorno all'equilibrio: 9

## Cinematica del corpo rigido

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Formule di Poisson** (esistente) | fisica | Poisson formulas | Lect1 p. 19 | Prodotto vettoriale (esterno) | Formula fondamentale della cinematica rigida | — |
| **Formula fondamentale della cinematica rigida** | fisica | legge di distribuzione delle velocità e delle accelerazioni; formula di Rivals | Lect1 pp. 19-20 | Formule di Poisson<br>Corpo rigido<br>Prodotto vettoriale (esterno) | Asse di Mozzi<br>Centro di istantanea rotazione<br>Spostamenti virtuali<br>Momento angolare del corpo rigido<br>Energia cinetica del corpo rigido<br>Potenza delle forze su un corpo rigido | Angoli di Eulero<br>Teorema delle velocità relative |
| **Corpo rigido** (esistente) | fisica | rigid body | Lect1 pp. 15-18 | — | Formula fondamentale della cinematica rigida<br>Angoli di Eulero | — |
| **Angoli di Eulero** | fisica | nutazione, precessione, rotazione propria; singolarità polare | Lect1 pp. 17-19; Lect6 p. 74 | Matrice ortogonale (esterno)<br>Corpo rigido | Equazioni di Eulero<br>Moti alla Poinsot | Formula fondamentale della cinematica rigida<br>Coordinate cicliche |
| **Asse di Mozzi** | fisica | asse di moto; invariante scalare cinematico | Lect1 pp. 20-22 | Formula fondamentale della cinematica rigida<br>Prodotto vettoriale (esterno) | Centro di istantanea rotazione | Sistemi di vettori applicati |
| **Centro di istantanea rotazione** | fisica | CIR; polo delle velocità | Lect1 pp. 21-23; Lect2 p. 34 | Formula fondamentale della cinematica rigida<br>Asse di Mozzi | Moto di puro rotolamento | Classificazione dei vincoli<br>Momento angolare del corpo rigido |
| **Teorema delle velocità relative** (esistente) | fisica | velocità di trascinamento | Lect1 pp. 23-25 | — | — | Formula fondamentale della cinematica rigida |
| **Teorema delle accelerazioni relative** (esistente) | fisica | Coriolis | Lect1 pp. 24-26 | — | — | — |
| **Coordinate intrinseche** (esistente) | fisica | terna intrinseca | Lect1 pp. 13-15; Lect6 pp. 66-68 | — | — | — |

## Vincoli

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Reazione vincolare** (esistente) | fisica | principio dei vincoli; vincoli lisci | Lect4 pp. 54-55; Lect5 p. 56 | — | Classificazione dei vincoli<br>Principio dei lavori virtuali | — |
| **Coordinate generalizzate** (esistente, Quantum physics) | fisica | coordinate libere; coordinate lagrangiane | Lect2 pp. 28-32 | Reazione vincolare | Spostamenti virtuali<br>Componenti lagrangiane delle forze<br>Energia cinetica in coordinate lagrangiane<br>Equazioni di Lagrange | Classificazione dei vincoli |
| **Classificazione dei vincoli** | fisica | olonomo/anolonomo, bilatero/unilatero, scleronomo/reonomo; labile, isostatico, iperstatico | Lect2 pp. 27-35 | Reazione vincolare<br>Coordinate generalizzate | Spostamenti virtuali<br>Principio dei lavori virtuali | Centro di istantanea rotazione<br>Moto di puro rotolamento |
| **Spostamenti virtuali** | fisica | velocità virtuali; spostamento reversibile | Lect2 pp. 28-32 | Classificazione dei vincoli<br>Coordinate generalizzate<br>Formula fondamentale della cinematica rigida | Principio dei lavori virtuali<br>Componenti lagrangiane delle forze<br>Principio di d'Alembert | — |
| **Moto di puro rotolamento** (esistente) | fisica | vincolo di rotolamento | Lect2 p. 34 | Centro di istantanea rotazione | — | Classificazione dei vincoli |

## Geometria delle masse

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Centro di massa** (esistente) | fisica | baricentro; piani coniugati | Lect3 pp. 36-40 | — | — | Sistemi di vettori applicati |
| **Momento d'inerzia** (esistente) | fisica | momento rispetto a un asse | Lect3 pp. 38-43 | — | Tensore d'inerzia | — |
| **Teorema di Huygens-Steiner** (esistente) | fisica | assi paralleli | Lect3 pp. 38-40 | — | — | Tensore d'inerzia<br>Energia cinetica del corpo rigido |
| **Tensore d'inerzia** | fisica | matrice d'inerzia; prodotti d'inerzia; ellissoide d'inerzia; assi principali | Lect3 pp. 41-44 | Momento d'inerzia<br>Forma quadratica (esterno)<br>Matrice simmetrica definita positiva (esterno)<br>Autovalori e autovettori (esterno) | Momento angolare del corpo rigido<br>Energia cinetica del corpo rigido<br>Equazioni di Eulero | Teorema di Huygens-Steiner<br>Moti alla Poinsot |

## Forze, lavoro e potenza

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Leggi di Newton** (esistente) | fisica | classificazione delle forze; m a = F(P,v,t) | Lect4 pp. 46, 52-54 | — | — | — |
| **Sistemi di vettori applicati** | fisica | risultante; momento risultante; asse centrale; sistemi equivalenti | Lect4 pp. 46-48 | Vettori applicati e vettori liberi (esterno)<br>Momento di una forza<br>Prodotto vettoriale (esterno) | Potenza delle forze su un corpo rigido<br>Equilibrio statico del corpo rigido | Asse di Mozzi<br>Centro di massa |
| **Lavoro di una forza** (esistente) | fisica | forma differenziale del lavoro | Lect4 pp. 48-51 | — | Potenza delle forze su un corpo rigido | — |
| **Forza conservativa** (esistente) | fisica | potenziale U; V = −U | Lect4 pp. 49-51 | — | Teorema di stazionarietà del potenziale | Componenti lagrangiane delle forze |
| **Potenza delle forze su un corpo rigido** | fisica | Π = R·v_Q + M_Q·ω | Lect4 pp. 51, 54; Lect6 p. 73 | Sistemi di vettori applicati<br>Formula fondamentale della cinematica rigida<br>Lavoro di una forza | Teorema dell'energia cinetica | Principio dei lavori virtuali |
| **Forze apparenti** (esistente) | fisica | forza di trascinamento; Coriolis | Lect4 p. 54 | — | — | Principio di d'Alembert |

## Statica

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Principio dei lavori virtuali** | fisica | PLV; vincoli ideali; configurazioni di confine | Lect5 pp. 56-58, 62-65 | Spostamenti virtuali<br>Classificazione dei vincoli<br>Reazione vincolare | Teorema di stazionarietà del potenziale<br>Principio di d'Alembert | Componenti lagrangiane delle forze<br>Equilibrio statico del corpo rigido<br>Potenza delle forze su un corpo rigido |
| **Componenti lagrangiane delle forze** | fisica | forze generalizzate; Q_k | Lect5 pp. 57-59; Lect7 p. 79 | Spostamenti virtuali<br>Coordinate generalizzate | Teorema di stazionarietà del potenziale<br>Equazioni di Lagrange | Principio dei lavori virtuali<br>Forza conservativa<br>Principio di d'Alembert |
| **Teorema di stazionarietà del potenziale** | fisica | equilibrio dei sistemi conservativi | Lect5 p. 59 | Principio dei lavori virtuali<br>Componenti lagrangiane delle forze<br>Forza conservativa | Stabilità dell'equilibrio in senso statico | Punti critici in più variabili (esterno)<br>Gradiente (esterno) |
| **Stabilità dell'equilibrio in senso statico** | fisica | massimo isolato del potenziale | Lect5 p. 59; manoscritto pp. 135-137 | Teorema di stazionarietà del potenziale | Teorema di Lagrange-Dirichlet | Classificazione dei punti critici (esterno)<br>Stabilità secondo Lyapunov |
| **Equilibrio statico del corpo rigido** (esistente) | fisica | equazioni cardinali della statica; poligono di appoggio | Lect5 pp. 62-65 | Sistemi di vettori applicati | — | Principio dei lavori virtuali |

## Dinamica dei sistemi e del corpo rigido

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Teorema del moto del centro di massa** (esistente) | fisica | prima equazione della dinamica | Lect6 pp. 68, 71-73 | — | Integrali primi del moto | — |
| **Teorema del momento angolare** (esistente) | fisica | seconda equazione della dinamica | Lect6 p. 72 | — | Integrali primi del moto<br>Equazioni di Eulero | — |
| **Teoremi di König** (esistente) | fisica | K_Q e T rispetto al baricentro | Lect6 pp. 69, 71 | — | Energia cinetica del corpo rigido | Momento angolare del corpo rigido |
| **Momento angolare del corpo rigido** | fisica | K_Q = m(G−Q)∧v_Q + I_Q ω | Lect6 pp. 68-71 | Tensore d'inerzia<br>Formula fondamentale della cinematica rigida<br>Momento angolare (esterno) | Equazioni di Eulero<br>Moti alla Poinsot | Teoremi di König<br>Centro di istantanea rotazione |
| **Energia cinetica del corpo rigido** | fisica | T = ½ m v_G² + ½ I_G ω·ω | Lect6 p. 71 | Tensore d'inerzia<br>Formula fondamentale della cinematica rigida<br>Teoremi di König | Energia cinetica in coordinate lagrangiane | Teorema dell'energia cinetica<br>Teorema di Huygens-Steiner |
| **Teorema dell'energia cinetica** (esistente) | fisica | Ṫ = Π | Lect6 p. 73 | Potenza delle forze su un corpo rigido | — | Energia cinetica del corpo rigido |
| **Conservazione dell'energia meccanica** (esistente) | fisica | E = T − U | Lect6 p. 73 | — | Teorema di Lagrange-Dirichlet | Integrali primi del moto<br>Integrale di Jacobi |
| **Equazioni di Eulero** | fisica | I_Q ω' + ω∧I_Q ω = M_Q | Lect6 pp. 74-77 | Momento angolare del corpo rigido<br>Teorema del momento angolare<br>Tensore d'inerzia<br>Angoli di Eulero | Moti alla Poinsot | Rotazione attorno a un asse fisso |
| **Rotazione attorno a un asse fisso** (esistente) | fisica | I_3 ψ'' = M | Lect6 p. 77 | — | — | Equazioni di Eulero |
| **Moti alla Poinsot** | fisica | rotazioni permanenti; giroscopio; precessione regolare | Lect6 pp. 75-76; Lect1 pp. 25-26 | Equazioni di Eulero<br>Momento angolare del corpo rigido | — | Tensore d'inerzia<br>Autovalori e autovettori (esterno)<br>Integrali primi del moto<br>Angoli di Eulero |
| **Integrali primi del moto** | fisica | integrale primo; grandezza conservata | Lect6 pp. 72-73; manoscritto pp. 111-115 | Teorema del moto del centro di massa<br>Teorema del momento angolare | Coordinate cicliche<br>Integrale di Jacobi | Conservazione della quantità di moto<br>Conservazione del momento angolare<br>Conservazione dell'energia meccanica<br>Moti alla Poinsot |
| **Conservazione della quantità di moto** (esistente) | fisica | — | Lect6 p. 72 | — | — | Integrali primi del moto<br>Coordinate cicliche |
| **Conservazione del momento angolare** (esistente) | fisica | — | Lect6 p. 72 | — | — | Integrali primi del moto |

## Meccanica lagrangiana

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Principio di d'Alembert** | fisica | forze d'inerzia; forze perdute; binomio di Lagrange | Lect7 pp. 79-80 | Principio dei lavori virtuali<br>Spostamenti virtuali | Equazioni di Lagrange | Componenti lagrangiane delle forze<br>Forze apparenti |
| **Energia cinetica in coordinate lagrangiane** | fisica | matrice di massa; T = T2 + T1 + T0 | Lect7 pp. 80-81 | Energia cinetica del corpo rigido<br>Coordinate generalizzate<br>Matrice simmetrica definita positiva (esterno) | Equazioni di Lagrange<br>Integrale di Jacobi<br>Piccole oscillazioni attorno all'equilibrio | Forma quadratica (esterno) |
| **Equazioni di Lagrange** (esistente, Quantum physics) | fisica | lagrangiana L = T + U | Lect7 pp. 79-84 | Principio di d'Alembert<br>Componenti lagrangiane delle forze<br>Energia cinetica in coordinate lagrangiane | Coordinate cicliche<br>Integrale di Jacobi<br>Piccole oscillazioni attorno all'equilibrio | Teorema di esistenza e unicità locale (esterno) |
| **Coordinate cicliche** | fisica | coordinata ignorabile; momento cinetico | Lect7 p. 84 | Equazioni di Lagrange<br>Integrali primi del moto | — | Conservazione della quantità di moto<br>Integrale di Jacobi<br>Angoli di Eulero |
| **Integrale di Jacobi** | fisica | hamiltoniana H(q, q̇, t); teorema di Eulero sulle funzioni omogenee | Lect7 p. 85 | Equazioni di Lagrange<br>Energia cinetica in coordinate lagrangiane<br>Integrali primi del moto | — | Conservazione dell'energia meccanica<br>Equazioni di Hamilton (esterno)<br>Coordinate cicliche |

## Stabilità e piccole oscillazioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Stabilità secondo Lyapunov** | fisica | stabilità dinamica | Lect7 pp. 86-88 | Teorema di esistenza e unicità locale (esterno) | Teorema di Lagrange-Dirichlet | Stabilità dell'equilibrio in senso statico<br>Condizionamento dei problemi di Cauchy (esterno)<br>Criterio di Foster-Lyapunov per la ricorrenza (esterno) |
| **Teorema di Lagrange-Dirichlet** | fisica | Theorem 8.5 | Lect7 pp. 86, 89-91 | Stabilità secondo Lyapunov<br>Stabilità dell'equilibrio in senso statico<br>Conservazione dell'energia meccanica | Piccole oscillazioni attorno all'equilibrio | Classificazione dei punti critici (esterno) |
| **Piccole oscillazioni attorno all'equilibrio** | fisica | piccoli moti; matrice di rigidezza | Lect7 pp. 86-88; manoscritto pp. 167-173 | Teorema di Lagrange-Dirichlet<br>Equazioni di Lagrange<br>Energia cinetica in coordinate lagrangiane<br>Formula di Taylor in più variabili (esterno) | Modi normali di oscillazione | Moto armonico semplice<br>Equazioni lineari del secondo ordine a coefficienti costanti (esterno)<br>Pendolo composto<br>Pendolo semplice |
| **Modi normali di oscillazione** | fisica | frequenze proprie; modo lineare; modo iperbolico | Lect7 pp. 88-89, 92 | Piccole oscillazioni attorno all'equilibrio<br>Autovalori e autovettori (esterno)<br>Matrice simmetrica definita positiva (esterno) | — | Forma quadratica (esterno)<br>Matrice diagonalizzabile (esterno) |
| **Pendolo composto** (esistente) | fisica | pendolo fisico | manoscritto pp. 172-173 | — | — | Piccole oscillazioni attorno all'equilibrio |

## Concetti esterni (da collegare)

**Collegamenti creati verso note di altri corsi**
- Analisi 2: Punti critici in più variabili, Gradiente, Classificazione dei punti critici, Formula di Taylor in più variabili (hessiana di $U$), Teorema di esistenza e unicità locale (esteso con una sezione Meccanica). Il lavoro come forma differenziale esatta è nella sezione Meccanica di Lavoro di una forza; Campo conservativo e Integrale di linea sono raggiunti attraverso Forza conservativa e Lavoro di una forza.
- Algebra lineare: Autovalori e autovettori, Matrice simmetrica definita positiva, Forma quadratica, Matrice ortogonale, Matrice diagonalizzabile, Prodotto vettoriale, Vettori applicati e vettori liberi.
- Analisi 1 e Metodi numerici: Equazioni lineari del secondo ordine a coefficienti costanti; Condizionamento dei problemi di Cauchy.
- Processi stocastici: Criterio di Foster-Lyapunov per la ricorrenza (analogia delle funzioni di Lyapunov).
- Quantum physics: Coordinate generalizzate ed Equazioni di Lagrange estese; Integrale di Jacobi collegato a Equazioni di Hamilton.

**Conversioni "(da collegare)":** nessuna. Nel vault non c'erano menzioni in testo semplice di concetti di meccanica razionale.

**Lasciati fuori:** equazioni di Hamilton e parentesi di Poisson, assenti dal materiale di Meccanica (sono di Quantum physics); quaternioni (solo citati).

## Dubbi

- **Sviste nel testo `Lect*`** (riportate con avviso):
  - Lect7 p. 85: l'ultimo passaggio di Thm 8.4 è stampato "$H=T_2-T_1+U$". Dai termini della stessa riga segue $T_2-T_0-U$; il calcolo è mio, segnalato in Integrale di Jacobi.
  - Lect4 p. 51: forza elastica stampata come $\vec F=k(P-O)$ con $\psi(r)=-kr$, segnalato in Forza conservativa.
  - Lect7 p. 84: in $p_\psi$ dell'Ex3 i segni dei termini non sono coerenti con $T$; non usato.
  - Lect3 (4.36): il segno dei termini misti dipende dalla definizione dei prodotti d'inerzia con il segno meno (4.37); riportato com'è.
- **Nome "Teorema di Lagrange-Dirichlet":** nel testo è solo "Theorem 8.5"; il nome tradizionale è dichiarato nella nota.
- **Altre formule stampate in modo incoerente** (riportate com'è con avviso): $b_k$ con un fattore $\frac12$ (8.13) in Energia cinetica in coordinate lagrangiane; elemento $(2,2)$ di $A^0$ nell'Ex4 (p. 90), stessa nota; versori $\hat\imath_h$ nella (7.49) di Angoli di Eulero.
- **Manoscritto 2017** letto solo a campione: alcuni intervalli di pagine citati (per esempio "Equazioni cardinali della dinamica", pp. 94-106) vengono dall'indice delle intestazioni. L'esempio del disco sul piano inclinato (p. 113, Integrali primi del moto) è segnalato "da verificare sul PDF".
- **Accorpamenti:**
  - formula delle accelerazioni e classificazione dei moti rigidi dentro Formula fondamentale della cinematica rigida;
  - invariante scalare cinematico dentro Asse di Mozzi;
  - vincoli ideali e configurazioni di confine dentro Principio dei lavori virtuali;
  - poligono di appoggio nella sezione Meccanica di Equilibrio statico del corpo rigido;
  - giroscopio, rotazioni permanenti e precessione regolare dentro Moti alla Poinsot;
  - teorema di Eulero sulle funzioni omogenee dentro Integrale di Jacobi;
  - binomio di Lagrange dentro Principio di d'Alembert;
  - funzione lagrangiana nella nota esistente Equazioni di Lagrange.
- **Nomi scelti per evitare alias occupati:**
  - Piccole oscillazioni attorno all'equilibrio ("piccole oscillazioni" è alias di Pendolo semplice);
  - Integrale di Jacobi ("hamiltoniano" è alias di Operatori quantistici, "funzione di Hamilton" di Equazioni di Hamilton);
  - Classificazione dei vincoli ("vincolo" è alias di Reazione vincolare, "vincoli olonomi" di Coordinate generalizzate);
  - Potenza delle forze su un corpo rigido ("potenza" è alias di Lavoro di una forza).
- **Coordinamento con Quantum physics:** "Coordinate generalizzate" ed "Equazioni di Lagrange" erano state create in parallelo e sono state estese invece di creare "Coordinate lagrangiane" ed "Equazioni di Lagrange" per Meccanica.
