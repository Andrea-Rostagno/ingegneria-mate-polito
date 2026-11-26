---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["VSM", "modello a spazio vettoriale", "similarità tra documenti", "bag-of-words", "bag of words", "matrice documento-termine", "document-term matrix"]
tags: [competenza, area/informatica]
---

# Vector space model

> Rappresentazione di query e documenti come vettori di pesi TF/IDF dei termini della query, confrontati con la similarità del coseno per assegnare lo score di rilevanza.

## Definizione / enunciato
Il **Vector Space Model** rappresenta query e documento come vettori di termini, per confrontare una query a più termini con un documento:
- la dimensione del vettore è il numero di termini della query;
- ogni elemento è il peso di un termine, calcolato con TF/IDF;
- i vettori si confrontano misurando l'**angolo** tra loro (**similarità del coseno**); l'angolo tra il vettore del documento e quello della query dà al documento il suo score di rilevanza.

## Formule chiave
Similarità del coseno: le slide di ElasticSearch la nominano senza scriverla; la formula è quella delle slide di preprocessing (`10 - DSTBD_8-DMPreProc-IT.pdf`, p. 72):
$$\cos(\mathbf q,\mathbf d)=\frac{\mathbf q\cdot\mathbf d}{\lVert\mathbf q\rVert\,\lVert\mathbf d\rVert}.$$

## Intuizione
Conta la direzione, non la lunghezza: un documento che contiene i termini della query nelle stesse proporzioni dei pesi della query punta nella stessa direzione e ha angolo nullo.

## Come si usa
Esempio delle slide: query "happy hippopotamus"; *happy* è comune (peso esempio 2), *hippopotamus* raro (peso esempio 5), quindi la query è $[2,5]$. Documenti: "I am happy in summer" → $[2,0]$; "After Christmas I'm a hippopotamus" → $[0,5]$; "The happy hippopotamus helped Harry" → $[2,5]$. Il terzo documento ha la stessa direzione della query ed è il più rilevante; tra i primi due, $[0,5]$ forma con $[2,5]$ un angolo minore di $[2,0]$, quindi il secondo documento precede il primo (confronto nostro sui vettori delle slide).

Limiti rispetto agli embedding (p. 57): il vettore dipende dalla query in dimensione e contenuto, va ricalcolato per ogni testo, e ogni dimensione è una parola della query, quindi tutte le altre parole del testo vengono ignorate anche se utili. Esempio: per la query "Proemio dell'Iliade, lite tra Achille e Agamennone" e il testo atteso "Cantami o diva del Pelide Achille l'ira funesta", il VSM dà $[0,0,0,8,0,0]$ (solo "Achille" in comune).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 43, 49-52, 57).
- **Business intelligence per big data** (magistrale): lato data mining, come rappresentazione **bag-of-words**: ogni documento è un vettore di feature (una per parola distinta della collezione, quindi la dimensione dello spazio è il numero di parole diverse) con un peso per ciascuna; esempio della matrice documento-termine con le occorrenze di "team", "coach", "play", "ball", ... in tre documenti. Fonti: `magistrale/Business intelligence per big data/02b-DMPreProc_document_BI.pdf` (pp. 10-14). Prerequisito: [[Preprocessing dei documenti]].
- **Data science lab** (magistrale): rappresentazione bag-of-words dei documenti come feature vector (dimensione = numero di parole distinte della collezione) con schemi di pesatura binario (presenza), frequenza semplice (occorrenze; le parole frequenti non sono sempre rappresentative) e più complessi come tf-idf. In laboratorio `CountVectorizer`: con vocabolario `cat, dog, house, my`, "My cat. My dog. My cat." $\to(2,1,0,3)$ e "My dog. My house." $\to(0,1,1,2)$; limite: le parole frequenti hanno punteggi alti in quasi tutti i documenti, da cui il passaggio a tf-idf. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 67-72); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 11-12).

## Prerequisiti
- [[TF-IDF]]: pesi dei termini come coordinate

## Porta a
- [[Ricerca semantica]]: dai vettori sparsi agli embedding

## Collegati
- [[Misure di similarità]]: similarità del coseno tra documenti
