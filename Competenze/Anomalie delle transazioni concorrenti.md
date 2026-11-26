---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["lost update", "perdita di aggiornamento", "dirty read", "lettura sporca", "inconsistent read", "lettura inconsistente", "ghost update", "aggiornamento fantasma", "scheduler", "phantom"]
tags: [competenza, area/informatica]
---

# Anomalie delle transazioni concorrenti

> Errori di correttezza che si verificano se le operazioni di transazioni concorrenti vengono interfogliate senza controllo: lost update, dirty read, inconsistent read, ghost update.

## Definizione / enunciato
Il carico dei DBMS operativi si misura in **tps** (transazioni al secondo; circa $10$-$10^3$ per applicazioni bancarie e prenotazioni aeree). Il controllo della concorrenza aumenta l'efficienza massimizzando il throughput e minimizzando il tempo di risposta. Le operazioni elementari sono $r(x)$ e $w(x)$ su un oggetto $x$ (ognuna può leggere/scrivere una pagina intera). Lo **scheduler**, blocco del gestore della concorrenza, decide se e quando soddisfare le richieste; senza scheduler si hanno le **anomalie**:
- **Lost update**: T1 e T2 leggono $x=2$, entrambe scrivono $x=3$; il valore corretto è 4, l'effetto di T2 va perso. Schedule $r_1(x)\,r_2(x)\,w_2(x)\,w_1(x)$.
- **Dirty read**: T2 legge $x=3$ scritto da T1, che poi abortisce (rollback a cascata): T2 ha letto uno stato intermedio mai diventato stabile.
- **Inconsistent read**: T1 legge $x$ due volte e ottiene valori diversi perché T2 l'ha modificato in mezzo. Schedule $r_1(x)\,r_2(x)\,w_2(x)\,r_1(x)$.
- **Ghost update (a)**: T1 calcola $x+y+z$ mentre T2 sposta 100 da $y$ a $z$; T1 vede solo in parte l'effetto di T2 e ottiene 1100 invece di $400+200+400=1000$.
- **Ghost update (b)**: T1 calcola due volte la media degli stipendi di un reparto mentre T2 **inserisce** un nuovo impiegato: il dato non esisteva prima dell'insert, quindi non poteva essere bloccato.

## Formule chiave
Esempio ghost update (a): $x=400$, $y=300\to200$, $z=300\to400$; T1 legge $x=400$, $y=300$, $z=400$ e somma $1100$.

## Intuizione
Ogni anomalia nasce perché una transazione vede, o sovrascrive, uno stato che in nessuna esecuzione seriale potrebbe esistere.

## Come si usa
All'esame si riconosce l'anomalia in uno schedule e si mostra che non è equivalente a nessuno schedule seriale (quindi va rifiutato). Il dirty read richiede di togliere l'ipotesi di commit projection (risolto dal 2PL stretto); il ghost update (b) richiede il predicate locking. I livelli di isolamento SQL dicono quali anomalie sono ammesse.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Concurrency control", anomalie con diagrammi temporali e schedule. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 3-12, 23-28).

## Prerequisiti
- [[Transazione]]: transazioni eseguite in parallelo
- [[Proprietà ACID]]: violazioni dell'isolamento

## Porta a
- [[View-serializzabilità]]: criterio per escludere le anomalie
- [[Livelli di isolamento SQL]]: anomalie ammesse a ciascun livello

## Collegati
- Nessuno.
