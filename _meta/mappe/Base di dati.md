---
tipo: meta
tags: [meta, mappa]
corso: Base di dati
livello: triennale
cartella: triennale/ANNO 3/base di dati
---

# Mappa delle competenze: Base di dati

Mappa concettuale del corso `triennale/ANNO 3/base di dati` (Politecnico di Torino, DBDMG; testo di riferimento Atzeni, Ceri, Fraternali, Paraboschi, Torlone, *Basi di dati*). **50 competenze nuove** e 15 note esistenti estese o collegate. Area `informatica` per tutte. I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo.

Fonti: tutte le slide di teoria (`Introduzione_alle_basi_dati.pdf`, `Modello-relazionale-1.pdf`, `Algebra_Relazionale.pdf`, `1-SQL_fondamenti.pdf` ... `6-SQL_gestione_tabelle.pdf`, `SQL_costrutti_avanzati.pdf`, `Trigger-ita.pdf`, `Progettazione_ER-1.pdf`, `Progettazione_ER_gestione_tempo.pdf`, `Progettazione_ER_ristrutturazione.pdf`, `Progettazione_modello_logico.pdf`, `Normalizzazione-1.pdf`, `applicazioni_web.pdf`, `streamlit.pdf`, `live_coding.pdf`) e i due esempi svolti a lezione (`Esempio_progettazione-concettuale.pdf`, `Esempio_progettazione_logica.pdf`, caso ASL), usati solo nelle sezioni "Come si usa". `BD-Intro23-24.pdf` serve solo come elenco degli argomenti. Gli script di `HW base di dati/` (`creaDB.sql`, `home.py`, `pages/*.py`) sono usati solo come esempi di codice. Nessun tema d'esame letto. Convenzione per le pagine: "p. N" è la pagina del PDF; il numero stampato sulla slide è N−1 (la copertina non è numerata).

## Introduzione alle basi di dati

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **DBMS** | informatica | Data Base Management System; sistema di gestione di basi di dati; base di dati; database; DDL e DML; utenti di una base di dati; DBA | `Introduzione_alle_basi_dati.pdf` | — | Modello relazionale (modello logico più diffuso)<br>Indipendenza dei dati (conseguenza dei livelli di astrazione)<br>Linguaggio SQL (DDL e DML)<br>Fasi della progettazione di una base di dati (si progetta la base di dati) | Architettura di un DBMS (esistente)<br>Gerarchia di memoria (esistente)<br>Sistemi NoSQL (esistente)<br>Controllo dell'accesso in SQL (privatezza) |
| **Indipendenza dei dati** | informatica | indipendenza fisica; indipendenza logica; architettura ANSI/SPARC; schema esterno; schema logico; schema interno; livelli di astrazione | `Introduzione_alle_basi_dati.pdf` | DBMS | Vista (SQL) (schema esterno) | Fasi della progettazione di una base di dati |

## Modello relazionale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Modello relazionale** | informatica | relational model; relazione; tupla; n-upla; attributo; dominio; grado; cardinalità di una relazione; schema e istanza; riferimento basato su valori; Codd | `Modello-relazionale-1.pdf` | DBMS | Valore nullo<br>Chiave di una relazione<br>Vincoli di integrità<br>Algebra relazionale<br>Linguaggio SQL<br>Traduzione dello schema ER nel modello relazionale<br>Anomalie di aggiornamento | Modello documentale (esistente)<br>Modello Entità-Relazione (concettuale contro logico) |
| **Valore nullo** | informatica | NULL; null value; IS NULL; IS NOT NULL; informazione incompleta; attributo opzionale | `Modello-relazionale-1.pdf`; `1-SQL_fondamenti.pdf` | Modello relazionale | Outer join (completamento con NULL) | Chiave di una relazione<br>Istruzione SELECT |
| **Chiave di una relazione** | informatica | chiave; key; superchiave; superkey; chiave primaria; primary key; chiave candidata; univocità e minimalità | `Modello-relazionale-1.pdf` | Modello relazionale | Integrità referenziale<br>Dipendenza funzionale | Valore nullo<br>Identificatore ed entità debole |
| **Vincoli di integrità** | informatica | integrity constraints; vincolo intra-relazionale; vincolo inter-relazionale; vincolo di dominio; vincolo di tupla; UNIQUE; NOT NULL; CHECK; PRIMARY KEY | `Modello-relazionale-1.pdf`; `6-SQL_gestione_tabelle.pdf` | Modello relazionale | Integrità referenziale<br>Definizione delle tabelle in SQL<br>Dipendenza funzionale | Trigger (esistente)<br>Proprietà ACID (esistente)<br>Documentazione di schemi ER |
| **Integrità referenziale** | informatica | vincolo di integrità referenziale; chiave esterna; foreign key; REFERENCES; ON DELETE; ON UPDATE; CASCADE; SET NULL; SET DEFAULT; NO ACTION | `Modello-relazionale-1.pdf`; `6-SQL_gestione_tabelle.pdf` | Chiave di una relazione<br>Vincoli di integrità | Manipolazione dei dati in SQL | Traduzione dello schema ER nel modello relazionale<br>Definizione delle tabelle in SQL |

## Algebra relazionale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Algebra relazionale** | informatica | relational algebra; proprietà di chiusura; operatori unari e binari; linguaggio procedurale | `Algebra_Relazionale.pdf` | Modello relazionale | Selezione e proiezione<br>Join relazionale<br>Operatori insiemistici relazionali<br>Divisione relazionale<br>Ottimizzazione algebrica (esistente) | Linguaggio SQL (procedurale contro dichiarativo)<br>Funzioni aggregate (operatori estesi) |
| **Selezione e proiezione** | informatica | selezione; proiezione; selection; projection; sigma; pi; decomposizione orizzontale; decomposizione verticale | `Algebra_Relazionale.pdf` | Algebra relazionale | Join relazionale<br>Istruzione SELECT<br>Decomposizione senza perdita | — |
| **Join relazionale** | informatica | join; prodotto cartesiano; cartesian product; natural join; theta-join; equi-join; INNER JOIN | `Algebra_Relazionale.pdf`; `1-SQL_fondamenti.pdf` | Algebra relazionale<br>Selezione e proiezione | Semi-join e anti-join<br>Outer join<br>Istruzione SELECT<br>Decomposizione senza perdita | Nested loop join (esistente) |
| **Semi-join e anti-join** | informatica | semi-join; semijoin; anti-join; antijoin | `Algebra_Relazionale.pdf` | Join relazionale | — | Operatori insiemistici relazionali<br>Interrogazioni nidificate |
| **Outer join** | informatica | left outer join; right outer join; full outer join; LEFT JOIN; join esterno | `Algebra_Relazionale.pdf`; `1-SQL_fondamenti.pdf` | Join relazionale<br>Valore nullo | — | Istruzione SELECT |
| **Operatori insiemistici relazionali** | informatica | unione di relazioni; intersezione di relazioni; differenza di relazioni; UNION; UNION ALL; INTERSECT; EXCEPT; compatibilità di schema | `Algebra_Relazionale.pdf`; `3-SQL_operatori_insiemistici.pdf` | Algebra relazionale | — | Operazioni sugli insiemi (esistente)<br>Semi-join e anti-join<br>Interrogazioni nidificate<br>Common Table Expression |
| **Divisione relazionale** | informatica | divisione; division; operatore di divisione; divisione in SQL; per ogni | `Algebra_Relazionale.pdf`; `2-SQL_query_nidificate-2.pdf` | Algebra relazionale<br>GROUP BY e HAVING | — | Interrogazioni nidificate<br>Funzioni aggregate |

## SQL: interrogazioni

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Linguaggio SQL** | informatica | SQL; Structured Query Language; Data Manipulation Language; Data Definition Language; linguaggio dichiarativo; linguaggio ospite | `1-SQL_fondamenti.pdf` | DBMS<br>Modello relazionale | Istruzione SELECT<br>Manipolazione dei dati in SQL<br>Definizione delle tabelle in SQL<br>Controllo dell'accesso in SQL<br>Object-Relational Mapping<br>Accesso a un DBMS da Python | Algebra relazionale<br>Ottimizzatore di query (esistente) |
| **Istruzione SELECT** | informatica | SELECT FROM WHERE; DISTINCT; LIKE; ORDER BY; alias di tabella; AS; join in SQL | `1-SQL_fondamenti.pdf` | Linguaggio SQL<br>Selezione e proiezione<br>Join relazionale | Funzioni aggregate<br>Interrogazioni nidificate<br>Vista (SQL) | Valore nullo<br>Outer join |
| **Funzioni aggregate** | informatica | aggregate functions; COUNT; SUM; AVG; MAX; MIN; COUNT DISTINCT | `1-SQL_fondamenti.pdf` | Istruzione SELECT | GROUP BY e HAVING<br>Funzioni OLAP con finestra (esistente) | Algebra relazionale<br>Divisione relazionale |
| **GROUP BY e HAVING** | informatica | GROUP BY; HAVING; raggruppamento; condizioni sui gruppi | `1-SQL_fondamenti.pdf` | Funzioni aggregate | Divisione relazionale<br>Tabella derivata<br>ROLLUP e CUBE (esistente) | DataFrame di pandas |
| **Interrogazioni nidificate** | informatica | subquery; sottointerrogazione; query nidificata; IN; NOT IN; costruttore di tupla | `2-SQL_query_nidificate-2.pdf` | Istruzione SELECT | Interrogazioni correlate | Semi-join e anti-join<br>Operatori insiemistici relazionali<br>Divisione relazionale<br>Vista (SQL) |
| **Interrogazioni correlate** | informatica | EXISTS; NOT EXISTS; condizione di correlazione; subquery correlata; visibilità degli attributi | `2-SQL_query_nidificate-2.pdf` | Interrogazioni nidificate | Tabella derivata | Semi-join e anti-join |
| **Tabella derivata** | informatica | derived table; tabella temporanea nella FROM; aggregati a due livelli | `4-SQL_query_avanzate.pdf` | GROUP BY e HAVING<br>Interrogazioni correlate | Common Table Expression | Vista (SQL) |
| **Common Table Expression** | informatica | CTE; WITH; WITH RECURSIVE; CTE ricorsiva; CTE referenziate | `4-SQL_query_avanzate.pdf` | Tabella derivata | — | Operatori insiemistici relazionali |
| **Query spaziali in SQL** | informatica | dati spaziali; GEOMETRY; POINT; LINESTRING; POLYGON; ST_Distance_Sphere; ST_Intersects; MBR | `4-SQL_query_avanzate.pdf` | Definizione delle tabelle in SQL | — | Funzioni JSON in SQL |
| **Funzioni JSON in SQL** | informatica | JSON; JSON_EXTRACT; JSON_CONTAINS; JSON_SET; JSON_OBJECT; JSON_ARRAY; path JSON | `4-SQL_query_avanzate.pdf` | Definizione delle tabelle in SQL | — | Modello documentale (esistente)<br>Query spaziali in SQL |

## SQL: definizione, aggiornamento e controllo

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Manipolazione dei dati in SQL** | informatica | INSERT; UPDATE; DELETE; istruzioni di aggiornamento; INSERT INTO SELECT | `5-SQL_manipolazione_dati.pdf` | Linguaggio SQL<br>Integrità referenziale | — | Transazione (esistente)<br>Vista (SQL) |
| **Definizione delle tabelle in SQL** | informatica | CREATE TABLE; ALTER TABLE; DROP TABLE; domini elementari; tipi di dato SQL; DEFAULT; RESTRICT; CASCADE | `6-SQL_gestione_tabelle.pdf` | Linguaggio SQL<br>Vincoli di integrità<br>Traduzione dello schema ER nel modello relazionale | Query spaziali in SQL<br>Funzioni JSON in SQL | Integrità referenziale<br>Ottimizzatore di query (esistente) |
| **Vista (SQL)** | informatica | view; vista; CREATE VIEW; DROP VIEW; tabella virtuale; viste aggiornabili; aggiornabilità delle viste | `SQL_costrutti_avanzati.pdf` | Istruzione SELECT<br>Indipendenza dei dati | — | Vista materializzata (esistente)<br>Controllo dell'accesso in SQL<br>Manipolazione dei dati in SQL<br>Interrogazioni nidificate<br>Tabella derivata |
| **Controllo dell'accesso in SQL** | informatica | GRANT; REVOKE; privilegi; WITH GRANT OPTION; ruolo; CREATE ROLE; SET ROLE; sicurezza dei dati | `SQL_costrutti_avanzati.pdf` | Linguaggio SQL | — | Vista (SQL)<br>DBMS |
| Transazione (esistente) | informatica | START TRANSACTION; COMMIT; ROLLBACK | `SQL_costrutti_avanzati.pdf` (pp. 25-31) | — | — | Manipolazione dei dati in SQL<br>Accesso a un DBMS da Python |
| Proprietà ACID (esistente) | informatica | effetto domino | `SQL_costrutti_avanzati.pdf` (pp. 32-36) | — | — | Vincoli di integrità |
| Trigger (esistente) | informatica | tabella mutante; grafo di attivazione | `Trigger-ita.pdf`; `6-SQL_gestione_tabelle.pdf` (pp. 26-27) | Vincoli di integrità | — | — |
| Progettazione fisica di una base di dati (esistente) | informatica | CREATE INDEX; DROP INDEX | `SQL_costrutti_avanzati.pdf` (pp. 52-63) | Fasi della progettazione di una base di dati | — | — |
| Ottimizzatore di query (esistente) | informatica | dizionario dei dati; metadati; USER_TABLES | `6-SQL_gestione_tabelle.pdf` (pp. 14-20); `1-SQL_fondamenti.pdf` (pp. 39, 51) | — | — | Linguaggio SQL<br>Definizione delle tabelle in SQL |

## Progettazione concettuale

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Fasi della progettazione di una base di dati** | informatica | ciclo di vita di un sistema informativo; progettazione concettuale logica e fisica; raccolta e analisi dei requisiti; metodologia di progettazione; schema concettuale; schema logico; schema fisico | `Progettazione_ER-1.pdf`; `Esempio_progettazione-concettuale.pdf` | DBMS | Modello Entità-Relazione<br>Progettazione concettuale<br>Ristrutturazione dello schema ER | Indipendenza dei dati<br>Metodologia di progettazione di un data warehouse (esistente)<br>Progettazione fisica di una base di dati (esistente) |
| **Modello Entità-Relazione** | informatica | modello E-R; modello ER; Entity-Relationship; entità; relazione ER; associazione; attributo composto; relazione ternaria; relazione ricorsiva; UML | `Progettazione_ER-1.pdf` | Fasi della progettazione di una base di dati | Cardinalità nel modello ER<br>Identificatore ed entità debole<br>Generalizzazione nel modello ER<br>Documentazione di schemi ER<br>Gestione del tempo nello schema ER<br>Progettazione concettuale | Modello relazionale |
| **Cardinalità nel modello ER** | informatica | cardinalità delle relazioni; cardinalità minima e massima; uno a uno; uno a molti; molti a molti; partecipazione opzionale; partecipazione obbligatoria; cardinalità di un attributo; attributo multivalore | `Progettazione_ER-1.pdf` | Modello Entità-Relazione | Identificatore ed entità debole<br>Gestione del tempo nello schema ER<br>Traduzione dello schema ER nel modello relazionale | — |
| **Identificatore ed entità debole** | informatica | identificatore; identificatore interno; identificatore esterno; entità debole; weak entity; identificatore composto | `Progettazione_ER-1.pdf` | Modello Entità-Relazione<br>Cardinalità nel modello ER | Gestione del tempo nello schema ER<br>Ristrutturazione dello schema ER | Chiave di una relazione<br>Traduzione dello schema ER nel modello relazionale |
| **Generalizzazione nel modello ER** | informatica | generalizzazione; specializzazione; entità padre; entità figlia; ereditarietà; totale; parziale; esclusiva; sovrapposta; sottoinsieme; gerarchia ER | `Progettazione_ER-1.pdf` | Modello Entità-Relazione | Eliminazione delle generalizzazioni | Progettazione concettuale |
| **Documentazione di schemi ER** | informatica | dizionario dei dati ER; regole di derivazione; vincoli d'integrità sui dati; business rules | `Progettazione_ER-1.pdf` | Modello Entità-Relazione | — | Vincoli di integrità<br>Ristrutturazione dello schema ER |
| **Gestione del tempo nello schema ER** | informatica | entità Tempo; entità storicizzata; storicizzazione; attributi temporali; rappresentazione del tempo | `Progettazione_ER_gestione_tempo.pdf` | Modello Entità-Relazione<br>Cardinalità nel modello ER<br>Identificatore ed entità debole | — | Progettazione concettuale<br>Dimensioni che variano nel tempo (esistente) |
| **Progettazione concettuale** | informatica | strategia ibrida; criteri di rappresentazione; qualità di uno schema concettuale; correttezza; completezza; minimalità; leggibilità; glossario dei termini | `Esempio_progettazione-concettuale.pdf` | Fasi della progettazione di una base di dati<br>Modello Entità-Relazione | Ristrutturazione dello schema ER | Generalizzazione nel modello ER<br>Gestione del tempo nello schema ER<br>Forma normale di Boyce-Codd |

## Progettazione logica

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Ristrutturazione dello schema ER** | informatica | schema ER ristrutturato; analisi delle ridondanze; eliminazione degli attributi composti; eliminazione degli attributi multivalore; partizionamento di entità; scelta degli identificatori primari | `Progettazione_ER_ristrutturazione.pdf` | Fasi della progettazione di una base di dati<br>Progettazione concettuale<br>Identificatore ed entità debole | Eliminazione delle generalizzazioni<br>Traduzione dello schema ER nel modello relazionale | Documentazione di schemi ER |
| **Eliminazione delle generalizzazioni** | informatica | accorpamento delle figlie nel padre; accorpamento del padre nelle figlie; sostituzione con relazioni IS-A; attributo discriminante | `Progettazione_ER_ristrutturazione.pdf` | Generalizzazione nel modello ER<br>Ristrutturazione dello schema ER | Traduzione dello schema ER nel modello relazionale | — |
| **Traduzione dello schema ER nel modello relazionale** | informatica | progettazione logica relazionale; traduzione di entità; traduzione di relazioni; mapping ER-relazionale | `Progettazione_modello_logico.pdf`; `Esempio_progettazione_logica.pdf` | Ristrutturazione dello schema ER<br>Eliminazione delle generalizzazioni<br>Cardinalità nel modello ER<br>Modello relazionale | Definizione delle tabelle in SQL | Integrità referenziale<br>Identificatore ed entità debole |

## Normalizzazione

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Anomalie di aggiornamento** | informatica | ridondanza; anomalia di inserimento; anomalia di cancellazione; anomalia di modifica; update anomalies | `Normalizzazione-1.pdf` | Modello relazionale | Dipendenza funzionale<br>Forma normale di Boyce-Codd | Schema a stella (esistente) |
| **Dipendenza funzionale** | informatica | functional dependency; X → Y; dipendenza banale; dipendenza non banale | `Normalizzazione-1.pdf` | Chiave di una relazione<br>Vincoli di integrità<br>Anomalie di aggiornamento | Forma normale di Boyce-Codd<br>Decomposizione senza perdita<br>Conservazione delle dipendenze | — |
| **Forma normale di Boyce-Codd** | informatica | BCNF; Boyce Codd Normal Form; normalizzazione relazionale; schema normalizzato; decomposizione in BCNF | `Normalizzazione-1.pdf` | Dipendenza funzionale<br>Anomalie di aggiornamento | Decomposizione senza perdita<br>Conservazione delle dipendenze | Snowflake schema (esistente)<br>Progettazione concettuale |
| **Decomposizione senza perdita** | informatica | lossless decomposition; decomposizione senza perdita di informazione; tuple spurie | `Normalizzazione-1.pdf` | Dipendenza funzionale<br>Forma normale di Boyce-Codd<br>Join relazionale<br>Selezione e proiezione | — | Conservazione delle dipendenze |
| **Conservazione delle dipendenze** | informatica | dependency preservation; perdita delle dipendenze | `Normalizzazione-1.pdf` | Dipendenza funzionale<br>Forma normale di Boyce-Codd | — | Decomposizione senza perdita |

## Applicazioni web e Python

| Nome | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| Architettura client-server (esistente) | informatica | — | `applicazioni_web.pdf` (p. 5) | — | Protocollo HTTP | — |
| **Protocollo HTTP** | informatica | HTTP; HTTPS; GET; POST; PUT; DELETE; status code; parametri URL; query string; applicazione web | `applicazioni_web.pdf` | Architettura client-server (esistente) | Linguaggio HTML e CSS | Accesso a un DBMS da Python |
| **Linguaggio HTML e CSS** | informatica | HTML; CSS; fogli di stile; tag; Bootstrap; frontend; backend | `applicazioni_web.pdf`; `streamlit.pdf` | Protocollo HTTP | — | Streamlit<br>Object-Relational Mapping |
| **Object-Relational Mapping** | informatica | ORM; Flask; Django; Model View Template; framework web Python | `applicazioni_web.pdf` | Linguaggio SQL | — | Accesso a un DBMS da Python<br>Linguaggio HTML e CSS |
| **Accesso a un DBMS da Python** | informatica | SQLAlchemy; create_engine; connect; execute; cursor; autocommit; mysql.connector; connessione al DBMS | `applicazioni_web.pdf`; `HW base di dati/home.py` | Linguaggio SQL<br>Transazione (esistente) | Streamlit | Object-Relational Mapping<br>Gestione delle eccezioni (esistente)<br>Protocollo HTTP |
| **Streamlit** | informatica | st.write; widget; session state; st.form; st.columns; st.tabs; st.sidebar; applicazione multipagina; rerun | `streamlit.pdf`; `live_coding.pdf` | Accesso a un DBMS da Python<br>DataFrame di pandas | — | Linguaggio HTML e CSS<br>Git (esistente) |
| **DataFrame di pandas** | informatica | pandas; DataFrame; Series; NumPy; ndarray; groupby | `streamlit.pdf` | Dizionario in Python (esistente) | Streamlit | GROUP BY e HAVING<br>Formato CSV (esistente) |
| Git (esistente) | informatica | — | `live_coding.pdf` (pp. 4-5, 11) | — | — | Streamlit |

## Collegamenti aggiunti a note esistenti di Data science tecnologie basi di dati

Le "Concetti esterni (da collegare)" della mappa magistrale (SQL di base, algebra relazionale, ER, normalizzazione) ora puntano a note vere. Righe aggiunte in append:
- Ottimizzazione algebrica: prerequisito Algebra relazionale.
- ROLLUP e CUBE: prerequisito GROUP BY e HAVING.
- Funzioni OLAP con finestra: prerequisito Funzioni aggregate.
- Schema a stella: collegato Anomalie di aggiornamento (la denormalizzazione accetta ridondanza).
- Snowflake schema: collegato Forma normale di Boyce-Codd.
- Metodologia di progettazione di un data warehouse: collegato Fasi della progettazione di una base di dati.

## Concetti esterni (da collegare)

- **Docker e container**: `live_coding.pdf` (p. 6-10), una slide introduttiva; nessuna nota, citato in Streamlit.
- **NumPy come libreria numerica**: corsi di programmazione scientifica; qui è alias di DataFrame di pandas (una slide).
- **Forme normali 1NF, 2NF, 3NF, chiusura e assiomi di Armstrong**: non trattati in `Normalizzazione-1.pdf` (solo BCNF); nessuna nota.

## Dubbi

- Le slide dicono che "in presenza di valori NULL qualsiasi predicato di confronto è falso" (`1-SQL_fondamenti.pdf` p. 31-32): riportato così, senza la logica a tre valori che le slide non nominano.
- `1-SQL_fondamenti.pdf` p. 8 elenca COMMIT e ROLLBACK sotto il DDL ("Definizione di transazioni"): riportato come nelle slide.
- `Trigger-ita.pdf`: la condizione dell'esempio di riordino è `N=0` a p. 33 e `N==0` a p. 34; nella nota esistente non si cita codice, nessuna modifica.
- `Normalizzazione-1.pdf`: le tabelle Impiegato di p. 26 (Neri categoria 5, Bruni 6) e di p. 34/40 (Neri 4, Bruni 5) hanno valori diversi; le note citano solo gli schemi e le dipendenze.
- La condizione di decomposizione senza perdita ($X_0\to X_1$ o $X_0\to X_2$) è enunciata nelle slide solo come condizione sufficiente; così nella nota.
- Simboli di theta-join, semi-join, anti-join e outer join persi da `pdftotext`: verificati sulle immagini (pp. 36, 38, 44, 45, 56, 58, 59, 79). Verificati sulle immagini anche: tabella dei domini (`6-SQL_gestione_tabelle.pdf` pp. 6-7), esempi GRANT (`SQL_costrutti_avanzati.pdf` p. 46), cardinalità Persona-Comune (`Progettazione_ER-1.pdf` p. 50), chiavi primarie sottolineate (`Progettazione_modello_logico.pdf` pp. 13-17). Negli altri schemi relazionali citati la sottolineatura delle chiavi si perde nel testo estratto. Diagrammi ER (`Progettazione_ER-1.pdf` p. 42, 49-56, 66-69; `Progettazione_ER_ristrutturazione.pdf` p. 23-38) sono solo immagini: le note usano il testo delle slide e gli schemi relazionali stampati.
- Il "dizionario dei dati" del DBMS (`6-SQL_gestione_tabelle.pdf` p. 14-20) è alias della nota esistente Ottimizzatore di query, quindi va in append lì; il "dizionario dei dati" della documentazione ER è un'altra cosa e sta in Documentazione di schemi ER.
- Gli script HW usano `mysql.connector` mentre le slide insegnano SQLAlchemy: nelle note il codice HW è dichiarato come script dell'homework.
- `5-SQL_manipolazione_dati.pdf` usa negli esempi la colonna `Città` per P e F, mentre lo schema di esempio ha `Magazzino` e `Sede`: il codice è riportato come nelle slide.
- Collegamenti dedotti e non scritti nelle slide: Interrogazioni correlate ↔ Semi-join e anti-join (EXISTS come filtro per esistenza) e DataFrame di pandas ↔ GROUP BY e HAVING (groupby come GROUP BY), dichiarati come analogie nelle note.
- Note esistenti: 9 estese con una sezione "Nei corsi" (Transazione, Proprietà ACID, Trigger, Progettazione fisica di una base di dati, Ottimizzatore di query, Architettura client-server, Git, Gerarchia di memoria, Modello documentale) e 6 con il solo collegamento aggiunto (vedi sopra).
- `6-SQL_gestione_tabelle.pdf` p. 6-7 elenca `SDO_GEOMETRY` (tipo Oracle) insieme ai tipi spaziali MySQL senza distinguerli: riportato così.
- `BD-Intro23-24.pdf` (organizzazione del corso, laboratori, homework, esame) non è usato come fonte di contenuto.
