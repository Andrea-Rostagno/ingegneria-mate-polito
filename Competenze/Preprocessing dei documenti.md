---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: [document processing, data preparation for document data, preparazione dei documenti testuali, preprocessing testuale, text preprocessing, document splitting, tokenizzazione, tokenization, case normalization, normalizzazione delle maiuscole, stopword elimination, eliminazione delle stopword, stop words, stemming, stem, radice di una parola, text mining]
tags: [competenza, area/data-ml]
---

# Preprocessing dei documenti

> Sequenza di cinque passi (suddivisione, tokenizzazione, normalizzazione delle maiuscole, eliminazione delle stopword, stemming) che trasforma documenti di testo in una rappresentazione strutturata adatta al data mining.

## Definizione / enunciato
Il *document processing* genera una rappresentazione strutturata di dati testuali. La rappresentazione più comune modella un documento come insieme di feature (un insieme di caratteri, una parola, un termine, un concetto); la scelta incide molto sulla qualità del risultato del mining. Cinque passi sequenziali:
1. **Document splitting**: secondo l'obiettivo, i documenti si dividono in frasi o paragrafi o si analizzano interi; i documenti brevi (email, post) di solito non si dividono, quelli lunghi si dividono in sezioni o si analizzano nel complesso.
2. **Tokenizzazione**: divisione del testo in frasi (confini individuati da punteggiatura e maiuscole) e delle frasi in token (parole); dipende dalla lingua.
3. **Case normalization**: ogni token diventa tutto maiuscolo o tutto minuscolo; la parola maiuscola a inizio frase va trattata come la stessa parola minuscola altrove.
4. **Eliminazione delle stopword**: si filtrano le parole più comuni (preposizioni, articoli, congiunzioni), con poco significato semantico. Non esiste una lista universale: ogni strumento sceglie la sua, e alcuni non le rimuovono per supportare la ricerca di frasi.
5. **Stemming**: riduzione di una parola alla radice (stem) togliendo prefissi, suffissi e plurali.

## Formule chiave
Nessuna formula: il risultato del preprocessing è il vocabolario dei termini su cui si costruiscono i vettori di feature e i pesi (binario, frequenza, tf-idf).

## Intuizione
Ogni passo riduce la varietà superficiale del testo (maiuscole, flessioni, parole vuote) così che occorrenze dello stesso concetto contino come la stessa feature. Lo stemming lavora su una parola alla volta senza contesto, quindi non distingue significati diversi secondo la parte del discorso; in compenso è facile da implementare, disponibile per quasi tutte le lingue e molto più veloce di lemmatizzazione e POS tagging.

## Come si usa
Dopo i cinque passi ogni documento diventa un vettore di termini pesati (bag-of-words): per esempio, la matrice documento-termine con le occorrenze di "team", "coach", "play", "ball", ... per tre documenti. Nella presentazione del laboratorio la catena Tokenize, Stopwords, Stemming, TF-IDF è applicata a testi di Wikipedia.

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/02b-DMPreProc_document_BI.pdf` (pp. 2-9 passi del preprocessing; pp. 10-18 rappresentazione pesata); presentazione del laboratorio `magistrale/Business intelligence per big data/Esercitazioni/lab1/PreLab1_BIxBD.pdf` (solo come esempio della catena di operatori).
- **Data science lab** (magistrale): stessi cinque passi nel mazzo di preprocessing (nell'ordine splitting, tokenizzazione, case normalization, stemming, eliminazione delle stop word), con le osservazioni che lo stemming lavora sulla singola parola senza contesto ed è molto più veloce di lemmatizzazione e POS tagging, e che alcuni motori rimuovono persino parole lessicali come "want". In laboratorio `TfidfVectorizer(stop_words="english")` include l'eliminazione delle stop word. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 18, 58-66); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 12-14).

## Prerequisiti
- [[Qualità dei dati]]: il preprocessing testuale è una forma di preparazione dei dati
- [[Tipi di attributo]]: i documenti sono un tipo di dataset (document data)

## Porta a
- [[Vector space model]]: il documento diventa un vettore di termini (bag-of-words)
- [[TF-IDF]]: schema di pesatura dei termini
- [[Word embedding]]: rappresentazione densa dei token

## Collegati
- [[Analisi del testo]]: stessi passi (tokenizer, token filter) dentro gli analyzer di ElasticSearch
- [[Indice invertito]]: struttura costruita sui termini normalizzati
