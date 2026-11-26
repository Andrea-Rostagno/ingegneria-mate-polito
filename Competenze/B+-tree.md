---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["B-tree", "B+ tree", "albero B+", "strutture ad albero", "fan-out", "indice ad albero"]
tags: [competenza, area/informatica]
---

# B+-tree

> Indice ad albero bilanciato con grande fan-out che dà accesso "diretto" alle tuple in base al valore di una chiave; nel B+-tree le foglie sono collegate e permettono la scansione nell'ordine della chiave.

## Definizione / enunciato
Le **strutture ad albero** danno accesso diretto ai dati in base al valore di un campo chiave (uno o più attributi) senza vincolare la posizione fisica delle tuple; sono le più diffuse nei DBMS relazionali. Hanno un nodo radice, molti nodi intermedi con **fan-out** elevato (molti figli per nodo) e nodi foglia che danno accesso ai dati, in modo clustered o unclustered.

- **B-tree**: le pagine dati si raggiungono solo attraverso i valori della chiave visitando l'albero.
- **B+-tree**: in più ha una struttura di collegamento tra le foglie che consente l'**accesso sequenziale nell'ordine della chiave**.

"B" sta per **balanced**: tutte le foglie sono alla stessa distanza dalla radice, quindi il tempo di accesso è costante qualunque sia il valore cercato.

## Formule chiave
Spazio occupato (slide di confronto con il bitmap): B-tree $\approx NR \times Len(Pointer)$, con $NR$ numero di record e $Len(Pointer)=4\times 8$ bit.

## Intuizione
Il fan-out alto rende l'albero basso: poche letture di pagina portano dalla radice alla foglia. Il collegamento tra le foglie trasforma una ricerca per intervallo in "trova il primo valore, poi scorri".

## Come si usa
**Vantaggi**: molto efficiente per le interrogazioni su intervallo (range query); adatto alla scansione sequenziale nell'ordine della chiave (sempre se clustered, non garantito altrimenti). **Svantaggi**: un inserimento può richiedere lo split di una foglia e talvolta di nodi intermedi (costoso); le cancellazioni possono richiedere la fusione di nodi poco pieni e il ribilanciamento.
Nella valutazione dei predicati: per $A_i=v$ vanno bene hash, B+-tree o bitmap; per un intervallo $v_1\le A_i\le v_2$ **solo il B+-tree** è adatto. Esempio delle slide: tabella STUDENT(StudentId, Name, Grade) indicizzata su Grade con separatori 12, 78 alla radice.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): strutture ad albero, B-tree e B+-tree. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/03 - 14-PhysicalAccess.pdf` (pp. 15-32); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 51-52).

## Prerequisiti
- [[Strutture sequenziali]]: struttura ad albero sopra i dati

## Porta a
- [[Indice clustered e unclustered]]: due modi di collegare foglie e tuple
- [[Ottimizzazione basata sui costi]]: costo di accesso tramite indice

## Collegati
- [[Indice hash]]: intervalli contro uguaglianza
- [[Indice bitmap]]: confronto nella valutazione dei predicati
