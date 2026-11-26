---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [word embeddings, Word2Vec, embedding di parole, vettore di embedding, embedding vector, rappresentazione distribuita delle parole]
tags: [competenza, area/data-ml]
---

# Word embedding

> Associazione di ogni parola a un vettore $n$-dimensionale, appreso da grandi collezioni di testo, in cui parole di significato simile hanno vettori simili.

## Definizione / enunciato
Un word embedding (es. **Word2Vec**) associa le parole a vettori $n$-dimensionali, addestrati su grandi collezioni di testo per modellare la distribuzione delle parole in frasi e contesti diversi. I vettori catturano l'informazione semantica: parole con significato simile condividono vettori con caratteristiche simili. Esempio delle slide con $n=3$: $e(\text{man})=[e_1,e_2,e_3]$, $e(\text{king})=[e_1',e_2',e_3']$.

## Formule chiave
Poiché ogni parola è un vettore, sono ammesse operazioni fra parole (differenza, somma); le relazioni semantiche sono catturate dalle posizioni:
$$ \text{king} - \text{man} = \text{queen} - \text{woman} \qquad\Longleftrightarrow\qquad \text{king} - \text{man} + \text{woman} = \text{queen} $$

## Intuizione
Nella rappresentazione bag-of-words ogni parola è una dimensione a sé e "king" e "queen" sono ortogonali quanto "king" e "ball". L'embedding comprime il vocabolario in uno spazio denso in cui la geometria (differenze fra vettori) codifica relazioni di significato come genere o ruolo.

## Come si usa
Le parole del documento, dopo il preprocessing, si sostituiscono con i loro vettori; i vettori diventano feature per classificazione, clustering o ricerca per similarità.

## Nei corsi
- **Business intelligence per big data** (magistrale): ultima parte della sezione sulle reti neurali del mazzo di classificazione. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 140-142, pagine del PDF; slide numerate 144-146).

## Prerequisiti
- [[Rete neurale artificiale]]: gli embedding sono appresi da una rete addestrata sul testo
- [[Preprocessing dei documenti]]: produce i token da rappresentare

## Porta a
- [[Ricerca semantica]]: ricerca densa basata su embedding

## Collegati
- [[Vector space model]]: rappresentazione bag-of-words, alternativa sparsa, una dimensione per termine
- [[Misure di similarità]]: la similarità del coseno confronta i vettori
