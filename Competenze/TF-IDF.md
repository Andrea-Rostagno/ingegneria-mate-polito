---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["TF/IDF", "term frequency", "inverse document frequency", "field-length norm", "relevance score", "punteggio di rilevanza"]
tags: [competenza, area/informatica]
---

# TF-IDF

> Funzione di punteggio che pesa un termine in un documento combinando frequenza del termine, rarità del termine nell'indice e lunghezza del campo.

## Definizione / enunciato
In ElasticSearch la **rilevanza** è un numero in virgola mobile `_score`, calcolato per ogni documento che soddisfa la query; i risultati sono ordinati per `_score` decrescente. Procedura: (1) si selezionano i documenti con un modello booleano; (2) si valuta il peso di ogni termine nel documento rispetto alla query con **TF/IDF**; (3) si misura la similarità tra le rappresentazioni vettoriali di query e documento. Si restituiscono i primi 10 *hit*, con un eventuale *rescore* più costoso.

Tre fattori:
- **term frequency**: quanto spesso il termine compare nel campo; più spesso, più rilevante;
- **inverse document frequency**: quanto spesso compare nell'indice; più spesso, meno rilevante;
- **field-length norm**: più il campo è lungo, meno è probabile che le sue parole siano rilevanti.

## Formule chiave
Verificate sulle immagini delle slide (pp. 45-47):
$$\mathrm{tf}(t \text{ in } d)=\sqrt{\text{frequency}},\qquad \mathrm{idf}(t)=1+\log\frac{\text{numDocs}}{\text{docFreq}+1},\qquad \mathrm{norm}(d)=\frac{1}{\sqrt{\text{numTerms}}}$$
dove *frequency* è il numero di occorrenze di $t$ in $d$, *numDocs* il numero di documenti dell'indice, *docFreq* il numero di documenti che contengono $t$, *numTerms* il numero di termini del campo. Le slide dicono che i tre fattori sono combinati per il peso di un termine, senza dare la formula del prodotto.

## Intuizione
Una parola ripetuta in un documento corto e rara nella collezione caratterizza il documento; una parola che compare ovunque ("the") non distingue nulla. La radice smorza l'effetto delle ripetizioni.

## Come si usa
I tre fattori sono calcolati e memorizzati al momento dell'indicizzazione. Poiché le query hanno più termini, i pesi dei termini diventano le coordinate dei vettori del vector space model, che vengono confrontati con la similarità del coseno.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 40-48).
- **Business intelligence per big data** (magistrale): schema di pesatura nella rappresentazione dei documenti per il data mining, dopo i pesi binario e di frequenza semplice: $\text{tf-idf}(t)=\text{freq}(t,d)\cdot\log\big(m/\text{freq}(t,D)\big)$ per il termine $t$ nel documento $d$ della collezione $D$ di $m$ documenti; preferisce i termini frequenti in un documento ma rari nella collezione (nell'esempio, "model" ha peso basso, "medlin" e "micro" alto). In generale $X_{ij}=l_{ij}\cdot g_j$, peso locale per peso globale nella matrice documento-termine. Fonti: `magistrale/Business intelligence per big data/02b-DMPreProc_document_BI.pdf` (pp. 14-18). Prerequisito: [[Preprocessing dei documenti]].
- **Data science lab** (magistrale): schema di pesatura del [[Vector space model]] (bag-of-words) per il data mining: per il termine $t$ nel documento $d$ di una collezione $D$ di $m$ documenti, $\text{tf-idf}(t)=\text{freq}(t,d)\cdot\log\big(m/\text{freq}(t,D)\big)$; si preferiscono i termini frequenti in un documento ma rari nella collezione; adatto a un documento con molte sezioni o a collezioni eterogenee; nella matrice d'esempio le parole comuni ("model") hanno valori bassi, quelle peculiari ("medlin", "micro", "methodolog") alti. In laboratorio `TfidfVectorizer(stop_words="english")` su `["dog bites cat", "cat bites dog", "cat and dog house"]`: vocabolario `bites, cat, dog, house`, la stop word "and" è rimossa e "house", specifica del terzo documento, ha il peso più alto (0.767); questi numeri vengono dalla variante normalizzata di scikit-learn, non dalla formula delle slide di teoria. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 73-74); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 12-14).

## Prerequisiti
- [[Indice invertito]]: frequenze dei termini nell'indice

## Porta a
- [[Vector space model]]: pesi dei termini come coordinate

## Collegati
- [[Query DSL]]: le query calcolano lo score
