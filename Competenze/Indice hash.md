---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["hash index", "struttura hash", "bucket", "collisioni", "unclustered hash index", "funzione hash"]
tags: [competenza, area/informatica]
---

# Indice hash

> Struttura di accesso che applica una funzione hash alla chiave per calcolare direttamente il blocco in cui si trova la tupla: ottima per i predicati di uguaglianza, inutile per gli intervalli.

## Definizione / enunciato
Una **struttura hash** garantisce un accesso diretto ed efficiente in base al valore di un campo chiave (uno o più attributi). Se la struttura ha $B$ blocchi, la funzione hash applicata al valore della chiave restituisce un numero tra $0$ e $B-1$ che indica il blocco del record. I blocchi non devono mai essere riempiti del tutto, per lasciare posto a nuovi inserimenti.

L'**hash index unclustered** funziona allo stesso modo, ma i blocchi contengono **puntatori** ai dati, memorizzati in una struttura separata: la posizione delle tuple non è vincolata a un blocco.

## Formule chiave
$$H(\text{chiave}) \in \{0,\dots,B-1\}$$

## Intuizione
La funzione hash "sparpaglia" i valori in modo da sostituire una ricerca con un calcolo; per questo perde ogni informazione sull'ordine, e due valori vicini finiscono in blocchi qualsiasi.

## Come si usa
**Vantaggi**: molto efficiente per predicati di uguaglianza sulla chiave; non richiede l'ordinamento dei blocchi su disco. **Svantaggi**: inefficiente per le interrogazioni su intervallo; possono verificarsi **collisioni** (valori diversi con lo stesso risultato della funzione).
Esempi delle slide su STUDENT(StudentId, Name, Grade): hash su StudentId con $H(50)=1$ e $H(75)=1$, quindi T1 e T4 nello stesso blocco 1; hash unclustered su Grade con $H(30)=1$ e $H(40)=1$, quindi il blocco indice 1 contiene i puntatori 30 → T1 e 40 → T2.
Nell'ottimizzatore: per un predicato $A_i=v$ si può usare hash, B+-tree o bitmap; per $v_1\le A_i\le v_2$ solo il B+-tree. La stessa idea è alla base dell'hash join e del group by basato su hash.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Hash structure", "Hash index", "Unclustered hash index". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/03 - 14-PhysicalAccess.pdf` (pp. 33-37); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (p. 51).

## Prerequisiti
- [[Strutture sequenziali]]: alternativa all'ordinamento per l'accesso per chiave

## Porta a
- Nessuno.

## Collegati
- [[B+-tree]]: intervalli contro uguaglianza
- [[Indice clustered e unclustered]]: anche l'hash può essere clustered o no
